export interface Experience {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  badge?: string;
  highlights: string[];
  tags: string[];
}

export interface Project {
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

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: string[];
}

export interface Achievement {
  title: string;
  category: "Akademik" | "Publikasi" | "Kompetisi" | "Sertifikasi";
  description: string;
  iconName: string;
}

export const personalData = {
  name: "Yulti Syaridayanti",
  degree: "S.K.M.",
  fullName: "Yulti Syaridayanti, S.K.M.",
  headline: "Sarjana Kesehatan Masyarakat | Promosi Kesehatan & Ilmu Perilaku",
  tagline: "Mewujudkan Pemerataan Akses & Literasi Kesehatan Berbasis Komunitas",
  email: "yultisyaridayanti@gmail.com",
  phone: "+6282258540657",
  whatsappUrl: "https://wa.me/6282258540657?text=Halo%20Yulti%2C%20saya%20tertarik%20untuk%20berdiskusi%20mengenai%20kolaborasi%20kesehatan%20masyarakat",
  location: "Jambi & Kerinci, Indonesia",
  cvPath: "/cv/CV_Yulti_Syaridayanti.pdf",
  bio: `Sarjana Kesehatan Masyarakat berpredikat Cumlaude (IPK 3.86) yang menyelesaikan studi dalam waktu 3,5 tahun dengan spesialisasi Promosi Kesehatan dan Ilmu Perilaku. Berpengalaman kuat dalam pemberdayaan masyarakat, advokasi kesehatan di daerah penugasan khusus dan komunitas adat, serta perancangan media edukasi inovatif untuk mengatasi mitos lokal kesehatan.`,
  vision: `Berkomitmen tinggi untuk mengabdi secara profesional guna mewujudkan pemerataan akses kesehatan, perbaikan kualitas hidup masyarakat Indonesia, dan penguatan sistem kesehatan primer berbasis partisipasi komunitas.`,
  stats: [
    { value: "3.86", label: "IPK Cumlaude", note: "Lulus Cepat 3.5 Tahun" },
    { value: "Sinta 3", label: "Artikel Ilmiah", note: "Penulis Terakreditasi" },
    { value: "4+", label: "Faskes & Instansi", note: "Puskesmas & BKKBN" },
    { value: "100%", label: "Dampak Edukasi TB", note: "Transformasi Pengetahuan" },
  ],
};

export const educationData = {
  institution: "Universitas Jambi",
  degree: "Sarjana Kesehatan Masyarakat (S.K.M.)",
  major: "Peminatan Promosi Kesehatan dan Ilmu Perilaku",
  period: "Januari 2025",
  gpa: "3.86 / 4.00",
  predicate: "Cumlaude (Lulus dalam 3,5 tahun)",
  achievement: "Berhasil menyusun dan menerbitkan artikel ilmiah yang terakreditasi Sinta 3.",
  focus: "Pencegahan penyakit, promosi kesehatan, dan perbaikan kualitas hidup masyarakat melalui penerapan ilmu kesehatan aplikatif.",
};

