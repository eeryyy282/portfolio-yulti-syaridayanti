"use client";

import React from "react";
import {
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
        <div className="text-left max-w-2xl mb-12 space-y-2">
          <p className="text-xs font-semibold text-pastel-pink-600">
            {about.badge}
          </p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-pastel-slate-900 tracking-tight">
            {about.title}
          </h2>
          <p className="text-sm sm:text-base text-pastel-slate-600">
            {about.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative p-3 bg-white rounded-xl border border-pastel-pink-200/80 shadow-sm w-full">
              <StorysetHealthIllustration className="w-full max-w-sm h-auto mx-auto" />
              <div className="p-3 bg-pastel-cream-50 rounded-lg border border-pastel-pink-100 text-center">
                <span className="text-xs font-semibold text-pastel-slate-800">
                  {about.illustrationCaption}
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-pastel-pink-200/80 shadow-sm">
              <div className="flex items-center gap-2.5 mb-4">
                <Compass className="w-5 h-5 text-pastel-pink-600" />
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

              <div className="p-4 rounded-lg bg-pastel-pink-50/60 border border-pastel-pink-200/70">
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 text-pastel-pink-600 mt-0.5 flex-shrink-0" />
                  <div className="text-xs sm:text-sm text-pastel-slate-700">
                    <span className="font-bold text-pastel-slate-900">
                      {about.educationSummary.institution}
                    </span>{" "}
                    - {about.educationSummary.degree} ({about.educationSummary.predicate}). {about.educationSummary.publicationPrefix}{" "}
                    <span className="font-bold text-pastel-pink-600">
                      {about.educationSummary.publicationHighlight}
                    </span>
                    .
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {about.pillars.map((pillar, idx) => {
            const Icon = pillarIcons[idx % pillarIcons.length];
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl border border-pastel-pink-200/80 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-pastel-pink-300 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Icon className="w-4 h-4 text-pastel-pink-600" />
                    <span className="text-xs font-semibold text-pastel-pink-600">
                      {pillar.tag}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-base sm:text-lg text-pastel-slate-900 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-pastel-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
