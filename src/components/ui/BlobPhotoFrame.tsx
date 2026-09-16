"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, Award, Activity, Stethoscope } from "lucide-react";
import { siteContent } from "@/content";

interface BlobPhotoFrameProps {
  imageSrc?: string;
  className?: string;
}

export const BlobPhotoFrame: React.FC<BlobPhotoFrameProps> = ({
  imageSrc = "/images/profile.webp",
  className = "",
}) => {
  const [imageError, setImageError] = useState(false);
  const { hero, ui } = siteContent;

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <div className="absolute -inset-4 bg-gradient-to-tr from-pastel-pink-300/40 via-pastel-rose-200/40 to-pastel-mint-200/30 rounded-[50px] blur-2xl -z-10 transform rotate-6 animate-pulse-slow" />

      <div className="relative w-72 h-72 sm:w-84 sm:h-84 md:w-96 md:h-96 p-2">
        <svg className="absolute w-0 h-0" aria-hidden="true">
          <defs>
            <clipPath id="blobClip" clipPathUnits="objectBoundingBox">
              <path d="M0.2,0.8 C0.05,0.65 0.05,0.35 0.25,0.15 C0.45,-0.05 0.7,-0.02 0.85,0.18 C1.0,0.38 0.98,0.7 0.8,0.88 C0.62,1.05 0.35,0.95 0.2,0.8 Z" />
            </clipPath>
          </defs>
        </svg>

        <div className="absolute inset-0 bg-gradient-to-tr from-pastel-pink-200 via-pastel-rose-100 to-pastel-cream-100 animate-blob shadow-xl border-4 border-white" />

        <div className="relative w-full h-full rounded-[42%_58%_70%_30%/45%_45%_55%_55%] overflow-hidden bg-white/60 flex items-center justify-center p-3">
          {!imageError ? (
            <div className="relative w-full h-full rounded-[38%_62%_63%_37%/41%_44%_56%_59%] overflow-hidden">
              <Image
                src={imageSrc}
                alt={`${hero.fullName}, ${hero.degree}`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 280px, 380px"
                priority
                onError={() => setImageError(true)}
              />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center text-center p-6 bg-gradient-to-b from-pastel-pink-50 to-white w-full h-full rounded-[38%_62%_63%_37%/41%_44%_56%_59%] border border-pastel-pink-100">
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-pastel-pink-400 to-pastel-rose-300 flex items-center justify-center shadow-md mb-3 text-white">
                <span className="text-3xl font-heading font-bold">YS</span>
              </div>
              <h3 className="font-heading font-bold text-lg text-pastel-slate-800">
                {hero.fullName}
              </h3>
              <p className="text-xs font-medium text-pastel-pink-600 bg-pastel-pink-50 px-3 py-1 rounded-full mt-1 border border-pastel-pink-200">
                {ui.avatarFallbackRole}
              </p>
              <div className="flex items-center gap-1 mt-2 text-pastel-slate-500 text-[11px]">
                <Stethoscope className="w-3.5 h-3.5 text-pastel-mint-500" />
                <span>{ui.avatarFallbackSpecialty}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="absolute -bottom-2 -left-4 sm:bottom-2 sm:-left-6 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-lg border border-pastel-pink-100 flex items-center gap-2.5 animate-soft-float">
        <div className="w-8 h-8 rounded-xl bg-pastel-pink-100 flex items-center justify-center text-pastel-pink-600">
          <Award className="w-4 h-4" />
        </div>
        <div>
          <div className="text-xs font-bold text-pastel-slate-800 flex items-center gap-1">
            <span>{ui.avatarBadgeCumlaude}</span>
            <Sparkles className="w-3 h-3 text-amber-400 fill-amber-400" />
          </div>
          <div className="text-[10px] text-pastel-slate-500 font-medium">
            {ui.avatarBadgeStudyTime}
          </div>
        </div>
      </div>

      <div
        className="absolute -top-3 -right-2 sm:top-2 sm:-right-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-lg border border-pastel-pink-100 flex items-center gap-2.5 animate-soft-float"
        style={{ animationDelay: "2s" }}
      >
        <div className="w-8 h-8 rounded-xl bg-pastel-mint-100 flex items-center justify-center text-pastel-mint-600">
          <Activity className="w-4 h-4" />
        </div>
        <div>
          <div className="text-xs font-bold text-pastel-slate-800">
            {ui.avatarBadgeField}
          </div>
          <div className="text-[10px] text-pastel-mint-600 font-medium">
            {ui.avatarBadgeSubField}
          </div>
        </div>
      </div>
    </div>
  );
};
