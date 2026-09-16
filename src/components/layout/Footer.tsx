import React from "react";
import Link from "next/link";
import { Heart, Stethoscope, ArrowUp, Mail, Phone, MapPin } from "lucide-react";
import { siteContent } from "@/content";

export const Footer: React.FC = () => {
  const { footer, navbar, contact } = siteContent;

  return (
    <footer className="bg-white border-t border-pastel-pink-200/80 pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-pastel-pink-100 items-start">
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-2xl bg-pastel-pink-500 text-white flex items-center justify-center shadow-xs">
                <Stethoscope className="w-5 h-5" />
              </div>
              <div>
                <span className="font-heading font-extrabold text-lg text-pastel-slate-900">
                  {footer.brandName}
                </span>
                <span className="text-xs font-semibold text-pastel-pink-600 block">
                  {footer.brandDegreeRole}
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-pastel-slate-600 max-w-md leading-relaxed">
              {footer.missionStatement}
            </p>
          </div>

          <div className="md:col-span-3 space-y-2">
            <h4 className="font-heading font-bold text-xs text-pastel-slate-900 uppercase tracking-wider">
              {footer.navTitle}
            </h4>
            <ul className="space-y-1.5 text-xs text-pastel-slate-600">
              {navbar.navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-pastel-pink-600 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 space-y-2.5">
            <h4 className="font-heading font-bold text-xs text-pastel-slate-900 uppercase tracking-wider">
              {footer.contactTitle}
            </h4>
            <div className="text-xs text-pastel-slate-600 space-y-1">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-pastel-pink-500" />
                <span className="truncate">{contact.emailValue}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-pastel-pink-500" />
                <span>{contact.phoneValue}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-pastel-pink-500" />
                <span>{contact.locationValue}</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="#hero"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-pastel-pink-50 hover:bg-pastel-pink-100 text-pastel-pink-600 text-xs font-bold border border-pastel-pink-200 transition-colors"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>{footer.backToTopBtn}</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-xs text-pastel-slate-500">
          <div className="flex items-center gap-1.5 justify-center">
            <span>© {new Date().getFullYear()} {footer.copyrightText}</span>
            <Heart className="w-3.5 h-3.5 text-pastel-pink-500 fill-pastel-pink-500 inline-block" />
          </div>
          <div className="text-[11px] text-pastel-slate-400">
            {footer.subNote}
          </div>
        </div>
      </div>
    </footer>
  );
};
