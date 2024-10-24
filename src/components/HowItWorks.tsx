import React from 'react';
import { MessageSquare, CheckCircle, Calendar, DollarSign } from 'lucide-react';

export const HowItWorks = () => {
  return (
    <div className="bg-navy-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <MessageSquare className="h-12 w-12 text-navy-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
            <p className="text-navy-200">Fill out our quick online form or give us a call.</p>
          </div>
          <div className="text-center">
            <DollarSign className="h-12 w-12 text-navy-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Receive Your Offer</h3>
            <p className="text-navy-200">We'll review your details and provide a no-obligation cash offer within 24 hours.</p>
          </div>
          <div className="text-center">
            <CheckCircle className="h-12 w-12 text-navy-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Close the Deal</h3>
            <p className="text-navy-200">Once you accept, we handle all the paperwork and logistics.</p>
          </div>
          <div className="text-center">
            <Calendar className="h-12 w-12 text-navy-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Move On with Confidence</h3>
            <p className="text-navy-200">Close on your timeline and move forward without stress.</p>
          </div>
        </div>
      </div>
    </div>
  );
};