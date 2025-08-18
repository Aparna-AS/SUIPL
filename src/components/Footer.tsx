export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">SUIPL</h3>
            <p className="text-gray-300 mb-4">
              STABDHA UTILITY INSIGHTS PRIVATE LIMITED
            </p>
            <p className="text-gray-400 text-sm">
              Certified startup with a data-driven agile workforce, providing the convenience 
              of modulation and analytics with business to business approach.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-blue-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">Utility Management</li>
              <li className="text-gray-400">Financial IT</li>
              <li className="text-gray-400">Infrastructure Support</li>
              <li className="text-gray-400">Data Analytics</li>
              <li className="text-gray-400">Carbon Footprint Reduction</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2023 STABDHA UTILITY INSIGHTS PRIVATE LIMITED - All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
