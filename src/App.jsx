import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-white selection:bg-fuchsia-300/60 selection:text-neutral-900">
      <Navbar />

      <main>
        <Hero />

        <div className="relative">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-indigo-50/40 to-transparent dark:via-indigo-500/5" />
          <Projects />
        </div>

        <About />
      </main>

      <Footer />
    </div>
  );
}

export default App;
