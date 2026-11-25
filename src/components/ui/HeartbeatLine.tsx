import React from "react";
import { siteContent } from "@/content";

interface HeartbeatLineProps {
  className?: string;
  withHeart?: boolean;
}

export const HeartbeatLine: React.FC<HeartbeatLineProps> = ({
  className = "",
  withHeart = true,
}) => {
  const { ui } = siteContent;

  return (
    <div className={`relative flex items-center justify-center w-full my-8 ${className}`}>
      <div className="group w-full max-w-2xl h-16 flex items-center justify-center relative overflow-visible">
        <svg
          aria-hidden="true"
          viewBox="0 0 800 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-full stroke-pastel-pink-400 overflow-visible"
        >
          {/* Base Track */}
          <path
            d="M0 40 H270 L282 40 L292 18 L304 62 L316 26 L326 48 L336 40 H464 L474 40 L484 18 L496 62 L508 26 L518 48 L528 40 H800"
            stroke="currentColor"
            strokeWidth="2.25"
            strokeOpacity="0.22"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-opacity duration-300 group-hover:opacity-80"
          />

          {/* Continuous Flowing EKG Wave Sweep */}
          <path
            d="M0 40 H270 L282 40 L292 18 L304 62 L316 26 L326 48 L336 40 H464 L474 40 L484 18 L496 62 L508 26 L518 48 L528 40 H800"
            stroke="#D92E63"
            strokeWidth="2.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-ekg-sweep transition-colors duration-300 group-hover:stroke-pastel-pink-500"
          />
        </svg>

        {withHeart && (
          <div
            tabIndex={0}
            className="absolute left-1/2 top-1/2 bg-white px-3.5 py-1.5 rounded-lg border border-pastel-pink-200 shadow-sm flex items-center gap-1.5 animate-pulse-beat z-10 transition-all duration-200 hover:border-pastel-pink-500 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pastel-pink-500"
          >
            <svg
              aria-hidden="true"
              className="w-4 h-4 text-pastel-pink-600 fill-pastel-pink-600"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span className="text-xs font-semibold text-pastel-pink-600">
              {ui.heartbeatBadge}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
