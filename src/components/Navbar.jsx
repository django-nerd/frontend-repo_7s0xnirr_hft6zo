import { useState, useEffect } from 'react';
import { Brain, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navClasses = scrolled
    ? 'backdrop-blur bg-white/70 dark:bg-neutral-900/60 shadow-sm'
    : 'bg-transparent';

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors ${navClasses}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollTo('hero')}
            className="flex items-center gap-3 font-semibold tracking-tight text-neutral-900 dark:text-white"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500 text-white shadow-[0_0_18px_rgba(99,102,241,0.45)]">
              <Brain size={18} />
            </span>
            <span className="hidden sm:inline">Akshit Calonia</span>
            <span className="sm:hidden">AC</span>
          </button>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <button onClick={() => scrollTo('projects')} className="hover:text-indigo-500 transition-colors">Projects</button>
            <button onClick={() => scrollTo('about')} className="hover:text-indigo-500 transition-colors">About</button>
            <a href="https://www.linkedin.com/in/akshit-calonia/" target="_blank" rel="noreferrer" className="hover:text-indigo-500 transition-colors">LinkedIn</a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="https://www.linkedin.com/in/akshit-calonia/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-3 py-2 text-sm font-medium hover:opacity-90 transition"
            >
              <Linkedin size={16} />
              Connect
            </a>
            <button
              onClick={() => scrollTo('contact')}
              className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 backdrop-blur px-3 py-2 text-sm font-medium text-neutral-900 dark:text-white hover:bg-white/10 transition"
            >
              <Mail size={16} />
              Contact
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
