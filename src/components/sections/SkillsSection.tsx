"use client";

import React from "react";
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
  FileCheck,
} from "lucide-react";
import { siteContent } from "@/content";

export const SkillsSection: React.FC = () => {
  const { skills } = siteContent;

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
      case "FileCheck":
        return FileCheck;
      default:
        return Award;
    }
  };

  return (
    <section id="skills" className="py-20 relative bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-left max-w-2xl mb-12 space-y-2">
          <p className="text-xs font-semibold text-pastel-pink-600">
            {skills.badge}
          </p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-pastel-slate-900 tracking-tight">
            {skills.title}
          </h2>
          <p className="text-sm sm:text-base text-pastel-slate-600">
            {skills.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.categories.map((cat, idx) => {
            const Icon = getCategoryIcon(cat.iconName);
            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-pastel-cream-50 border border-pastel-pink-200/80 hover:border-pastel-pink-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col"
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <Icon className="w-5 h-5 text-pastel-pink-600" />
                  <h3 className="font-heading font-bold text-base text-pastel-slate-900">
                    {cat.title}
                  </h3>
                </div>

                <ul className="space-y-2.5 mt-auto">
                  {cat.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-2 text-xs font-medium text-pastel-slate-700">
                      <CheckCircle className="w-3.5 h-3.5 text-pastel-pink-500 mt-0.5 flex-shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="bg-pastel-cream-50 p-6 sm:p-8 rounded-xl border border-pastel-pink-200 shadow-sm">
          <div className="max-w-xl text-left mb-8 space-y-1">
            <p className="text-xs font-semibold text-pastel-pink-600">
              {skills.awardsHeaderBadge}
            </p>
            <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-pastel-slate-900">
              {skills.awardsHeaderTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skills.awards.map((item, aIdx) => {
              const Icon = getAchievementIcon(item.iconName);
              return (
                <div
                  key={aIdx}
                  className="bg-white p-5 rounded-xl border border-pastel-pink-200/80 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="flex items-center justify-between mb-3">
                    <Icon className="w-4 h-4 text-pastel-pink-600" />
                    <span className="text-xs font-semibold text-pastel-pink-600">
                      {item.category}
                    </span>
                  </div>
                  <h4 className="font-heading font-bold text-sm text-pastel-slate-900 mb-1.5 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-pastel-slate-600 leading-relaxed">
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
