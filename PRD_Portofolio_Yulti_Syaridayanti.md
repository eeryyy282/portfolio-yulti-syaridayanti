# Product Requirements Document (PRD): Portofolio Yulti Syaridayanti (Couple Edition)

## 1. Ringkasan Proyek
*   **Nama Proyek:** Website Portofolio Personal Yulti Syaridayanti.
*   **Tujuan:** Membangun kehadiran digital yang profesional untuk menampilkan rekam jejak Yulti sebagai Sarjana Kesehatan Masyarakat, menonjolkan pengalamannya dalam promosi kesehatan, serta advokasi komunitas.
*   **Target Audiens:** Perekrut (recruiter), instansi kesehatan (Puskesmas, Kementerian Kesehatan, LSM/NGO Kesehatan), dan profesional medis lainnya.
*   **Core Concept (Couple Theme):** Website ini dirancang berpasangan (couple) dengan portofolio Muhammad Juzairi Safitli (Website: https://portfolio-juzairi-safitli.vercel.app/ | Repositori GitHub: https://github.com/eeryyy282/portfolio-juzairi-safitli). Struktur, interaktivitas, dan tema dibuat simetris untuk menciptakan harmoni visual antar kedua website.

## 2. Keputusan Tech Stack, UI Library, & Manajemen Kode
*   **Framework Utama:** Next.js (App Router). Dipilih karena keunggulan dalam SEO dan proses rendering sisi server yang membuat waktu muat halaman menjadi sangat cepat.
*   **Styling & UI Components:** Tailwind CSS dikombinasikan dengan shadcn/ui. Pendekatan ini memberikan fleksibilitas penuh untuk kustomisasi variabel warna pink pastel secara presisi.
*   **Animasi & Interaksi:** Framer Motion. Digunakan untuk memberikan interaksi mikro yang empuk dan lucu, seperti efek tombol berdetak, transisi antar bagian yang halus, dan elemen yang muncul perlahan saat pengguna melakukan scroll.
*   **Manajemen Versi & Repositori:** Git dan GitHub. Seluruh kode sumber proyek wajib disimpan dan dipublikasikan di repositori GitHub dengan komit yang rapi.
*   **Deployment & Analytics:** Vercel. Dihubungkan langsung ke GitHub untuk deployment otomatis. Dilengkapi dengan **Vercel Analytics** dan **Speed Insights** untuk melacak metrik kunjungan dan performa website secara real-time.

## 3. Spesifikasi Desain (Tema: Professional, Cute Pink, Health-Themed)
*   **Palet Warna (Light Mode Default):**
    *   *Primary:* Soft Pink (Misal: `#FFB6C1` atau `#F472B6`).
    *   *Secondary:* Rose/Coral pastel untuk elemen yang butuh penekanan.
    *   *Background:* Off-white atau cream lembut (`#FFFAF0` atau `#FDF2F8`). Tingkat kecerahan (Light Mode) ini disesuaikan secara khusus agar sejajar dan berpasangan dengan Light Mode (Putih-Biru) pada portofolio Juzairi.
    *   *Text:* Slate tua atau abu-abu gelap, menghindari hitam pekat agar mata tidak cepat lelah.
*   **Tipografi:** Kombinasi font Sans-Serif geometris yang membulat (seperti Nunito, Quicksand, atau Fredoka) dipadukan dengan Inter atau Plus Jakarta Sans untuk teks paragraf.
*   **Elemen Visual & Ilustrasi Medis:**
    *   *Ilustrasi Utama:* Menggunakan Storyset by Freepik (gaya Cuate atau Pana) dengan penyesuaian warna dasar pink.
    *   *Ikonografi Detail:* Menggunakan Lucide React (bawaan shadcn/ui) berlatar belakang lingkaran berwarna pink pudar.
*   **Couple Theme Execution:**
    *   **Shared Components:** Menggunakan kembali aset komponen seperti `HeartbeatLine.tsx` dan `BlobPhotoFrame.tsx` secara identik dengan repositori portofolio Juzairi (https://github.com/eeryyy282/portfolio-juzairi-safitli) untuk menjaga konsistensi gaya visual.
    *   **Mirrored Animation:** Arah animasi detak jantung pada `HeartbeatLine.tsx` diatur agar seolah olah mengalir dan terhubung dengan animasi di website pasangan.
    *   **Easter Egg Link:** Penempatan ikon minimalis dengan aksen warna Biru/Navy di sudut navigasi atau footer sebagai tautan langsung menuju portofolio Muhammad Juzairi Safitli.

## 4. Arsitektur Informasi & Sitemap
Website dibuat dalam format Single Page Application (SPA) dengan navigasi smooth scroll:

### A. Hero Section
*   **Konten:** Sapaan profesional, nama "Yulti Syaridayanti", dan headline "Sarjana Kesehatan Masyarakat | Promosi Kesehatan & Ilmu Perilaku".
*   **Highlight:** Lulusan Cumlaude (IPK 3.86).
*   **Call to Action (CTA):** Tombol "Unduh CV" dan "Hubungi Saya".
*   **Visual:** Foto profesional Yulti dalam `BlobPhotoFrame` dipadukan dengan ilustrasi Storyset bernuansa kesehatan.

### B. Tentang Saya (About)
*   **Konten:** Ringkasan karir dan visi mengenai dedikasi dalam pemerataan akses kesehatan dan edukasi masyarakat.
*   **Visual:** Ilustrasi Storyset yang dimodifikasi dengan elemen pita kesehatan (health ribbon).

### C. Pengalaman Kerja (Timeline)
*   **Desain:** Komponen Timeline dari shadcn/ui dengan garis penghubung menyerupai infus atau termometer.
*   **Data Utama:** Puskesmas Tarutung, UPTD Puskesmas Rawasari, BKKBN Provinsi Jambi, UPTD Puskesmas Simpang Kawat.

### D. Proyek & Pemberdayaan (Projects)
*   **Desain:** Format Cards menggunakan shadcn/ui, diselaraskan dengan tab kategorisasi jika kelak diperlukan.
*   **Data Utama:** Program Pemberdayaan SAD, HPU FKIK UNJA, Planning of Action (TB).

### E. Keahlian & Pencapaian (Skills & Awards)
*   **Keahlian Teknis:** Ditampilkan menggunakan badges dengan ikon Lucide (Promosi Kesehatan, Pemberdayaan Masyarakat, dll).
*   **Sertifikasi & Penghargaan:** Certified Public Speaking, Artikel Ilmiah Terakreditasi Sinta 3, Perwakilan KN MIPA Biologi.

### F. Kontak (Footer)
*   **Konten:** Email (yultisyaridayanti@gmail.com), Nomor Telepon, Lokasi (Jambi), dan Easter Egg Link ke portofolio Juzairi.
*   **Visual:** Formulir kontak sederhana menggunakan shadcn/ui form.

## 5. Kebutuhan Fungsional (Functional Requirements)
1.  **Responsif Penuh:** Harus terlihat rapi di perangkat mobile.
2.  **Download CV:** Tombol untuk mengunduh langsung file "[REVISI] CV Yulti Syaridayanti NEW.pdf".
3.  **Animasi Transisi:** Komponen muncul perlahan dan mulus saat halaman digulir menggunakan Framer Motion.

## 6. Kebutuhan Non-Fungsional (NFR)
1.  **Aksesibilitas:** Kontras warna antara teks dan background pink harus memenuhi standar WCAG.
2.  **Performa & Analitik:** Penggunaan gambar harus dioptimasi. Terintegrasi dengan Vercel Analytics dan Speed Insights untuk pemantauan data performa secara real-time.
3.  **Keterlacakan Kode (Traceability):** Seluruh proses pembaruan website terekam di GitHub dengan komit deskriptif berbahasa Inggris.

## 7. Rencana Pengembangan Lanjutan (Future Plans)
*   **Dukungan Halaman Studi Kasus (MDX):** Menambahkan format MDX di masa depan untuk memberikan ruang bagi dokumentasi proyek atau penulisan artikel kesehatan yang lebih mendalam, sejajar dengan dukungan MDX pada portofolio Juzairi.

## 8. SEO & Open Graph (Preview Link)
*   **Meta Title:** Yulti Syaridayanti | Portofolio Sarjana Kesehatan Masyarakat.
*   **Meta Description:** Portofolio profesional Yulti Syaridayanti, Sarjana Kesehatan Masyarakat yang berfokus pada promosi kesehatan, pemberdayaan masyarakat, dan advokasi komunitas.
*   **OG Image:** Gambar thumbnail rasio 1200x630 piksel. Desain gambar mencakup foto profesional Yulti, nama lengkap, dan gelar dengan nuansa warna pink pastel.

## 9. Standar Penulisan Kode (Coding Standards)
*   **Clean Code:** Penulisan kode terstruktur, modular, dan mengikuti prinsip DRY (Don't Repeat Yourself).
*   **English-First Naming:** Seluruh penamaan variabel, fungsi, komponen, nama file, dan folder wajib menggunakan bahasa Inggris.
*   **English Commit Messages:** Pesan komit wajib menggunakan konvensi bahasa Inggris (contoh: `feat: add hero section`).
*   **Komentar Efisien:** Komentar hanya untuk menjelaskan "mengapa" sebuah logika kompleks diambil (why, not what).
*   **Content Separation & Localization (i18n Readiness):** Semua teks dipisahkan dan disimpan dalam folder khusus agar manajemen konten lebih mudah.
*   **No Dead/Unused Code:** Kode yang tidak lagi digunakan wajib dihapus sepenuhnya untuk menjaga codebase tetap bersih.
