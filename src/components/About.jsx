import { motion } from 'framer-motion';
import { Award, BookOpen, Code2, School } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">About</h2>
            <p className="mt-4 text-neutral-300 text-lg">
              I’m Akshit Calonia, a Computer Science major at Georgia Institute of Technology. I build production-grade ML systems and cinematic, interactive interfaces that help users understand complex models.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card icon={Code2} title="Engineering" desc="Distributed systems, GenAI infra, and inference pipelines." />
              <Card icon={BookOpen} title="Research" desc="RAG, embeddings, observability, and interpretable tooling." />
              <Card icon={Award} title="Impact" desc="Low-latency serving, reliability, and scale with measurable gains." />
              <Card icon={School} title="Education" desc="B.S. Computer Science — Georgia Institute of Technology" />
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-semibold">Experience</h3>
              <div className="mt-4 space-y-5">
                <Exp
                  org="Cisco"
                  title="Machine Learning Engineering Intern"
                  date="Jun 2025 – Aug 2025 • Boulder, CO"
                  bullets={[
                    'Benchmarked vLLM and TensorRT-LLM serving LLaMA-3.1 (8B/70B) on AWS EC2 GPU clusters, achieving sub-100ms P99 latency at 2M+ daily queries.',
                    'Built FastAPI + SQLite monitoring to automate performance collection across 12+ distributed configs, cutting manual testing cycles from 3 days to 4 hours (95% efficiency gain).',
                    'Developed RAG-powered observability processing 50K+ retrievals/day with real-time anomaly detection, reducing incident troubleshooting time by 60%.',
                    'Designed fault-tolerant distributed framework coordinating metrics on 8-node GPU clusters; enabled data-driven decisions for 35% cost reduction.',
                  ]}
                />
                <Exp
                  org="AI-ALOE Research Lab"
                  title="Software Engineering Intern"
                  date="Jan 2025 – May 2025 • Atlanta, GA"
                  bullets={[
                    'Built real-time observability dashboard for 15+ GenAI agent endpoints with React + Express, reducing incident response time by 45%.',
                    'Migrated LLM-serving to Kubernetes on a 6-node cluster; improved P95 retrieval latency 40% (280ms → 168ms) and enabled 3x traffic scaling.',
                    'Designed RESTful APIs and optimized PostgreSQL for high-volume context retrieval; cut query execution from 450ms to 85ms under 100+ concurrent requests.',
                    'Implemented CI/CD with Jenkins and Git; improved reliability via automated testing and deployments.',
                  ]}
                />
                <Exp
                  org="Georgia State University"
                  title="Instructional Associate"
                  date="Aug 2024 – Dec 2024 • Atlanta, GA"
                  bullets={[
                    'Mentored 80+ students in systems programming (C, Unix/Linux, processes/threads).',
                    'Built Python-based auto-grader for 200+ submissions with memory leak detection, reducing manual grading by 40%.',
                  ]}
                />
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6"
          >
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm text-neutral-300">
              <li>• LinkedIn: <a href="https://www.linkedin.com/in/akshit-calonia/" target="_blank" rel="noreferrer" className="text-indigo-300 hover:text-indigo-200">/in/akshit-calonia</a></li>
              <li>• Email: <a href="#contact" className="text-indigo-300 hover:text-indigo-200">Get in touch below</a></li>
            </ul>
            <a href="#projects" className="mt-6 inline-block text-sm font-medium text-indigo-300 hover:text-indigo-200">Explore work →</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Card({ icon: Icon, title, desc }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500 text-white">
          <Icon size={18} />
        </span>
        <div>
          <h4 className="font-semibold">{title}</h4>
          <p className="text-sm text-neutral-300/90">{desc}</p>
        </div>
      </div>
    </div>
  );
}

function Exp({ org, title, date, bullets }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <h4 className="font-semibold leading-tight">{title}</h4>
          <p className="text-xs text-indigo-300/90">{org}</p>
        </div>
        <p className="text-xs text-neutral-400">{date}</p>
      </div>
      <ul className="mt-3 space-y-2 text-sm text-neutral-300">
        {bullets.map((b, i) => (
          <li key={i}>• {b}</li>
        ))}
      </ul>
    </div>
  );
}
