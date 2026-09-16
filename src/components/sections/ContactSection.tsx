"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Copy,
  MessageSquare,
  Heart,
  FileDown,
} from "lucide-react";
import { siteContent } from "@/content";

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { contact } = siteContent;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.emailValue);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 relative bg-pastel-cream-50/60 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pastel-pink-100 text-pastel-pink-700 text-xs font-bold mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>{contact.badge}</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-pastel-slate-900 tracking-tight mb-3">
            {contact.title}
          </h2>
          <p className="text-sm sm:text-base text-pastel-slate-600">
            {contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white p-6 rounded-3xl border border-pastel-pink-200/90 shadow-sm">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-pastel-pink-100 text-pastel-pink-600 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-pastel-slate-500 uppercase tracking-wider">
                      {contact.emailTitle}
                    </div>
                    <a
                      href={`mailto:${contact.emailValue}`}
                      className="text-sm sm:text-base font-bold text-pastel-slate-900 hover:text-pastel-pink-600 transition-colors break-all"
                    >
                      {contact.emailValue}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  title={contact.copySuccessMessage}
                  className="p-2 rounded-xl bg-pastel-pink-50 text-pastel-pink-600 hover:bg-pastel-pink-100 transition-colors"
                >
                  {copied ? <CheckCircle className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copied && (
                <div className="mt-2 text-[11px] font-semibold text-emerald-600 text-right">
                  {contact.copySuccessMessage}
                </div>
              )}
            </div>

            <div className="bg-white p-6 rounded-3xl border border-pastel-mint-200/80 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-pastel-mint-100 text-pastel-mint-700 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-pastel-slate-500 uppercase tracking-wider">
                      {contact.phoneTitle}
                    </div>
                    <div className="text-sm sm:text-base font-bold text-pastel-slate-900">
                      {contact.phoneValue}
                    </div>
                  </div>
                </div>
                <a
                  href={contact.whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full bg-pastel-mint-500 hover:bg-pastel-mint-600 text-white text-xs font-bold shadow-xs transition-colors flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>{contact.chatWhatsAppBtn}</span>
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-pastel-pink-200/90 shadow-sm">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-pastel-rose-100 text-pastel-rose-600 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-pastel-slate-500 uppercase tracking-wider">
                    {contact.locationTitle}
                  </div>
                  <div className="text-sm sm:text-base font-bold text-pastel-slate-900">
                    {contact.locationValue}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-gradient-to-r from-pastel-pink-400 to-pastel-rose-400 text-white shadow-md">
              <h4 className="font-heading font-extrabold text-base mb-1">
                {contact.cvCardTitle}
              </h4>
              <p className="text-xs text-white/90 mb-4 leading-relaxed">
                {contact.cvCardDesc}
              </p>
              <a
                href={contact.cvPath}
                download="CV_Yulti_Syaridayanti_SKM.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-pastel-pink-600 font-bold text-xs shadow-sm hover:bg-pastel-pink-50 transition-colors hover-heartbeat"
              >
                <FileDown className="w-4 h-4" />
                <span>{contact.cvCardBtn}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white p-7 sm:p-9 rounded-3xl border border-pastel-pink-200/90 shadow-sm">
              <h3 className="font-heading font-extrabold text-xl text-pastel-slate-900 mb-1">
                {contact.formTitle}
              </h3>
              <p className="text-xs sm:text-sm text-pastel-slate-600 mb-6">
                {contact.formSubtitle}
              </p>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-pastel-pink-50 border border-pastel-pink-200 text-center animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-14 h-14 rounded-full bg-pastel-pink-500 text-white flex items-center justify-center mx-auto mb-4 shadow-md animate-bounce">
                    <Heart className="w-7 h-7 fill-white" />
                  </div>
                  <h4 className="font-heading font-extrabold text-lg text-pastel-slate-900 mb-2">
                    {contact.successTitle}
                  </h4>
                  <p className="text-xs sm:text-sm text-pastel-slate-700 max-w-md mx-auto mb-5 leading-relaxed">
                    {contact.successMessageTemplate(formData.name, formData.email)}
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="px-5 py-2 rounded-full bg-pastel-pink-500 hover:bg-pastel-pink-600 text-white text-xs font-bold transition-colors shadow-sm"
                  >
                    {contact.sendAnotherBtn}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-pastel-slate-700 mb-1.5">
                        {contact.nameLabel} <span className="text-pastel-pink-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={contact.namePlaceholder}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-pastel-pink-200 text-xs sm:text-sm text-pastel-slate-900 placeholder:text-pastel-slate-400 focus:outline-none focus:border-pastel-pink-500 focus:ring-2 focus:ring-pastel-pink-200 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-pastel-slate-700 mb-1.5">
                        {contact.emailLabel} <span className="text-pastel-pink-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder={contact.emailPlaceholder}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-pastel-pink-200 text-xs sm:text-sm text-pastel-slate-900 placeholder:text-pastel-slate-400 focus:outline-none focus:border-pastel-pink-500 focus:ring-2 focus:ring-pastel-pink-200 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-pastel-slate-700 mb-1.5">
                      {contact.subjectLabel}
                    </label>
                    <input
                      type="text"
                      placeholder={contact.subjectPlaceholder}
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-pastel-pink-200 text-xs sm:text-sm text-pastel-slate-900 placeholder:text-pastel-slate-400 focus:outline-none focus:border-pastel-pink-500 focus:ring-2 focus:ring-pastel-pink-200 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-pastel-slate-700 mb-1.5">
                      {contact.messageLabel} <span className="text-pastel-pink-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder={contact.messagePlaceholder}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-pastel-pink-200 text-xs sm:text-sm text-pastel-slate-900 placeholder:text-pastel-slate-400 focus:outline-none focus:border-pastel-pink-500 focus:ring-2 focus:ring-pastel-pink-200 transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-pastel-pink-500 to-pastel-rose-500 hover:from-pastel-pink-600 hover:to-pastel-rose-600 text-white font-bold text-sm shadow-md shadow-pastel-pink-400/30 hover:shadow-lg transition-all hover-heartbeat"
                  >
                    <Send className="w-4 h-4" />
                    <span>{contact.submitBtn}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
