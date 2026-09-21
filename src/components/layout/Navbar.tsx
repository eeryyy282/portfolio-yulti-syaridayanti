"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Heart,
  Menu,
  X,
  FileDown,
  User,
  Briefcase,
  FolderHeart,
  Sparkles,
  Mail,
  Stethoscope,
} from "lucide-react";
import { siteContent } from "@/content";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  hero: Heart,
  about: User,
  experience: Briefcase,
  projects: FolderHeart,
  skills: Sparkles,
  contact: Mail,
};

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const { navbar, contact } = siteContent;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navbar.navItems.map((item) => item.id);
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navbar.navItems]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "glass-nav border-b border-pastel-pink-200/60 shadow-sm py-2.5"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <Link
          href="#hero"
          className="flex items-center gap-2.5 group cursor-pointer focus:outline-none"
        >
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-pastel-pink-400 to-pastel-rose-400 text-white flex items-center justify-center shadow-md shadow-pastel-pink-300/40 group-hover:scale-105 transition-transform duration-200">
            <Stethoscope className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
          </div>
          <div>
            <span className="font-heading font-extrabold text-base sm:text-lg text-pastel-slate-800 tracking-tight group-hover:text-pastel-pink-600 transition-colors">
              {navbar.brandName}
            </span>
            <span className="hidden sm:block text-[11px] font-semibold text-pastel-pink-600 tracking-wide uppercase">
              {navbar.brandDegree} | {navbar.brandRole}
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1 bg-white/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-pastel-pink-200/70 shadow-sm">
          {navbar.navItems.map((item) => {
            const Icon = iconMap[item.id] || Heart;
            const isActive = activeSection === item.id;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-pastel-pink-500 text-white shadow-sm"
                    : "text-pastel-slate-700 hover:text-pastel-pink-600 hover:bg-pastel-pink-50"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-pastel-pink-400"}`} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href={navbar.coupleLink.url}
            target="_blank"
            rel="noopener noreferrer"
            title={navbar.coupleLink.title}
            aria-label={navbar.coupleLink.title}
            className="group relative w-9 h-9 rounded-full flex items-center justify-center bg-sky-50 text-sky-600 hover:bg-sky-100 border border-sky-200/70 transition-all duration-200 hover:scale-110 shadow-xs"
          >
            <Heart className="w-4 h-4 fill-sky-400 text-sky-500 group-hover:scale-125 transition-transform" />
            <span className="sr-only">{navbar.coupleLink.title}</span>
          </a>

          <a
            href={contact.cvPath}
            download="CV_Yulti_Syaridayanti_SKM.pdf"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pastel-pink-500 to-pastel-rose-500 text-white text-xs font-bold shadow-md shadow-pastel-pink-400/30 hover:shadow-lg hover:shadow-pastel-pink-400/40 transition-all duration-200 hover-heartbeat"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>{navbar.downloadCvBtn}</span>
          </a>
        </div>

        <div className="flex sm:hidden items-center gap-2">
          <a
            href={navbar.coupleLink.url}
            target="_blank"
            rel="noopener noreferrer"
            title={navbar.coupleLink.title}
            aria-label={navbar.coupleLink.title}
            className="w-9 h-9 rounded-full flex items-center justify-center bg-sky-50 text-sky-600 border border-sky-200/70"
          >
            <Heart className="w-4 h-4 fill-sky-400 text-sky-500" />
            <span className="sr-only">{navbar.coupleLink.title}</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="w-10 h-10 rounded-2xl bg-pastel-pink-100/80 text-pastel-pink-600 flex items-center justify-center border border-pastel-pink-200 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden glass-nav border-b border-pastel-pink-200 px-6 py-4 mt-2 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-2">
            {navbar.navItems.map((item) => {
              const Icon = iconMap[item.id] || Heart;
              const isActive = activeSection === item.id;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-pastel-pink-500 text-white shadow-sm"
                      : "text-pastel-slate-700 hover:bg-pastel-pink-50 hover:text-pastel-pink-600"
                  }`}
                >
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                      isActive ? "bg-white/20 text-white" : "bg-pastel-pink-100 text-pastel-pink-500"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span>{item.label}</span>
                </Link>
              );
            })}

            <div className="pt-2 border-t border-pastel-pink-200/60 mt-1">
              <a
                href={contact.cvPath}
                download="CV_Yulti_Syaridayanti_SKM.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-gradient-to-r from-pastel-pink-500 to-pastel-rose-500 text-white text-xs font-bold shadow-md"
              >
                <FileDown className="w-4 h-4" />
                <span>{navbar.downloadCvBtn} (.PDF)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
