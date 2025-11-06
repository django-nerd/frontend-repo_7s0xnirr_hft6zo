import { motion } from 'framer-motion';
import { Award, BookOpen, Code2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">About</h2>
            <p className="mt-4 text-neutral-700 dark:text-neutral-300 text-lg">
              I’m an ML and AI Software Engineer crafting systems that think, and interfaces that feel. My work blends
              research, product, and storytelling—turning complex ideas into intuitive, interactive experiences.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card icon={Code2} title="Engineering" desc="Production-grade AI systems, agents, and inference pipelines." />
              <Card icon={BookOpen} title="Research" desc="NLP, multimodal learning, and interpretable model tooling." />
              <Card icon={Award} title="Storytelling" desc="Narrative interfaces that invite exploration and understanding." />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-neutral-200/70 dark:border-neutral-800/70 bg-white dark:bg-neutral-900 p-6"
          >
            <h3 className="font-semibold">Capabilities</h3>
            <ul className="mt-4 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
              <li>• Agentic architectures, RAG, function calling</li>
              <li>• LLM evals, prompt tooling, and metrics</li>
              <li>• WebGPU/WebAssembly accelerated inference</li>
              <li>• Full-stack product delivery with A/B experimentation</li>
            </ul>
            <a href="#contact" className="mt-6 inline-block text-sm font-medium text-indigo-600 hover:text-indigo-700">Request a collab →</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Card({ icon: Icon, title, desc }) {
  return (
    <div className="rounded-2xl border border-neutral-200/70 dark:border-neutral-800/70 bg-white dark:bg-neutral-900 p-5">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500 text-white">
          <Icon size={18} />
        </span>
        <div>
          <h4 className="font-semibold">{title}</h4>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">{desc}</p>
        </div>
      </div>
    </div>
  );
}
