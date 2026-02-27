import React from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Metrics } from './components/Metrics';
import { Timeline } from './components/Timeline';
import { Careers } from './components/Careers';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const MARQUEE_ITEMS = [
  'AI-Powered Intelligence',
  'Global Logistics',
  'Vertical Integration',
  'Category Leadership',
  'Dong Guan',
  'Los Angeles',
  'Seoul',
  'Dubai',
  'Vancouver',
  '$100M+ Revenue',
  '200K Orders/Day',
  '40+ Markets',
];

const App: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-dark-950 text-warm-100 overflow-x-hidden">
      {/* Noise Overlay */}
      <div className="noise-overlay" />

      {/* Custom Cursor */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <Marquee items={MARQUEE_ITEMS} />
        <About />
        <Portfolio />
        <Marquee items={['SeerStone Holdings', 'VerumLogistics', 'SeerStone Brands', 'SeerStone AI', 'Global Infrastructure', 'Modern Commerce']} reverse />
        <Metrics />
        <Timeline />
        <Careers />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
