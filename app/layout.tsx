// File: app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CodeaseSolutions - Simplifying Technology",
  description: "Simplifying Technology, Amplifying Success.",
  // --- NAYA: Viewport meta tag Metadata object mein add karna Next.js 13+ ka tareeka hai ---
  viewport: 'width=device-width, initial-scale=1.0',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       {/* --- NAYA: <head> tag ko manually add karna zaroori nahi agar viewport metadata mein hai --- */}
       {/* Lekin agar aapko kuch aur <head> elements (jaise custom scripts) add karne hon toh yahan kar sakte hain */}
       {/* <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       </head> */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans bg-background text-foreground flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}