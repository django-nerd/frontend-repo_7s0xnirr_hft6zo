import { Heart, Copyright, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/10 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-neutral-300 flex items-center gap-2">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500 text-white">
              <Heart size={14} />
            </span>
            Built with curiosity and craft.
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/akshit-calonia/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 backdrop-blur px-3 py-2 text-sm font-medium text-neutral-200 hover:bg-white/10 transition"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
          </div>

          <p className="text-sm text-neutral-400 flex items-center gap-1">
            <Copyright size={14} /> {new Date().getFullYear()} • Akshit Calonia
          </p>
        </div>
      </div>
    </footer>
  );
}
