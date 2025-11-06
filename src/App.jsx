import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Experience from './components/Experience.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#07071A] via-[#0A0B25] to-[#0C0F2E] text-white selection:bg-fuchsia-400/30 selection:text-fuchsia-200">
      <Navbar />
      <main>
        <Hero />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}
