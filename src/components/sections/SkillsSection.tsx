"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Megaphone,
  Users,
  Target,
  Database,
  Award,
  BookOpen,
  Mic,
  Medal,
  CheckCircle,
} from "lucide-react";
import { skillCategories, certificationsAndAwards } from "@/data/portfolio-data";

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Megaphone":
        return Megaphone;
      case "Users":
        return Users;
      case "Target":
        return Target;
      case "Database":
        return Database;
      default:
        return Sparkles;
    }
  };

  const getAchievementIcon = (iconName: string) => {
    switch (iconName) {
      case "Award":
        return Award;
      case "BookOpen":
        return BookOpen;
      case "Mic":
        return Mic;
      case "Sparkles":
        return Medal;
      default:
        return Award;
    }
  };

  return (
    <section id="skills" className="py-20 relative bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pastel-pink-100 text-pastel-pink-700 text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Kompetensi & Apresiasi</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-pastel-slate-900 tracking-tight mb-3">
            Keahlian Teknis & Prestasi
          </h2>
          <p className="text-sm sm:text-base text-pastel-slate-600">
            Perpaduan kompetensi sains kesehatan masyarakat terapan, kemampuan komunikasi publik, serta pencapaian akademis teruji.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((cat, idx) => {
            const Icon = getCategoryIcon(cat.iconName);
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 rounded-3xl bg-pastel-pink-50/40 border border-pastel-pink-200/80 hover:border-pastel-pink-300 hover:shadow-md transition-all flex flex-col"
              >
                <div className="w-12 h-12 rounded-2xl bg-white border border-pastel-pink-200 text-pastel-pink-600 flex items-center justify-center shadow-xs mb-4">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="font-heading font-bold text-base text-pastel-slate-900 mb-4">
                  {cat.title}
                </h3>

                <ul className="space-y-2.5 mt-auto">
                  {cat.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-2 text-xs font-medium text-pastel-slate-700">
                      <CheckCircle className="w-3.5 h-3.5 text-pastel-pink-500 mt-0.5 flex-shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <div className="bg-gradient-to-tr from-pastel-pink-100/70 via-pastel-rose-50/60 to-pastel-cream-100/70 p-6 sm:p-10 rounded-3xl border border-pastel-pink-200 shadow-sm">
          <div className="max-w-xl mx-auto text-center mb-8">
            <span className="text-xs font-bold text-pastel-pink-600 uppercase tracking-wider">
              Rekognisi & Validasi Formal
            </span>
            <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-pastel-slate-900 mt-1">
              Sertifikasi & Penghargaan
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certificationsAndAwards.map((item, aIdx) => {
              const Icon = getAchievementIcon(item.iconName);
              return (
                <div
                  key={aIdx}
                  className="bg-white/90 backdrop-blur-sm p-5 rounded-2xl border border-pastel-pink-200/80 shadow-xs hover:shadow-md transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-xl bg-pastel-pink-50 border border-pastel-pink-200 text-pastel-pink-600 flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-bold text-pastel-pink-600 bg-pastel-pink-50 px-2 py-0.5 rounded-full border border-pastel-pink-100">
                      {item.category}
                    </span>
                  </div>
                  <h4 className="font-heading font-bold text-sm text-pastel-slate-900 mb-1.5 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-pastel-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
