// File: app/meet-codease/page.tsx
import { Users, Target, Eye } from 'lucide-react';

export default function MeetCodeasePage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-4">
          Meet CodeaseSolutions
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          {/* Content ko English mein update kar diya hai */}
          We simplify technology to amplify your success. Meet the team
          that turns your ideas into reality.
        </p>
      </div>

      {/* Yahan hum future mein 'Our Mission', 'Our Vision', 'Our Team' sections add kar sakte hain */}
      <div className="grid md:grid-cols-3 gap-8 text-center">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Who We Are</h2>
          <p className="text-gray-600">
            {/* Content ko English mein update kar diya hai */}
            We are a passionate team of innovators, developers, and strategists.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Target className="w-12 h-12 text-blue-500 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p className="text-gray-600">
            {/* Content ko English mein update kar diya hai */}
            To streamline and automate your business operations.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Eye className="w-12 h-12 text-blue-500 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
          <p className="text-gray-600">
            {/* Content ko English mein update kar diya hai */}
            Helping businesses reach new heights through digital
            transformation.
          </p>
        </div>
      </div>
    </div>
  );
}