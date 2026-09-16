export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
  note: string;
}

export interface PillarItem {
  title: string;
  desc: string;
  tag: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  badge?: string;
  highlights: string[];
  tags: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  tags: string[];
  impactMetric?: {
    value: string;
    label: string;
  };
}

export interface SkillCategoryItem {
  title: string;
  iconName: string;
  skills: string[];
}

export interface AwardItem {
  title: string;
  category: string;
  description: string;
  iconName: string;
}

export interface PortfolioContent {
  metadata: {
    title: string;
    description: string;
    keywords: string[];
    ogTitle: string;
    ogDescription: string;
    ogBadge: string;
    ogSubHeader: string;
    ogTags: string[];
  };
  navbar: {
    brandName: string;
    brandDegree: string;
    brandRole: string;
    downloadCvBtn: string;
    navItems: NavItem[];
  };
  hero: {
    greetingBadge: string;
    fullName: string;
    degree: string;
    headline: string;
    bio: string;
    badges: {
      cumlaude: string;
      community: string;
      puskesmas: string;
    };
    downloadCvBtn: string;
    contactBtn: string;
    explorePrompt: string;
  };
  about: {
    badge: string;
    title: string;
    subtitle: string;
    illustrationCaption: string;
    visionTitle: string;
    visionSubtitle: string;
    bioNarrative: string;
    approachNarrative: string;
    educationSummary: {
      institution: string;
      degree: string;
      predicate: string;
      publicationPrefix: string;
      publicationHighlight: string;
    };
    stats: StatItem[];
    pillars: PillarItem[];
  };
  experience: {
    badge: string;
    title: string;
    subtitle: string;
    items: ExperienceItem[];
  };
  projects: {
    badge: string;
    title: string;
    subtitle: string;
    items: ProjectItem[];
  };
  skills: {
    badge: string;
    title: string;
    subtitle: string;
    categories: SkillCategoryItem[];
    awardsHeaderBadge: string;
    awardsHeaderTitle: string;
    awards: AwardItem[];
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    emailTitle: string;
    emailValue: string;
    copySuccessMessage: string;
    phoneTitle: string;
    phoneValue: string;
    chatWhatsAppBtn: string;
    whatsAppUrl: string;
    locationTitle: string;
    locationValue: string;
    cvCardTitle: string;
    cvCardDesc: string;
    cvCardBtn: string;
    cvPath: string;
    formTitle: string;
    formSubtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    successTitle: string;
    successMessageTemplate: (name: string, email: string) => string;
    sendAnotherBtn: string;
  };
  footer: {
    brandName: string;
    brandDegreeRole: string;
    missionStatement: string;
    navTitle: string;
    contactTitle: string;
    backToTopBtn: string;
    copyrightText: string;
    subNote: string;
  };
  ui: {
    heartbeatBadge: string;
    avatarFallbackRole: string;
    avatarFallbackSpecialty: string;
    avatarBadgeCumlaude: string;
    avatarBadgeStudyTime: string;
    avatarBadgeField: string;
    avatarBadgeSubField: string;
  };
}

