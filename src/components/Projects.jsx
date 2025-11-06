import { motion } from 'framer-motion';
import { Server, FileSpreadsheet, Music } from 'lucide-react';

const projects = [
  {
    title: 'Distributed Trading Analytics Platform (DTAP)',
    role: 'Product Developer',
    description:
      'Architected cloud-native microservices on AWS with Java Spring and Oracle DB, optimized for 10K+ concurrent transactions. Designed load-balanced, containerized deployments with CI/CD on AWS achieving 99.9% availability.',
    tags: ['AWS', 'Java Spring', 'Oracle DB', 'Kubernetes', 'CI/CD'],
    icon: Server,
  },
  {
    title: 'InsightSheet: RAG for Excel',
    role: 'Product Developer',
    description:
      'Built a Retrieval-Augmented Generation interface for Excel using OpenAI + LangChain. Implemented custom embeddings with FAISS and cosine similarity for structured cell retrieval and reranking.',
    tags: ['RAG', 'LangChain', 'FAISS', 'OpenAI'],
    icon: FileSpreadsheet,
  },
  {
    title: 'SPOT - Music Discovery Extension',
    role: 'Builder',
    description:
      'Published an NLP-powered Chrome extension enabling cross-platform playlist syncing between Spotify and Apple Music. Integrated Google Analytics for engagement insights.',
    tags: ['Chrome Ext', 'NLP', 'Spotify', 'Apple Music'],
    icon: Music,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Selected Projects</h2>
          <p className="mt-3 text-neutral-400">Systems that scale, interfaces that explain.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5 hover:shadow-xl/20 hover:shadow-indigo-500/10"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-tr from-indigo-500/10 via-violet-500/10 to-fuchsia-500/10 pointer-events-none" />
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500 text-white">
                  <p.icon size={18} />
                </span>
                <div>
                  <h3 className="font-semibold leading-tight">{p.title}</h3>
                  {p.role && <p className="text-xs text-indigo-300/90">{p.role}</p>}
                </div>
              </div>
              <p className="mt-4 text-sm text-neutral-300">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-[11px] rounded-md border border-white/10 bg-white/5 px-2 py-1 text-indigo-200/90">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
