"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Shield, Cpu, Lock, ChevronRight, Database, Activity, ShoppingBag, Zap, MapPin, MessageCircle, ExternalLink, Megaphone, Car, TreePine, Shirt, Laptop } from "lucide-react";

const clientSites = [
  {
    name: "EZK Agency",
    url: "https://ezk-agency.vercel.app/",
    desc: "Agence de communication et marketing digital à Dakar.",
    tag: "Vercel · Test",
    icon: Megaphone,
  },
  {
    name: "Maison Auto",
    url: "https://cars-five-navy.vercel.app/",
    desc: "Vente et location de véhicules sélectionnés.",
    tag: "Vercel · Test",
    icon: Car,
  },
  {
    name: "Bergerie Malia",
    url: "https://bergerie-malia.vercel.app/",
    desc: "Élevage et sélection génétique de moutons.",
    tag: "Vercel · Test",
    icon: TreePine,
  },
  {
    name: "Swanky Factory",
    url: "https://swanky-7foa.vercel.app/",
    desc: "Manufacture B2B streetwear premium.",
    tag: "Vercel · Test",
    icon: Shirt,
  },
  {
    name: "Revotex",
    url: "https://www.revotextech.com/",
    desc: "Boutique tech premium — smartphones, ordinateurs et accessoires.",
    tag: "Production",
    icon: Laptop,
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
      <main className="min-h-screen bg-white selection:bg-brand-navy selection:text-white">
      {/* GRID BACKGROUND */}
      <ShootingStars />
      <CyberLayer />
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #0A1F44 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <Navbar />

      {/* HERO SECTION */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-8 pb-20 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-brand-accent" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Dakar, Sénégal</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-brand-navy leading-[0.92]">
              Technologies<br />
              <span className="text-slate-300">Souveraines.</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 max-w-lg leading-relaxed">
              Architecte Full-Stack — applications web et mobiles sécurisées, prêtes pour la production.
            </p>

            <div className="grid grid-cols-3 gap-4 py-4 border-y border-slate-100 max-w-md">
              {[
                { v: "6+", l: "Projets" },
                { v: "17,71", l: "Moyenne ISEP" },
                { v: "Full-Stack", l: "Expertise" },
              ].map((stat) => (
                <div key={stat.l} className="text-center">
                  <p className="text-lg font-black text-brand-navy">{stat.v}</p>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{stat.l}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="#projects"
                className="px-8 py-4 bg-brand-navy text-white font-bold uppercase tracking-widest text-xs rounded-lg shadow-lg hover:bg-brand-accent transition-colors flex items-center justify-center gap-2"
              >
                Voir mes projets
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                href="/MonCv.pdf"
                download="MonCv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-slate-200 text-brand-navy font-bold uppercase tracking-widest text-xs rounded-lg hover:bg-slate-50 transition-colors text-center"
              >
                Télécharger le CV
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -inset-8 bg-brand-navy/5 blur-3xl rounded-full" />
            <div className="relative overflow-hidden h-80 sm:h-96 md:h-[32rem] lg:h-[40rem] xl:h-[44rem] w-full rounded-2xl border border-slate-100 bg-slate-50/50">
              <Image
                src={heroImage}
                alt="Carte Afrique — WockyTech, Dakar"
                fill
                className="object-contain p-4"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      <TechStack />

      {/* LEAD ARCHITECT SECTION */}
      <section className="relative z-10 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative aspect-[35/45] w-full max-w-[320px] mx-auto"
            >
              <div className="absolute -inset-3 border border-brand-navy/10 rounded-[40px] -rotate-3" />
              <div className="absolute -inset-3 border border-brand-accent/20 rounded-[40px] rotate-3" />
              <div className="relative h-full w-full bg-slate-200 rounded-[32px] overflow-hidden shadow-2xl">
                <Image 
                  src={passportPhoto}
                  alt="Amadou Mactar Ndiaye"
                  fill
                  priority
                  className="object-cover object-top transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-[10px] font-black text-brand-accent uppercase tracking-[0.4em] mb-2">Lead Architecte</p>
                  <h3 className="text-2xl font-bold text-white tracking-tight uppercase italic underline decoration-brand-accent decoration-2 underline-offset-4">Amadou Mactar Ndiaye</h3>
                </div>
              </div>
            </motion.div>

            <div className="space-y-10">
              <div className="space-y-4">
                <h2 className="text-sm font-black text-brand-accent uppercase tracking-[0.4em]">Identité Digitale</h2>
                <h3 className="text-4xl md:text-5xl font-black text-brand-navy tracking-tighter italic">L'Ingénierie au Service de la Performance.</h3>
              </div>

              <div className="prose prose-slate max-w-none">
                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                  Basé à Dakar, je conçois et développe des applications <span className="text-brand-navy font-bold">web et mobiles robustes</span>, sécurisées et prêtes pour la production. Mon approche est orientée performance, scalabilité et qualité logicielle, avec une forte capacité à transformer un besoin métier en solution digitale complète.
                </p>
              </div>

              <div className="space-y-6 pt-6 border-t border-slate-100">
                <div className="space-y-3">
                  <h4 className="text-[10px] font-black text-brand-navy uppercase tracking-widest border-l-2 border-brand-accent pl-3">Objectif Stratégique</h4>
                  <p className="text-sm text-slate-500 leading-relaxed italic border-brand-navy pr-12">
                    Évoluer vers un rôle de <span className="text-brand-navy font-bold">Lead Développeur ou Architecte Logiciel</span>, avec une expertise forte en systèmes distribués et applications à forte charge.
                  </p>
                </div>

                <div className="pt-6">
                   <Link href="/MonCv.pdf" download="MonCv.pdf" className="inline-flex items-center space-x-3 text-[10px] font-black uppercase tracking-[0.3em] text-brand-navy hover:text-brand-accent transition-colors">
                      <span>Télécharger le Dossier Complet</span>
                      <Activity className="w-4 h-4" />
                   </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SYSTEMS (Projects) */}
      <section id="projects" className="relative z-10 py-32 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="space-y-4">
              <h2 className="text-sm font-black text-brand-accent uppercase tracking-[0.4em]">Systèmes Coeur</h2>
              <p className="text-4xl md:text-5xl font-black text-brand-navy tracking-tighter italic">Unités Opérationnelles.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* SGOP SYSTEM CARD */}
            <Link href="/sgop">
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="relative z-20 bg-white border-2 border-brand-navy/5 p-8 rounded-3xl shadow-xl hover:border-brand-navy/30 transition-all group cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-accent/0 via-brand-accent/[0.03] to-brand-accent/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-navy/5 rounded-bl-full -mr-10 -mt-10" />
                <div className="w-16 h-16 bg-brand-navy text-white rounded-2xl flex items-center justify-center mb-10 shadow-xl relative z-10 group-hover:bg-brand-accent transition-colors">
                  <Shield className="w-8 h-8" />
                </div>
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-[11px] font-black text-brand-accent uppercase tracking-widest">Projet Souverain</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                </div>
                <h3 className="text-3xl font-black text-brand-navy mb-6 tracking-tighter uppercase italic leading-none">SGOP Portail</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-10 group-hover:text-slate-700 transition-colors">
                  Infrastructure critique pour la Police Nationale. Centralisation des flux et monitoring temps réel.
                </p>
                <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-[0.3em] text-brand-navy border-t border-slate-50 pt-8">
                  <span>Accéder au Briefing</span>
                  <ChevronRight className="w-4 h-4 text-brand-accent" />
                </div>
              </motion.div>
            </Link>

            {/* LUMOROPTIC CARD */}
            <Link href="/lumoroptic">
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="relative z-20 bg-white border border-slate-200 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:border-brand-navy/20 transition-all group cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-accent/0 via-brand-accent/[0.03] to-brand-accent/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none" />
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-10 border border-slate-100 group-hover:bg-brand-navy group-hover:text-white transition-colors">
                  <Database className="w-8 h-8" />
                </div>
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest text-slate-400">Fournisseur Verrier B2B</span>
                </div>
                <h3 className="text-3xl font-black text-brand-navy mb-6 tracking-tighter uppercase italic leading-none">Lumoroptic</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-10 group-hover:text-slate-700 transition-colors">
                  Site épuré pour opticiens : saisir le client, la correction, et commander les verres chez le fournisseur.
                </p>
                <div className="flex justify-between items-center text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 border-t border-slate-50 pt-8">
                  <span>Vues Opérationnelles</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </motion.div>
            </Link>

            {/* NOSTOPP CARD */}
            <Link href="/nostopp">
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="relative z-20 bg-white border border-slate-200 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:border-brand-navy/20 transition-all group cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-accent/0 via-brand-accent/[0.03] to-brand-accent/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none" />
                <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mb-10 border border-slate-100 group-hover:border-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-colors">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest text-slate-400">Moteur de Marque</span>
                </div>
                <h3 className="text-3xl font-black text-brand-navy mb-6 tracking-tighter uppercase italic leading-none">Nostopp</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-10 group-hover:text-slate-700 transition-colors">
                  Moteur e-commerce personnalisé. Gestion autonome des produits, des commandes et expérience client optimisée.
                </p>
                <div className="flex justify-between items-center text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 border-t border-slate-50 pt-8">
                  <span>Vues E-commerce</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </motion.div>
            </Link>
          </div>

          {/* CLIENT WEBSITES */}
          <div className="pt-20 border-t border-slate-100 space-y-10">
            <div className="space-y-3 max-w-2xl">
              <h3 className="text-sm font-black text-brand-accent uppercase tracking-[0.4em]">Réalisations Web</h3>
              <p className="text-2xl md:text-3xl font-black text-brand-navy tracking-tight">Sites clients livrés.</p>
              <p className="text-sm text-slate-500 leading-relaxed">
                J&apos;ai également conçu et développé ces sites pour des clients. La plupart sont hébergés sur{" "}
                <span className="font-bold text-brand-navy">Vercel</span>, en phase de test avant mise en production définitive.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-brand-navy group-hover:text-white transition-colors">
                      <site.icon className="w-5 h-5" />
                    </div>
                    <span
                      className={`text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-full ${
                        site.tag === "Production"
                          ? "bg-green-50 text-green-700 border border-green-200"
                          : "bg-slate-50 text-slate-500 border border-slate-200"
                      }`}
                    >
                      {site.tag}
                    </span>
                  </div>
                  <h4 className="text-lg font-black text-brand-navy mb-2 group-hover:text-brand-accent transition-colors">
                    {site.name}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed flex-1">{site.desc}</p>
                  <span className="inline-flex items-center gap-1.5 mt-4 text-[10px] font-black uppercase tracking-widest text-brand-navy">
                    Visiter le site
                    <ExternalLink className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* OTHER PROJECTS */}
          <div className="pt-16 border-t border-slate-100">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-8">Autres expériences</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
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
                  { l: "Architecture", v: "Next.js / Node.js", d: "Systèmes Full-Stack modernes et performants." },
                  { l: "Langages", v: "TypeScript / React", d: "Développement typé et interfaces réactives." },
                  { l: "Sécurité Étatique", v: "RBAC / AES-256", d: "Protection des données sensibles et gestion des flux." },
                  { l: "Souveraineté", v: "Infrastructure Dédiée", d: "Maîtrise totale du déploiement et des données." }
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
            <p className="text-4xl md:text-5xl font-black text-brand-navy tracking-tighter italic">Méthodologie d'Exécution.</p>
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
            "La souveraineté numérique est le fondement de l'indépendance moderne. Construisons ensemble vos infrastructures critiques."
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
