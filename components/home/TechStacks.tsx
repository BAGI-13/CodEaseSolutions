// File: components/home/TechStacks.tsx
'use client'; // Animation ke liye

import React from 'react';
import {
  Database,
  Code,
  Palette,
  Settings,
  Cloud,
  Wind,
  Figma as FigmaIcon,
  Slack as SlackIcon,
  Box,
  Monitor,
  Bot,
  DatabaseZap,
  Type,
  Component,
  Layers,
} from 'lucide-react';

// --- Types ---
interface TechItem {
  name: string;
  icon?: React.ComponentType<{ className?: string }>;
  iconHoverColorClass?: string;
  textHoverColorClass?: string;
  url?: string; // click par open karne ke liye
}

// --- Data ---
const techStacksData: { category: string; items: TechItem[] }[] = [
  {
    category: 'For Zoho',
    items: [
      { name: 'Zoho CRM', url: 'https://www.zoho.com/crm/', icon: Settings, iconHoverColorClass: 'group-hover:text-red-500', textHoverColorClass: 'group-hover:text-red-700' },
      { name: 'Zoho Books', url: 'https://www.zoho.com/books/', icon: Settings, iconHoverColorClass: 'group-hover:text-green-500', textHoverColorClass: 'group-hover:text-green-700' },
      { name: 'Zoho Creator', url: 'https://www.zoho.com/en-in/creator/', icon: Settings, iconHoverColorClass: 'group-hover:text-blue-500', textHoverColorClass: 'group-hover:text-blue-700' },
      { name: 'Zoho Analytics', url: 'https://www.zoho.com/analytics/', icon: Settings, iconHoverColorClass: 'group-hover:text-yellow-600', textHoverColorClass: 'group-hover:text-yellow-800' },
      { name: 'Zoho People', url: 'https://www.zoho.com/people/', icon: Settings, iconHoverColorClass: 'group-hover:text-purple-500', textHoverColorClass: 'group-hover:text-purple-700' },
      { name: 'Zoho Forms', url: 'https://www.zoho.com/forms/', icon: Settings, iconHoverColorClass: 'group-hover:text-indigo-500', textHoverColorClass: 'group-hover:text-indigo-700' },
      { name: 'Zoho Sign', url: 'https://www.zoho.com/sign/', icon: Settings, iconHoverColorClass: 'group-hover:text-pink-500', textHoverColorClass: 'group-hover:text-pink-700' },
      { name: 'Zoho Inventory', url: 'https://www.zoho.com/inventory/', icon: Box, iconHoverColorClass: 'group-hover:text-teal-500', textHoverColorClass: 'group-hover:text-teal-700' },
      { name: 'Zoho Desk', url: 'https://www.zoho.com/desk/', icon: Settings, iconHoverColorClass: 'group-hover:text-cyan-500', textHoverColorClass: 'group-hover:text-cyan-700' },
      { name: 'Deluge Scripting', url: 'https://www.zoho.com/deluge/', icon: Code, iconHoverColorClass: 'group-hover:text-gray-700', textHoverColorClass: 'group-hover:text-gray-900' },
      { name: 'API & Integrations', url: 'https://www.zoho.com/platform/', icon: Settings, iconHoverColorClass: 'group-hover:text-orange-500', textHoverColorClass: 'group-hover:text-orange-700' },
      { name: 'Automation & Workflows', url: 'https://www.zoho.com/flow/', icon: Settings, iconHoverColorClass: 'group-hover:text-lime-500', textHoverColorClass: 'group-hover:text-lime-700' },
    ],
  },
  {
    category: 'For Website',
    items: [
      { name: 'Next.js', url: 'https://nextjs.org/', icon: Code, iconHoverColorClass: 'group-hover:text-black', textHoverColorClass: 'group-hover:text-black' },
      { name: 'React.js', url: 'https://react.dev/', icon: Code, iconHoverColorClass: 'group-hover:text-sky-500', textHoverColorClass: 'group-hover:text-sky-700' },
      { name: 'Lovable AI', url: 'https://lovable.dev/', icon: Bot, iconHoverColorClass: 'group-hover:text-pink-400', textHoverColorClass: 'group-hover:text-pink-600' },
      { name: 'TypeScript', url: 'https://www.typescriptlang.org/', icon: Type, iconHoverColorClass: 'group-hover:text-blue-700', textHoverColorClass: 'group-hover:text-blue-900' },
      { name: 'JavaScript (ES6+)', url: 'https://developer.mozilla.org/docs/Web/JavaScript', icon: Code, iconHoverColorClass: 'group-hover:text-yellow-400', textHoverColorClass: 'group-hover:text-yellow-700' },
      { name: 'Tailwind CSS', url: 'https://tailwindcss.com/', icon: Wind, iconHoverColorClass: 'group-hover:text-sky-500', textHoverColorClass: 'group-hover:text-sky-700' },
      { name: 'Ant Design', url: 'https://ant.design/', icon: Component, iconHoverColorClass: 'group-hover:text-blue-500', textHoverColorClass: 'group-hover:text-blue-700' },
      { name: 'Node.js', url: 'https://nodejs.org/', icon: Code, iconHoverColorClass: 'group-hover:text-green-600', textHoverColorClass: 'group-hover:text-green-800' },
      { name: 'Express.js', url: 'https://expressjs.com/', icon: Code, iconHoverColorClass: 'group-hover:text-gray-500', textHoverColorClass: 'group-hover:text-gray-700' },
      { name: 'REST APIs', url: 'https://restfulapi.net/', icon: Settings, iconHoverColorClass: 'group-hover:text-orange-600', textHoverColorClass: 'group-hover:text-orange-800' },
      { name: 'Zoho API Integration', url: 'https://www.zoho.com/apis/', icon: Settings, iconHoverColorClass: 'group-hover:text-red-600', textHoverColorClass: 'group-hover:text-red-800' },
      { name: 'JSON / XML', url: 'https://www.json.org/', icon: Code, iconHoverColorClass: 'group-hover:text-gray-600', textHoverColorClass: 'group-hover:text-gray-800' },
    ],
  },
  {
    category: 'Database & Cloud',
    items: [
      { name: 'MySQL', url: 'https://www.mysql.com/', icon: Database, iconHoverColorClass: 'group-hover:text-blue-800', textHoverColorClass: 'group-hover:text-blue-900' },
      { name: 'MongoDB', url: 'https://www.mongodb.com/', icon: DatabaseZap, iconHoverColorClass: 'group-hover:text-green-700', textHoverColorClass: 'group-hover:text-green-900' },
      { name: 'Supabase', url: 'https://supabase.com/', icon: Cloud, iconHoverColorClass: 'group-hover:text-green-500', textHoverColorClass: 'group-hover:text-green-700' },
      { name: 'Firebase', url: 'https://firebase.google.com/', icon: Cloud, iconHoverColorClass: 'group-hover:text-yellow-500', textHoverColorClass: 'group-hover:text-yellow-700' },
      { name: 'PostgreSQL', url: 'https://www.postgresql.org/', icon: Database, iconHoverColorClass: 'group-hover:text-blue-600', textHoverColorClass: 'group-hover:text-blue-800' },
      { name: 'Digital Ocean', url: 'https://www.digitalocean.com/', icon: Cloud, iconHoverColorClass: 'group-hover:text-blue-500', textHoverColorClass: 'group-hover:text-blue-700' },
      { name: 'Vercel', url: 'https://vercel.com/', icon: Cloud, iconHoverColorClass: 'group-hover:text-black', textHoverColorClass: 'group-hover:text-black' },
      { name: 'Netlify', url: 'https://www.netlify.com/', icon: Cloud, iconHoverColorClass: 'group-hover:text-teal-500', textHoverColorClass: 'group-hover:text-teal-700' },
      { name: 'Zoho Catalyst', url: 'https://www.zoho.com/catalyst/', icon: Cloud, iconHoverColorClass: 'group-hover:text-purple-600', textHoverColorClass: 'group-hover:text-purple-800' },
      { name: 'Docker (Basic)', url: 'https://www.docker.com/', icon: Box, iconHoverColorClass: 'group-hover:text-blue-400', textHoverColorClass: 'group-hover:text-blue-600' },
    ],
  },
  {
    category: 'Video & Tools',
    items: [
      { name: 'Canva Pro', url: 'https://www.canva.com/', icon: Palette, iconHoverColorClass: 'group-hover:text-purple-400', textHoverColorClass: 'group-hover:text-purple-600' },
      { name: 'CapCut Pro', url: 'https://www.capcut.com/', icon: Palette, iconHoverColorClass: 'group-hover:text-blue-400', textHoverColorClass: 'group-hover:text-blue-600' },
      { name: 'Adobe Pro', url: 'https://www.adobe.com/', icon: Palette, iconHoverColorClass: 'group-hover:text-red-600', textHoverColorClass: 'group-hover:text-red-800' },
      { name: 'Figma', url: 'https://www.figma.com/', icon: FigmaIcon, iconHoverColorClass: 'group-hover:text-purple-500', textHoverColorClass: 'group-hover:text-purple-700' },
      { name: 'Filmora', url: 'https://filmora.wondershare.com/', icon: Palette, iconHoverColorClass: 'group-hover:text-teal-500', textHoverColorClass: 'group-hover:text-teal-700' },
      { name: 'Photoshop', url: 'https://www.adobe.com/products/photoshop.html', icon: Palette, iconHoverColorClass: 'group-hover:text-blue-900', textHoverColorClass: 'group-hover:text-blue-950' },
      { name: 'Slack', url: 'https://slack.com/', icon: SlackIcon, iconHoverColorClass: 'group-hover:text-purple-700', textHoverColorClass: 'group-hover:text-purple-900' },
      { name: 'Zoho Cliq', url: 'https://www.zoho.com/cliq/', icon: Settings, iconHoverColorClass: 'group-hover:text-green-500', textHoverColorClass: 'group-hover:text-green-700' },
      { name: 'Google Workspace', url: 'https://workspace.google.com/', icon: Cloud, iconHoverColorClass: 'group-hover:text-blue-500', textHoverColorClass: 'group-hover:text-blue-700' },
      { name: 'Zoho Projects', url: 'https://www.zoho.com/projects/', icon: Layers, iconHoverColorClass: 'group-hover:text-orange-500', textHoverColorClass: 'group-hover:text-orange-700' },
      { name: 'VS Code', url: 'https://code.visualstudio.com/', icon: Monitor, iconHoverColorClass: 'group-hover:text-blue-600', textHoverColorClass: 'group-hover:text-blue-800' },
      { name: 'Postman', url: 'https://www.postman.com/', icon: Settings, iconHoverColorClass: 'group-hover:text-orange-500', textHoverColorClass: 'group-hover:text-orange-700' },
      { name: 'Eclipse', url: 'https://www.eclipse.org/ide/', icon: Code, iconHoverColorClass: 'group-hover:text-purple-800', textHoverColorClass: 'group-hover:text-purple-900' },
    ],
  },
];

