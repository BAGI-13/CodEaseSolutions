// File: app/lab/page.tsx
import { Beaker, Wrench, Lightbulb } from 'lucide-react'; // Example icons

export default function InnovationLabPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Page Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-4">
          Innovation Lab
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          Where ideas take shape. Discover our experimental projects, prototypes, and proof-of-concepts.
        </p>
      </div>

      {/* --- Placeholder Content --- */}
      <div className="text-center py-20 bg-gray-100 rounded-lg">
        <Beaker className="mx-auto h-16 w-16 text-gray-400 mb-4" />
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Experiments Underway!</h2>
        <p className="text-gray-500">
          Our lab is buzzing with new ideas. We'll share our exciting prototypes soon!
        </p>
      </div>
      {/* --- Placeholder End --- */}

      {/*
        (Hinglish) Future mein yahan interactive demos, beta projects,
        ya code snippets share kar sakte hain.
        Example Demo Structure (commented out): */}

        <div className="mt-16 space-y-12">
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center gap-6">
             <div className="w-full md:w-1/2 h-64 bg-gray-300 rounded flex items-center justify-center"> {/* Placeholder for Demo/GIF */} Demo Area </div>
             <div className="w-full md:w-1/2">
               <Wrench className="w-8 h-8 text-blue-500 mb-3" />
               <h3 className="text-xl font-semibold mb-2">Prototype: AI Content Summarizer</h3>
               <p className="text-gray-600 text-sm mb-4">An experimental tool to quickly summarize web articles using AI. Built with Next.js and OpenAI API...</p>
               <a href="#" className="text-blue-600 hover:underline text-sm font-medium">Try the Demo (Soon)</a>
             </div>
           </div>
          {/* Add more lab projects here */}
        </div>
      
    </div>
  );
}