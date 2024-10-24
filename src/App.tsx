import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { WhatWeOffer } from './components/WhatWeOffer';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { EbookSection } from './components/EbookSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Stats />
      <WhatWeOffer />
      <HowItWorks />
      <Testimonials />
      <EbookSection />
      <Footer />
    </div>
  );
}

export default App;