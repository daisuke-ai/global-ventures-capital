import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/ebooks" className="hover:text-navy-300">E-Books</a></li>
              <li><a href="/services" className="hover:text-navy-300">Services</a></li>
              <li><a href="/contact" className="hover:text-navy-300">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2">
              <p className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                (555) 123-4567
              </p>
              <p className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                info@fastsellhomes.com
              </p>
            </div>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your message"
                className="w-full px-4 py-2 rounded-lg bg-navy-800 border border-navy-700 focus:outline-none focus:border-navy-500"
              />
              <button className="bg-navy-600 text-white px-6 py-2 rounded-lg hover:bg-navy-700 transition duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-navy-800 flex justify-between items-center">
          <p>&copy; 2024 FastSell Homes. All rights reserved.</p>
          <div className="flex space-x-4">
            <Facebook className="h-5 w-5 hover:text-navy-300 cursor-pointer" />
            <Twitter className="h-5 w-5 hover:text-navy-300 cursor-pointer" />
            <Instagram className="h-5 w-5 hover:text-navy-300 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};