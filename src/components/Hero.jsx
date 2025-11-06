import { useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function Hero() {
  const containerRef = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 120, damping: 20 });
  const sy = useSpring(my, { stiffness: 120, damping: 20 });
  const tiltX = useTransform(sy, (v) => v / 30);
  const tiltY = useTransform(sx, (v) => -v / 30);

  const onMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mx.set(x);
    my.set(y);
  };

  return (
    <section id="hero" ref={containerRef} onMouseMove={onMouseMove} className="relative min-h-[92vh] w-full overflow-hidden bg-neutral-950">
      {/* 3D scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Cyberpunk color wash + vignette (does not block Spline interaction) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 via-fuchsia-500/5 to-blue-600/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.15),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(217,70,239,0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/40 via-neutral-950/20 to-neutral-950/70" />
      </div>

      {/* Reactive spotlight following cursor (pure visual, non-blocking) */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-24"
        style={{
          background:
            'radial-gradient(600px 600px at var(--mx) var(--my), rgba(168,85,247,0.14), transparent 60%), radial-gradient(400px 400px at calc(var(--mx) - 120px) calc(var(--my) - 60px), rgba(59,130,246,0.12), transparent 60%)',
          // @ts-ignore
          ['--mx']: useTransform(sx, (v) => `calc(50% + ${v}px)`),
          // @ts-ignore
          ['--my']: useTransform(sy, (v) => `calc(50% + ${v}px)`),
        }}
      />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <motion.div
          style={{ rotateX: tiltX, rotateY: tiltY }}
          className="max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="text-sm font-medium tracking-wider text-indigo-300/90">ML & AI Engineer</p>
          <h1 className="mt-2 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-tr from-blue-400 via-indigo-300 to-fuchsia-400 drop-shadow-[0_0_20px_rgba(99,102,241,0.35)]">
            Akshit Calonia
          </h1>
          <motion.p
            className="mt-3 text-base sm:text-lg md:text-xl text-neutral-300"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Computer Science @ Georgia Institute of Technology. I build intelligent systems and cinematic interfaces — blending neural storytelling, cyberpunk glow, and fluid motion.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-tr from-blue-600 via-indigo-600 to-fuchsia-600 text-white px-5 py-3 text-sm font-semibold shadow-[0_0_30px_rgba(99,102,241,0.35)] hover:brightness-110 transition"
            >
              Explore Projects
            </a>
            <a
              href="https://www.linkedin.com/in/akshit-calonia/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 backdrop-blur px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              LinkedIn Profile
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
