import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

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
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans bg-ivory text-basalt antialiased min-h-screen flex flex-col selection:bg-terracotta selection:text-white">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
