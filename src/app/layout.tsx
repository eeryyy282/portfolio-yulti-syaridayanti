import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Quicksand } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { siteContent } from "@/content";

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
  title: siteContent.metadata.title,
  description: siteContent.metadata.description,
  keywords: siteContent.metadata.keywords,
  authors: [{ name: `${siteContent.hero.fullName}, ${siteContent.hero.degree}` }],
  creator: siteContent.hero.fullName,
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://portfolio-yulti-syaridayanti.vercel.app",
    title: siteContent.metadata.ogTitle,
    description: siteContent.metadata.ogDescription,
    siteName: siteContent.metadata.title,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${siteContent.hero.fullName} - ${siteContent.hero.degree}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.metadata.title,
    description: siteContent.metadata.description,
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
