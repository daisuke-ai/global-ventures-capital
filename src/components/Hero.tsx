import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOGM5Ljk0MSAwIDE4LTguMDU5IDE4LTE4cy04LjA1OS0xOC0xOC0xOHptMCAzMmMtNy43MzIgMC0xNC02LjI2OC0xNC0xNHM2LjI2OC0xNCAxNC0xNCA2LjI2OCAxNCAxNCAxNC02LjI2OCAxNC0xNCAxNHoiIGZpbGw9IiNmZmYiIG9wYWNpdHk9Ii4wNCIvPjwvZz48L3N2Zz4=')] opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            How to Sell Your Home Fast and Avoid Foreclosure
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            Get a fair cash offer for your home and close on your timeline.
            No repairs needed, no realtor fees.
          </p>
          <button className="btn-primary text-lg group">
            Get a No-Obligation Cash Offer Today!
            <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-1 h-16 rounded-full bg-gradient-to-b from-white/50 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};