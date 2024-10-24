import React from 'react';
import { Download, Bell } from 'lucide-react';

export const EbookSection = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* First E-book */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <img
              src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="E-book Cover"
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <h3 className="text-2xl font-bold mb-4 text-navy-900">The Ultimate Guide to Free Home Sales</h3>
            <button className="flex items-center justify-center w-full bg-navy-600 text-white px-6 py-3 rounded-lg hover:bg-navy-700 transition duration-300">
              <Download className="h-5 w-5 mr-2" />
              Download Your Free Guide
            </button>
          </div>

          {/* Second E-book (Coming Soon) */}
          <div className="bg-white rounded-lg shadow-lg p-8 relative">
            <div className="absolute top-4 right-4 bg-navy-500 text-white px-4 py-1 rounded-full">
              Coming Soon
            </div>
            <img
              src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Credit Repair Guide Cover"
              className="w-full h-64 object-cover rounded-lg mb-6 filter blur-sm"
            />
            <h3 className="text-2xl font-bold mb-4 text-navy-900">Credit Repair Guide</h3>
            <button className="flex items-center justify-center w-full bg-navy-600 text-white px-6 py-3 rounded-lg hover:bg-navy-700 transition duration-300">
              <Bell className="h-5 w-5 mr-2" />
              Sign Up for Updates
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};