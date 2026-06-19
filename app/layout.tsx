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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ 
        backgroundColor: '#050505', 
        color: '#F5F5F5', 
        margin: 0,
        // Add these explicit system fallbacks to guarantee a modern sans-serif look everywhere
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
      }}>
        
        {/* THE MASTER GLOBAL CONTENT WRAPPER */}
        <div style={{
          width: '100%',
          maxWidth: '1440px',      // The max lane width from the Realtime Colors framework
          margin: '0 auto',        // Automatically centers the entire site on desktop screens
          paddingLeft: '1.5rem',     // Defensive left cushion for smaller screens/tablets
          paddingRight: '1.5rem',    // Defensive right cushion for smaller screens/tablets
          boxSizing: 'border-box'
        }}>
          
          {children}
          
        </div>

      </body>
    </html>
  );
}