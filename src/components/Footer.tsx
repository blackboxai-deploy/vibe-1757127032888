import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Foundation Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">U</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Umeed Foundation</h3>
                <p className="text-sm text-gray-400">Hope for India</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Umeed Foundation is dedicated to creating positive change across India through education, 
              healthcare, community development, and empowerment programs. Join us in building a better tomorrow.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <div className="w-6 h-6 bg-blue-600 rounded"></div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <div className="w-6 h-6 bg-blue-400 rounded"></div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <div className="w-6 h-6 bg-pink-600 rounded"></div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <div className="w-6 h-6 bg-blue-700 rounded"></div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/programs" className="text-gray-300 hover:text-white transition-colors">Our Programs</Link></li>
              <li><Link href="/get-involved" className="text-gray-300 hover:text-white transition-colors">Get Involved</Link></li>
              <li><Link href="/gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="/resources" className="text-gray-300 hover:text-white transition-colors">Resources</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2 text-gray-300">
              <p>📍 New Delhi, India</p>
              <p>📞 +91-XXX-XXXX-XXX</p>
              <p>✉️ info@umeedfoundation.org</p>
              <p>🕒 Mon - Fri: 9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Umeed Foundation of India. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="/transparency" className="text-gray-400 hover:text-white text-sm transition-colors">
              Financial Transparency
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}