export const experiences: Experience[] = [
  {
    id: "puskesmas-tarutung",
    role: "Staf Promosi Kesehatan dan Ilmu Perilaku",
    organization: "Puskesmas Tarutung",
    location: "Kerinci",
    period: "Agustus 2025 – Sekarang",
    badge: "Posisi Saat Ini",
    highlights: [
      "Menginisiasi program penyuluhan kesehatan proaktif untuk meningkatkan literasi masyarakat di wilayah kerja.",
      "Merancang materi edukasi visual interaktif (poster, leaflet, dan video) guna mengoptimalkan kampanye promosi kesehatan.",
      "Mengelola dan mengoptimalkan pendataan program CKG secara akurat agar pencatatan dan intervensi kesehatan puskesmas menjadi lebih terarah.",
    ],
    tags: ["Penyuluhan Proaktif", "Desain Media Visual", "Program CKG", "Literasi Kesehatan"],
  },
  {
    id: "puskesmas-rawasari",
    role: "Interprofessional Education (IPE)",
    organization: "UPTD Puskesmas Rawasari",
    location: "Jambi",
    period: "Agustus – Desember 2024",
    highlights: [
      "Menganalisis kondisi pasien Tuberkulosis (TB) dan melakukan pendekatan kultural untuk meluruskan miskonsepsi masyarakat yang lebih memilih pengobatan dukun karena menganggap TB sebagai penyakit 'guna-guna'.",
      "Mengimplementasikan intervensi kesehatan berkelanjutan kepada pasien dan keluarga dengan mengintegrasikan sistem aplikasi KECAPI TB.",
      "Memfasilitasi edukasi pencegahan penularan TB secara komunikatif kepada masyarakat menggunakan media flipchart.",
    ],
    tags: ["Pendekatan Kultural TB", "KECAPI TB", "Edukasi Flipchart", "Konseling Pasien"],
  },
  {
    id: "bkkbn-jambi",
    role: "Mahasiswa Magang",
    organization: "BKKBN Provinsi Jambi",
    location: "Jambi",
    period: "Maret – Mei 2024",
    highlights: [
      "Mengelola sistem pengarsipan dokumen dan basis data instansi untuk mendukung efisiensi operasional BKKBN.",
      "Memandu jalannya acara sebagai Master of Ceremony (MC) dalam kegiatan Pengelolaan Rumah Data Kependudukan tingkat Provinsi Jambi.",
      "Mengembangkan materi promosi kesehatan berupa poster informatif yang disesuaikan dengan sasaran kampanye instansi.",
    ],
    tags: ["Basis Data Kependudukan", "Public Speaking / MC", "Media Kampanye", "Tata Kelola Arsip"],
  },
  {
    id: "puskesmas-simpang-kawat",
    role: "Mahasiswa Magang",
    organization: "UPTD Puskesmas Simpang Kawat",
    location: "Jambi",
    period: "Januari – Februari 2024",
    highlights: [
      "Mendukung pelaksanaan program kesehatan preventif melalui penyuluhan Perilaku Hidup Bersih dan Sehat (PHBS) di lingkungan sekolah dan masyarakat.",
      "Berkontribusi aktif dalam operasional pelayanan kesehatan pada kegiatan Posyandu Terpadu serta mengelola input data pasien ke dalam Sistem Informasi Puskesmas.",
    ],
    tags: ["Penyuluhan PHBS", "Posyandu Terpadu", "SIM Puskesmas", "Pelayanan Preventif"],
  },
];

