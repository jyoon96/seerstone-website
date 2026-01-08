import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Logistics } from './components/Logistics';
import { Timeline } from './components/Timeline';
import { Careers } from './components/Careers';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-white text-charcoal selection:bg-navy selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Logistics />
        <Timeline />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;