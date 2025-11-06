import { useState, useEffect } from 'react';
import { Brain, Github, Linkedin, Mail } from 'lucide-react';

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
            className="flex items-center gap-2 font-semibold tracking-tight text-neutral-900 dark:text-white"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500 text-white">
              <Brain size={18} />
            </span>
            <span>ML/AI Engineer</span>
          </button>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <button onClick={() => scrollTo('projects')} className="hover:text-indigo-600 transition-colors">Projects</button>
            <button onClick={() => scrollTo('about')} className="hover:text-indigo-600 transition-colors">About</button>
            <a href="mailto:hello@example.com" className="hover:text-indigo-600 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:hello@example.com"
              className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-3 py-2 text-sm font-medium hover:opacity-90 transition"
            >
              <Mail size={16} />
              Let’s talk
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
