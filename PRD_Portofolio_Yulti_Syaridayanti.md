# Product Requirements Document (PRD): Portofolio Yulti Syaridayanti

## 1. Ringkasan Proyek
*   **Nama Proyek:** Website Portofolio Personal Yulti Syaridayanti.
*   **Tujuan:** Membangun kehadiran digital yang profesional untuk menampilkan rekam jejak Yulti sebagai Sarjana Kesehatan Masyarakat, menonjolkan pengalamannya dalam promosi kesehatan, serta advokasi komunitas.
*   **Target Audiens:** Perekrut (recruiter), instansi kesehatan (Puskesmas, Kementerian Kesehatan, LSM/NGO Kesehatan), dan profesional medis lainnya.

## 2. Keputusan Tech Stack, UI Library, & Manajemen Kode
Berdasarkan pertimbangan efisiensi, performa, dan skalabilitas terbaik, berikut adalah tumpukan teknologi final yang akan digunakan:
*   **Framework Utama:** Next.js (App Router). Dipilih karena keunggulan dalam SEO dan proses rendering sisi server yang membuat waktu muat halaman menjadi sangat cepat. Sangat penting agar portofolio Yulti mudah ditemukan di mesin pencari.
*   **Styling & UI Components:** Tailwind CSS dikombinasikan dengan **shadcn/ui**. Pendekatan ini memberikan fleksibilitas penuh untuk kustomisasi variabel warna pink pastel secara presisi tanpa harus menulis kode CSS dari awal.
*   **Animasi & Interaksi:** **Framer Motion**. Digunakan untuk memberikan interaksi mikro yang empuk dan lucu, seperti efek tombol berdetak, transisi antar bagian yang halus, dan elemen yang muncul perlahan saat pengguna melakukan scroll.
*   **Manajemen Versi & Repositori:** **Git** dan **GitHub**. Seluruh kode sumber proyek wajib disimpan dan dipublikasikan di repositori GitHub. Setiap perubahan, penambahan fitur, atau perbaikan kode harus dilacak dengan komit yang rapi dan di-push ke GitHub. Ini memastikan riwayat pengembangan aman dan terstruktur.
*   **Deployment:** Vercel. Platform yang paling optimal untuk ekosistem Next.js. Vercel akan dihubungkan langsung ke repositori GitHub, sehingga setiap pembaruan kode di GitHub akan otomatis memicu proses deployment yang sangat mulus tanpa perlu konfigurasi server manual.

## 3. Spesifikasi Desain (Tema: Professional, Cute Pink, Health-Themed)
*   **Palet Warna:**
    *   *Primary:* Soft Pink (Misal: `#FFB6C1` atau `#F472B6`).
    *   *Secondary:* Rose/Coral pastel untuk elemen yang butuh penekanan tanpa terlihat terlalu mencolok.
    *   *Background:* Off-white atau cream lembut (`#FFFAF0` atau `#FDF2F8`) agar teks tetap profesional, bersih, dan mudah dibaca.
    *   *Text:* Slate tua atau abu-abu gelap, menghindari hitam pekat agar mata tidak cepat lelah dan nuansa lembut tetap terjaga.
*   **Tipografi:** Kombinasi font Sans-Serif geometris yang membulat (seperti Nunito, Quicksand, atau Fredoka untuk judul) dipadukan dengan Inter atau Plus Jakarta Sans untuk teks paragraf agar tetap rapi dan profesional.
*   **Elemen Visual & Ilustrasi Medis:**
    *   *Ilustrasi Utama:* Menggunakan **Storyset by Freepik** (gaya Cuate atau Pana). Ilustrasi akan diunduh dalam format SVG dengan penyesuaian warna dasar pink secara langsung dari situsnya. Ini memberikan proporsi yang rapi, profesional, namun tetap memiliki sentuhan menggemaskan.
    *   *Ikonografi Detail:* Menggunakan **Lucide React** (bawaan shadcn/ui) untuk ikon navigasi dan detail keahlian. Ikon akan diberikan latar belakang lingkaran berwarna pink pudar dengan sudut membulat untuk menambah kesan lucu yang konsisten.
    *   *Progress Bar / Divider:* Menggunakan animasi garis detak jantung (EKG line) berwarna pink.
    *   *Hover Effect:* Tombol yang ketika kursor diarahkan akan memberikan efek detak jantung (pulse animation).

