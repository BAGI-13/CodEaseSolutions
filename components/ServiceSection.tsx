// File: components/ServiceSection.tsx
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';

// (Hinglish) Har service ke "Expertise" list ke liye ek helper component
export const ExpertiseItem = ({ text }: { text: string }) => (
 <li className="flex items-start gap-2 text-gray-700">
    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
    <span>{text}</span>
 </li>
);

// (Hinglish) Har service section ke liye ek component
export const ServiceSection = ({
 title,
 description,
 expertise,
 imageSrc,
 imageAlt,
 imageOrder,
}: {
 title: string;
 description: string;
 expertise: string[];
 imageSrc: string;
 imageAlt: string;
 imageOrder: 'left' | 'right';
}) => (
 // --- UPDATE YAHAN HAI: Responsive Bullet Shape ---
 // (Hinglish) Default shape rounded-xl rakha hai
 // (Hinglish) Bullet shape sirf medium screen (md:) se upar apply hoga
 <section className={`
    bg-white p-6 md:p-8 shadow-lg overflow-hidden
    rounded-xl {/* Default rounding for mobile */}
    ${imageOrder === 'left' ? 'md:rounded-l-full md:rounded-r-xl' : 'md:rounded-r-full md:rounded-l-xl'} {/* Bullet shape only for md+ */}
 `}>
    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
      {/* Column 1: Image Container (Waisa hi hai) */}
      <div
        className={`w-full md:w-5/12 ${
          imageOrder === 'left' ? 'md:order-1' : 'md:order-2'
        } flex justify-center`}
      >
        <div className="w-64 h-64 md:w-80 md:h-80 overflow-hidden flex-shrink-0 relative">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-full transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      {/* Column 2: Text Content (Waisa hi hai) */}
      <div
        className={`w-full md:w-7/12 ${
          imageOrder === 'left' ? 'md:order-2' : 'md:order-1'
        }`}
      >
        <h2 className="text-3xl font-bold text-blue-600 mb-4">{title}</h2>
        <p className="text-lg text-gray-800 mb-6">{description}</p>
        <h4 className="text-xl font-semibold text-gray-900 mb-3">
          Expertise In:
        </h4>
        <ul className="space-y-2">
          {expertise.map((item) => (
            <ExpertiseItem key={item} text={item} />
          ))}
        </ul>
      </div>
    </div>
 </section>
);