// --- Derived arrays for rows ---
const row1Items: TechItem[] = techStacksData.find((s) => s.category === 'For Zoho')?.items ?? [];
const row2Items: TechItem[] = techStacksData.find((s) => s.category === 'For Website')?.items ?? [];
const row3Items: TechItem[] = techStacksData.find((s) => s.category === 'Database & Cloud')?.items ?? [];
const row4Items: TechItem[] = techStacksData.find((s) => s.category === 'Video & Tools')?.items ?? [];

// --- Helper: Single Tech Box (clickable) ---
const TechBox = ({ item }: { item: TechItem }) => {
  const IconComponent = item.icon ?? Box; // Fallback icon
  const initialIconColor = 'text-gray-400 dark:text-gray-400';
  const initialTextColor = 'text-gray-800 dark:text-gray-100';

  return (
    <a
      href={item.url ?? '#'}
      target="_blank"
      rel="noopener noreferrer"
      className="focus:outline-none"
      aria-label={item.url ? `${item.name} (opens in new tab)` : item.name}
    >
      <div
        className="group cursor-pointer flex items-center gap-3 flex-shrink-0 min-w-[160px] xs:min-w-[180px] sm:min-w-[200px] md:min-w-[220px] lg:min-w-[240px] h-[76px] xs:h-[84px] md:h-[104px] lg:h-[112px] px-5 sm:px-6 py-4 rounded-2xl border border-gray-200/70 dark:border-neutral-800/70 bg-white/70 dark:bg-neutral-900/60 backdrop-blur supports-[backdrop-filter]:backdrop-blur-md shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
      >
        <IconComponent
          aria-hidden
          className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex-shrink-0 transition-colors duration-300 ${initialIconColor} ${item.iconHoverColorClass ?? 'group-hover:text-gray-900 dark:group-hover:text-white'}`}
        />
        <span
          className={`text-[0.95rem] sm:text-base md:text-lg lg:text-xl font-semibold tracking-tight transition-colors duration-300 ${initialTextColor} ${item.textHoverColorClass ?? 'group-hover:text-gray-900 dark:group-hover:text-white'}`}
        >
          {item.name}
        </span>
      </div>
    </a>
  );
};

// --- Row wrapper (JSX ke bahar) ---
function RowWrap({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full overflow-hidden marquee-pauser mb-5">
      {/* left fade */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-10 sm:w-20 bg-gradient-to-r from-gray-100 dark:from-neutral-950 to-transparent" />
      {/* right fade */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-10 sm:w-20 bg-gradient-to-l from-gray-100 dark:from-neutral-950 to-transparent" />
      {children}
    </div>
  );
}

// --- Main ---
export default function TechStacks() {
  return (
    <section className="relative mt-16 md:mt-24 py-16 rounded-3xl overflow-hidden">
      {/* Background gradient + subtle radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-neutral-900 dark:to-neutral-950" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_500px_at_50%_-10%,rgba(56,189,248,0.35),transparent_60%)] dark:bg-[radial-gradient(1000px_500px_at_50%_-10%,rgba(56,189,248,0.25),transparent_60%)]" />

      {/* Decorative top glow line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/60 to-transparent dark:via-sky-500/40" />

      <div className="relative container mx-auto px-3 sm:px-4 md:px-6 lg:px-10">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">Our Tech Stacks</h2>
          <p className="mt-3 text-sm md:text-base lg:text-lg text-gray-600/90 dark:text-gray-300/80">
            {/* Copy English rahega; comments Hinglish me */}
            Tools we use across CRM, web, cloud, and creative workflows
          </p>
        </div>

        {/* Row 1 (LTR) */}
        <RowWrap>
          <div className="flex whitespace-nowrap marquee-content-ltr space-x-5 md:space-x-8 will-change-transform transform-gpu" style={{ ['--marquee-duration' as any]: '22s' }}>
            {row1Items.concat(row1Items).map((item, i) => (
              <TechBox key={`row1-${item.name}-${i}`} item={item} />
            ))}
          </div>
        </RowWrap>

        {/* Row 2 (RTL) */}
        <RowWrap>
          <div className="flex whitespace-nowrap marquee-content-rtl space-x-5 md:space-x-8 will-change-transform transform-gpu" style={{ ['--marquee-duration' as any]: '26s' }}>
            {row2Items.concat(row2Items).map((item, i) => (
              <TechBox key={`row2-${item.name}-${i}`} item={item} />
            ))}
          </div>
        </RowWrap>

        {/* Row 3 (LTR slower) */}
        <RowWrap>
          <div className="flex whitespace-nowrap marquee-content-ltr space-x-5 md:space-x-8 will-change-transform transform-gpu" style={{ ['--marquee-duration' as any]: '32s' }}>
            {row3Items.concat(row3Items).map((item, i) => (
              <TechBox key={`row3-${item.name}-${i}`} item={item} />
            ))}
          </div>
        </RowWrap>

        {/* Row 4 (RTL slowest) */}
        <RowWrap>
          <div className="flex whitespace-nowrap marquee-content-rtl space-x-5 md:space-x-8 will-change-transform transform-gpu" style={{ ['--marquee-duration' as any]: '38s' }}>
            {row4Items.concat(row4Items).map((item, i) => (
              <TechBox key={`row4-${item.name}-${i}`} item={item} />
            ))}
          </div>
        </RowWrap>
      </div>

      {/* Global CSS for animation + accessibility */}
      <style jsx global>{`
        /* --- Motion keyframes (translate3d for GPU) --- */
        @keyframes marquee-ltr { 0% { transform: translate3d(-50%,0,0); } 100% { transform: translate3d(0%,0,0); } }
        @keyframes marquee-rtl { 0% { transform: translate3d(0%,0,0); } 100% { transform: translate3d(-50%,0,0); } }

        .marquee-content-ltr {
          animation: marquee-ltr var(--marquee-duration, 25s) linear infinite;
        }
        .marquee-content-rtl {
          animation: marquee-rtl var(--marquee-duration, 30s) linear infinite;
        }

        /* Hover par pause */
        .marquee-pauser:hover .marquee-content-ltr,
        .marquee-pauser:hover .marquee-content-rtl {
          animation-play-state: paused;
        }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .marquee-content-ltr,
          .marquee-content-rtl {
            animation: none !important;
            transform: translate3d(0,0,0) !important;
          }
        }
      `}</style>
    </section>
  );
}
