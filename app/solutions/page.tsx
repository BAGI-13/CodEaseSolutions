// File: app/solutions/page.tsx
// --- UPDATE: Local component definitions hata diye ---
// import { CheckCircle } from 'lucide-react'; // Ab iski zaroorat nahi
// import Image from 'next/image'; // Ab iski zaroorat nahi

// --- UPDATE: Naye common component ko import kiya ---
import { ServiceSection } from '@/components/ServiceSection';

// (Hinglish) ExpertiseItem aur ServiceSection ke definitions yahan se hata diye gaye hain,
// kyunki woh ab components/ServiceSection.tsx mein hain.

// --- Main Page Component (Yeh waisa hi hai, bas ab import kiya hua ServiceSection use karega) ---
export default function SolutionsPage() {
 return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Page Title (Waisa hi hai) */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Solutions & Services
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          From business automation to digital growth — we help you build,
          scale, and shine.
        </p>
      </div>

      {/* Services List (Waisa hi hai) */}
      <div className="space-y-16">
        {/* Service 1: Zoho */}
        <ServiceSection
          title="Zoho One Complete Customizations"
          description="Unlock the full potential of Zoho! We specialize in customizing Zoho CRM, Analytics, Creator, Forms, People, and Sign — building automation and workflows tailored to your business. From lead tracking to smart dashboards, we transform Zoho into your perfect business operating system."
          expertise={[
            'Zoho CRM Customization',
            'Deluge scripting',
            'Analytics dashboards',
            'Automations and Triggers',
            'Integration with Zoho and External Apps.',
          ]}
          imageSrc="/zoho-customization.jpg" // Path check kar lein
          imageAlt="Zoho One Customizations"
          imageOrder="left"
        />

        {/* Service 2: Web Apps */}
        <ServiceSection
          title="Custom Web Applications"
          description="Build powerful, modern web applications with the latest tech stack. We create scalable, high-performance solutions using Next.js, TypeScript, Supabase, and Digital Ocean, seamlessly integrated with Zoho for end-to-end business connectivity."
          expertise={[
            'Custom web apps',
            'Redesigning of web Apps with better UI and Optimization',
            'Supabase for data transparency and easy mgmt.',
            'Zoho API integration',
          ]}
          imageSrc="/web-applications.jpg" // Path check kar lein
          imageAlt="Custom Web Applications"
          imageOrder="right"
        />

        {/* Service 3: Creatives */}
        <ServiceSection
          title="Digital & Video Creatives"
          description="Engage your audience with stunning visuals! We design eye-catching videos, social media posts, and templates using tools like Canva, Adobe Premiere Pro, and CapCut Pro — tailored for branding, marketing campaigns, and promotions."
          expertise={[
            'Social media creatives',
            'Corporate & marketing videos',
            'AI Voice generated with video alignment',
            'Canva templates & Poster Designing',
            'Brand marketing & storytelling.',
          ]}
          imageSrc="/digital-creatives.jpg" // Path check kar lein
          imageAlt="Digital & Video Creatives"
          imageOrder="left"
        />

        {/* Service 4: Digital Marketing */}
        <ServiceSection
          title="Digital Marketing Suite"
          description="Grow your business online with our complete digital marketing solutions. From SEO optimization and Google Ads campaigns to content marketing and social media management — we help you attract, convert, and retain customers effectively."
          expertise={[
            'SEO services',
            'Google Ads',
            'Lead generation via Zoho Integration',
            'Social media marketing',
            'Content optimization.',
          ]}
          imageSrc="/digital-marketing.jpg" // Path check kar lein
          imageAlt="Digital Marketing Suite"
          imageOrder="right"
        />
      </div>
    </div>
 );
}