## 4. Arsitektur Informasi & Sitemap
Website akan dibuat dalam format Single Page Application (SPA) dengan navigasi smooth scroll ke tiap bagian utama:

### A. Hero Section
*   **Konten:** Sapaan profesional, nama "Yulti Syaridayanti", dan headline "Sarjana Kesehatan Masyarakat | Promosi Kesehatan & Ilmu Perilaku".
*   **Highlight:** Lulusan Cumlaude (IPK 3.86).
*   **Call to Action (CTA):** Tombol "Unduh CV" (ikon dokumen/kertas resep medis) dan "Hubungi Saya" (ikon amplop berdetak).
*   **Visual:** Foto profesional Yulti dengan masking berbentuk organik/cair (blob shape) dipadukan dengan ilustrasi Storyset bernuansa kesehatan.

### B. Tentang Saya (About)
*   **Konten:** Ringkasan karir dan visi dari CV. Menyoroti dedikasi dalam pemerataan akses kesehatan, edukasi masyarakat, dan pengalaman di daerah penugasan khusus serta komunitas adat.
*   **Visual:** Ilustrasi Storyset yang dimodifikasi dengan elemen pita kesehatan (health ribbon).

### C. Pengalaman Kerja (Timeline)
*   **Desain:** Menggunakan komponen Timeline dari shadcn/ui. Garis penghubungnya bisa dirancang menyerupai infus atau termometer yang terisi.
*   **Data dari CV:**
    *   **Puskesmas Tarutung:** Staf Promosi Kesehatan (Fokus: edukasi visual, program CKG).
    *   **UPTD Puskesmas Rawasari:** Interprofessional Education (Fokus: aplikasi KECAPI TB, pendekatan kultural untuk miskonsepsi dukun).
    *   **BKKBN Provinsi Jambi:** Mahasiswa Magang (Fokus: pengelolaan data, MC).
    *   **UPTD Puskesmas Simpang Kawat:** Mahasiswa Magang (Fokus: PHBS, Posyandu Terpadu).

### D. Proyek & Pemberdayaan (Projects)
*   **Desain:** Format Cards menggunakan shadcn/ui.
*   **Data dari CV:**
    *   Program Pemberdayaan Masyarakat Suku Anak Dalam (SAD): Advokasi budaya & metode "belajar sambil bermain".
    *   Health Promotion University (HPU) FKIK UNJA: Ketua Divisi Pola Makan Sehat.
    *   Planning of Action (TB): Program "Kawasan Bebas TB".

### E. Keahlian & Pencapaian (Skills & Awards)
*   **Keahlian Teknis:** Ditampilkan menggunakan badges dengan ikon Lucide berlatar belakang membulat. Data: Promosi Kesehatan, Pemberdayaan Masyarakat, Advokasi Komunitas Adat, Desain Media Edukasi, Manajemen Basis Data, Perencanaan Strategis (POA).
*   **Sertifikasi:** Certified Public Speaking.
*   **Penghargaan:** Artikel Ilmiah Terakreditasi Sinta 3, Perwakilan KN MIPA Biologi.

### F. Kontak (Footer)
*   **Konten:** Email (yultisyaridayanti@gmail.com), Nomor Telepon, dan Lokasi (Jambi).
*   **Visual:** Formulir kontak sederhana (shadcn/ui form terintegrasi react-hook-form dan Zod untuk validasi) dengan tombol kirim berikon pesawat kertas.

