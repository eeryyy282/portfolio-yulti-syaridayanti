import React from "react";

interface HeartbeatLineProps {
  className?: string;
  withHeart?: boolean;
}

export const HeartbeatLine: React.FC<HeartbeatLineProps> = ({
  className = "",
  withHeart = true,
}) => {
  return (
    <div className={`relative flex items-center justify-center w-full my-8 ${className}`}>
      <div className="w-full max-w-2xl h-8 flex items-center justify-center relative overflow-hidden">
        <svg
          viewBox="0 0 800 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full stroke-pastel-pink-400"
        >
          <path
            d="M0 30 H280 L295 10 L305 50 L320 15 L330 38 L345 30 H455 L470 10 L480 50 L495 15 L505 38 L520 30 H800"
            stroke="currentColor"
            strokeWidth="2"
            strokeOpacity="0.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <path
            d="M0 30 H280 L295 10 L305 50 L320 15 L330 38 L345 30 H455 L470 10 L480 50 L495 15 L505 38 L520 30 H800"
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
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-pastel-pink-50 px-3 py-1 rounded-full border border-pastel-pink-200 shadow-sm flex items-center gap-1.5 animate-heartbeat">
            <svg
              className="w-4 h-4 text-pastel-pink-500 fill-pastel-pink-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span className="text-[11px] font-semibold text-pastel-pink-600 tracking-wider uppercase">
              Promkes & Care
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
