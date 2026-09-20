"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  HeartHandshake,
  Compass,
  GraduationCap,
  Users2,
  Presentation,
  Stethoscope,
} from "lucide-react";
import { siteContent } from "@/content";
import { StorysetHealthIllustration } from "@/components/ui/StorysetHealthIllustration";

export const AboutSection: React.FC = () => {
  const { about } = siteContent;

  const pillarIcons = [Presentation, Users2, Stethoscope];

  return (
    <section id="about" className="py-20 relative bg-pastel-cream-50/70 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pastel-pink-100 text-pastel-pink-700 text-xs font-bold mb-3">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>{about.badge}</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-pastel-slate-900 tracking-tight mb-3">
            {about.title}
          </h2>
          <p className="text-sm sm:text-base text-pastel-slate-600">
            {about.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative p-2 bg-white rounded-3xl border border-pastel-pink-200/80 shadow-md">
              <StorysetHealthIllustration className="w-full max-w-sm h-auto" />
              <div className="p-3 bg-pastel-pink-50/80 rounded-2xl border border-pastel-pink-100 text-center">
                <span className="text-xs font-bold text-pastel-slate-800">
                  {about.illustrationCaption}
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-pastel-pink-200/80 shadow-sm relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-pastel-pink-100 text-pastel-pink-600 flex items-center justify-center font-bold">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-pastel-slate-900">
                    {about.visionTitle}
                  </h3>
                  <p className="text-xs font-semibold text-pastel-pink-600">
                    {about.visionSubtitle}
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-pastel-slate-700 leading-relaxed mb-4">
                {about.bioNarrative}
              </p>

              <p className="text-sm sm:text-base text-pastel-slate-700 leading-relaxed mb-6">
                {about.approachNarrative}
              </p>

              <div className="p-4 rounded-2xl bg-gradient-to-r from-pastel-pink-50 to-pastel-rose-50/60 border border-pastel-pink-200/70">
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 text-pastel-pink-600 mt-0.5 flex-shrink-0" />
                  <div className="text-xs sm:text-sm text-pastel-slate-700">
                    <span className="font-bold text-pastel-slate-900">
                      {about.educationSummary.institution}
                    </span>{" "}
                    — {about.educationSummary.degree} ({about.educationSummary.predicate}). {about.educationSummary.publicationPrefix}{" "}
                    <span className="font-bold text-pastel-pink-600">
                      {about.educationSummary.publicationHighlight}
                    </span>
                    .
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {about.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white p-5 rounded-2xl border border-pastel-pink-200/70 text-center shadow-xs hover:border-pastel-pink-400 hover:shadow-md transition-all group"
            >
              <div className="font-heading font-black text-2xl sm:text-3xl text-pastel-pink-600 group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-pastel-slate-800 mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-pastel-slate-500 mt-0.5 font-medium">
                {stat.note}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {about.pillars.map((pillar, idx) => {
            const Icon = pillarIcons[idx % pillarIcons.length];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-white p-6 rounded-3xl border border-pastel-pink-200/80 shadow-sm hover:shadow-lg hover:border-pastel-pink-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-pastel-pink-100 text-pastel-pink-600 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-pastel-pink-50 text-pastel-pink-600 font-semibold text-[11px] mb-2 border border-pastel-pink-200">
                    {pillar.tag}
                  </span>
                  <h3 className="font-heading font-bold text-base sm:text-lg text-pastel-slate-900 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-pastel-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
