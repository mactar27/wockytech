"use client";

import { motion } from "framer-motion";

const skills = [
  "Next.js", "TypeScript", "React", "Node.js",
  "PostgreSQL", "MySQL", "Spring Boot", "Flutter",
  "Tailwind CSS", "Vercel", "JWT / RBAC", "Python",
];

export function TechStack() {
  return (
    <section className="relative z-10 py-16 border-y border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-8">
        <div className="text-center space-y-2">
          <p className="text-[10px] font-black text-brand-accent uppercase tracking-[0.4em]">Stack Technique</p>
          <h2 className="text-2xl md:text-3xl font-black text-brand-navy tracking-tight">Technologies maîtrisées</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="px-4 py-2 text-xs font-bold text-brand-navy bg-slate-50 border border-slate-200 rounded-full hover:border-brand-accent hover:bg-brand-accent/5 transition-colors"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
