import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Quicksand } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-yulti-syaridayanti.vercel.app"),
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
  authors: [{ name: "Yulti Syaridayanti, S.K.M." }],
  creator: "Yulti Syaridayanti",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://portfolio-yulti-syaridayanti.vercel.app",
    title: "Yulti Syaridayanti, S.K.M. | Portofolio Promosi Kesehatan & Advokasi Komunitas",
    description:
      "Portofolio profesional Yulti Syaridayanti, Sarjana Kesehatan Masyarakat Universitas Jambi (Cumlaude 3.86) berfokus pada promosi kesehatan, edukasi visual, dan advokasi komunitas adat.",
    siteName: "Portofolio Yulti Syaridayanti",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Yulti Syaridayanti - Sarjana Kesehatan Masyarakat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yulti Syaridayanti | Portofolio Sarjana Kesehatan Masyarakat",
    description:
      "Portofolio profesional Yulti Syaridayanti, Sarjana Kesehatan Masyarakat yang berfokus pada promosi kesehatan, pemberdayaan masyarakat, dan advokasi komunitas.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${jakarta.variable} ${quicksand.variable}`}>
      <body className="font-sans antialiased text-pastel-slate-800 bg-pastel-cream-50 selection:bg-pastel-pink-200 selection:text-pastel-pink-700 min-h-screen flex flex-col">
        <ScrollProgress />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
