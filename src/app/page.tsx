"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Shield, Cpu, Lock, ChevronRight, Database, Activity, ShoppingBag, Zap, MapPin, MessageCircle, ExternalLink, Megaphone, Car, TreePine, Shirt, Laptop, Calendar, ArrowRight, Download, Coffee, Palette, Smartphone, ShoppingCart, Bot, Cloud } from "lucide-react";

const NonstoppIcon = ({ className }: { className?: string }) => <img src="/nonstop-logo.png" alt="Nonstopp" className={`w-6 h-6 object-contain ${className || ""}`} />;
const YombectyiIcon = ({ className }: { className?: string }) => <img src="/logo%202.png" alt="Yombectyi" className={`w-6 h-6 object-contain ${className || ""}`} />;
const KayNdekiIcon = ({ className }: { className?: string }) => <img src="/kay-ndeki-logo.jpeg" alt="Kay-Ndeki" className={`w-6 h-6 object-contain rounded-full ${className || ""}`} />;
const EZKAgencyIcon = ({ className }: { className?: string }) => <img src="/eze.jpeg" alt="EZK Agency" className={`w-6 h-6 object-contain rounded-full ${className || ""}`} />;
const RevotexIcon = ({ className }: { className?: string }) => <img src="/revotex.png" alt="Revotex" className={`w-6 h-6 object-contain rounded-full ${className || ""}`} />;
const SwankyIcon = ({ className }: { className?: string }) => <img src="/swanky.png" alt="Swanky Factory" className={`w-6 h-6 object-contain rounded-full ${className || ""}`} />;
const MaliaIcon = ({ className }: { className?: string }) => <img src="/malia-logo.png" alt="Bergerie Malia" className={`w-6 h-6 object-contain rounded-full bg-white ${className || ""}`} />;
const MaisonAutoIcon = ({ className }: { className?: string }) => <img src="/maison-auto-logo.png" alt="Maison Auto" className={`w-6 h-6 object-contain rounded-full bg-white ${className || ""}`} />;
const BaolabIcon = ({ className }: { className?: string }) => <img src="/baolab-logo.png" alt="Baolab Multimedia" className={`w-6 h-6 object-contain rounded-full bg-white ${className || ""}`} />;

const clientSites = [
  {
    name: "Nonstopp",
    url: "https://nonstopp.shop/",
    desc: "Plateforme e-commerce performante et sur-mesure.",
    tag: "Production",
    icon: NonstoppIcon,
  },
  {
    name: "Yombectyi",
    url: "https://www.yombectyi.shop/",
    desc: "Boutique de vente en ligne rapide et intuitive.",
    tag: "Production",
    icon: YombectyiIcon,
  },
  {
    name: "Kay-Ndeki",
    url: "https://www.kay-ndeki.com/",
    desc: "Service de livraison de petits déjeuners et repas.",
    tag: "Production",
    icon: KayNdekiIcon,
  },
  {
    name: "EZK Agency",
    url: "https://www.ezkagency.com/",
    desc: "Agence de communication et marketing digital à Dakar.",
    tag: "Production",
    icon: EZKAgencyIcon,
  },
  {
    name: "Maison Auto",
    url: "https://cars-five-navy.vercel.app/",
    desc: "Vente et location de véhicules sélectionnés.",
    tag: "Vercel · Test",
    icon: MaisonAutoIcon,
  },
  {
    name: "Bergerie Malia",
    url: "https://bergerie-malia.vercel.app/",
    desc: "Élevage et sélection génétique de moutons.",
    tag: "Vercel · Test",
    icon: MaliaIcon,
  },
  {
    name: "Swanky Factory",
    url: "https://swanky-7foa.vercel.app/",
    desc: "Manufacture B2B streetwear premium.",
    tag: "Vercel · Test",
    icon: SwankyIcon,
  },
  {
    name: "Revotex",
    url: "https://www.revotextech.com/",
    desc: "Boutique tech premium — smartphones, ordinateurs et accessoires.",
    tag: "Production",
    icon: RevotexIcon,
  },
  {
    name: "BAOLAB INFO",
    url: "https://baolab-multimedia.com/",
    desc: "La technologie qu'il vous faut : vente de matériels informatiques, maintenance et services.",
    tag: "Production",
    icon: BaolabIcon,
  },
] as const;
import { ShootingStars } from "@/components/ui/ShootingStars";
import { CyberLayer } from "@/components/ui/CyberLayer";
import { CyberQRCode } from "@/components/ui/CyberQRCode";
import { FirstVisitGate } from "@/components/ui/FirstVisitGate";
import { TechStack } from "@/components/ui/TechStack";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { heroImage, passportPhoto } from "@/lib/images";

