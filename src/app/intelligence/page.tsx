"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, Cpu, Shield, Globe, Database, Terminal, ShieldCheck, Zap } from "lucide-react";
import { ShootingStars } from "@/components/ui/ShootingStars";
import { CyberLayer } from "@/components/ui/CyberLayer";

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.9-.39-2.81-.12-.9.26-1.7 1-2.01 1.89-.34.91-.21 1.98.37 2.77.61.88 1.69 1.41 2.76 1.41 1.05-.01 2.06-.5 2.55-1.4.32-.57.44-1.24.44-1.89l.06-13.68c.02-.01.02-.01.03-.02z"/>
  </svg>
);

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);

export default function Intelligence() {
  return (
    <main className="min-h-screen bg-white selection:bg-brand-navy selection:text-white pb-20">
      {/* GRID BACKGROUND */}
      <ShootingStars />
      <CyberLayer />
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #0A1F44 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      {/* HEADER */}
      <nav className="relative z-10 flex justify-between items-center px-6 md:px-12 py-8 max-w-7xl mx-auto">
        <Link href="/" className="relative flex items-center justify-center hover:scale-105 transition-transform">
           <Image 
             src="/logo.png" 
             alt="WockyTech Logo" 
             width={180} 
             height={80} 
             className="object-contain"
           />
        </Link>
        
        <div className="flex items-center space-x-6">
          <div className="hidden md:flex items-center space-x-4 border-r border-slate-200 pr-6 mr-6 text-slate-400">
            <Link href="https://github.com/mactar27" target="_blank" className="hover:text-brand-navy transition-colors">
              <GithubIcon className="w-4 h-4" />
            </Link>
            <Link href="https://www.linkedin.com/in/amadou-mactar-ndiaye-306a3328a/" target="_blank" className="hover:text-brand-navy transition-colors">
              <LinkedInIcon className="w-4 h-4" />
            </Link>
            <Link href="https://www.instagram.com/wockytech/" target="_blank" className="hover:text-brand-navy transition-colors">
              <InstagramIcon className="w-4 h-4" />
            </Link>
            <Link href="https://www.tiktok.com/@wockytech0" target="_blank" className="hover:text-brand-navy transition-colors">
              <TikTokIcon className="w-4 h-4" />
            </Link>
          </div>
          <Link href="/" className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-[0.2em] text-brand-navy border border-brand-navy/20 px-4 py-2 rounded-sm hover:bg-slate-50 transition-all">
            <ChevronLeft className="w-4 h-4" />
            <span>Retour au Centre de Commande</span>
          </Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 pt-10 md:pt-20 space-y-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <h1 className="text-sm font-black text-brand-accent uppercase tracking-[0.4em]">Briefing d'Intelligence</h1>
          <p className="text-5xl md:text-7xl font-black text-brand-navy tracking-tighter italic">Vision Technique.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="prose prose-slate max-w-none"
        >
          <p className="text-2xl text-slate-600 leading-relaxed font-medium">
            Dans un monde de dépendances numériques, la <span className="text-brand-navy font-black">Souveraineté Technologique</span> n'est plus une option, c'est une nécessité vitale pour les nations et les entreprises stratégiques.
          </p>
        </motion.div>

        {/* CORE PILLARS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10">
          {[
            { t: "Architecture Souveraine", d: "Conception de systèmes isolés et sécurisés, réduisant la dépendance aux acteurs tiers.", icon: Shield },
            { t: "Données Critiques", d: "Maîtrise totale de l'intégrité et de la confidentialité des flux de données nationaux.", icon: Database },
            { t: "Innovation Indépendante", d: "Développement de solutions sur mesure (From Scratch) pour une agilité totale.", icon: Terminal }
          ].map((pillar, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + (i * 0.1) }}
              className="p-8 bg-slate-50 border border-slate-100 rounded-3xl space-y-6"
            >
              <div className="w-12 h-12 bg-brand-navy text-white rounded-xl flex items-center justify-center">
                <pillar.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy">{pillar.t}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{pillar.d}</p>
            </motion.div>
          ))}
        </div>

        {/* DETAILED EXPERTISE */}
        <div className="pt-20 space-y-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-black text-brand-navy uppercase tracking-tight">Arsenal Technique</h2>
            <div className="h-1 w-20 bg-brand-accent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-2">
                <h4 className="text-xs font-black text-brand-accent uppercase tracking-widest">Défense Full-Stack</h4>
                <p className="text-slate-600">Expertise approfondie sur Next.js, Node.js et TypeScript pour construire des interfaces résilientes et hautement interactives.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xs font-black text-brand-accent uppercase tracking-widest">Écosystèmes Enterprise</h4>
                <p className="text-slate-600">Maîtrise de Java avec Spring Boot et Angular pour le développement de solutions logicielles robustes, typées et scalables en milieu corporate.</p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="space-y-2">
                <h4 className="text-xs font-black text-brand-accent uppercase tracking-widest">Souveraineté & Backend</h4>
                <p className="text-slate-600">Développement de scripts d'automatisation en Python, de backends sécurisés en PHP et mise en place de protocoles cryptés (AES-256).</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xs font-black text-brand-accent uppercase tracking-widest">Infrastructure & Données</h4>
                <p className="text-slate-600">Conception d'architectures de données avancées avec MySQL et PostgreSQL. Focus sur l'intégrité, la haute disponibilité et le traitement massif de flux.</p>
              </div>
            </div>
          </div>
        </div>

        {/* SYSTEM ARCHITECTURE VISUALIZATION */}
        <div className="pt-20 space-y-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-black text-brand-navy uppercase tracking-tight">Architecture Opérationnelle</h2>
            <div className="h-1 w-20 bg-brand-accent" />
          </div>

          <div className="relative glass p-8 md:p-12 rounded-[3rem] border border-slate-200 overflow-hidden bg-slate-50/50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center relative z-10">
              {/* LAYER 1: ACCESS */}
              <div className="space-y-6 text-center">
                <div className="w-20 h-20 bg-white border-2 border-slate-200 rounded-3xl mx-auto flex items-center justify-center shadow-lg">
                  <Globe className="w-10 h-10 text-brand-navy" />
                </div>
                <div>
                  <h4 className="font-black text-brand-navy uppercase tracking-widest text-xs">Couche Accès</h4>
                  <p className="text-[10px] text-slate-400 font-bold">Web / Mobile / IoT</p>
                </div>
                <div className="flex justify-center">
                  <div className="w-0.5 h-12 bg-gradient-to-b from-brand-navy to-transparent" />
                </div>
              </div>

              {/* LAYER 2: SECURITY & LOGIC */}
              <div className="space-y-6 text-center">
                <div className="w-24 h-24 bg-brand-navy text-white rounded-[2rem] mx-auto flex items-center justify-center shadow-2xl relative">
                  <ShieldCheck className="w-12 h-12" />
                  <div className="absolute -inset-2 border border-brand-accent/30 rounded-[2.5rem] animate-pulse" />
                </div>
                <div>
                  <h4 className="font-black text-white bg-brand-navy px-4 py-1 rounded-full inline-block uppercase tracking-widest text-xs">Cœur Souverain</h4>
                  <p className="text-[10px] text-brand-navy font-bold mt-2">Logique Métier • Chiffrement AES-256</p>
                </div>
                <div className="flex justify-center">
                  <div className="w-0.5 h-12 bg-gradient-to-b from-brand-navy to-transparent" />
                </div>
              </div>

              {/* LAYER 3: PERSISTENCE */}
              <div className="space-y-6 text-center">
                <div className="w-20 h-20 bg-white border-2 border-slate-200 rounded-3xl mx-auto flex items-center justify-center shadow-lg">
                  <Database className="w-10 h-10 text-brand-navy" />
                </div>
                <div>
                  <h4 className="font-black text-brand-navy uppercase tracking-widest text-xs">Couche Persistance</h4>
                  <p className="text-[10px] text-slate-400 font-bold">SQL / NoSQL / Cache</p>
                </div>
              </div>
            </div>

            {/* FLOW LINES BACKGROUND */}
            <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none">
              <svg width="100%" height="100%" className="stroke-brand-navy stroke-[1]">
                <line x1="20%" y1="50%" x2="80%" y2="50%" />
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white border border-slate-100 rounded-2xl space-y-4 shadow-sm">
              <h5 className="font-black text-brand-navy text-sm uppercase tracking-widest">Intégrité des Flux</h5>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                Chaque interaction est validée par un protocole de sécurité strict, garantissant qu'aucune donnée sensible ne transite sans chiffrement de bout en bout.
              </p>
            </div>
            <div className="p-6 bg-white border border-slate-100 rounded-2xl space-y-4 shadow-sm">
              <h5 className="font-black text-brand-navy text-sm uppercase tracking-widest">Scalabilité Horizontale</h5>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                Conception modulaire permettant de supporter une montée en charge massive (High Load) sans dégradation des performances pour l'utilisateur final.
              </p>
            </div>
          </div>
        </div>

        {/* CTA SECTION */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="pt-20"
        >
          <div className="bg-brand-navy p-12 rounded-[3rem] text-white text-center space-y-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
            <h2 className="text-4xl font-black tracking-tighter">Prêt à sécuriser votre avenir numérique ?</h2>
            <p className="text-slate-300 max-w-xl mx-auto">Collaboration technique sur des projets souverains et des infrastructures critiques.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Link href="https://wa.me/221773519128" target="_blank" className="bg-white text-brand-navy px-10 py-5 rounded-sm font-black uppercase tracking-widest text-xs hover:scale-105 transition-all text-center">
                Démarrer une Consultation
              </Link>
              <Link href="/MonCv.pdf" download="MonCv.pdf" target="_blank" className="bg-brand-navy border-2 border-white/20 text-white px-10 py-5 rounded-sm font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-all text-center">
                Voir mon CV (PDF)
              </Link>
            </div>
          </div>
        </motion.div>
        {/* ARCHITECT SIGNATURE */}
        <div className="pt-32 pb-20 border-t border-slate-100">
          <div className="flex flex-col md:flex-row items-center gap-12 bg-slate-50 p-10 rounded-[40px] border border-slate-200">
            <div className="relative w-32 h-32 flex-shrink-0">
               <div className="absolute inset-0 border-2 border-brand-accent rounded-full animate-pulse opacity-20" />
               <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-brand-navy shadow-xl bg-slate-200">
                 <Image 
                   src="/passport_photo_35x45.jpg" 
                   alt="Amadou Mactar Ndiaye"
                   fill
                   priority
                   className="object-cover"
                 />
               </div>
            </div>
            <div className="space-y-4 text-center md:text-left">
               <p className="text-[10px] font-black text-brand-accent uppercase tracking-[0.4em]">Briefing signé par</p>
               <h3 className="text-3xl font-black text-brand-navy tracking-tight italic uppercase">Amadou Mactar Ndiaye</h3>
               <p className="text-slate-500 font-medium max-w-xl">
                 Architecte de solutions scalables et expert Full-Stack basé à Dakar. Engagé dans la conception d'infrastructures numériques souveraines et performantes.
               </p>
               <div className="pt-4 flex flex-wrap justify-center md:justify-start gap-4">
                 <Link href="/" className="text-[9px] font-black uppercase tracking-[0.2em] bg-white px-4 py-2 rounded-full border border-slate-200 hover:border-brand-navy transition-all">Consulter le Dossier Home</Link>
                 <a href="mailto:ndiayeamadoumactar3@gmail.com" className="text-[9px] font-black uppercase tracking-[0.2em] bg-brand-navy text-white px-4 py-2 rounded-full hover:bg-brand-accent transition-all">Ligne Directe</a>
               </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
