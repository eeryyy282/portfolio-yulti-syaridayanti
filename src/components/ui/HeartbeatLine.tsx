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
      <div className="w-full max-w-2xl h-14 flex items-center justify-center relative overflow-visible">
        <svg
          viewBox="0 0 800 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-full stroke-pastel-pink-400 overflow-visible"
        >
          <path
            d="M0 40 H270 L282 40 L292 18 L304 62 L316 26 L326 48 L336 40 H464 L474 40 L484 18 L496 62 L508 26 L518 48 L528 40 H800"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeOpacity="0.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <path
            d="M0 40 H270 L282 40 L292 18 L304 62 L316 26 L326 48 L336 40 H464 L474 40 L484 18 L496 62 L508 26 L518 48 L528 40 H800"
            stroke="url(#pinkEkgGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-pulse"
          />

          <defs>
            <linearGradient id="pinkEkgGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F9B2C7" stopOpacity="0.2" />
              <stop offset="35%" stopColor="#F47FA4" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#EC4E80" stopOpacity="1" />
              <stop offset="65%" stopColor="#F47FA4" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#F9B2C7" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>

        {withHeart && (
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-pastel-pink-50 px-3.5 py-1 rounded-full border border-pastel-pink-200 shadow-sm flex items-center gap-1.5 animate-heartbeat z-10">
            <svg
              className="w-4 h-4 text-pastel-pink-500 fill-pastel-pink-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span className="text-[11px] font-bold text-pastel-pink-600 tracking-wider uppercase">
              {ui.heartbeatBadge}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
