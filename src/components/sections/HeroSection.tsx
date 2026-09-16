"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FileText,
  MessageCircle,
  Award,
  Heart,
  ChevronDown,
  Building2,
  Users,
} from "lucide-react";
import { siteContent } from "@/content";
import { BlobPhotoFrame } from "@/components/ui/BlobPhotoFrame";

export const HeroSection: React.FC = () => {
  const { hero, contact } = siteContent;

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 overflow-hidden"
    >
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none -z-10">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-pastel-pink-200/40 blur-3xl" />
        <div className="absolute top-40 right-10 w-80 h-80 rounded-full bg-pastel-rose-100/50 blur-3xl" />
        <div className="absolute bottom-10 left-1/3 w-96 h-96 rounded-full bg-pastel-mint-100/40 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pastel-pink-100/80 border border-pastel-pink-200 text-pastel-pink-700 text-xs font-bold mb-5 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-pastel-pink-500 animate-ping" />
              <Heart className="w-3.5 h-3.5 fill-pastel-pink-500 text-pastel-pink-500" />
              <span>{hero.greetingBadge}</span>
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[54px] text-pastel-slate-900 tracking-tight leading-[1.15] mb-3">
              {hero.fullName},{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pastel-pink-500 via-pastel-rose-500 to-pastel-pink-600">
                {hero.degree}
              </span>
            </h1>

            <h2 className="text-base sm:text-lg md:text-xl font-bold text-pastel-pink-600/90 mb-4 max-w-xl">
              {hero.headline}
            </h2>

            <p className="text-sm sm:text-base text-pastel-slate-700 leading-relaxed max-w-xl mb-6 font-normal">
              {hero.bio}
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-pastel-pink-200/80 text-xs font-semibold text-pastel-slate-800 shadow-xs">
                <Award className="w-3.5 h-3.5 text-pastel-pink-500" />
                <span>{hero.badges.cumlaude}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-pastel-mint-200/80 text-xs font-semibold text-pastel-slate-800 shadow-xs">
                <Users className="w-3.5 h-3.5 text-pastel-mint-600" />
                <span>{hero.badges.community}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-pastel-rose-200/80 text-xs font-semibold text-pastel-slate-800 shadow-xs">
                <Building2 className="w-3.5 h-3.5 text-pastel-rose-500" />
                <span>{hero.badges.puskesmas}</span>
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <a
                href={contact.cvPath}
                download="CV_Yulti_Syaridayanti_SKM.pdf"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-pastel-pink-500 via-pastel-pink-600 to-pastel-rose-500 text-white font-bold text-sm shadow-md shadow-pastel-pink-400/30 hover:shadow-xl hover:shadow-pastel-pink-400/40 transition-all duration-300 hover-heartbeat"
              >
                <FileText className="w-4 h-4" />
                <span>{hero.downloadCvBtn}</span>
              </a>

              <Link
                href="#contact"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white text-pastel-pink-600 font-bold text-sm border-2 border-pastel-pink-300 shadow-sm hover:bg-pastel-pink-50 hover:border-pastel-pink-400 transition-all duration-200 group"
              >
                <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>{hero.contactBtn}</span>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <BlobPhotoFrame />
          </motion.div>
        </div>
      </div>

      <div className="flex justify-center mt-12">
        <Link
          href="#about"
          aria-label={hero.explorePrompt}
          className="flex flex-col items-center gap-1 text-pastel-pink-400 hover:text-pastel-pink-600 transition-colors animate-bounce"
        >
          <span className="text-[11px] font-semibold tracking-wider uppercase">
            {hero.explorePrompt}
          </span>
          <ChevronDown className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};
