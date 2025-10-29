

// // File: app/contact/page.tsx
// import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react'; // Added Linkedin, Github

// export default function ContactPage() {
//   return (
//     <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
//       {/* Page Title */}
//       <div className="text-center mb-12">
//         <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-4">
//           Contact Us
//         </h1>
//         <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
//           We'd love to hear from you! Reach out with questions, project inquiries, or just to say hello.
//         </p>
//       </div>

//       {/* --- Company Contact Section --- */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-6 md:p-8 rounded-xl shadow-lg mb-16"> {/* Added mb-16 */}

//         {/* Column 1: Contact Info */}
//         <div className="space-y-6">
//           <h2 className="text-2xl font-semibold text-gray-900 mb-4">Get in Touch (Company)</h2> {/* Title updated */}
//           <p className="text-gray-600">
//             Use the form or contact us directly using the information below. We typically respond within 24 business hours.
//           </p>
//           <ul className="space-y-4 text-gray-700">
//             <li className="flex items-start gap-3">
//               <MapPin size={20} className="text-blue-500 mt-1 flex-shrink-0" />
//               <div>
//                 <h4 className="font-medium text-gray-800">Address</h4>
//                 <p>Gurugram, Haryana, India</p>
//               </div>
//             </li>
//             <li className="flex items-start gap-3">
//               <Mail size={20} className="text-blue-500 mt-1 flex-shrink-0" />
//               <div>
//                 <h4 className="font-medium text-gray-800">Email</h4>
//                 <a href="mailto:info@codeasesolutions.com" className="text-blue-600 hover:underline">info@codeasesolutions.com</a>
//               </div>
//             </li>
//             <li className="flex items-start gap-3">
//               <Phone size={20} className="text-blue-500 mt-1 flex-shrink-0" />
//               <div>
//                 <h4 className="font-medium text-gray-800">Phone</h4>
//                 <a href="tel:+91XXXXXXXXXX" className="text-blue-600 hover:underline">+91 XXXXXXXXXX</a>
//                 {/* (Hinglish) Apna phone number yahan daalein */}
//               </div>
//             </li>
//           </ul>
//         </div>

//         {/* Column 2: Contact Form Placeholder */}
//         <div className="space-y-4">
//            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Send Us a Message</h2>
//           <form action="#" method="POST" className="space-y-4">
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
//               <input type="text" name="name" id="name" autoComplete="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Your Name" />
//             </div>
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
//               <input type="email" name="email" id="email" autoComplete="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="you@example.com" />
//             </div>
//             <div>
//               <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
//               <textarea id="message" name="message" rows={4} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="How can we help?"></textarea>
//             </div>
//             <div>
//               <button
//                 type="submit"
//                 className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer"
//               >
//                 <Send size={18} className="mr-2" />
//                 Send Message
//               </button>
//             </div>
//           </form>
//         </div>

//       </div>
//       {/* --- Company Contact Section End --- */}

//       {/* --- NAYA SECTION: Developer Contact --- */}
//       <div className="mt-16 pt-12 border-t border-gray-200">
//         <div className="text-center mb-8">
//             <h2 className="text-3xl font-bold text-gray-800">Connect with the Developer</h2>
//             <p className="text-gray-600 mt-2">Have technical questions or feedback about the website?</p>
//         </div>
//         <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md space-y-4">
//              {/* (Hinglish) Yahan apni details daalein */}
//              <p className="text-lg font-semibold text-center text-gray-900">Rajan Singh</p>
//              <ul className="space-y-3 text-gray-700">
//                  <li className="flex items-center gap-3">
//                      <Linkedin size={18} className="text-blue-700 flex-shrink-0" />
//                      <a href="YOUR_LINKEDIN_URL" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn Profile</a>
//                  </li>
//                  <li className="flex items-center gap-3">
//                      <Github size={18} className="text-gray-800 flex-shrink-0" />
//                      <a href="YOUR_GITHUB_URL" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub Profile</a>
//                  </li>
//                  <li className="flex items-center gap-3">
//                      <Mail size={18} className="text-red-600 flex-shrink-0" />
//                      <a href="mailto:your.email@example.com" className="text-blue-600 hover:underline">your.email@example.com</a>
//                  </li>
//                  {/* Aap chahein toh phone number bhi add kar sakte hain */}
//                  {/* <li className="flex items-center gap-3">
//                      <Phone size={18} className="text-green-600 flex-shrink-0" />
//                      <a href="tel:+91YOURNUMBER" className="text-blue-600 hover:underline">+91 XXXXX XXXXX</a>
//                  </li> */}
//              </ul>
//         </div>
//       </div>
//       {/* --- Developer Contact Section End --- */}

//     </div>
//   );
// }


