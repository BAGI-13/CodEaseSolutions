// File: components/home/SolutionsPreview.tsx
import { ServiceSection } from '@/components/ServiceSection';
import { ArrowRight } from 'lucide-react';


export default function SolutionsPreview() {
  return (
    <section className="mt-16 md:mt-24 py-16 bg-white rounded-xl shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Solutions & Services
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            From business automation to digital growth — we help you build,
            scale, and shine.
          </p>
        </div>

        {/* --- UPDATE: Chaaron services add kiye --- */}
        <div className="space-y-16">
          {/* Service 1: Zoho */}
          <ServiceSection
            title="Zoho One Complete Customizations"
            // (Hinglish) Pura description rakha hai, aap chahein toh chhota kar sakte hain
            description="Unlock the full potential of Zoho! We specialize in customizing Zoho CRM, Analytics, Creator, Forms, People, and Sign — building automation and workflows tailored to your business. From lead tracking to smart dashboards, we transform Zoho into your perfect business operating system."
            expertise={[
              'Zoho CRM Customization',
              'Deluge scripting',
              'Analytics dashboards',
              'Automations and Triggers', // Pura expertise rakha hai
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
              'Redesigning of web Apps with better UI and Optimization', // Pura expertise rakha hai
              'Supabase for data transparency and easy mgmt.',
              'Zoho API integration',
            ]}
            imageSrc="/web-applications.jpg" // Path check kar lein
            imageAlt="Custom Web Applications"
            imageOrder="right"
          />

          {/* --- NAYA ADD KIYA: Service 3: Creatives --- */}
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
            imageOrder="left" // Order alternate kiya
          />

          {/* --- NAYA ADD KIYA: Service 4: Digital Marketing --- */}
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
            imageOrder="right" // Order alternate kiya
          />
        </div>

        

      </div>
    </section>
  );
}