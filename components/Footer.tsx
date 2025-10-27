// File: components/Footer.tsx
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react'; // Example icons

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-300 mt-16 md:mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Column 1: Logo and About */}
          <div>
            <Link href="/" className="text-2xl font-bold text-blue-400 mb-4 inline-block">
              Codease<span className="text-gray-100">Solutions</span>
            </Link>
            <p className="text-sm">
              Simplifying Technology, Amplifying Success. We are your partners in digital transformation.
            </p>
          </div>

          {/* Column 2: Quick Links (Example) */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/solutions" className="hover:text-blue-400 transition-colors">Solutions</Link></li>
              <li><Link href="/meet-codease" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link href="/creations" className="hover:text-blue-400 transition-colors">Our Work</Link></li>
              {/* Add more links as needed */}
            </ul>
          </div>

          {/* Column 3: Contact Info (Example) */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-blue-400" />
                <span>Gurugram, Haryana, India</span> 
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-blue-400" />
                <a href="mailto:info@codeasesolutions.com" className="hover:text-blue-400 transition-colors">info@codeasesolutions.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-blue-400" />
                <a href="tel:+91XXXXXXXXXX" className="hover:text-blue-400 transition-colors">+91 XXXXXXXXXX</a> 
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p>&copy; {currentYear} CodeaseSolutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}