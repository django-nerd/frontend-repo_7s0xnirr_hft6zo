import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Server, Award, Code2, School, Mail } from 'lucide-react';

const chipBase =
  'inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/90 backdrop-blur shadow-[0_0_20px_rgba(99,102,241,0.25)]';

function LogoBadge({ initials, bg = 'from-indigo-500 to-blue-500' }) {
  return (
    <div className={`shrink-0 h-12 w-12 rounded-xl bg-gradient-to-br ${bg} grid place-items-center text-white font-bold shadow-[0_10px_30px_rgba(59,130,246,0.35)]`}>
      {initials}
    </div>
  );
}

function TimelineItem({ role, company, period, bullets, chips, logoBg, initials }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="relative grid grid-cols-[auto,1fr] gap-4 pl-2"
    >
      <div className="relative flex flex-col items-center">
        <LogoBadge initials={initials} bg={logoBg} />
        <span className="mt-2 h-full w-px bg-gradient-to-b from-fuchsia-500/60 via-indigo-500/40 to-transparent" />
      </div>
      <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md hover:bg-white/7 transition">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="text-lg font-semibold text-white/95">
            {role} <span className="text-white/60">· {company}</span>
          </h3>
          <span className="text-xs text-white/60">{period}</span>
        </div>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-white/85">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
        {chips && chips.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {chips.map((c, i) => (
              <span key={i} className={chipBase}>
                {c.icon}
                {c.label}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.li>
  );
}

export default function Experience() {
  const items = useMemo(
    () => [
      {
        role: 'Machine Learning Engineering Intern',
        company: 'Cisco',
        period: 'Jun 2025 – Aug 2025',
        initials: 'CS',
        logoBg: 'from-sky-500 to-blue-600',
        bullets: [
          'Built GenAI infrastructure on GPU clusters for low-latency inference.',
          'Implemented RAG observability to track context quality and latency.',
          'Optimized model serving pipelines with caching and vector search.',
        ],
        chips: [
          { icon: <Server size={14} />, label: 'GPU clusters' },
          { icon: <Brain size={14} />, label: 'RAG observability' },
          { icon: <Code2 size={14} />, label: 'Vector DB' },
        ],
      },
      {
        role: 'Software Engineering Intern',
        company: 'AI-ALOE Research Lab',
        period: 'Jan 2025 – May 2025',
        initials: 'AA',
        logoBg: 'from-fuchsia-500 to-violet-600',
        bullets: [
          'Shipped a GenAI dashboard powering evaluation and prompt iteration.',
          'Deployed microservices on Kubernetes with secure Postgres APIs.',
          'Instrumented tracing and metrics for model performance visibility.',
        ],
        chips: [
          { icon: <Award size={14} />, label: 'GenAI dashboard' },
          { icon: <Server size={14} />, label: 'Kubernetes' },
          { icon: <Code2 size={14} />, label: 'Postgres APIs' },
        ],
      },
      {
        role: 'Instructional Associate',
        company: 'Georgia State University',
        period: 'Aug 2024 – Dec 2024',
        initials: 'GSU',
        logoBg: 'from-indigo-500 to-cyan-500',
        bullets: [
          'Led discussions and labs; mentored students on systems & AI topics.',
          'Authored rubric-driven feedback improving assignment turnaround.',
        ],
        chips: [
          { icon: <School size={14} />, label: 'Teaching' },
          { icon: <Brain size={14} />, label: 'ML/AI' },
        ],
      },
    ],
    []
  );

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const onSubmit = (e) => {
    e.preventDefault();
    const to = 'akshitcalonia@gmail.com';
    const subject = encodeURIComponent('Portfolio Contact');
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="experience" className="relative z-0 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      {/* Soft background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute -bottom-20 right-10 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-blue-300 to-fuchsia-300">Experience</h2>
            <p className="mt-2 text-sm text-white/70">A dedicated section with visual logos and quick metrics for each role.</p>
          </div>
          <ul className="space-y-6">
            {items.map((it, idx) => (
              <TimelineItem key={idx} {...it} />
            ))}
          </ul>
        </div>

        {/* Contact card */}
        <aside className="h-max rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-[0_0_40px_rgba(168,85,247,0.15)]">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-blue-600 to-fuchsia-600 text-white shadow-[0_10px_30px_rgba(168,85,247,0.35)]">
              <Mail size={18} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white/95">Get in touch</h3>
              <p className="text-xs text-white/70">I respond within 24–48 hours.</p>
            </div>
          </div>

          <form onSubmit={onSubmit} className="mt-5 space-y-3">
            <div>
              <label className="mb-1 block text-xs text-white/70">Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/40 outline-none focus:border-fuchsia-400/60"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs text-white/70">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/40 outline-none focus:border-fuchsia-400/60"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs text-white/70">Message</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
                className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/40 outline-none focus:border-fuchsia-400/60"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-gradient-to-tr from-blue-600 via-indigo-600 to-fuchsia-600 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(99,102,241,0.35)] hover:brightness-110 transition"
            >
              Send Email
            </button>

            <p className="pt-1 text-center text-[11px] text-white/50">Sends via your mail app to akshitcalonia@gmail.com</p>
          </form>
        </aside>
      </div>
    </section>
  );
}