// File: app/contact/page.tsx
import { Mail, Phone, MapPin, Send, Github } from 'lucide-react'; // Linkedin hata diya
import Image from 'next/image'; // Image component import kiya

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Page Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-4">
          Contact Us
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          We'd love to hear from you! Reach out with questions, project inquiries, or just to say hello.
        </p>
      </div>

      {/* --- Company Contact Section --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-6 md:p-8 rounded-xl shadow-lg mb-16">

        {/* Column 1: Contact Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Get in Touch (Company)</h2>
          <p className="text-gray-600">
            Use the form or contact us directly using the information below. We typically respond within 24 business hours.
          </p>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <MapPin size={20} className="text-blue-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-gray-800">Address</h4>
                <p>Gurugram, Haryana, India</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={20} className="text-blue-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-gray-800">Email</h4>
                <a href="mailto:info@codeasesolutions.com" className="text-blue-600 hover:underline">info@codeasesolutions.com</a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Phone size={20} className="text-blue-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-gray-800">Phone</h4>
                <a href="tel:+918368408376" className="text-blue-600 hover:underline">+91 XXXXXXXXXX</a> <br />
                <a href="tel:+919625789828" className="text-blue-600 hover:underline">+91 XXXXXXXXXX</a>
              </div>
            </li>
          </ul>
        </div>

        {/* Column 2: Contact Form Placeholder */}
        <div className="space-y-4">
           <h2 className="text-2xl font-semibold text-gray-900 mb-4">Send Us a Message</h2>
          <form action="#" method="POST" className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" name="name" id="name" autoComplete="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Your Name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input type="email" name="email" id="email" autoComplete="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="you@example.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" name="message" rows={4} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="How can we help?"></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer"
              >
                <Send size={18} className="mr-2" />
                Send Message
              </button>
            </div>
          </form>
        </div>

      </div>
      {/* --- Company Contact Section End --- */}

      {/* --- UPDATE: Developer Contact Section Redesign --- */}
      <div className="mt-16 pt-12 border-t border-gray-200">
        <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800">Connect with the Developers</h2> {/* Title Updated */}
            <p className="text-gray-600 mt-2">Have technical questions or feedback about the website?</p>
        </div>

        {/* (Hinglish) Ab 2 columns ka grid hai developers ke liye */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

            {/* Developer 1 Card */}
            <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 p-6 rounded-xl shadow-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-[1.03]">
                {/* Circular Image Placeholder */}
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 relative shadow-md">
                   {/* (Hinglish) Image path ko 'public' folder ke hisaab se daalein */}
                   <Image
                      src="/RAJ.jpg" // Example path
                      
                      alt="Developer  Name"
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="96px" // Width of the container (w-24 = 96px)
                   />
                </div>
                <p className="text-xl font-semibold text-gray-900 mb-3">RAJAN SINGH</p> {/* Example Name */}
                <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center gap-2 justify-center">
                        <Github size={18} className="text-gray-800 flex-shrink-0" />
                        <a href="https://github.com/rajanrajputt" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline hover:text-blue-800 transition-colors">GitHub Profile</a>
                    </li>
                    <li className="flex items-center gap-2 justify-center">
                        <Mail size={18} className="text-red-600 flex-shrink-0" />
                        <a href="mailto:rajan1782003@gmail.com" className="text-blue-600 hover:underline hover:text-blue-800 transition-colors">rajan1782003@gmail.com</a>
                    </li>
                    {/* Aap chahein toh phone number add kar sakte hain */}
                </ul>
            </div>

             {/* Developer 2 Card */}
             <div className="bg-gradient-to-br from-green-50 via-white to-green-100 p-6 rounded-xl shadow-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-[1.03]">
                {/* Circular Image Placeholder */}
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 relative shadow-md">
                   {/* (Hinglish) Image path ko 'public' folder ke hisaab se daalein */}
                   <Image
                      src="/images/developer-placeholder.jpg" // Example path
                      alt="Developer  Name"
                      fill
                      style={{ objectFit: 'cover' }}
                       sizes="96px"
                   />
                </div>
                <p className="text-xl font-semibold text-gray-900 mb-3">NAMAN KUMAR</p> {/* Example Name */}
                <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center gap-2 justify-center">
                        <Github size={18} className="text-gray-800 flex-shrink-0" />
                        <a href="https://github.com/rajanrajputt" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline hover:text-blue-800 transition-colors">GitHub Profile</a>
                    </li>
                    <li className="flex items-center gap-2 justify-center">
                        <Mail size={18} className="text-red-600 flex-shrink-0" />
                        <a href="mailto:naman97186@gmail.com" className="text-blue-600 hover:underline hover:text-blue-800 transition-colors">naman97186@gmail.com</a>
                    </li>
                     {/* Aap chahein toh phone number add kar sakte hain */}
                </ul>
            </div>

        </div>
      </div>
      {/* --- Developer Contact Section End --- */}

    </div>
  );
}