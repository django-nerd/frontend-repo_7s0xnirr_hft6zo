import { motion } from 'framer-motion';
import { Sparkles, Cpu, Bot, Globe } from 'lucide-react';

const projects = [
  {
    title: 'Narrative Model Explorer',
    description: 'Interactive storytelling tool that visualizes transformer attention to explain predictions.',
    tag: 'NLP • Visualization',
    icon: Sparkles,
  },
  {
    title: 'Realtime Agentic DevOps',
    description: 'Autonomous agents coordinating CI/CD workflows with human-in-the-loop safety rails.',
    tag: 'Agents • MLOps',
    icon: Bot,
  },
  {
    title: 'Edge Vision Pipeline',
    description: 'Quantized detection running on-device with WebGPU acceleration and streaming analytics.',
    tag: 'CV • Systems',
    icon: Cpu,
  },
  {
    title: 'Generative Portfolio Engine',
    description: 'Personalized portfolio that adapts content based on visitor intent using RAG.',
    tag: 'GenAI • RAG',
    icon: Globe,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Selected Work</h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-400">A snapshot of research-meets-product builds with smooth, purposeful motion.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-neutral-200/70 dark:border-neutral-800/70 bg-white dark:bg-neutral-900 p-5 hover:shadow-xl/20 hover:shadow-indigo-500/10"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-tr from-indigo-500/10 via-violet-500/10 to-fuchsia-500/10 pointer-events-none" />
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500 text-white">
                  <p.icon size={18} />
                </span>
                <div>
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">{p.tag}</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-neutral-700 dark:text-neutral-300">{p.description}</p>
              <button className="mt-5 text-sm font-medium text-indigo-600 hover:text-indigo-700">Read case study →</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
