import { PortfolioContent } from "./types";

export const idContent: PortfolioContent = {
  metadata: {
    title: "Yulti Syaridayanti | Portofolio Sarjana Kesehatan Masyarakat",
    description:
      "Portofolio profesional Yulti Syaridayanti, S.K.M. Sarjana Kesehatan Masyarakat lulusan Cumlaude (IPK 3.86) Universitas Jambi yang berfokus pada promosi kesehatan, pemberdayaan masyarakat, dan advokasi komunitas adat.",
    keywords: [
      "Yulti Syaridayanti",
      "Kesehatan Masyarakat",
      "Promosi Kesehatan",
      "Ilmu Perilaku",
      "S.K.M.",
      "Universitas Jambi",
      "Puskesmas Tarutung",
      "Puskesmas Rawasari",
      "Suku Anak Dalam",
      "Advokasi Komunitas Adat",
      "KECAPI TB",
      "Portofolio SKM",
    ],
    ogTitle: "Yulti Syaridayanti, S.K.M. | Portofolio Promosi Kesehatan & Advokasi Komunitas",
    ogDescription:
      "Portofolio profesional Yulti Syaridayanti, Sarjana Kesehatan Masyarakat Universitas Jambi (Cumlaude 3.86) berfokus pada promosi kesehatan, edukasi visual, dan advokasi komunitas adat.",
  },

  navbar: {
    brandName: "Yulti Syaridayanti",
    brandDegree: "S.K.M.",
    brandRole: "Promkes & Ilmu erilaku",
    downloadCvBtn: "Unduh CV",
    navItems: [
      { id: "hero", label: "Beranda", href: "#hero" },
      { id: "about", label: "Tentang", href: "#about" },
      { id: "experience", label: "Pengalaman", href: "#experience" },
      { id: "projects", label: "Proyek", href: "#projects" },
      { id: "skills", label: "Keahlian", href: "#skills" },
      { id: "contact", label: "Kontak", href: "#contact" },
    ],
  },

  hero: {
    greetingBadge: "Sarjana Kesehatan Masyarakat Berpredikat Cumlaude",
    fullName: "Yulti Syaridayanti",
    degree: "S.K.M.",
    headline: "Promosi Kesehatan & Ilmu Perilaku • Advokasi Komunitas",
    bio: "Lulusan Universitas Jambi dengan IPK 3.86 (Masa Studi 3,5 Tahun). Saya memiliki pengalaman terjun langsung ke lapangan, mulai dari mendampingi kesehatan masyarakat adat Suku Anak Dalam, menangani kasus Tuberkulosis di daerah, hingga membuat media edukasi visual untuk puskesmas dan instansi kesehatan.",
    badges: {
      cumlaude: "Cumlaude (3.5 Thn)",
      community: "Advokasi Suku Anak Dalam",
      puskesmas: "Puskesmas Tarutung & Rawasari",
    },
    downloadCvBtn: "Unduh CV Resmi (.PDF)",
    contactBtn: "Hubungi Saya",
    explorePrompt: "Jelajahi Profil",
  },

  about: {
    badge: "Visi & Dedikasi",
    title: "Tentang Yulti Syaridayanti",
    subtitle:
      "Fokus utama saya adalah menggunakan ilmu kesehatan masyarakat untuk menutup celah informasi, memberdayakan warga, dan memperkuat layanan kesehatan preventif.",
    illustrationCaption: "Edukasi yang Merangkul & Layanan Penuh Empati",
    visionTitle: "Visi Pengabdian & Karir",
    visionSubtitle: "Pemerataan Layanan Kesehatan Primer",
    bioNarrative:
      "Saya menyelesaikan studi Sarjana Kesehatan Masyarakat dalam waktu 3,5 tahun dengan predikat Cumlaude (IPK 3.86), mengambil fokus di Promosi Kesehatan dan Ilmu Perilaku. Saya sangat antusias dengan pemberdayaan masyarakat, mulai dari turun langsung mendampingi komunitas adat di daerah penugasan khusus, hingga merancang media edukasi yang menarik untuk meluruskan mitos-mitos kesehatan lokal.",
    approachNarrative:
      "Menurut saya, promosi kesehatan itu jauh lebih dari sekadar bagi-bagi brosur. Ini tentang bagaimana kita membangun komunikasi yang tulus dengan masyarakat. Pengalaman saya saat mengedukasi warga agar tidak salah langkah ke dukun untuk mengobati TB, sampai membuat ruang belajar seru untuk anak-anak Suku Anak Dalam, menyadarkan saya bahwa empati dan pemahaman budaya lokal adalah kunci utama untuk merubah kebiasaan hidup sehat.",
    educationSummary: {
      institution: "Universitas Jambi",
      degree: "Sarjana Kesehatan Masyarakat (S.K.M.)",
      predicate: "Cumlaude (Lulus dalam 3,5 tahun)",
      publicationPrefix: "Telah mempublikasikan karya ilmiah terakreditasi",
      publicationHighlight: "Sinta 3",
    },
    stats: [
      { value: "3.86", label: "IPK Cumlaude", note: "Lulus Cepat 3.5 Tahun" },
      { value: "Sinta 3", label: "Artikel Ilmiah", note: "Penulis Terakreditasi" },
      { value: "4+", label: "Faskes & Instansi", note: "Puskesmas & BKKBN" },
      { value: "100%", label: "Dampak Edukasi TB", note: "Pemahaman Meningkat" },
    ],
    pillars: [
      {
        title: "Edukasi Visual yang Menarik",
        desc: "Membuat media edukasi seperti leaflet, flipchart, video, dan poster yang disesuaikan dengan kebiasaan warga lokal supaya pesan kesehatannya mudah dimengerti dan langsung bisa diterapkan.",
        tag: "Komunikasi Perilaku",
      },
      {
        title: "Pendampingan Komunitas Adat",
        desc: "Turun langsung mendampingi Suku Anak Dalam (SAD) lewat pendekatan budaya dan cara belajar sambil bermain. Tujuannya agar mereka lebih terbuka dan mitos pengobatan yang keliru bisa diluruskan pelan-pelan.",
        tag: "Pemberdayaan Khusus",
      },
      {
        title: "Perapian Data Puskesmas",
        desc: "Memastikan pendataan puskesmas seperti CKG dan KECAPI TB berjalan rapi, serta ikut menyusun POA (Planning of Action) agar langkah puskesmas ke depannya lebih terarah dan tepat sasaran.",
        tag: "Sistem Kesehatan",
      },
    ],
  },

  experience: {
    badge: "Rekam Jejak Profesional",
    title: "Pengalaman Kerja & Lapangan",
    subtitle:
      "Pengalaman langsung di puskesmas dan instansi kesehatan dalam merancang langkah-langkah kesehatan yang tepat sasaran.",
    items: [
      {
        id: "puskesmas-tarutung",
        role: "Staf Promosi Kesehatan dan Ilmu Perilaku",
        organization: "Puskesmas Tarutung",
        location: "Kerinci",
        period: "Agustus 2025 - Sekarang",
        badge: "Posisi Saat Ini",
        highlights: [
          "Membuat dan menjalankan program penyuluhan kesehatan yang langsung menyentuh masyarakat untuk meningkatkan pemahaman mereka terhadap kesehatan sekitar.",
          "Mendesain materi edukasi visual yang menarik, seperti poster, leaflet, dan video, untuk mendukung berbagai kampanye kesehatan dari puskesmas.",
          "Mengurus data program CKG dengan teliti agar pencatatan medis lebih rapi dan tindakan puskesmas ke depannya lebih tepat sasaran.",
        ],
        tags: ["Penyuluhan Langsung", "Desain Media Visual", "Program CKG", "Literasi Kesehatan"],
      },
      {
        id: "puskesmas-rawasari",
        role: "Interprofessional Education (IPE)",
        organization: "UPTD Puskesmas Rawasari",
        location: "Jambi",
        period: "Agustus - Desember 2024",
        highlights: [
          "Mendampingi pasien Tuberkulosis (TB) dan memberi pemahaman secara personal untuk meluruskan anggapan keliru dari masyarakat yang masih mengira TB itu penyakit 'guna-guna' sehingga lebih memilih ke dukun.",
          "Menjaga komunikasi berkelanjutan dengan pasien dan keluarganya, sekaligus memastikan kelancaran pendataan lewat aplikasi KECAPI TB.",
          "Melakukan edukasi ke warga terkait cara mencegah penularan TB menggunakan media flipchart dengan gaya bahasa yang mudah dicerna.",
        ],
        tags: ["Pendekatan Personal TB", "KECAPI TB", "Edukasi Flipchart", "Konseling Pasien"],
      },
      {
        id: "bkkbn-jambi",
        role: "Mahasiswa Magang",
        organization: "BKKBN Provinsi Jambi",
        location: "Jambi",
        period: "Maret - Mei 2024",
        highlights: [
          "Membantu merapikan sistem arsip dokumen dan basis data kantor untuk memperlancar tugas operasional harian BKKBN.",
          "Menjadi Master of Ceremony (MC) dan memandu berjalannya acara Pengelolaan Rumah Data Kependudukan untuk tingkat Provinsi Jambi.",
          "Membuat desain poster informatif sebagai media kampanye kesehatan yang disesuaikan dengan target dari pihak instansi.",
        ],
        tags: ["Basis Data Kependudukan", "Public Speaking / MC", "Media Kampanye", "Tata Kelola Arsip"],
      },
      {
        id: "puskesmas-simpang-kawat",
        role: "Mahasiswa Magang",
        organization: "UPTD Puskesmas Simpang Kawat",
        location: "Jambi",
        period: "Januari - Februari 2024",
        highlights: [
          "Turun ke sekolah dan lingkungan warga untuk memberikan penyuluhan tentang pentingnya Perilaku Hidup Bersih dan Sehat (PHBS).",
          "Membantu operasional kegiatan Posyandu Terpadu serta mengurus input data pasien harian ke dalam Sistem Informasi Puskesmas.",
        ],
        tags: ["Penyuluhan PHBS", "Posyandu Terpadu", "SIM Puskesmas", "Pelayanan Preventif"],
      },
    ],
  },

  projects: {
    badge: "Inisiatif Nyata & Dampak Komunitas",
    title: "Proyek & Program Unggulan",
    subtitle:
      "Beberapa karya dan program yang pernah saya kerjakan, menggabungkan pendekatan budaya, edukasi masyarakat, dan pemanfaatan data.",
    items: [
      {
        id: "pemberdayaan-sad",
        title: "Program Pemberdayaan Masyarakat Suku Anak Dalam (SAD)",
        role: "Fasilitator Kesehatan Masyarakat",
        period: "Pengabdian Khusus",
        location: "Jambi",
        description:
          "Program pendampingan kesehatan yang disesuaikan untuk masyarakat adat, mengingat tantangan akses fasilitas serta pemahaman medis dasar yang masih minim.",
        highlights: [
          "Menerapkan cara 'belajar sambil bermain' agar anak-anak Suku Anak Dalam lebih mudah paham tentang pentingnya mandi, kebersihan diri, dan sanitasi.",
          "Mendekati tokoh dan tetua adat menggunakan bahasa lokal agar warga lebih percaya dan mau rutin datang memeriksakan diri ke Posyandu.",
        ],
        tags: ["Komunitas Adat (SAD)", "Belajar Sambil Bermain", "Pendekatan Kultural", "Akses Posyandu"],
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
          "Gerakan di lingkungan kampus untuk menciptakan suasana akademik yang mendukung kesehatan fisik dan kebiasaan makan bergizi seimbang bagi mahasiswa.",
        highlights: [
          "Memimpin tim untuk menyusun dan menjalankan berbagai kegiatan promosi gaya hidup aktif dan pola makan sehat di dalam kampus.",
          "Mengadakan kampanye edukasi seru, mulai dari seminar, penyebaran poster digital, hingga praktik langsung memilih asupan nutrisi harian yang tepat.",
        ],
        tags: ["Leadership", "Gizi Seimbang", "Promosi Kampus Sehat", "Kerja Tim"],
        impactMetric: {
          value: "Divisi Aktif",
          label: "Penggerak Pola Makan Sehat Kampus",
        },
      },
      {
        id: "planning-action-tb",
        title: "Program Pencegahan dan Penghapusan Stigma TB (POA)",
        role: "Inisiator Program (Planning of Action)",
        period: "Januari - Februari 2024",
        location: "Jambi",
        description:
          "Program penyusunan Planning of Action (POA) yang turun langsung ke warga untuk mengatasi tingginya kasus klaster Tuberkulosis dan menghapus cap buruk penyakit tersebut di level RT.",
        highlights: [
          "Menyusun strategi 'Kawasan Bebas TB' sebagai langkah nyata untuk menangani kasus penyebaran TB yang cukup tinggi, mencapai 4-5 kasus per RT.",
          "Membawa perubahan nyata setelah edukasi: persepsi negatif warga soal TB yang awalnya 55% kini berubah menjadi 100% positif karena warga akhirnya paham fakta medis sebenarnya.",
        ],
        tags: ["Planning of Action (POA)", "Hapus Stigma TB", "Penanganan Klaster", "Edukasi Terukur"],
        impactMetric: {
          value: "55% → 100%",
          label: "Perubahan Sikap Positif Warga",
        },
      },
    ],
  },

  skills: {
    badge: "Kompetensi & Apresiasi",
    title: "Keahlian Teknis & Prestasi",
    subtitle:
      "Kumpulan kemampuan teknis di bidang kesehatan masyarakat, praktik komunikasi publik, dan pencapaian selama kuliah.",
    categories: [
      {
        title: "Promosi & Edukasi Kesehatan",
        iconName: "Megaphone",
        skills: [
          "Penyuluhan Terjun Lapangan",
          "Perilaku Hidup Bersih & Sehat (PHBS)",
          "Desain Flipchart & Media Kampanye",
          "Komunikasi Perubahan Perilaku",
        ],
      },
      {
        title: "Pemberdayaan & Advokasi",
        iconName: "Users",
        skills: [
          "Pendekatan Komunitas Adat (SAD)",
          "Kolaborasi Lintas Sektor & Tokoh Adat",
          "Fasilitasi Interprofessional Education (IPE)",
          "Pengorganisasian Posyandu",
        ],
      },
      {
        title: "Perencanaan & Analisis",
        iconName: "Target",
        skills: [
          "Pembuatan Planning of Action (POA)",
          "Analisis Masalah Kesehatan Warga",
          "Rancangan Penanganan Penyakit Menular",
          "Evaluasi Program Kerja Puskesmas",
        ],
      },
      {
        title: "Manajemen Data Faskes",
        iconName: "Database",
        skills: [
          "Tata Kelola Arsip & Basis Data",
          "Sistem Informasi Puskesmas (SIM)",
          "Penggunaan Aplikasi KECAPI TB",
          "Input & Pengelolaan Data CKG",
        ],
      },
    ],
    awardsHeaderBadge: "Rekognisi & Validasi Formal",
    awardsHeaderTitle: "Sertifikasi & Penghargaan",
    awards: [
      {
        title: "Lulusan Cumlaude (IPK 3.86)",
        category: "Akademik",
        description: "Lulus sebagai Sarjana Kesehatan Masyarakat hanya dalam kurun waktu 3,5 tahun dari Universitas Jambi.",
        iconName: "Award",
      },
      {
        title: "Penulis Artikel Ilmiah Terakreditasi Sinta 3",
        category: "Publikasi",
        description: "Mempublikasikan hasil riset ke dalam jurnal ilmiah nasional bereputasi Sinta 3.",
        iconName: "BookOpen",
      },
      {
        title: "Certified Public Speaking",
        category: "Sertifikasi",
        description: "Memiliki sertifikasi resmi untuk keahlian berbicara di depan umum serta menjadi MC untuk acara formal.",
        iconName: "Mic",
      },
      {
        title: "Perwakilan KN MIPA Bidang Biologi",
        category: "Kompetisi",
        description: "Dipercaya mewakili Fakultas Kedokteran dan Ilmu Kesehatan (FKIK) dalam ajang Nasional MIPA Biologi.",
        iconName: "Sparkles",
      },
    ],
  },

  contact: {
    badge: "Terbuka Untuk Berbagai Peluang",
    title: "Hubungi Yulti Syaridayanti",
    subtitle:
      "Kalau Anda butuh rekan untuk diskusi, kolaborasi program kesehatan, atau melihat peluang kerja di bidang terkait, jangan ragu untuk menghubungi saya, ya!",
    emailTitle: "Alamat Email",
    emailValue: "yultisyaridayanti@gmail.com",
    copySuccessMessage: "Alamat email sudah disalin!",
    phoneTitle: "Telepon / WhatsApp",
    phoneValue: "+6282258540657",
    chatWhatsAppBtn: "Chat WA",
    whatsAppUrl:
      "https://wa.me/6282258540657?text=Halo%20Yulti%2C%20saya%20tertarik%20untuk%20ngobrol%20lebih%20lanjut%20soal%20peluang%20kerja%20atau%20kolaborasi%20kesehatan%20masyarakat",
    locationTitle: "Domisili",
    locationValue: "Jambi & Kerinci, Indonesia",
    cvCardTitle: "Butuh File CV Yulti?",
    cvCardDesc:
      "Anda bisa mengunduh file resume (CV) lengkap saya.",
    cvCardBtn: "Unduh CV (.PDF)",
    cvPath: "/cv/CV_Yulti_Syaridayanti.pdf",
    formTitle: "Kirim Pesan Cepat",
    formSubtitle:
      "Isi saja formulir singkat di bawah ini. Pesan Anda akan langsung masuk ke email saya.",
    nameLabel: "Nama Anda / Instansi",
    namePlaceholder: "Contoh: dr. Amanda / HR Puskesmas",
    emailLabel: "Alamat Email",
    emailPlaceholder: "nama@instansi.com",
    subjectLabel: "Keperluan / Subjek",
    subjectPlaceholder: "Tawaran Kerja / Diskusi Program / Undangan",
    messageLabel: "Pesan",
    messagePlaceholder: "Tuliskan apa yang ingin Anda diskusikan di sini...",
    submitBtn: "Kirim Pesan Sekarang",
    successTitle: "Pesan Terkirim!",
    successMessageTemplate: (name: string, email: string) =>
      `Terima kasih, ${name}! Pesan Anda sudah masuk dan akan segera saya balas ke email (${email}) dalam waktu maksimal 1x24 jam.`,
    sendAnotherBtn: "Kirim Pesan Lagi",
  },

  footer: {
    brandName: "Yulti Syaridayanti",
    brandDegreeRole: "S.K.M. | Promosi Kesehatan & Ilmu Perilaku",
    missionStatement:
      "Bercita-cita mewujudkan masyarakat yang lebih sehat lewat komunikasi yang asyik, pemberdayaan komunitas yang tulus, dan pengelolaan pendataan puskesmas yang rapi.",
    navTitle: "Navigasi",
    contactTitle: "Kontak",
    backToTopBtn: "Kembali ke Atas",
    copyrightText: "Yulti Syaridayanti, S.K.M. Dibuat dengan penuh dedikasi untuk dunia Kesehatan Masyarakat.",
    subNote: "Universitas Jambi • Puskesmas Tarutung",
  },

  ui: {
    heartbeatBadge: "Promkes & Care",
    avatarFallbackRole: "Sarjana Kesehatan Masyarakat",
    avatarFallbackSpecialty: "Promosi Kesehatan & IPE",
    avatarBadgeCumlaude: "Cumlaude 3.86",
    avatarBadgeStudyTime: "3.5 Tahun Studi",
    avatarBadgeField: "Promkes & Perilaku",
    avatarBadgeSubField: "Advokasi Komunitas",
  },
};