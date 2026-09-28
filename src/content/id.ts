import { PortfolioContent } from "./types";

export const idContent: PortfolioContent = {
  metadata: {
    title: "Yulti Syaridayanti | Portofolio Sarjana Kesehatan Masyarakat",
    description:
      "Portofolio profesional Yulti Syaridayanti, S.K.M. Sarjana Kesehatan Masyarakat lulusan Cumlaude (IPK 3.86) Universitas Jambi yang berfokus pada promosi kesehatan, pemberdayaan masyarakat, dan advokasi komunitas adat.",
    keywords: [
      "Yulti Syaridayanti",
      "Kesehatan Masyarakat",
      "Public Health",
      "Promosi Kesehatan",
      "Ilmu Perilaku",
      "Promosi Kesehatan dan Ilmu Perilaku",
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
    brandRole: "Public Health",
    downloadCvBtn: "Unduh CV",
    navItems: [
      { id: "hero", label: "Beranda", href: "#hero" },
      { id: "about", label: "Tentang", href: "#about" },
      { id: "experience", label: "Pengalaman", href: "#experience" },
      { id: "projects", label: "Proyek", href: "#projects" },
      { id: "skills", label: "Keahlian", href: "#skills" },
      { id: "contact", label: "Kontak", href: "#contact" },
    ],
    coupleLink: {
      title: "Kunjungi Portofolio Muhammad Juzairi Safitli 💙",
      url: "https://portfolio-juzairi-safitli.vercel.app/",
      partnerName: "Muhammad Juzairi Safitli",
    },
  },

  hero: {
    greetingBadge: "Sarjana Kesehatan Masyarakat Berpredikat Cumlaude",
    fullName: "Yulti Syaridayanti",
    degree: "S.K.M.",
    headline: "Promosi Kesehatan & Ilmu Perilaku • Advokasi Komunitas",
    bio: "Sebagai Sarjana Kesehatan Masyarakat lulusan Universitas Jambi dengan predikat Cumlaude, saya memiliki ketertarikan mendalam pada Promosi Kesehatan dan Ilmu Perilaku. Saya terbiasa turun langsung ke lapangan untuk melakukan advokasi masyarakat di daerah khusus, memberdayakan komunitas adat, serta merancang program kesehatan preventif yang inovatif dan tepat sasaran bagi warga.",
    badges: {
      cumlaude: "Cumlaude (3.5 Thn)",
      community: "Advokasi Suku Anak Dalam",
      puskesmas: "Puskesmas Tarutung & Rawasari",
    },
    downloadCvBtn: "Unduh CV Resmi (.PDF)",
    contactBtn: "Mari Berdiskusi",
    explorePrompt: "Jelajahi Profil",
  },

  about: {
    badge: "Visi & Dedikasi",
    title: "Tentang Yulti Syaridayanti",
    subtitle:
      "Bagi saya, ilmu kesehatan masyarakat adalah jembatan untuk menutup kesenjangan informasi medis di masyarakat. Tujuannya jelas: membangun pemahaman warga agar lebih mandiri dan memastikan layanan kesehatan preventif dapat berjalan maksimal.",
    illustrationCaption: "Edukasi yang Merangkul & Layanan Penuh Empati",
    visionTitle: "Visi Pengabdian & Karir",
    visionSubtitle: "Pemerataan Layanan Kesehatan Primer",
    bioNarrative:
      "Saya merupakan Sarjana Kesehatan Masyarakat yang lulus dengan predikat Cumlaude (IPK 3.86) dari Universitas Jambi dalam waktu 3,5 tahun. Fokus utama saya berada pada Promosi Kesehatan dan Ilmu Perilaku. Saya memiliki pengalaman yang kuat dalam berinteraksi dan memberdayakan masyarakat secara langsung, mulai dari memberikan edukasi di daerah penugasan khusus hingga mendampingi komunitas adat. Saya terbiasa merancang program kesehatan yang inovatif dan aplikatif, guna mengatasi tantangan literasi kesehatan akibat mitos lokal sekaligus memperkuat sistem kesehatan yang berbasis pada komunitas.",
    approachNarrative:
      "Menurut saya, promosi kesehatan jauh melampaui sekadar menyebarkan poster atau brosur informasi. Lebih dari itu, ini adalah tentang bagaimana kita membangun komunikasi yang tulus dan berempati dengan kondisi masyarakat. Pengalaman saya bermacam-macam, mulai dari memberikan pengertian secara perlahan kepada pasien Tuberkulosis agar tidak mencari pengobatan dukun, hingga memfasilitasi metode 'belajar sambil bermain' bagi anak-anak Suku Anak Dalam. Pengalaman ini menegaskan bagi saya bahwa pemahaman terhadap kondisi sosial dan budaya lokal merupakan kunci utama agar perubahan perilaku hidup sehat dapat bertahan secara berkelanjutan.",
    educationSummary: {
      institution: "Universitas Jambi",
      degree: "Sarjana Kesehatan Masyarakat (S.K.M.)",
      predicate: "Cumlaude (Lulus dalam 3,5 tahun, Januari 2025)",
      publicationPrefix: "Berhasil menyusun & menerbitkan artikel ilmiah terakreditasi",
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
        title: "Edukasi Visual yang Efektif",
        desc: "Merancang media edukasi seperti leaflet, flipchart, video, dan poster yang disesuaikan dengan kebiasaan masyarakat lokal, sehingga pesan kesehatan mudah dipahami dan diterapkan secara langsung.",
        tag: "Komunikasi Perilaku",
      },
      {
        title: "Pendampingan Komunitas Adat",
        desc: "Turun langsung mendampingi Suku Anak Dalam (SAD) melalui pendekatan budaya dan metode belajar sambil bermain. Tujuannya agar mereka lebih terbuka, sehingga mitos pengobatan yang keliru dapat diluruskan secara bertahap.",
        tag: "Pemberdayaan Khusus",
      },
      {
        title: "Optimalisasi Data Puskesmas",
        desc: "Mengelola dan merapikan pendataan krusial seperti CKG dan KECAPI TB agar selalu akurat. Saya juga terbiasa menyusun POA (Planning of Action) agar arah intervensi puskesmas menjadi lebih terarah dan tepat sasaran.",
        tag: "Sistem Kesehatan",
      },
    ],
  },

  experience: {
    badge: "Rekam Jejak Profesional",
    title: "Pengalaman Kerja & Lapangan",
    subtitle:
      "Pengalaman praktis di puskesmas dan instansi kesehatan dalam merancang langkah-langkah kesehatan preventif yang terukur dan tepat sasaran.",
    items: [
      {
        id: "puskesmas-tarutung",
        role: "Staf Promosi Kesehatan dan Ilmu Perilaku",
        organization: "Puskesmas Tarutung",
        location: "Kerinci",
        period: "Agustus 2025 - Sekarang",
        badge: "Posisi Saat Ini",
        highlights: [
          "Menginisiasi program penyuluhan kesehatan proaktif untuk meningkatkan literasi masyarakat di wilayah kerja.",
          "Merancang materi edukasi visual (poster, leaflet, video) guna mengoptimalkan kampanye promosi kesehatan.",
          "Mengelola dan mengoptimalkan pendataan program CKG secara akurat agar pencatatan dan intervensi kesehatan puskesmas menjadi lebih terarah.",
        ],
        tags: ["Penyuluhan Proaktif", "Materi Edukasi Visual", "Program CKG", "Literasi Kesehatan"],
      },
      {
        id: "puskesmas-rawasari",
        role: "Interprofessional Education (IPE)",
        organization: "UPTD Puskesmas Rawasari",
        location: "Jambi",
        period: "Agustus - Desember 2024",
        highlights: [
          "Menganalisis kondisi pasien Tuberkulosis (TB) dan melakukan pendekatan kultural untuk meluruskan miskonsepsi masyarakat yang lebih memilih pengobatan dukun karena menganggap TB sebagai penyakit 'guna-guna'.",
          "Mengimplementasikan intervensi kesehatan berkelanjutan kepada pasien dan keluarga dengan mengintegrasikan sistem aplikasi KECAPI TB.",
          "Memfasilitasi edukasi pencegahan penularan TB secara komunikatif kepada masyarakat menggunakan media flipchart.",
        ],
        tags: ["Pendekatan Kultural TB", "Aplikasi KECAPI TB", "Edukasi Flipchart", "Konseling Pasien"],
      },
      {
        id: "bkkbn-jambi",
        role: "Mahasiswa Magang",
        organization: "BKKBN Provinsi Jambi",
        location: "Jambi",
        period: "Maret - Mei 2024",
        highlights: [
          "Mengelola sistem pengarsipan dokumen dan basis data instansi untuk mendukung efisiensi operasional BKKBN.",
          "Memandu jalannya acara sebagai Master of Ceremony (MC) dalam kegiatan Pengelolaan Rumah Data Kependudukan tingkat Provinsi Jambi.",
          "Mengembangkan materi promosi kesehatan berupa poster informatif yang disesuaikan dengan sasaran kampanye instansi.",
        ],
        tags: ["Sistem Basis Data", "Master of Ceremony (MC)", "Poster Informatif", "Pengarsipan Dokumen"],
      },
      {
        id: "puskesmas-simpang-kawat",
        role: "Mahasiswa Magang",
        organization: "UPTD Puskesmas Simpang Kawat",
        location: "Jambi",
        period: "Januari - Februari 2024",
        highlights: [
          "Mendukung pelaksanaan program kesehatan preventif melalui penyuluhan Perilaku Hidup Bersih dan Sehat (PHBS) di lingkungan sekolah dan masyarakat.",
          "Berkontribusi aktif dalam operasional pelayanan kesehatan pada kegiatan Posyandu Terpadu serta mengelola input data pasien ke dalam Sistem Informasi Puskesmas.",
        ],
        tags: ["Penyuluhan PHBS", "Posyandu Terpadu", "SIM Puskesmas", "Program Preventif"],
      },
    ],
  },

  projects: {
    badge: "Inisiatif Nyata & Dampak Komunitas",
    title: "Proyek & Program Unggulan",
    subtitle:
      "Beberapa program strategis yang pernah saya laksanakan, menggabungkan pendekatan budaya, edukasi masyarakat secara persuasif, dan pemanfaatan data.",
    items: [
      {
        id: "pemberdayaan-sad",
        title: "Program Pemberdayaan Masyarakat Suku Anak Dalam (SAD)",
        role: "Fasilitator Kesehatan Masyarakat",
        period: "November 2022",
        location: "Jambi",
        description:
          "Program kesehatan adaptif dan advokasi kultural untuk meningkatkan kesadaran sanitasi serta akses layanan kesehatan dasar bagi komunitas adat Suku Anak Dalam.",
        highlights: [
          "Mengimplementasikan program kesehatan adaptif menggunakan metode 'belajar sambil bermain' khusus untuk meningkatkan pemahaman kebersihan anak-anak Suku Anak Dalam.",
          "Melakukan advokasi strategis kepada tokoh masyarakat setempat menggunakan pendekatan bahasa dan budaya yang relevan untuk mendorong partisipasi rutin warga ke Posyandu.",
        ],
        tags: ["Komunitas Adat (SAD)", "Metode Belajar Sambil Bermain", "Advokasi Kultural", "Partisipasi Posyandu"],
        impactMetric: {
          value: "Partisipatif",
          label: "Penerimaan Budaya & Kehadiran Posyandu",
        },
      },
      {
        id: "hpu-fkik-unja",
        title: "Health Promotion University (HPU) FKIK UNJA",
        role: "Ketua Divisi Pola Makan Sehat",
        period: "November 2023 - November 2024",
        location: "Jambi",
        description:
          "Menginisiasi dan mengawal pelaksanaan program-program strategis guna mempromosikan gaya hidup dan pola makan sehat di lingkungan kampus Universitas Jambi.",
        highlights: [
          "Memimpin divisi dalam merancang dan menjalankan program-program strategis guna mempromosikan gaya hidup dan pola makan sehat di lingkungan kampus.",
          "Mengembangkan kampanye promosi gizi seimbang yang melibatkan sivitas akademika melalui poster digital, edukasi nutrisi, dan kegiatan hidup sehat.",
        ],
        tags: ["Kepemimpinan Divisi", "Pola Makan Sehat", "Promosi Kampus Sehat", "Gaya Hidup Aktif"],
        impactMetric: {
          value: "1 Tahun",
          label: "Kepemimpinan Divisi Aktif",
        },
      },
      {
        id: "planning-action-tb",
        title: "Program Pencegahan dan Penghapusan Stigma TB (Planning of Action)",
        role: "Initiator Program",
        period: "Januari - Februari 2024",
        location: "Jambi",
        description:
          "Merumuskan program 'Kawasan Bebas TB' berbasis Planning of Action (POA) untuk menangani tingginya kasus klaster TB dan menghapus stigma di masyarakat.",
        highlights: [
          "Merumuskan program 'Kawasan Bebas TB' untuk merespons tingginya kasus klaster TB (4-5 kasus per RT).",
          "Mencapai transformasi pemahaman yang terukur melalui edukasi, ditandai dengan peningkatan signifikan dari 55% sikap negatif menjadi 100% sikap dan pengetahuan positif pasca-edukasi.",
        ],
        tags: ["Planning of Action (POA)", "Kawasan Bebas TB", "Penghapusan Stigma", "Edukasi Terukur"],
        impactMetric: {
          value: "55% -> 100%",
          label: "Peningkatan Sikap Positif",
        },
      },
    ],
  },

  skills: {
    badge: "Kompetensi & Apresiasi",
    title: "Keahlian Teknis & Prestasi",
    subtitle:
      "Kumpulan kompetensi teknis di bidang kesehatan masyarakat, praktik komunikasi publik, serta pencapaian akademis selama menempuh pendidikan.",
    categories: [
      {
        title: "Promosi & Penyuluhan",
        iconName: "Megaphone",
        skills: [
          "Promosi & Penyuluhan Kesehatan",
          "Perilaku Hidup Bersih & Sehat (PHBS)",
          "Desain Media Edukasi (Poster, Leaflet, Video)",
          "Komunikasi Perubahan Perilaku",
        ],
      },
      {
        title: "Pemberdayaan & Advokasi",
        iconName: "Users",
        skills: [
          "Pemberdayaan Masyarakat",
          "Advokasi Komunitas Adat (SAD)",
          "Pendekatan Bahasa & Kultural",
          "Interprofessional Education (IPE)",
        ],
      },
      {
        title: "Perencanaan Strategis",
        iconName: "Target",
        skills: [
          "Perencanaan Strategis (Planning of Action - POA)",
          "Perumusan Program Kawasan Bebas TB",
          "Analisis Masalah & Kebutuhan Kesehatan",
          "Evaluasi Program Kerja Intervensi",
        ],
      },
      {
        title: "Manajemen Data & Administrasi",
        iconName: "Database",
        skills: [
          "Manajemen Basis Data & Administrasi",
          "Pengelolaan Program CKG Puskesmas",
          "Integrasi Sistem KECAPI TB",
          "Sistem Informasi Puskesmas (SIM)",
        ],
      },
    ],
    awardsHeaderBadge: "Rekognisi & Validasi Formal",
    awardsHeaderTitle: "Sertifikasi & Penghargaan",
    awards: [
      {
        title: "Lulusan Cumlaude (IPK 3.86) Masa Studi 3,5 Tahun",
        category: "Akademik",
        description: "Menyelesaikan studi Sarjana Kesehatan Masyarakat dalam waktu 3,5 tahun di Universitas Jambi (Januari 2025).",
        iconName: "Award",
      },
      {
        title: "Penulis Artikel Ilmiah Terakreditasi Sinta 3",
        category: "Publikasi Ilmiah",
        description: "Berhasil menyusun dan menerbitkan artikel ilmiah pada jurnal nasional terakreditasi Sinta 3.",
        iconName: "BookOpen",
      },
      {
        title: "Perwakilan KN MIPA Bidang Biologi Tingkat Fakultas",
        category: "Kompetisi Ilmiah",
        description: "Terpilih mewakili Fakultas Kedokteran dan Ilmu Kesehatan (FKIK) pada ajang Nasional KN MIPA Bidang Biologi.",
        iconName: "Sparkles",
      },
      {
        title: "Certified Public Speaking",
        category: "Sertifikasi Resmi",
        description: "Memiliki sertifikasi resmi keahlian berbicara di depan umum serta berpengalaman memandu acara sebagai Master of Ceremony (MC).",
        iconName: "Mic",
      },
    ],
  },

  contact: {
    badge: "Terbuka Untuk Peluang Profesional",
    title: "Mari Terhubung",
    subtitle:
      "Apabila Anda membutuhkan rekan untuk berdiskusi, berkolaborasi dalam program kesehatan, atau memiliki peluang profesional yang relevan, jangan ragu untuk menghubungi saya.",
    emailTitle: "Alamat Email",
    emailValue: "yultisyaridayanti@gmail.com",
    copySuccessMessage: "Alamat email berhasil disalin!",
    phoneTitle: "Telepon / WhatsApp",
    phoneValue: "+6282258540657",
    chatWhatsAppBtn: "Hubungi via WA",
    whatsAppUrl:
      "https://wa.me/6282258540657?text=Halo%20Yulti%2C%20saya%20tertarik%20untuk%20berdiskusi%20lebih%20lanjut%20mengenai%20peluang%20profesional%20atau%20kolaborasi%20kesehatan%20masyarakat",
    locationTitle: "Domisili",
    locationValue: "Jambi, Indonesia",
    cvCardTitle: "Unduh Dokumen CV",
    cvCardDesc:
      "Anda dapat mengunduh dokumen resume (CV) lengkap saya melalui tautan berikut.",
    cvCardBtn: "Unduh CV (.PDF)",
    cvPath: "/cv/CV_Yulti_Syaridayanti.pdf",
    formTitle: "Formulir Kontak",
    formSubtitle:
      "Silakan isi formulir di bawah ini. Pesan Anda akan langsung diteruskan ke alamat email saya.",
    nameLabel: "Nama Lengkap / Instansi",
    namePlaceholder: "Contoh: dr. Amanda / HR Puskesmas",
    emailLabel: "Alamat Email Anda",
    emailPlaceholder: "nama@instansi.com",
    subjectLabel: "Subjek Pesan",
    subjectPlaceholder: "Tawaran Pekerjaan / Kolaborasi Program",
    messageLabel: "Isi Pesan",
    messagePlaceholder: "Tuliskan rincian pesan yang ingin Anda sampaikan di sini...",
    submitBtn: "Kirim Pesan Sekarang",
    successTitle: "Pesan Berhasil Terkirim!",
    successMessageTemplate: (name: string, email: string) =>
      `Terima kasih, ${name}. Pesan Anda telah saya terima dan akan segera saya tanggapi melalui email (${email}) dalam waktu maksimal 1x24 jam.`,
    sendAnotherBtn: "Kirim Pesan Lainnya",
  },

  footer: {
    brandName: "Yulti Syaridayanti",
    brandDegreeRole: "S.K.M. | Promosi Kesehatan & Ilmu Perilaku",
    missionStatement:
      "Berkomitmen untuk mewujudkan masyarakat yang lebih sehat melalui komunikasi yang empatik, pemberdayaan komunitas yang tulus, dan pengelolaan sistem kesehatan yang terstruktur.",
    navTitle: "Navigasi",
    contactTitle: "Kontak Informasi",
    backToTopBtn: "Kembali ke Atas",
    copyrightText: "Yulti Syaridayanti, S.K.M. Dibangun dengan dedikasi untuk kemajuan Kesehatan Masyarakat Indonesia.",
    subNote: "Universitas Jambi • Puskesmas Tarutung",
    coupleNote: {
      prefix: "Disusun penuh rasa, bersandingan dengan portofolio",
      partnerName: "Muhammad Juzairi Safitli",
      partnerDegree: "S.Kom.",
      url: "https://portfolio-juzairi-safitli.vercel.app/",
    },
  },

  ui: {
    heartbeatBadge: "Connected Pulse",
    avatarFallbackRole: "Sarjana KesMas",
    avatarFallbackSpecialty: "PromKes & Edukasi",
    avatarBadgeCumlaude: "Cumlaude 3.86",
    avatarBadgeStudyTime: "3.5 Tahun Lulus",
    avatarBadgeField: "Promosi Kesehatan",
    avatarBadgeSubField: "Advokasi Komunitas",
  },
};
