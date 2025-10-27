// File: components/home/HeroSection.tsx
'use client';
import AlphabetMeter from "@/components/AlphabetMeter";

export default function HeroSection() {
  return (
    // --- UPDATE: Mobile min-height badhaya ---
    <section className="relative flex items-center justify-center min-h-[50vh] md:min-h-[50vh] text-center rounded-lg overflow-hidden my-8">
      {/* Watermark Background (Waisa hi hai) */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] font-extrabold text-gray-200 opacity-50 whitespace-nowrap select-none">
          Codease
        </h1>
      </div>

      {/* Content (Waisa hi hai) */}
      <div className="relative z-10 p-4 w-full">
        {/* (Hinglish) Font size ko hum AlphabetMeter component ke andar change karenge */}
        <AlphabetMeter
          line1="Simplifying Technology,"
          line2="Amplifying Success."
        />
      </div>
    </section>
  );
}