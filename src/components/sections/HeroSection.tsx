"use client";

import React from "react";
import Link from "next/link";
import {
  FileText,
  MessageCircle,
  Award,
  ChevronDown,
  Building2,
  Users,
} from "lucide-react";
import { siteContent } from "@/content";
import { BlobPhotoFrame } from "@/components/ui/BlobPhotoFrame";
import { HeartbeatLine } from "@/components/ui/HeartbeatLine";

export const HeroSection: React.FC = () => {
  const { hero, contact } = siteContent;

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left animate-fade-up">
            <p className="text-sm font-semibold text-pastel-pink-600 mb-3">
              {hero.greetingBadge}
            </p>

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[54px] text-pastel-slate-900 tracking-tight leading-[1.15] mb-3">
              {hero.fullName},{" "}
              <span className="text-pastel-pink-600">
                {hero.degree}
              </span>
            </h1>

            <h2 className="text-base sm:text-lg md:text-xl font-bold text-pastel-slate-700 mb-4 max-w-xl">
              {hero.headline}
            </h2>

            <p className="text-sm sm:text-base text-pastel-slate-700 leading-relaxed max-w-xl mb-6 font-normal">
              {hero.bio}
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8 text-xs font-semibold text-pastel-slate-700">
              <span className="inline-flex items-center gap-1.5">
                <Award className="w-4 h-4 text-pastel-pink-600" />
                <span>{hero.badges.cumlaude}</span>
              </span>
              <span className="text-pastel-slate-200">•</span>
              <span className="inline-flex items-center gap-1.5">
                <Users className="w-4 h-4 text-pastel-mint-600" />
                <span>{hero.badges.community}</span>
              </span>
              <span className="text-pastel-slate-200">•</span>
              <span className="inline-flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-pastel-pink-600" />
                <span>{hero.badges.puskesmas}</span>
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <a
                href={contact.cvPath}
                download={contact.cvFileName}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3 rounded-lg bg-pastel-pink-600 hover:bg-pastel-pink-700 text-white font-bold text-sm shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                <FileText className="w-4 h-4" />
                <span>{hero.downloadCvBtn}</span>
              </a>

              <Link
                href="#contact"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3 rounded-lg bg-white text-pastel-slate-800 font-bold text-sm border border-pastel-pink-200 hover:bg-pastel-pink-50 hover:border-pastel-pink-300 transition-all duration-200 hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 text-pastel-pink-600" />
                <span>{hero.contactBtn}</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end animate-fade-up" style={{ animationDelay: "120ms" }}>
            <BlobPhotoFrame />
          </div>
        </div>

        {/* Heartbeat Line (Couple Connection) */}
        <div className="mt-14">
          <HeartbeatLine />
        </div>

        {/* Explore Prompt */}
        <div className="flex justify-center pt-2">
          <Link
            href="#about"
            aria-label={hero.explorePrompt}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-pastel-pink-600 hover:text-pastel-pink-700 transition-colors"
          >
            <span>{hero.explorePrompt}</span>
            <ChevronDown className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
