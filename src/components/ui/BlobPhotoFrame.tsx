"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Stethoscope } from "lucide-react";
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
  const { hero, navbar, ui } = siteContent;

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 p-2">
        {/* Organic Animated Contour Border */}
        <div className="absolute inset-0 bg-pastel-pink-100/80 animate-blob shadow-md border-4 border-white" />

        {/* Inner Organic Image Container */}
        <div className="relative w-full h-full rounded-[42%_58%_70%_30%/45%_45%_55%_55%] overflow-hidden bg-white/80 flex items-center justify-center p-2.5">
          {!imageError ? (
            <div className="relative w-full h-full rounded-[38%_62%_63%_37%/41%_44%_56%_59%] overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
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
            <div className="flex flex-col items-center justify-center text-center p-6 bg-pastel-cream-50 w-full h-full rounded-[38%_62%_63%_37%/41%_44%_56%_59%] border border-pastel-pink-100">
              <div className="w-20 h-20 rounded-xl bg-pastel-pink-600 flex items-center justify-center mb-3 text-white">
                <span className="text-2xl font-heading font-bold">{navbar.brandInitials}</span>
              </div>
              <h3 className="font-heading font-bold text-lg text-pastel-slate-800">
                {hero.fullName}
              </h3>
              <p className="text-xs font-medium text-pastel-pink-600 mt-1">
                {ui.avatarFallbackRole}
              </p>
              <div className="flex items-center gap-1 mt-2 text-pastel-slate-500 text-xs">
                <Stethoscope className="w-3.5 h-3.5 text-pastel-mint-600" />
                <span>{ui.avatarFallbackSpecialty}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
