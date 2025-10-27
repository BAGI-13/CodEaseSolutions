// File: components/home/OverviewSection.tsx
import { Building, Target, Zap } from "lucide-react";

export default function OverviewSection() {
  return (
    <section className="mt-16 md:mt-24">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Left Side (Company Overview) */}
        <div className="w-full md:w-1/2 space-y-6">
           {/* --- UPDATE: Mobile font size thoda kam kiya --- */}
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            Welcome to <span className="text-blue-600">CodeaseSolutions</span>
          </h2>

           {/* --- UPDATE: Mobile font size thoda kam kiya --- */}
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

           {/* --- UPDATE: Mobile font size thoda kam kiya --- */}
          <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow-lg hover:bg-blue-700 transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer text-base md:text-lg flex items-center gap-2">
            <Zap size={20} />
            Explore Our Solutions
          </button>
        </div>

        {/* Right Side (Company Logo/Image Placeholder) */}
        <div className="w-full md:w-1/2">
           {/* --- UPDATE: Mobile height thodi kam ki --- */}
          <div className="bg-gray-200 rounded-xl shadow-lg w-full h-64 md:h-96 flex items-center justify-center"> {/* h-80 ko h-64 kiya */}
            <span className="text-gray-500 text-xl font-medium">
              Company Logo / Image
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}