import { Heart, Copyright } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-neutral-200/70 dark:border-neutral-800/70 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-600 dark:text-neutral-400 flex items-center gap-2">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500 text-white">
              <Heart size={14} />
            </span>
            Built with curiosity and craft.
          </p>
          <p className="text-sm text-neutral-500 flex items-center gap-1">
            <Copyright size={14} /> {new Date().getFullYear()} • All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
