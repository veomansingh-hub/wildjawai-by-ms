import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Configure next/font/google for zero layout shift
const inter = Inter({ 
  subsets: ["latin"], 
  display: "swap", 
  variable: "--font-inter" 
});

const newsreader = Newsreader({ 
  subsets: ["latin"], 
  style: ["normal", "italic"], 
  display: "swap", 
  variable: "--font-newsreader" 
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wildjawai.in"),
  title: {
    default: "Wild Jawai — Private Leopard Safaris & Handpicked Stays",
    template: "%s | Wild Jawai"
  },
  description: "Private Jawai leopard safaris, handpicked camps, and tailored Rajasthan journeys shaped with patience and deep local knowledge.",
  alternates: {
    canonical: "/"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Wild Jawai — The Wild Side of Rajasthan",
    description: "Private safaris, considered stays and journeys shaped by people who know Jawai.",
    url: "https://wildjawai.in",
    siteName: "Wild Jawai",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Wild Jawai — private safaris, thoughtfully handled"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Wild Jawai — Private Leopard Safaris & Handpicked Stays",
    description: "Private safaris, considered stays and journeys shaped by people who know Jawai.",
    images: ["/og-image.jpg"]
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Rich Structured Data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Wild Jawai",
    "image": "https://wildjawai.in/og-image.jpg",
    "description": "Private Jawai leopard safaris, handpicked camps, and tailored Rajasthan journeys.",
    "url": "https://wildjawai.in",
    "telephone": "+919983721179",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Jawai",
      "addressRegion": "Rajasthan",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.instagram.com/wildjawai/"
    ]
  };

  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${newsreader.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-ivory text-basalt antialiased min-h-screen flex flex-col selection:bg-terracotta selection:text-white">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