## 5. Kebutuhan Fungsional (Functional Requirements)
1.  **Responsif Penuh:** Harus terlihat rapi di perangkat mobile, memastikan kemudahan akses bagi perekrut.
2.  **Download CV:** Tombol untuk mengunduh langsung file "[REVISI] CV Yulti Syaridayanti NEW.pdf".
3.  **Animasi Transisi:** Komponen muncul perlahan dan mulus saat halaman digulir menggunakan Framer Motion.
4.  **Dark Mode (Opsional):** Jika ingin menerapkan tema gelap di kemudian hari, gunakan palet warna dark magenta atau plum tua agar nuansa pink tetap terasa harmonis.

## 6. Kebutuhan Non-Fungsional (NFR)
1.  **Aksesibilitas:** Kontras warna antara teks dan background pink harus memenuhi standar WCAG (terutama teks deskripsi yang panjang).
2.  **Performa:** Penggunaan gambar (foto profil dan file SVG Storyset) harus dioptimasi agar website memuat dengan sangat cepat.
3.  **Keterlacakan Kode (Traceability):** Seluruh proses pembaruan website harus terekam dengan baik di GitHub. Pesan komit (commit message) harus ditulis dengan deskriptif dan wajib menggunakan bahasa Inggris agar setiap tahapan pengerjaan dapat dilacak kembali dengan mudah serta dimengerti oleh semua orang.

## 7. SEO & Open Graph (Preview Link)
Website harus dilengkapi dengan konfigurasi Meta Tags dan Open Graph (OG) agar saat tautan dibagikan via WhatsApp, LinkedIn, atau email, tampilannya profesional dan informatif.
*   **Meta Title:** Yulti Syaridayanti | Portofolio Sarjana Kesehatan Masyarakat
*   **Meta Description:** Portofolio profesional Yulti Syaridayanti, Sarjana Kesehatan Masyarakat yang berfokus pada promosi kesehatan, pemberdayaan masyarakat, dan advokasi komunitas.
*   **OG Image:** Gambar thumbnail dengan ukuran rasio 1200x630 piksel. Desain gambar harus mencakup foto profesional Yulti, nama lengkap, dan gelar/fokus profesi dengan nuansa warna pink pastel yang senada dengan tema website.

## 8. Standar Penulisan Kode (Coding Standards)
Untuk memastikan kualitas, maintainability, dan profesionalitas proyek, pengembangan wajib mematuhi standar berikut:
*   **Clean Code:** Penulisan kode harus terstruktur, modular, dan mengikuti prinsip DRY (Don't Repeat Yourself).
*   **English-First Naming:** Seluruh penamaan variabel, fungsi, komponen, nama file, dan folder wajib menggunakan bahasa Inggris (contoh: `getUserData`, `HealthProjectsCard`) agar berstandar global dan mudah dipahami oleh developer lain.
*   **English Commit Messages:** Seluruh pesan komit di GitHub wajib menggunakan bahasa Inggris yang jelas dan deskriptif (disarankan menggunakan konvensi seperti `feat: add hero section`, `fix: resolve mobile layout issue`) agar riwayat pengembangan mudah dimengerti oleh semua orang di komunitas global.
*   **Komentar Efisien:** Dilarang menggunakan komentar yang berlebihan atau menjelaskan hal yang sudah jelas (self-explanatory). Komentar hanya digunakan untuk menjelaskan "mengapa" sebuah logika kompleks atau keputusan arsitektur tertentu diambil (why, not what).
*   **Content Separation & Localization (i18n Readiness):** Seluruh teks statis, paragraf, dan label UI dilarang ditulis langsung (hardcoded) di dalam komponen React. Semua teks wajib dipisahkan dan disimpan di dalam folder khusus (misalnya folder `locales`, `dictionaries`, atau file `constants.ts` dengan format JSON atau TypeScript). Pendekatan ini bertujuan untuk menyederhanakan proses modifikasi teks secara terpusat di masa depan dan meletakkan pondasi proyek untuk implementasi fitur multi-bahasa (Internationalization).
