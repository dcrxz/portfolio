import type { Metadata } from "next";
import { Outfit, Space_Mono, Bebas_Neue } from "next/font/google";
import "./globals.css";

/* ──────────────────────────────────────────────────────── */
/* FONT INGESTION ENGINE (GOOGLE FONTS API)                 */
/* ──────────────────────────────────────────────────────── */

// Configures Outfit as the primary modern sans font family
const outfit = Outfit({ 
  subsets: ["latin"], 
  variable: "--font-sans" 
});

// Configures Space Mono for technical code/HUD tracking overlays
const spaceMono = Space_Mono({ 
  subsets: ["latin"], 
  weight: ["400", "700"], 
  variable: "--font-mono" 
});

// Configures Bebas Neue as a high-impact heading alternative
const bebasNeue = Bebas_Neue({ 
  subsets: ["latin"], 
  weight: "400", 
  variable: "--font-bebas" 
});

/* ──────────────────────────────────────────────────────── */
/* SEARCH ENGINE OPTIMIZATION (SEO) METADATA MANIFEST       */
/* ──────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Darwin Cruz | Learning Innovation & Technology",
  description: "Architecting AI-driven learning ecosystems where Learning Science leads.",
};

/* ──────────────────────────────────────────────────────── */
/* ROOT APPLICATION WRAPPER & SITE LAYOUT GRID              */
/* ──────────────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Injects all font CSS variables globally and enables hardware antialiasing
    <html lang="en" className={`${outfit.variable} ${spaceMono.variable} ${bebasNeue.variable} antialiased`}>
      
      {/* 
        The body is stripped of restrictive scrolling classes to allow the page 
        navigation component inside page.tsx to lock as a fixed floating header asset.
      */}
      <body className="bg-[#050505]">
        {children}
      </body>

    </html>
  );
}