"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  ChevronLeft, 
  Cpu, 
  Shield, 
  Globe, 
  Database, 
  Terminal, 
  ShieldCheck, 
  Zap, 
  ArrowRight,
  MapPin,
  CheckCircle2,
  Code2,
  Lock,
  Layers,
  Award
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { passportPhoto } from "@/lib/images";

export default function Intelligence() {
  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-16">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[11px] font-bold tracking-wider text-blue-600 uppercase">
            <Cpu className="w-3.5 h-3.5" />
            <span>BRIEFING TECHNIQUE · VISION & SOUVERAINETÉ</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
            Vision Technique &<br />
            <span className="text-blue-600">Intelligence Souveraine.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Dans un monde de dépendances numériques complexes, la souveraineté technologique est une nécessité absolue. WockyTech conçoit des architectures isolées, hautement sécurisées et résilientes pour protéger vos systèmes critiques.
          </p>
        </div>

        {/* 3 CORE PILLARS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
          {[
            { 
              title: "Architecture Souveraine", 
              desc: "Conception de systèmes isolés et sécurisés, réduisant la dépendance aux infrastructures et acteurs tiers.",
              icon: Shield 
            },
            { 
              title: "Données Critiques", 
              desc: "Maîtrise totale de l'intégrité et de la confidentialité des flux de données avec chiffrement AES-256.",
              icon: Database 
            },
            { 
              title: "Innovation Indépendante", 
              desc: "Développement de solutions sur mesure de l'idée jusqu'à la mise en production en totale autonomie.",
              icon: Terminal 
            }
          ].map((pillar, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-slate-50/80 border border-slate-200/80 rounded-2xl space-y-4 hover:border-blue-200 hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center shadow-xs">
                <pillar.icon className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{pillar.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ARSENAL TECHNIQUE (DETAILED EXPERTISE) */}
      <section className="py-16 bg-slate-50/70 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          <div className="space-y-2">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">CAPACITÉS INGÉNIERIE</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
              Arsenal & Maîtrise Multi-Environnement
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-2xl border border-slate-200/80 shadow-2xs space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Code2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Défense Full-Stack & Frontend</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Expertise sur Next.js 16, React 19, Node.js et TypeScript pour construire des interfaces résilientes, accessibles et hautement réactives.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl border border-slate-200/80 shadow-2xs space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Écosystèmes Enterprise & Spring</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Maîtrise de Java avec Spring Boot et Angular pour le développement de solutions d&apos;entreprise typées, robustes et hautement scalables.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl border border-slate-200/80 shadow-2xs space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Lock className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Backend & Sécurité Chiffrée</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Développement de scripts d&apos;automatisation en Python, de backends sécurisés PHP et mise en place de protocoles de chiffrement fort (AES-256).
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl border border-slate-200/80 shadow-2xs space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Database className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Infrastructure & Données Scalables</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Conception d&apos;architectures de données avancées avec MySQL et PostgreSQL. Focus sur la haute disponibilité et le traitement massif de requêtes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SYSTEM ARCHITECTURE VISUALIZATION */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        <div className="space-y-2">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">ARCHITECTURE MODULAIRE</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
            Flux & Découpage Opérationnel
          </h2>
        </div>

        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            
            {/* LAYER 1: ACCESS */}
            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700 text-center space-y-4">
              <div className="w-14 h-14 bg-blue-600/20 border border-blue-500/30 text-blue-400 rounded-2xl mx-auto flex items-center justify-center">
                <Globe className="w-7 h-7" />
              </div>
              <div>
                <h4 className="font-bold text-white uppercase tracking-wider text-xs">Couche Accès</h4>
                <p className="text-[11px] text-slate-400 font-medium mt-1">Web • Mobile Native • APIs</p>
              </div>
            </div>

            {/* LAYER 2: SECURITY & LOGIC */}
            <div className="p-6 rounded-2xl bg-blue-600 text-center space-y-4 shadow-lg shadow-blue-600/20">
              <div className="w-14 h-14 bg-white/10 border border-white/20 text-white rounded-2xl mx-auto flex items-center justify-center">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div>
                <h4 className="font-bold text-white uppercase tracking-wider text-xs">Cœur Souverain</h4>
                <p className="text-[11px] text-blue-100 font-medium mt-1">Logique Métier • Chiffrement AES-256</p>
              </div>
            </div>

            {/* LAYER 3: PERSISTENCE */}
            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700 text-center space-y-4">
              <div className="w-14 h-14 bg-blue-600/20 border border-blue-500/30 text-blue-400 rounded-2xl mx-auto flex items-center justify-center">
                <Database className="w-7 h-7" />
              </div>
              <div>
                <h4 className="font-bold text-white uppercase tracking-wider text-xs">Couche Persistance</h4>
                <p className="text-[11px] text-slate-400 font-medium mt-1">SQL • NoSQL • Cache Redis</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 space-y-3">
            <h4 className="font-bold text-slate-900 text-sm">Intégrité des Flux & Sécurité</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Chaque interaction est validée par un protocole de sécurité strict, garantissant qu&apos;aucune donnée sensible ne transite sans chiffrement de bout en bout.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 space-y-3">
            <h4 className="font-bold text-slate-900 text-sm">Scalabilité Horizontale</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Conception modulaire permettant de supporter une montée en charge massive sans dégradation des performances pour l&apos;utilisateur final.
            </p>
          </div>
        </div>
      </section>

      {/* ARCHITECT PROFILE SIGNATURE */}
      <section className="py-16 bg-slate-50 border-t border-slate-100 max-w-7xl mx-auto px-6 md:px-12 rounded-3xl mb-16">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="relative w-32 h-32 shrink-0 rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
            <Image 
              src={passportPhoto} 
              alt="Amadou Mactar Ndiaye"
              fill
              priority
              className="object-cover object-top"
            />
          </div>

          <div className="space-y-3 text-center md:text-left">
            <p className="text-[11px] font-bold text-blue-600 uppercase tracking-widest">BRIEFING INGÉNIERIE WOCKYTECH</p>
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">Amadou Mactar Ndiaye</h3>
            <p className="text-xs md:text-sm text-slate-600 max-w-2xl leading-relaxed">
              Architecte de solutions scalables & Lead Développeur Full-Stack basé à Dakar. Engagé dans la conception d&apos;infrastructures numériques sécurisées, performantes et souveraines.
            </p>
            <div className="pt-2 flex flex-wrap justify-center md:justify-start gap-3">
              <Link href="/" className="text-xs font-semibold bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all">
                Page d&apos;Accueil WockyTech
              </Link>
              <a href="mailto:ndiayeamadoumactar3@gmail.com" className="text-xs font-semibold bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all">
                Ligne Directe Email
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
