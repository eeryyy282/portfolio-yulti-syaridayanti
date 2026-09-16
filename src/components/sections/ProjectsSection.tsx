"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FolderHeart,
  Users,
  Utensils,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { projects } from "@/data/portfolio-data";

export const ProjectsSection: React.FC = () => {
  const getProjectIcon = (id: string) => {
    switch (id) {
      case "pemberdayaan-sad":
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
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pastel-pink-100 text-pastel-pink-700 text-xs font-bold mb-3">
            <FolderHeart className="w-3.5 h-3.5" />
            <span>Inisiatif Nyata & Dampak Komunitas</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-pastel-slate-900 tracking-tight mb-3">
            Proyek & Program Unggulan
          </h2>
          <p className="text-sm sm:text-base text-pastel-slate-600">
            Karya inovatif yang mengintegrasikan advokasi kultural, kepemimpinan promosi kesehatan, dan intervensi berbasis data.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((proj, idx) => {
            const Icon = getProjectIcon(proj.id);
            return (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-white rounded-3xl border border-pastel-pink-200/90 shadow-sm hover:shadow-xl hover:border-pastel-pink-300 transition-all flex flex-col justify-between overflow-hidden group"
              >
                <div className="p-6 pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-pastel-pink-100 to-pastel-rose-100 text-pastel-pink-600 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-pastel-slate-500 bg-pastel-slate-50 px-2.5 py-1 rounded-full border border-pastel-slate-200">
                      {proj.period}
                    </span>
                  </div>

                  <span className="text-xs font-bold text-pastel-pink-600 tracking-wide uppercase">
                    {proj.role}
                  </span>

                  <h3 className="font-heading font-extrabold text-lg sm:text-xl text-pastel-slate-900 mt-1 mb-2 leading-snug group-hover:text-pastel-pink-600 transition-colors">
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
                    <div className="mb-4 p-3.5 rounded-2xl bg-gradient-to-r from-pastel-pink-50 via-white to-pastel-rose-50 border border-pastel-pink-200/80">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-pastel-pink-600 flex-shrink-0" />
                        <div>
                          <div className="font-heading font-extrabold text-sm text-pastel-pink-700">
                            {proj.impactMetric.value}
                          </div>
                          <div className="text-[10px] font-medium text-pastel-slate-600">
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
                        className="px-2 py-0.5 rounded-md bg-pastel-pink-50/80 text-pastel-pink-700 text-[10px] font-semibold border border-pastel-pink-100"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
