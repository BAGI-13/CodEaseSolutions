// File: components/home/OverviewSection.tsx
import { Building, Target, Zap } from "lucide-react";
import Image from 'next/image'; // --- Image component import kiya ---

export default function OverviewSection() {
  return (
    <section className="mt-16 md:mt-24">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Left Side (Company Overview - Waisa hi hai) */}
        <div className="w-full md:w-1/2 space-y-6">
          {/* ... (left side content waisa hi hai) ... */}
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            Welcome to <span className="text-blue-600">CodeaseSolutions</span>
          </h2>
          <div className="space-y-4 text-base md:text-lg text-gray-700">
            <p className="flex items-start gap-3">
              <Building className="flex-shrink-0 w-6 h-6 text-blue-500 mt-1" />
              <span>
                We are a{" "}
                <strong>
                  full-service technology and digital transformation
                </strong>
                company specializing in Zoho custom development, web
                applications, and digital marketing solutions.
              </span>
            </p>
            <p className="flex items-start gap-3">
              <Target className="flex-shrink-0 w-6 h-6 text-blue-500 mt-1" />
              <span>
                Our <strong>mission</strong> is to help businesses streamline
                operations, automate workflows, and build a powerful online
                presence through innovation and technology.
              </span>
            </p>
          </div>
          <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow-lg hover:bg-blue-700 transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer text-base md:text-lg flex items-center gap-2">
            <Zap size={20} />
            Explore Our Solutions
          </button>
        </div>

        {/* Right Side --- UPDATE YAHAN HAI --- */}
        <div className="w-full md:w-1/2">
          {/* --- UPDATE: Container se fixed height (h-64 md:h-96) aur p-8 hata diya --- */}
          <div className="rounded-xl  w-full flex items-center justify-center overflow-hidden ">
             
             {/* --- UPDATE: 'fill' hata kar 'width'/'height' aur 'className' add kiya --- */}
             <Image
                src="/codEase.png" // Aapka logo path
                alt="CodeaseSolutions Logo"
                // (Hinglish) Apne logo ka original aspect ratio (width/height) yahan daalein
                // Example ke liye main 800x400 (2:1 ratio) use kar raha hoon
                width={800} 
                height={400}
                // (Hinglish) Yeh classes image ko responsive banayengi
                className="w-full h-auto p-8" // p-8 (padding) ab image par lagaya hai
                style={{ objectFit: 'contain' }} // 'contain' rakha hai
                priority 
             />
          </div>
        </div>
      </div>
    </section>
  );
}