export const projects: Project[] = [
  {
    id: "pemberdayaan-sad",
    title: "Program Pemberdayaan Masyarakat Suku Anak Dalam (SAD)",
    role: "Fasilitator Kesehatan Masyarakat",
    period: "Pengabdian Khusus",
    location: "Jambi",
    description:
      "Program advokasi dan intervensi kesehatan adaptif untuk kelompok masyarakat adat yang memiliki tantangan khusus dalam literasi dan akses faskes formal.",
    highlights: [
      "Mengimplementasikan metode edukatif 'belajar sambil bermain' untuk meningkatkan pemahaman kebersihan diri dan sanitasi bagi anak-anak Suku Anak Dalam.",
      "Melakukan advokasi strategis kepada tetua dan tokoh adat menggunakan pendekatan bahasa lokal dan norma kultural guna mendorong partisipasi rutin ke Posyandu.",
    ],
    tags: ["Komunitas Adat (SAD)", "Belajar Sambil Bermain", "Advokasi Kultural", "Akses Posyandu"],
    impactMetric: {
      value: "Partisipatif",
      label: "Penerimaan Budaya & Kehadiran Posyandu",
    },
  },
  {
    id: "hpu-fkik-unja",
    title: "Health Promotion University (HPU) FKIK UNJA",
    role: "Ketua Divisi Pola Makan Sehat",
    period: "Kepemimpinan Organisasi",
    location: "Jambi",
    description:
      "Inisiatif institusional berskala kampus dalam mewujudkan lingkungan akademik yang suportif terhadap kesehatan fisik dan kebiasaan nutrisi bergizi seimbang.",
    highlights: [
      "Memimpin divisi dalam merancang dan mengeksekusi program-program strategis promosi gaya hidup sehat dan asupan nutrisi seimbang bagi mahasiswa dan staf kampus.",
      "Mengoordinasikan kampanye edukasi interaktif pola makan gizi seimbang melalui seminar, poster digital, dan aksi nyata.",
    ],
    tags: ["Leadership", "Gizi Seimbang", "Promosi Kampus Sehat", "Manajemen Tim"],
    impactMetric: {
      value: "Divisi Aktif",
      label: "Inisiator Pola Makan Sehat Kampus",
    },
  },
  {
    id: "planning-action-tb",
    title: "Program Pencegahan dan Penghapusan Stigma TB (POA)",
    role: "Initiator Program (Planning of Action)",
    period: "Januari – Februari 2024",
    location: "Jambi",
    description:
      "Program terstruktur Planning of Action (POA) berbasis intervensi komunitas untuk mengatasi klaster Tuberkulosis tinggi dan menghapus stigma penyakit di tingkat RT.",
    highlights: [
      "Merumuskan strategi 'Kawasan Bebas TB' guna merespons tingginya kasus klaster TB yang mencapai 4-5 kasus per RT.",
      "Mencapai transformasi pemahaman yang terukur: peningkatan signifikan dari 55% sikap negatif/mitos menjadi 100% sikap positif dan pemahaman komprehensif pasca-edukasi.",
    ],
    tags: ["Planning of Action (POA)", "Penghapusan Stigma TB", "Intervensi Klaster", "Edukasi Terukur"],
    impactMetric: {
      value: "55% → 100%",
      label: "Transformasi Pengetahuan & Sikap Positif Warga",
    },
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Promosi & Edukasi Kesehatan",
    iconName: "Megaphone",
    skills: [
      "Penyuluhan Kesehatan Adaptif",
      "Perilaku Hidup Bersih & Sehat (PHBS)",
      "Desain Flipchart & Media Visual",
      "Komunikasi Perubahan Perilaku (KAP)",
    ],
  },
  {
    title: "Pemberdayaan & Advokasi Komunitas",
    iconName: "Users",
    skills: [
      "Pemberdayaan Komunitas Adat (SAD)",
      "Advokasi Lintas Sektor & Tokoh Kultural",
      "Fasilitasi Interprofessional Education (IPE)",
      "Pengorganisasian Posyandu Terpadu",
    ],
  },
  {
    title: "Perencanaan & Analisis Program",
    iconName: "Target",
    skills: [
      "Planning of Action (POA)",
      "Analisis Determinan Kesehatan",
      "Rancangan Intervensi Klaster Penyakit",
      "Evaluasi Program Berbasis Indikator",
    ],
  },
  {
    title: "Manajemen Data & Teknologi",
    iconName: "Database",
    skills: [
      "Manajemen Basis Data & Administrasi",
      "Sistem Informasi Puskesmas (SIM)",
      "Implementasi Aplikasi KECAPI TB",
      "Pengelolaan Data Program CKG",
    ],
  },
];

export const certificationsAndAwards: Achievement[] = [
  {
    title: "Lulusan Cumlaude (IPK 3.86)",
    category: "Akademik",
    description: "Menyelesaikan studi Sarjana Kesehatan Masyarakat dalam kurun waktu 3,5 tahun di Universitas Jambi.",
    iconName: "Award",
  },
  {
    title: "Penulis Artikel Ilmiah Terakreditasi Sinta 3",
    category: "Publikasi",
    description: "Berhasil mempublikasikan artikel riset ilmiah di jurnal nasional bereputasi Sinta 3.",
    iconName: "BookOpen",
  },
  {
    title: "Certified Public Speaking",
    category: "Sertifikasi",
    description: "Sertifikasi resmi kompetensi berbicara di depan publik dan keahlian MC / moderasi acara formal.",
    iconName: "Mic",
  },
  {
    title: "Perwakilan KN MIPA Bidang Biologi",
    category: "Kompetisi",
    description: "Terpilih mewakili Fakultas Kedokteran dan Ilmu Kesehatan (FKIK) dalam Kompetisi Nasional MIPA Biologi.",
    iconName: "Sparkles",
  },
];

