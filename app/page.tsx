// File: app/page.tsx

// Naye components ko import kiya
import HeroSection from "@/components/home/HeroSection";
import OverviewSection from "@/components/home/OverviewSection";
import SolutionsPreview from "@/components/home/SolutionsPreview";
import TechStacks from "@/components/home/TechStacks"; // --- NAYA: TechStacks import kiya ---

export default function Home() {
  return (
    // --- UPDATE: Main div se container/padding hata diya kyunki sections ab khud handle kar rahe hain ---
    <div className="py-8 md:py-16">

      {/* --- Hero Section --- */}
      {/* (Hinglish) Yeh component container/padding khud handle kar raha hai */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection />
      </div>

      {/* --- Company Overview Section --- */}
      {/* (Hinglish) Yeh component container/padding khud handle kar raha hai */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <OverviewSection />
      </div>

      {/* --- Solutions Preview Section --- */}
      {/* (Hinglish) Yeh component container/padding khud handle kar raha hai */}
      <SolutionsPreview />

      {/* --- NAYA: Tech Stacks Section --- */}
      {/* (Hinglish) Yeh component container/padding khud handle kar raha hai */}
      <TechStacks />

      {/* Aap yahan naye sections (jaise <Testimonials />) aasani se add kar sakte hain */}

    </div>
  );
}