export default function Home() {
  return (
    <FirstVisitGate>
      <main className="min-h-screen bg-[#F0F3FA] selection:bg-brand-navy selection:text-white">
      {/* GRID BACKGROUND */}
      <ShootingStars />
      <CyberLayer />
      <div className="fixed inset-0 z-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #0A1F44 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <Navbar />

      {/* HERO SECTION */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-6 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-stretch">
          {/* LEFT: Text column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-between py-6 space-y-8"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-accent/20 bg-brand-accent/5 text-brand-accent">
                <MapPin className="w-3 h-3" />
                <span className="text-[9px] font-bold uppercase tracking-[0.2em]">Dakar, Sénégal</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-brand-navy leading-[0.9]">
                Technologies<br />
                <span className="text-brand-accent">Souveraines.</span>
              </h1>

              <p className="text-base text-slate-500 max-w-sm leading-relaxed">
                Architecte Full-Stack & Designer Multimédia — Créateur d&apos;expériences digitales sûres et immersives.
              </p>
            </div>

            {/* Stats cards */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { v: "6+", l: "Projets", icon: Calendar },
                { v: "17.71", l: "Moyenne\nISEP", icon: Activity },
                { v: "Dev & Design", l: "Expertise", icon: Palette },
              ].map((stat) => (
                <div key={stat.l} className="flex items-center gap-3 px-4 py-4 border border-slate-200/80 rounded-2xl bg-white shadow-sm">
                  <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                    <stat.icon className="w-4 h-4 text-brand-accent" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <p className="text-sm font-black text-brand-navy leading-tight truncate">{stat.v}</p>
                    <p className="text-[7px] font-bold text-slate-400 uppercase tracking-[0.15em] mt-0.5 whitespace-pre-line">{stat.l}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="#projects"
                className="px-7 py-3.5 bg-brand-navy text-white font-bold uppercase tracking-[0.15em] text-[10px] rounded-xl shadow-lg hover:bg-brand-accent transition-colors flex items-center justify-center gap-2"
              >
                Voir mes projets
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/MonCv.pdf"
                download="MonCv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 border border-slate-200 text-brand-navy font-bold uppercase tracking-[0.15em] text-[10px] rounded-xl hover:bg-white hover:shadow-md transition-all flex items-center justify-center gap-2 bg-white/60"
              >
                Télécharger le CV
                <Download className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Security badge */}
            <div className="flex items-center gap-3 pt-2">
              <div className="w-8 h-8 rounded-lg bg-brand-accent/10 flex items-center justify-center shrink-0">
                <Shield className="w-4 h-4 text-brand-accent" />
              </div>
              <div>
                <p className="text-[8px] font-bold text-brand-accent uppercase tracking-[0.25em]">Souveraineté · Sécurité · Performance</p>
                <p className="text-[9px] font-black text-brand-navy uppercase tracking-widest">Encryption: AES-256</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Map card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="relative"
          >
            <div className="relative h-full min-h-[480px] lg:min-h-0 rounded-[28px] border border-slate-200/60 bg-white/70 overflow-hidden shadow-sm">
              {/* Subtle gradient in card */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 via-transparent to-brand-accent/3" />
              
              <Image
                src={heroImage}
                alt="Carte Afrique — WockyTech, Dakar"
                fill
                className="object-contain p-6"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />

              {/* Vertical text on right edge */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-1">
                {"DAKAR · SN · NODE · STABLE · ENCRYPTION · AES-256".split(" · ").map((word, i) => (
                  <span key={i} className="text-[7px] font-black uppercase tracking-[0.3em] text-slate-300" style={{ writingMode: 'vertical-rl' }}>{word}</span>
                ))}
              </div>

              {/* WockyTech watermark bottom right */}
              <div className="absolute bottom-4 right-4 w-9 h-9 rounded-xl border border-slate-200 bg-white flex items-center justify-center shadow-sm">
                <span className="text-sm font-black text-brand-navy">W</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <TechStack />

      {/* LEAD ARCHITECT SECTION */}
      <section className="relative z-10 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="bg-brand-navy rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center relative z-10">
              <div className="lg:col-span-2">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="relative aspect-square w-full max-w-[320px] mx-auto overflow-hidden rounded-2xl"
                >
                  <div className="absolute inset-0 bg-brand-accent/20 blur-3xl rounded-full" />
                  <Image 
                    src={passportPhoto}
                    alt="Amadou Mactar Ndiaye"
                    fill
                    priority
                    className="object-cover object-top relative z-10"
                  />
                </motion.div>
              </div>

              <div className="lg:col-span-3 space-y-8 text-white">
                <div className="space-y-3">
                  <h2 className="text-xs font-black text-brand-accent uppercase tracking-[0.4em]">Identité Digitale</h2>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight">L&apos;Ingénierie au Service<br/>de la Performance.</h3>
                </div>

                <div className="space-y-4">
                  <p className="text-sm md:text-base text-slate-300 leading-relaxed font-medium">
                    Basé à Dakar, je conçois des <span className="text-white font-bold">identités visuelles percutantes</span> et développe des applications <span className="text-white font-bold">web et mobiles robustes</span>.
                  </p>
                  <p className="text-sm md:text-base text-slate-300 leading-relaxed font-medium">
                    Ma double casquette de Développeur et d&apos;Infographiste me permet de maîtriser l&apos;intégralité du cycle de vie d&apos;un projet : de la création de maquettes UI/UX et bannières jusqu&apos;à la mise en production sécurisée.
                  </p>
                </div>

                <div className="pt-4">
                  <Link href="/MonCv.pdf" download="MonCv.pdf" className="inline-flex items-center space-x-2 text-xs font-bold text-brand-accent hover:text-white transition-colors uppercase tracking-wider">
                    <span>En savoir plus</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SYSTEMS (Projects) */}
      <section id="projects" className="relative z-10 py-16 bg-white border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-8">
          <div className="space-y-2">
            <h2 className="text-[10px] font-black text-brand-accent uppercase tracking-[0.4em]">Systèmes Cœur</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* SGOP SYSTEM CARD */}
            <Link href="/sgop">
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="relative h-full bg-white border border-slate-200 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:border-brand-navy/20 transition-all flex flex-col"
              >
                <div className="w-12 h-12 bg-slate-50 border border-slate-100 text-brand-navy rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6" />
                </div>
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Projet Souverain</span>
                </div>
                <h3 className="text-2xl font-black text-brand-navy mb-4 tracking-tighter uppercase italic">SGOP Portail</h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-8 flex-1">
                  Infrastructure critique pour la Police Nationale. Centralisation des flux et monitoring temps réel.
                </p>
                <div className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-[0.2em] text-brand-accent mt-auto">
                  <span>Accéder au Briefing</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            </Link>

            {/* LUMOROPTIC CARD */}
            <Link href="/lumoroptic">
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="relative h-full bg-white border border-slate-200 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:border-brand-navy/20 transition-all flex flex-col"
              >
                <div className="w-12 h-12 bg-slate-50 border border-slate-100 text-brand-navy rounded-xl flex items-center justify-center mb-6">
                  <Database className="w-6 h-6" />
                </div>
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Fournisseur Verrier B2B</span>
                </div>
                <h3 className="text-2xl font-black text-brand-navy mb-4 tracking-tighter uppercase italic">Lumoroptic</h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-8 flex-1">
                  Site épuré pour opticiens : saisir le client, la correction, et commander les verres chez le fournisseur.
                </p>
                <div className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-[0.2em] text-brand-accent mt-auto">
                  <span>Vues Opérationnelles</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            </Link>

            {/* NOSTOPP CARD */}
            <Link href="/nostopp">
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="relative h-full bg-white border border-slate-200 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:border-brand-navy/20 transition-all flex flex-col"
              >
                <div className="w-12 h-12 bg-slate-50 border border-slate-100 text-brand-navy rounded-xl flex items-center justify-center mb-6">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Moteur de Marque</span>
                </div>
                <h3 className="text-2xl font-black text-brand-navy mb-4 tracking-tighter uppercase italic">Nostopp</h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-8 flex-1">
                  Moteur e-commerce personnalisé. Gestion autonome des produits, des commandes et expérience client optimisée.
                </p>
                <div className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-[0.2em] text-brand-accent mt-auto">
                  <span>Vues E-commerce</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            </Link>
          </div>

          {/* CLIENT WEBSITES */}
          <div className="pt-20 border-t border-slate-100 flex flex-col lg:flex-row gap-12">
            <div className="space-y-4 max-w-sm lg:w-1/4 shrink-0">
              <h3 className="text-[10px] font-black text-brand-accent uppercase tracking-[0.4em]">Réalisations Web</h3>
              <p className="text-3xl font-black text-brand-navy tracking-tight">Sites clients livrés.</p>
              <p className="text-sm text-slate-500 leading-relaxed">
                Des solutions digitales déployées sur Vercel, testées et optimisées pour la production.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:w-3/4">
              {clientSites.map((site, i) => (
                <motion.a
                  key={site.url}
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group flex flex-col p-6 bg-white border border-slate-200 rounded-2xl hover:border-brand-accent/40 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-navy">
                        <site.icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-black text-brand-navy">{site.name}</h4>
                    </div>
                    <span className="text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-full bg-slate-50 text-slate-400 border border-slate-200">
                      {site.tag}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed flex-1 mb-4">{site.desc}</p>
                  <div className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-[0.2em] text-brand-accent mt-auto">
                    <span>Visiter le site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>



          {/* OTHER PROJECTS */}
          <div className="pt-16 border-t border-slate-100">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-8">Autres expériences</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { t: "Design UI/UX & Infographie", d: "Création de maquettes (Figma) et de visuels (Adobe CC/Canva).", i: Palette },
                { t: "Architecture Bancaire", d: "Application mobile sécurisée développée sous Flutter & Firebase.", i: Activity },
                { t: "Full-Stack Sécurité", d: "Système d'entreprise (Spring Boot + Angular) avec authentification JWT.", i: Lock },
                { t: "YOON (Mobile PFF)", d: "Application mobile native (React Native) optimisée pour la performance.", i: Zap },
              ].map((other, idx) => (
                <div key={idx} className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <other.i className="w-5 h-5 text-brand-accent" />
                    <h4 className="text-sm font-black text-brand-navy uppercase tracking-widest">{other.t}</h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-medium">{other.d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* TECHNICAL ARSENAL SECTION */}
          <div className="pt-20">
            <div className="bg-brand-navy rounded-3xl p-12 md:p-20 text-white space-y-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-white opacity-[0.02] -skew-x-12" />
              <div className="relative z-10 space-y-4">
                <h2 className="text-sm font-black text-brand-accent uppercase tracking-[0.5em]">Arsenal Technique</h2>
                <h3 className="text-4xl md:text-5xl font-black tracking-tighter italic uppercase underline decoration-brand-accent decoration-4 underline-offset-8">Capacités Coeur.</h3>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                {[
                  { l: "Design & UI/UX", v: "Photoshop / Illustrator / Canva / Figma", d: "Conception graphique, bannières, maquettes et identité visuelle." },
                  { l: "Architecture", v: "Next.js / Node.js", d: "Systèmes Full-Stack modernes et performants." },
                  { l: "Langages", v: "TypeScript / React", d: "Développement typé et interfaces réactives." },
                  { l: "Sécurité & Souveraineté", v: "RBAC / AES-256", d: "Protection des données et infrastructure dédiée." }
                ].map((skill, i) => (
                  <div key={i} className="space-y-3">
                    <p className="text-[10px] font-black text-brand-accent uppercase tracking-[0.2em]">{skill.l}</p>
                    <p className="text-xl font-bold tracking-tight text-white">{skill.v}</p>
                    <p className="text-xs text-slate-400 leading-relaxed">{skill.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METHODOLOGY SECTION */}
      <section className="relative z-10 py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-20">
          <div className="text-center space-y-4">
            <h2 className="text-sm font-black text-brand-accent uppercase tracking-[0.4em]">Processus Stratégique</h2>
            <p className="text-4xl md:text-5xl font-black text-brand-navy tracking-tighter italic">Méthodologie d&apos;Exécution.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { n: "01", t: "Audit & Briefing", d: "Analyse des besoins métiers et contraintes de sécurité.", icon: Activity },
              { n: "02", t: "Architecture", d: "Systèmes typés, isolés et haute disponibilité.", icon: Shield },
              { n: "03", t: "Déploiement", d: "Mise en production et monitoring temps réel.", icon: Cpu },
              { n: "04", t: "Sécurisation", d: "Chiffrement, audit et maintenance proactive.", icon: Lock },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-white border border-slate-100 rounded-2xl hover:border-brand-accent/30 hover:shadow-lg transition-all space-y-5"
              >
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 bg-brand-navy/5 rounded-xl flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-brand-navy" />
                  </div>
                  <span className="text-2xl font-black text-slate-100">{step.n}</span>
                </div>
                <h3 className="text-lg font-bold text-brand-navy">{step.t}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* CONTACT SECTION */}
      <section id="contact" className="relative z-10 py-32 bg-brand-navy text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-xs font-black text-brand-accent uppercase tracking-[0.5em]">Liaison Sécurisée</h2>
            <p className="text-4xl md:text-6xl font-black tracking-tighter italic uppercase">Démarrer une Collaboration.</p>
          </div>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto italic">
            &quot;La souveraineté numérique est le fondement de l&apos;indépendance moderne. Construisons ensemble vos infrastructures critiques.&quot;
          </p>

          <div className="pt-8 flex flex-col lg:flex-row items-center justify-center gap-12">
            <div className="flex flex-col items-center space-y-8">
              <a 
                href="mailto:ndiayeamadoumactar3@gmail.com" 
                className="group relative inline-flex flex-col items-center p-8 border border-white/10 rounded-3xl hover:bg-white/5 transition-all w-full md:w-auto"
              >
                <span className="text-[10px] font-black text-brand-accent uppercase tracking-[0.4em] mb-2 text-center">Canal Email Officiel</span>
                <span className="text-2xl md:text-3xl font-bold tracking-tight text-white group-hover:text-brand-accent transition-colors break-all">
                  ndiayeamadoumactar3@gmail.com
                </span>
              </a>

              <Link
                href="https://wa.me/221773519128"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/20 text-sm font-bold text-white hover:bg-white/10 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-brand-accent" />
                WhatsApp Direct
              </Link>
            </div>

            <motion.div 
              initial={{ opacity: 0, rotate: 10 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              className="relative"
            >
              <CyberQRCode />
              <div className="absolute -inset-4 border border-brand-accent/20 rounded-3xl -z-10 animate-pulse" />
            </motion.div>
          </div>
        </div>
      </section>

        <Footer />
      </main>
    </FirstVisitGate>
  );
}
