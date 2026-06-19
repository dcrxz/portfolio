import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // BRAND COLORS MATRIX: Your exact custom palette values
      colors: {
        brand: {
          text: '#F5F5F5',        // Near-white crisp readability text
          background: '#050505',  // Solid deep midnight canvas background
          primary: '#6bebff',     // Vibrant electric cyan accent
          secondary: '#578cd6',   // Deep sky blue layout components
          accent: '#f9cefb',      // Soft pastel neon violet highlight nodes
        },
      },
      // TYPOGRAPHY CONFIGURATION: Your exact font scaling
      fontSize: {
        sm: '0.750rem',
        base: '1rem',
        xl: '1.333rem',
        '2xl': '1.777rem',
        '3xl': '2.369rem',
        '4xl': '3.158rem',
        '5xl': '4.210rem',
      },
      // FONT STACK ROUTING: Your custom family assignments
      fontFamily: {
        heading: ['var(--font-montserrat)', 'Montserrat', 'sans-serif'],
        body: ['var(--font-montserrat-alternates)', 'Montserrat Alternates', 'sans-serif'],
      },
      // WEIGHT MATRIX: Text thickness configurations
      fontWeight: {
        normal: '400',
        bold: '700',
      },
    },
  },
  plugins: [],
};
export default config;