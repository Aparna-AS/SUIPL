'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll(); // initialize on load
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Header styles: fixed overlays hero, no white line
  const baseHeader =
    'fixed inset-x-0 top-0 z-50 transition-colors duration-300'; // << fixed, overlaps hero
  const topClasses = 'bg-transparent';                              // fully transparent over hero
  const scrolledClasses = 'bg-white/30 backdrop-blur-md shadow-xl shadow-gray-900/40';
   // frosted glass after scroll

  // Colors switch for contrast
  const brandClass = isScrolled ? 'text-gray-900' : 'text-white';
  const linkBase = 'px-3 py-2 text-sm font-medium transition-colors';
  const linkColor = isScrolled
    ? 'text-gray-800 hover:text-blue-600'
    : 'text-white/90 hover:text-white';

  return (
    <header className={`${baseHeader} ${isScrolled ? scrolledClasses : topClasses}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand */}
          <div className="flex-shrink-0">
            <Link href="/" className={`text-2xl font-bold ${brandClass}`}>
              SUIPL
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className={`${linkBase} ${linkColor}`}>
              Home
            </Link>
            <Link href="/services" className={`${linkBase} ${linkColor}`}>
              Services
            </Link>
            <Link href="/about" className={`${linkBase} ${linkColor}`}>
              About Us
            </Link>
            <Link href="/contact" className={`${linkBase} ${linkColor}`}>
              Contact Us
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:opacity-80 focus:outline-none`}
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/90 backdrop-blur-md">
              <Link href="/" className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-blue-600">
                Home
              </Link>
              <Link href="/services" className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-blue-600">
                Services
              </Link>
              <Link href="/about" className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-blue-600">
                About Us
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-blue-600">
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
