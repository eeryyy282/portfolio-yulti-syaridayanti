"use client";

import React from "react";
import {
  FolderHeart,
  Users,
  Utensils,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { siteContent } from "@/content";

export const ProjectsSection: React.FC = () => {
  const { projects } = siteContent;

  const getProjectIcon = (id: string) => {
    switch (id) {
      case "sad-empowerment":
        return Users;
      case "hpu-fkik-unja":
        return Utensils;
      case "planning-action-tb":
        return ShieldCheck;
      default:
        return FolderHeart;
    }
  };

  return (
    <section id="projects" className="py-20 relative bg-pastel-pink-50/40 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <p className="text-xs font-semibold text-pastel-pink-600">
            {projects.badge}
          </p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-pastel-slate-900 tracking-tight">
            {projects.title}
          </h2>
          <p className="text-sm sm:text-base text-pastel-slate-600">
            {projects.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.items.map((proj) => {
            const Icon = getProjectIcon(proj.id);
            return (
              <div
                key={proj.id}
                className="bg-white rounded-xl border border-pastel-pink-200/90 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-pastel-pink-300 transition-all duration-200 flex flex-col justify-between overflow-hidden"
              >
                <div className="p-6 pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <Icon className="w-5 h-5 text-pastel-pink-600" />
                    <span className="text-xs font-semibold text-pastel-slate-500">
                      {proj.period}
                    </span>
                  </div>

                  <span className="text-xs font-semibold text-pastel-pink-600 block">
                    {proj.role}
                  </span>

                  <h3 className="font-heading font-extrabold text-lg sm:text-xl text-pastel-slate-900 mt-1 mb-2 leading-snug">
                    {proj.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-pastel-slate-600 mb-4 leading-relaxed">
                    {proj.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    {proj.highlights.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-pastel-slate-700 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-pastel-pink-500 mt-1.5 flex-shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 pt-0">
                  {proj.impactMetric && (
                    <div className="mb-4 p-3.5 rounded-lg bg-pastel-cream-50 border border-pastel-pink-200/80">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-pastel-pink-600 flex-shrink-0" />
                        <div>
                          <div className="font-heading font-extrabold text-sm text-pastel-pink-700">
                            {proj.impactMetric.value}
                          </div>
                          <div className="text-xs font-medium text-pastel-slate-600">
                            {proj.impactMetric.label}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-pastel-pink-100">
                    {proj.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md bg-pastel-pink-50/80 text-pastel-pink-700 text-xs font-medium border border-pastel-pink-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
