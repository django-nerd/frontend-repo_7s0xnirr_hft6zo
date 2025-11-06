import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white dark:from-neutral-950/70 dark:via-neutral-950/40 dark:to-neutral-950" />

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-tr from-indigo-600 via-violet-600 to-fuchsia-600"
          >
            Innovative ML & AI Engineer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            className="mt-4 text-base sm:text-lg md:text-xl text-neutral-700 dark:text-neutral-300"
          >
            Blending rigorous research with playful interaction and narrative-driven product design.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-5 py-3 text-sm font-semibold hover:opacity-90 transition"
            >
              Explore Projects
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-lg border border-neutral-300 dark:border-neutral-700 px-5 py-3 text-sm font-semibold hover:bg-neutral-50 dark:hover:bg-neutral-900 transition"
            >
              About Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
