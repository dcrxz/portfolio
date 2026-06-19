import type { Metadata } from "next";
import { Outfit, Space_Mono, Bebas_Neue } from "next/font/google";
import "./globals.css";

/* ──────────────────────────────────────────────────────── */
/* FONT INGESTION ENGINE (GOOGLE FONTS API)                 */
/* ──────────────────────────────────────────────────────── */
const outfit = Outfit({ 
  subsets: ["latin"], 
  variable: "--font-sans" 
});

const spaceMono = Space_Mono({ 
  subsets: ["latin"], 
  weight: ["400", "700"], 
  variable: "--font-mono" 
});

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
/* NOTE: The body is stripped of restrictive scrolling      */
/* classes (like flex flex-col) here to allow the fixed     */
/* navigation component inside page.tsx to lock as a static */
/* floating header asset over scrolling content.             */
/* ──────────────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // overflow-x-hidden prevents sideways shifting, relative locks coordinate context
    <html lang="en" className="h-full overflow-x-hidden m-0 p-0">
      <body className={`${outfit.variable} ${spaceMono.variable} ${bebasNeue.variable} bg-[#050505] m-0 p-0 antialiased min-h-full relative overflow-y-auto overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}