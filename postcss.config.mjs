// File: postcss.config.mjs
// const plugin = require('tailwindcss/plugin'); // Ab iski zaroorat nahi

/** @type {import('@tailwindcss/postcss').Config} */
const config = {
  plugins: {
    "@tailwindcss/postcss": {
      /** @type {import('tailwindcss').Config} */
      config: {
        content: [
          "./pages/**/*.{js,ts,jsx,tsx,mdx}",
          "./components/**/*.{js,ts,jsx,tsx,mdx}",
          "./app/**/*.{js,ts,jsx,tsx,mdx}",
        ],
        theme: {
          extend: {
            // --- UPDATE: Animation/Keyframes yahan se hata diye ---
            // animation: { ... },
            // keyframes: { ... },
            // --- UPDATE KHATAM ---

            // (Hinglish) Aapke colors/fontFamily waise hi hain
            colors: {
              background: "var(--background)",
              foreground: "var(--foreground)",
            },
            fontFamily: {
              sans: ["var(--font-geist-sans)"],
              mono: ["var(--font-geist-mono)"],
            },
          },
        },
        plugins: [
            // (Hinglish) Yeh plugin rakha hai pause ke liye
            require('tailwindcss-animated'),

            // --- UPDATE: Custom animation wala plugin hata diya ---
            // plugin(function({ addUtilities, theme, e }) { ... })
            // --- UPDATE KHATAM ---
        ],
      },
    },
  },
};

export default config;