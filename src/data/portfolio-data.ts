import { siteContent } from "@/content";

export const personalData = {
  name: siteContent.hero.fullName,
  degree: siteContent.hero.degree,
  fullName: `${siteContent.hero.fullName}, ${siteContent.hero.degree}`,
  headline: siteContent.hero.headline,
  email: siteContent.contact.emailValue,
  phone: siteContent.contact.phoneValue,
  whatsappUrl: siteContent.contact.whatsAppUrl,
  location: siteContent.contact.locationValue,
  cvPath: siteContent.contact.cvPath,
  bio: siteContent.about.bioNarrative,
  stats: siteContent.about.stats,
};

export const educationData = siteContent.about.educationSummary;
export const experiences = siteContent.experience.items;
export const projects = siteContent.projects.items;
export const skillCategories = siteContent.skills.categories;
export const certificationsAndAwards = siteContent.skills.awards;

export * from "@/content/types";
