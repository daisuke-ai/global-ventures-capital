import React, { useState, useEffect } from 'react';
import { Book, Home, Phone, Menu, X } from 'lucide-react';
import { Link } from './Link';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-soft' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Home className="h-8 w-8 text-navy-600" />
            <span className="ml-2 text-xl font-bold text-navy-900">
              Elevate Global Ventures
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/ebooks">
              <Book className="h-5 w-5 mr-1" />
              E-Books
            </Link>
            <Link href="/services">
              <Home className="h-5 w-5 mr-1" />
              Services
            </Link>
            <Link href="/contact">
              <Phone className="h-5 w-5 mr-1" />
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-navy-600 hover:text-navy-700 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/ebooks" className="block">
                <Book className="h-5 w-5 mr-1" />
                E-Books
              </Link>
              <Link href="/services" className="block">
                <Home className="h-5 w-5 mr-1" />
                Services
              </Link>
              <Link href="/contact" className="block">
                <Phone className="h-5 w-5 mr-1" />
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};