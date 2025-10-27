// File: components/home/TechStacks.tsx
'use client'; // Animation ke liye

import {
    Database, Code, Palette, Settings, Cloud, Wind,
    Figma as FigmaIcon, Slack as SlackIcon, Box, Monitor, Bot, DatabaseZap, Type, Component, Layers
} from 'lucide-react';
import React from 'react';

// --- Data Structure Update ---
interface TechItem {
    name: string;
    icon?: React.ComponentType<{ className?: string }>;
    hoverClass?: string; // Example: "hover:bg-blue-600 hover:text-white"
}

// (Hinglish) Data mein hoverClass ko dobara check kiya brand colors ke liye
const techStacksData: { category: string; items: TechItem[] }[] = [
    {
        category: "For Zoho", items: [
             { name: "Zoho CRM", icon: Settings, hoverClass: "hover:bg-red-500 hover:text-white" },
             { name: "Zoho Books", icon: Settings, hoverClass: "hover:bg-green-500 hover:text-white" },
             { name: "Zoho Creator", icon: Settings, hoverClass: "hover:bg-blue-500 hover:text-white" },
             { name: "Zoho Analytics", icon: Settings, hoverClass: "hover:bg-yellow-600 hover:text-white" },
             { name: "Zoho People", icon: Settings, hoverClass: "hover:bg-purple-500 hover:text-white" },
             { name: "Zoho Forms", icon: Settings, hoverClass: "hover:bg-indigo-500 hover:text-white" },
             { name: "Zoho Sign", icon: Settings, hoverClass: "hover:bg-pink-500 hover:text-white" },
             { name: "Zoho Inventory", icon: Box, hoverClass: "hover:bg-teal-500 hover:text-white" },
             { name: "Zoho Desk", icon: Settings, hoverClass: "hover:bg-cyan-500 hover:text-white" },
             { name: "Deluge Scripting", icon: Code, hoverClass: "hover:bg-gray-700 hover:text-white" },
             { name: "API & Integrations", icon: Settings, hoverClass: "hover:bg-orange-500 hover:text-white" },
             { name: "Automation & Workflows", icon: Settings, hoverClass: "hover:bg-lime-500 hover:text-white" }
        ]
    },
    {
        category: "For Website", items: [
             { name: "Next.js", icon: Code, hoverClass: "hover:bg-black hover:text-white" },
             { name: "React.js", icon: Code, hoverClass: "hover:bg-sky-500 hover:text-white" },
             { name: "Lovable AI", icon: Bot, hoverClass: "hover:bg-pink-400 hover:text-white" },
             { name: "TypeScript", icon: Type, hoverClass: "hover:bg-blue-700 hover:text-white" },
             { name: "JavaScript (ES6+)", icon: Code, hoverClass: "hover:bg-yellow-400 hover:text-black" },
             { name: "Tailwind CSS", icon: Wind, hoverClass: "hover:bg-sky-500 hover:text-white" },
             { name: "Ant Design", icon: Component, hoverClass: "hover:bg-blue-500 hover:text-white" },
             { name: "Node.js", icon: Code, hoverClass: "hover:bg-green-600 hover:text-white" },
             { name: "Express.js", icon: Code, hoverClass: "hover:bg-gray-500 hover:text-white" },
             { name: "REST APIs", icon: Settings, hoverClass: "hover:bg-orange-600 hover:text-white" },
             { name: "Zoho API Integration", icon: Settings, hoverClass: "hover:bg-red-600 hover:text-white" },
             { name: "JSON / XML", icon: Code, hoverClass: "hover:bg-gray-400 hover:text-black" }
        ]
    },
    {
        category: "Database & Cloud", items: [
             { name: "MySQL", icon: Database, hoverClass: "hover:bg-blue-800 hover:text-white" },
             { name: "MongoDB", icon: DatabaseZap, hoverClass: "hover:bg-green-700 hover:text-white" },
             { name: "Supabase", icon: Cloud, hoverClass: "hover:bg-green-500 hover:text-white" },
             { name: "Firebase", icon: Cloud, hoverClass: "hover:bg-yellow-500 hover:text-white" },
             { name: "PostgreSQL", icon: Database, hoverClass: "hover:bg-blue-600 hover:text-white" },
             { name: "Digital Ocean", icon: Cloud, hoverClass: "hover:bg-blue-500 hover:text-white" },
             { name: "Vercel", icon: Cloud, hoverClass: "hover:bg-black hover:text-white" },
             { name: "Netlify", icon: Cloud, hoverClass: "hover:bg-teal-500 hover:text-white" },
             { name: "Zoho Catalyst", icon: Cloud, hoverClass: "hover:bg-purple-600 hover:text-white" },
             { name: "Docker (Basic)", icon: Box, hoverClass: "hover:bg-blue-400 hover:text-white" }
        ]
    },
    {
        category: "Video & Tools", items: [
             { name: "Canva Pro", icon: Palette, hoverClass: "hover:bg-purple-400 hover:text-white" },
             { name: "CapCut Pro", icon: Palette, hoverClass: "hover:bg-blue-400 hover:text-white" },
             { name: "Adobe Pro", icon: Palette, hoverClass: "hover:bg-red-600 hover:text-white" },
             { name: "Figma", icon: FigmaIcon, hoverClass: "hover:bg-purple-500 hover:text-white" },
             { name: "Filmora", icon: Palette, hoverClass: "hover:bg-teal-500 hover:text-white" },
             { name: "Photoshop", icon: Palette, hoverClass: "hover:bg-blue-900 hover:text-white" },
             { name: "Slack", icon: SlackIcon, hoverClass: "hover:bg-purple-700 hover:text-white" },
             { name: "Zoho Cliq", icon: Settings, hoverClass: "hover:bg-green-500 hover:text-white" },
             { name: "Google Workspace", icon: Cloud, hoverClass: "hover:bg-blue-500 hover:text-white" },
             { name: "Zoho Projects", icon: Layers, hoverClass: "hover:bg-orange-500 hover:text-white" },
             { name: "VS Code", icon: Monitor, hoverClass: "hover:bg-blue-600 hover:text-white" },
             { name: "Postman", icon: Settings, hoverClass: "hover:bg-orange-500 hover:text-white" },
             { name: "Eclipse", icon: Code, hoverClass: "hover:bg-purple-800 hover:text-white" }
        ]
    }
];

