"use client";

import React from "react";
import {
  MapPin,
  Calendar,
  CheckCircle2,
  Building2,
} from "lucide-react";
import { siteContent } from "@/content";

export const ExperienceSection: React.FC = () => {
  const { experience } = siteContent;

  return (
    <section id="experience" className="py-20 relative bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <p className="text-xs font-semibold text-pastel-pink-600">
            {experience.badge}
          </p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-pastel-slate-900 tracking-tight">
            {experience.title}
          </h2>
          <p className="text-sm sm:text-base text-pastel-slate-600">
            {experience.subtitle}
          </p>
        </div>

        <div className="relative">
          {/* Connector line */}
          <div
            aria-hidden="true"
            className="absolute left-4 sm:left-1/2 top-1 bottom-1 w-0.5 -translate-x-1/2 bg-pastel-pink-200"
          />

          <div className="space-y-10">
            {experience.items.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-1.5 z-10 w-8 h-8 rounded-lg bg-white border-2 border-pastel-pink-400 shadow-sm flex items-center justify-center text-pastel-pink-600">
                    <Building2 className="w-4 h-4" />
                  </div>

                  <div className="hidden sm:block w-1/2" />

                  <div
                    className={`pl-12 sm:pl-0 w-full sm:w-1/2 ${
                      isEven ? "sm:pr-10" : "sm:pl-10"
                    }`}
                  >
                    <div className="bg-white p-6 rounded-xl border border-pastel-pink-200/80 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-pastel-pink-300 transition-all duration-200">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 text-pastel-pink-600 font-semibold text-xs">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{exp.period}</span>
                        </span>

                        {exp.badge && (
                          <span className="px-2.5 py-0.5 rounded-md bg-pastel-pink-50 border border-pastel-pink-200 text-pastel-pink-700 font-semibold text-xs">
                            {exp.badge}
                          </span>
                        )}
                      </div>

                      <h3 className="font-heading font-extrabold text-lg sm:text-xl text-pastel-slate-900">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-pastel-pink-600 font-bold text-xs sm:text-sm mt-0.5 mb-4">
                        <span>{exp.organization}</span>
                        <span>•</span>
                        <span className="inline-flex items-center gap-1 text-pastel-slate-500 font-medium">
                          <MapPin className="w-3 h-3 text-pastel-pink-400" />
                          {exp.location}
                        </span>
                      </div>

                      <ul className="space-y-2.5 mb-5">
                        {exp.highlights.map((item, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-pastel-slate-700 leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-pastel-pink-500 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-pastel-pink-100">
                        {exp.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-md bg-pastel-cream-50 border border-pastel-pink-200 text-pastel-slate-700 text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
