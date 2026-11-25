"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  Copy,
  MessageSquare,
  FileDown,
  AlertCircle,
} from "lucide-react";
import { siteContent } from "@/content";

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { contact } = siteContent;

  const handleCopyEmail = async () => {
    setCopyError(false);
    try {
      if (typeof navigator === "undefined" || !navigator.clipboard?.writeText) {
        throw new Error("Clipboard API unavailable");
      }
      await navigator.clipboard.writeText(contact.emailValue);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (error) {
      console.error("Failed to copy email address to clipboard:", error);
      setCopyError(true);
      setTimeout(() => setCopyError(false), 3000);
    }
  };

  const buildComposedBody = () => {
    const senderName = formData.name.trim() || "-";
    const senderEmail = formData.email.trim() || "-";
    const bodyMessage = formData.message.trim() || contact.defaultMessageBody;
    return contact.mailtoBodyTemplate(senderName, senderEmail, bodyMessage);
  };

  const getMailtoHref = () => {
    const subject = formData.subject.trim() || contact.defaultSubject;
    return `mailto:${contact.emailValue}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      buildComposedBody()
    )}`;
  };

  const getWhatsAppHref = () => {
    if (!formData.name.trim() && !formData.subject.trim() && !formData.message.trim()) {
      return contact.whatsAppUrl;
    }
    const subject = formData.subject.trim() || contact.defaultSubject;
    const text = `${subject}\n\n${buildComposedBody()}`;
    return `${contact.whatsAppBaseUrl}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="py-20 relative bg-pastel-cream-50/60 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-left max-w-2xl mb-12 space-y-2">
          <p className="text-xs font-semibold text-pastel-pink-600">
            {contact.badge}
          </p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-pastel-slate-900 tracking-tight">
            {contact.title}
          </h2>
          <p className="text-sm sm:text-base text-pastel-slate-600">
            {contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white p-5 rounded-xl border border-pastel-pink-200/90 shadow-sm">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-pastel-pink-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-pastel-slate-500">
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
                  title={
                    copyError
                      ? contact.copyErrorMessage
                      : copied
                      ? contact.copySuccessMessage
                      : contact.copyEmailTooltip
                  }
                  aria-label={
                    copyError
                      ? contact.copyErrorMessage
                      : copied
                      ? contact.copySuccessMessage
                      : contact.copyEmailTooltip
                  }
                  className="p-2 rounded-lg bg-pastel-pink-50 text-pastel-pink-600 hover:bg-pastel-pink-100 transition-colors"
                >
                  {copyError ? (
                    <AlertCircle className="w-4 h-4 text-rose-600" />
                  ) : copied ? (
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              {copied && (
                <div className="mt-2 text-xs font-semibold text-emerald-600 text-right">
                  {contact.copySuccessMessage}
                </div>
              )}
              {copyError && (
                <div className="mt-2 text-xs font-semibold text-rose-600 text-right">
                  {contact.copyErrorMessage}
                </div>
              )}
            </div>

            <div className="bg-white p-5 rounded-xl border border-pastel-mint-200/80 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-pastel-mint-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-pastel-slate-500">
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
                  className="px-3 py-1.5 rounded-lg border border-pastel-mint-600 text-pastel-mint-600 hover:bg-pastel-mint-50 text-xs font-bold transition-colors flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>{contact.chatWhatsAppBtn}</span>
                </a>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-pastel-pink-200/90 shadow-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-pastel-pink-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-pastel-slate-500">
                    {contact.locationTitle}
                  </div>
                  <div className="text-sm sm:text-base font-bold text-pastel-slate-900">
                    {contact.locationValue}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white border border-pastel-pink-200/90 shadow-sm space-y-3">
              <h4 className="font-heading font-extrabold text-base text-pastel-slate-900">
                {contact.cvCardTitle}
              </h4>
              <p className="text-xs text-pastel-slate-600 leading-relaxed">
                {contact.cvCardDesc}
              </p>
              <a
                href={contact.cvPath}
                download={contact.cvFileName}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-pastel-pink-600 text-pastel-pink-600 hover:bg-pastel-pink-50 font-bold text-xs transition-colors"
              >
                <FileDown className="w-4 h-4" />
                <span>{contact.cvCardBtn}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-pastel-pink-200/90 shadow-sm">
              <h3 className="font-heading font-extrabold text-xl text-pastel-slate-900 mb-1">
                {contact.formTitle}
              </h3>
              <p className="text-xs sm:text-sm text-pastel-slate-600 mb-6">
                {contact.formSubtitle}
              </p>

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-pastel-slate-700 mb-1.5">
                      {contact.nameLabel}
                    </label>
                    <input
                      type="text"
                      placeholder={contact.namePlaceholder}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-pastel-pink-200 text-xs sm:text-sm text-pastel-slate-900 placeholder:text-pastel-slate-400 focus:outline-none focus:border-pastel-pink-500 focus:ring-2 focus:ring-pastel-pink-200 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-pastel-slate-700 mb-1.5">
                      {contact.emailLabel}
                    </label>
                    <input
                      type="email"
                      placeholder={contact.emailPlaceholder}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-pastel-pink-200 text-xs sm:text-sm text-pastel-slate-900 placeholder:text-pastel-slate-400 focus:outline-none focus:border-pastel-pink-500 focus:ring-2 focus:ring-pastel-pink-200 transition-colors"
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
                    className="w-full px-4 py-2.5 rounded-lg border border-pastel-pink-200 text-xs sm:text-sm text-pastel-slate-900 placeholder:text-pastel-slate-400 focus:outline-none focus:border-pastel-pink-500 focus:ring-2 focus:ring-pastel-pink-200 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-pastel-slate-700 mb-1.5">
                    {contact.messageLabel}
                  </label>
                  <textarea
                    rows={4}
                    placeholder={contact.messagePlaceholder}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-pastel-pink-200 text-xs sm:text-sm text-pastel-slate-900 placeholder:text-pastel-slate-400 focus:outline-none focus:border-pastel-pink-500 focus:ring-2 focus:ring-pastel-pink-200 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <a
                    href={getWhatsAppHref()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-pastel-pink-200 bg-white hover:bg-pastel-cream-50 text-pastel-slate-800 font-bold text-sm transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 text-pastel-mint-600" />
                    <span>{contact.sendViaWhatsAppBtn}</span>
                  </a>

                  <a
                    href={getMailtoHref()}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-pastel-pink-600 hover:bg-pastel-pink-700 text-white font-bold text-sm shadow-sm transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>{contact.sendViaEmailBtn}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