// --- Alag-alag rows ke liye data arrays ---
const row1Items: TechItem[] = techStacksData.find(s => s.category === "For Zoho")?.items ?? [];
const row2Items: TechItem[] = techStacksData.find(s => s.category === "For Website")?.items ?? [];
const row3Items: TechItem[] = techStacksData.find(s => s.category === "Database & Cloud")?.items ?? [];
const row4Items: TechItem[] = techStacksData.find(s => s.category === "Video & Tools")?.items ?? [];

// (Hinglish) Har box ko render karne ke liye ek helper component
const TechBox = ({ item, id }: { item: TechItem; id: string }) => {
    const IconComponent = item.icon ?? Box; // Default icon
    return (
        <div
            key={id}
            // --- UPDATE: Responsive Size ---
            // Mobile (default): px-6 py-3, text-base, icon w-5 h-5, gap-2, mx-2
            // Desktop (md+): px-8 py-4, text-lg, icon w-6 h-6, gap-3, mx-3
            className={`flex items-center gap-2 md:gap-3 flex-shrink-0 mx-2 md:mx-3 px-6 md:px-8 py-3 md:py-4 bg-white rounded-lg shadow-md filter grayscale transition duration-300 hover:filter-none ${item.hoverClass ?? 'hover:bg-gray-200'} cursor-default`}
        >
            <IconComponent className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" /> {/* Responsive icon size */}
            <span className="text-base md:text-lg font-semibold">{item.name}</span> {/* Responsive text size */}
        </div>
    );
};


export default function TechStacks() {
    return (
        <section className="mt-16 md:mt-24 py-16 bg-gray-100 rounded-xl shadow-inner overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Tech Stacks</h2>
                </div>

                {/* --- 4 Rows ka Structure --- */}

                {/* --- Marquee Row 1 (Left-to-Right) --- */}
                <div className="relative w-full overflow-hidden group mb-4">
                    <div className="flex whitespace-nowrap marquee-content-ltr">
                        {row1Items.map((item, index) => <TechBox item={item} id={`${item.name}-1-${index}`} />)}
                        {row1Items.map((item, index) => <TechBox item={item} id={`${item.name}-2-${index}`} />)}
                    </div>
                </div>
                {/* --- Marquee Row 1 End --- */}

                {/* --- Marquee Row 2 (Right-to-Left) --- */}
                <div className="relative w-full overflow-hidden group mb-4">
                    <div className="flex whitespace-nowrap marquee-content-rtl">
                        {row2Items.map((item, index) => <TechBox item={item} id={`${item.name}-1-${index}`} />)}
                        {row2Items.map((item, index) => <TechBox item={item} id={`${item.name}-2-${index}`} />)}
                    </div>
                </div>
                {/* --- Marquee Row 2 End --- */}

                {/* --- Marquee Row 3 (Left-to-Right) --- */}
                 <div className="relative w-full overflow-hidden group mb-4">
                    <div className="flex whitespace-nowrap marquee-content-ltr-alt">
                        {row3Items.map((item, index) => <TechBox item={item} id={`${item.name}-1-${index}`} />)}
                        {row3Items.map((item, index) => <TechBox item={item} id={`${item.name}-2-${index}`} />)}
                    </div>
                </div>
                {/* --- Marquee Row 3 End --- */}

                {/* --- Marquee Row 4 (Right-to-Left) --- */}
                <div className="relative w-full overflow-hidden group">
                    <div className="flex whitespace-nowrap marquee-content-rtl-alt">
                        {row4Items.map((item, index) => <TechBox item={item} id={`${item.name}-1-${index}`} />)}
                        {row4Items.map((item, index) => <TechBox item={item} id={`${item.name}-2-${index}`} />)}
                    </div>
                </div>
                {/* --- Marquee Row 4 End --- */}

            </div>

            {/* --- Internal CSS (4 animations waala) --- */}
            <style jsx global>{`
                @keyframes marquee-ltr {
                  0% { transform: translateX(-50%); } 100% { transform: translateX(0%); }
                }
                @keyframes marquee-rtl {
                  0% { transform: translateX(0%); } 100% { transform: translateX(-50%); }
                }
                .marquee-content-ltr { animation: marquee-ltr 40s linear infinite; }
                .marquee-content-rtl { animation: marquee-rtl 45s linear infinite; }
                .marquee-content-ltr-alt { animation: marquee-ltr 50s linear infinite; }
                .marquee-content-rtl-alt { animation: marquee-rtl 55s linear infinite; }
                .group:hover .marquee-content-ltr,
                .group:hover .marquee-content-rtl,
                .group:hover .marquee-content-ltr-alt,
                .group:hover .marquee-content-rtl-alt {
                  animation-play-state: paused;
                }
            `}</style>
            {/* --- Internal CSS End --- */}
        </section>
    );
}