"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Shield, Cpu, Lock, ChevronRight, Globe, Database, Terminal, X, ExternalLink, Activity, ShoppingBag, Zap, Smartphone, Code } from "lucide-react";
import { ShootingStars } from "@/components/ui/ShootingStars";
import { CyberLayer } from "@/components/ui/CyberLayer";
import { CyberQRCode } from "@/components/ui/CyberQRCode";
import { SplashScreen } from "@/components/ui/SplashScreen";
import { RecommendationSection } from "@/components/ui/RecommendationSection";

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

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<null | 'sgop' | 'lumor' | 'nostopp'>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Scroll lock when modal or splash is active
  useEffect(() => {
    if (selectedProject || !isLoaded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject, isLoaded]);

  const projects = {
    sgop: {
      title: "SGOP Portail",
      tagline: "Briefing de Sécurité • Système-7",
      desc: "Système de Gestion Opérationnelle de la Police : Une infrastructure souveraine conçue pour l'administration moderne du Sénégal.",
      stack: [
        { l: "Architecture", v: "Next.js / Node.js" },
        { l: "Langage", v: "TypeScript Full-Stack" },
        { l: "Sécurité", v: "AES-256 / RBAC / MFA" },
        { l: "Performance", v: "Vercel Edge Runtime" }
      ],
      views: [
        { t: "Portail d'Accès Sécurisé", d: "Interface d'authentification robuste avec gestion des rôles (RBAC) pour une sécurité maximale.", img: "/sgop-splash.png" },
        { t: "Tableau de Bord Stratégique", d: "Vue globale des opérations et monitoring temps réel pour la prise de décision.", img: "/sgop-dash.png" },
        { t: "Services Citoyens", d: "Interface optimisée pour les interactions entre la population et l'administration.", img: "/sgop-citizen.png" },
        { t: "Hub de Cybersécurité", d: "Console de supervision des menaces avec validation stricte des flux de données.", img: "/sgop-cyber.png" }
      ]
    },
    lumor: {
      title: "Lumoroptic",
      tagline: "Briefing Logistique • Nœud B2B",
      desc: "Plateforme SaaS d'optimisation logistique pour l'industrie optique. Automatisation des commandes, gestion de stocks matriciels et flux B2B complexes.",
      stack: [
        { l: "Plateforme", v: "Next.js / Tailwind" },
        { l: "Moteur de Stock", v: "Matrice SPH/CYL" },
        { l: "Business", v: "B2B Sécurisé / Auth" },
        { l: "Sortie", v: "Cycle de Vie Automatisé" }
      ],
      views: [
        { t: "Identité de Marque", d: "Interface de chargement épurée centrée sur la clarté et l'identité visuelle de la marque.", img: "/lumor-splash.png" },
        { t: "Authentification B2B", d: "Passerelle de connexion sécurisée pour les opticiens partenaires avec gestion de sessions.", img: "/lumor-login.png" },
        { t: "Tableau de Bord", d: "Console centrale de l'activité avec alertes critiques et monitoring des flux de commandes.", img: "/lumor-dash.png" },
        { t: "Intelligence d'Inventaire", d: "Gestion de stocks matriciels complexes (SPH/CYL) avec inventaire dynamique en temps réel.", img: "/lumor-stock.png" },
        { t: "Cycle de Commande (Étape 1)", d: "Module de saisie intelligente d'ordonnances avec validation assistée des données optiques.", img: "/lumor-order-1.png" },
        { t: "Cycle de Commande (Étape 2)", d: "Module de contrôle final et de vérification des paramètres avant lancement en fabrication.", img: "/lumor-order-2.png" },
        { t: "Catalogue de Production", d: "Interface d'administration des références, des traitements et des tarifs fournisseurs.", img: "/lumor-catalog.png" }
      ]
    },
    nostopp: {
      title: "Nostopp",
      tagline: "Briefing Retail • Moteur de Marque",
      desc: "Infrastructure e-commerce 'from scratch' pour la marque Nostopp. Une alternative souveraine aux solutions SaaS, offrant un contrôle total sur l'expérience luxe et les données client.",
      stack: [
        { l: "Framework", v: "Next.js / TS" },
        { l: "Moteur E-com", v: "Achat par look" },
        { l: "Logistique", v: "Sync WhatsApp" },
        { l: "Données", v: "MySQL / Admin" }
      ],
      views: [
        { t: "Identité de Marque", d: "Expérience immersive en noir et blanc reflétant l'ADN Street-Luxury de la marque.", img: "/nostopp-home.png" },
        { t: "Expérience Retail", d: "Boutique dynamique avec navigation optimisée et interface de sélection 'from scratch'.", img: "/nostopp-shop.png" },
        { t: "Analytique Opérationnelle", d: "Tableau de bord de suivi des performances de vente et des tendances mensuelles.", img: "/nostopp-admin-dash.png" },
        { t: "Admin d'Inventaire", d: "Gestion complète du catalogue produit, des prix et des stocks en temps réel.", img: "/nostopp-admin-products.png" },
        { t: "Logistique Directe", d: "Système de suivi de commandes avec intégration WhatsApp pour une interaction client instantanée.", img: "/nostopp-admin-orders.png" }
      ]
    }
  };

  return (
    <>
      <SplashScreen onComplete={() => setIsLoaded(true)} />
      
      <main className={`min-h-screen bg-white selection:bg-brand-navy selection:text-white transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* GRID BACKGROUND */}
      <ShootingStars />
      <CyberLayer />
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #0A1F44 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <nav className="relative z-10 flex justify-between items-center px-6 md:px-12 py-8 max-w-7xl mx-auto">
        <div className="relative flex items-center justify-center">
           <div className="w-[180px] md:w-[300px]">
             <Image 
               src="/logo.png" 
               alt="WockyTech Logo" 
               width={300} 
               height={120} 
               className="object-contain hover:scale-105 transition-transform duration-500"
             />
           </div>
        </div>
        
        <div className="hidden lg:flex items-center space-x-10 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
          <Link href="#projects" className="hover:text-brand-navy transition-colors">Unités Opérationnelles</Link>
          <Link href="/intelligence" className="hover:text-brand-navy transition-colors">Intelligence</Link>
          
          <div className="flex items-center space-x-4 border-l border-slate-200 pl-8 ml-4 text-slate-400">
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

          <Link href="https://wa.me/221773519128" target="_blank" className="bg-brand-navy py-3 px-6 rounded-sm text-white hover:scale-105 transition-all text-center">
            Canal Sécurisé
          </Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-10"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Système Opérationnel</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-brand-navy leading-[0.9]">
              Technologies<br />
              <span className="text-slate-300">Souveraines.</span>
            </h1>
            
            <p className="text-xl text-slate-600 max-w-lg leading-relaxed font-medium">
              Conception d'architectures numériques hautement sécurisées et de systèmes opérationnels de souveraineté nationale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="#projects" className="px-8 py-5 bg-brand-navy text-white font-bold uppercase tracking-widest text-xs rounded-sm shadow-2xl hover:scale-[1.02] transition-all flex items-center space-x-3 text-center justify-center">
                <span>Accéder aux Systèmes</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link 
                href="/MonCv.pdf" 
                download="MonCv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-5 border-2 border-slate-200 text-brand-navy font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-slate-50 transition-all text-center justify-center"
              >
                Dossier Technique
              </Link>
            </div>
          </motion.div>

          {/* DYNAMIC METADATA CARD */}
          <motion.div 
            initial={{ opacity: 0, rotateY: 20 }}
            animate={{ opacity: 1, rotateY: 0 }}
            className="relative"
          >
            <div className="absolute -inset-10 bg-brand-navy/5 blur-3xl rounded-full" />
            <div className="relative glass p-8 rounded-3xl border border-slate-200 shadow-2xl space-y-8 overflow-hidden">
              <div className="flex justify-between items-start border-b border-slate-100 pb-6">
                <div>
                  <h3 className="text-brand-navy font-black text-xs uppercase tracking-widest mb-1">Audit Global du Système</h3>
                  <p className="text-slate-400 text-[10px] font-bold tracking-tight">Nœud Actif: Dakar_SN • Protocoles: Secure_V4</p>
                </div>
                <Activity className="w-5 h-5 text-brand-navy" />
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Architecture", val: "Souveraine", icon: Shield },
                  { label: "Performance", val: "Optimisée", icon: Cpu },
                  { label: "Intégrité", val: "Maximum", icon: Lock },
                  { label: "Réseau", val: "Sécurisé", icon: Globe }
                ].map((stat, i) => (
                  <div key={i} className="space-y-1">
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
                    <p className="text-xl font-bold text-brand-navy">{stat.val}</p>
                  </div>
                ))}
              </div>

              <p className="text-[10px] text-slate-400 font-medium border-t border-slate-100 pt-6">
                💡 Les technologies utilisées dans ces démonstrations sont directement applicables à des systèmes critiques comme le SGOP.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* LEAD ARCHITECT SECTION */}
      <section className="relative z-10 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative aspect-[3/4] w-full max-w-[320px] mx-auto"
            >
              <div className="absolute -inset-3 border border-brand-navy/10 rounded-[40px] -rotate-3" />
              <div className="absolute -inset-3 border border-brand-accent/20 rounded-[40px] rotate-3" />
              <div className="relative h-full w-full bg-slate-200 rounded-[32px] overflow-hidden shadow-2xl">
                <Image 
                  src="/passport_photo_35x45.jpg" 
                  alt="Amadou Mactar Ndiaye"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-[10px] font-black text-brand-accent uppercase tracking-[0.4em] mb-2">Lead Architecte</p>
                  <h3 className="text-2xl font-bold text-white tracking-tight uppercase italic underline decoration-brand-accent decoration-2 underline-offset-4">A. Mactar Ndiaye</h3>
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
            <motion.div 
              onClick={() => setSelectedProject('sgop')}
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

            {/* LUMOROPTIC CARD */}
            <motion.div 
              onClick={() => setSelectedProject('lumor')}
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="relative z-20 bg-white border border-slate-200 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:border-brand-navy/20 transition-all group cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-accent/0 via-brand-accent/[0.03] to-brand-accent/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none" />
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-10 border border-slate-100 group-hover:bg-brand-navy group-hover:text-white transition-colors">
                <Database className="w-8 h-8" />
              </div>
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest text-slate-400">Nœud Logistique B2B</span>
              </div>
              <h3 className="text-3xl font-black text-brand-navy mb-6 tracking-tighter uppercase italic leading-none">Lumoroptic</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-10 group-hover:text-slate-700 transition-colors">
                Plateforme SaaS d'optimisation logistique pour l'industrie optique. Automatisation B2B.
              </p>
              <div className="flex justify-between items-center text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 border-t border-slate-50 pt-8">
                <span>Vues Opérationnelles</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </motion.div>

            {/* NOSTOPP CARD */}
            <motion.div 
              onClick={() => setSelectedProject('nostopp')}
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
          </div>

          {/* SECONDARY PROJECTS GRID */}
          <div className="pt-20 border-t border-slate-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               {[
                 { t: "Architecture Bancaire", d: "Application mobile sécurisée développée sous Flutter & Firebase. Gestion de flux monétaires.", i: Activity },
                 { t: "Full-Stack Sécurité", d: "Système d'entreprise robuste (Spring Boot + Angular) avec authentification JWT.", i: Lock },
                 { t: "YOON (Mobile PFF)", d: "Application mobile native (React Native) optimisée pour la performance et le SEO.", i: Zap }
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { t: "01. Audit & Briefing", d: "Analyse profonde des besoins métiers et des contraintes de sécurité souveraine.", icon: Activity },
              { t: "02. Architecture", d: "Conception de systèmes isolés, haute disponibilité et typés (TypeScript/Java).", icon: Shield },
              { t: "03. Déploiement", d: "Mise en production sécurisée sur infrastructures dédiées et monitoring en temps réel.", icon: Cpu },
              { t: "04. Sécurisation", d: "Audit post-déploiement, cryptage des données et maintenance proactive.", icon: Lock }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-6"
              >
                <div className="text-3xl font-black text-slate-100 group-hover:text-brand-accent transition-colors">{step.t.split('.')[0]}</div>
                <h3 className="text-xl font-bold text-brand-navy">{step.t.split('. ')[1]}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RECOMMENDATION SECTION */}
      <RecommendationSection />

      {/* CONTACT SECTION */}
      <section className="relative z-10 py-32 bg-brand-navy text-white overflow-hidden">
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

              <div className="flex space-x-6 pt-4">
                 <Link href="https://wa.me/221773519128" target="_blank" className="flex items-center space-x-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-white transition-colors">
                    <Activity className="w-4 h-4 text-brand-accent" />
                    <span>WhatsApp Direct</span>
                 </Link>
              </div>
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

      <footer className="py-20 text-center space-y-10">
        <div className="h-[1px] w-20 bg-slate-200 mx-auto" />
        <p className="text-[10px] text-slate-300 font-bold uppercase tracking-widest">
          © 2026 WockyTech Technologies Souveraines • Tous les systèmes sont opérationnels
        </p>
      </footer>

      {/* MODAL SYSTEM DETAIL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-brand-navy/95 backdrop-blur-xl overflow-y-auto pt-20 pb-32 px-6"
          >
            <button 
              onClick={() => setSelectedProject(null)}
              className="fixed top-10 right-10 z-[110] text-white hover:rotate-90 transition-transform p-2 bg-white/10 rounded-full"
            >
              <X className="w-8 h-8" />
            </button>

            {selectedProject && (
              <div className="max-w-6xl mx-auto space-y-24">
                {/* MODAL HEADER */}
                <div className="text-center space-y-6">
                  <div className="inline-flex items-center space-x-2 px-4 py-1 bg-brand-accent/20 border border-brand-accent/30 rounded-full text-brand-accent text-[10px] font-bold uppercase tracking-[0.3em]">
                    {projects[selectedProject].tagline}
                  </div>
                  <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter italic uppercase">{projects[selectedProject].title}</h2>
                  <p className="text-slate-400 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
                    {projects[selectedProject].desc}
                  </p>
                </div>

                {/* OPERATIONAL VIEWS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {projects[selectedProject].views.map((view, i) => (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0, transition: { delay: i * 0.1 } }}
                      key={i} 
                      className="space-y-6 group"
                    >
                      <div className="aspect-video relative bg-white/5 rounded-2xl overflow-hidden border border-white/10 shadow-2xl group-hover:border-brand-accent/50 transition-all">
                        <Image 
                          src={view.img} 
                          alt={view.t}
                          fill
                          className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                           <p className="text-[10px] font-black text-white uppercase tracking-widest">Vue Opérationnelle_0{i+1}</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-xl font-bold text-white tracking-tight">{view.t}</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">{view.d}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* TECHNICAL STACK */}
                <div className="bg-white/5 border border-white/10 p-10 rounded-3xl space-y-10">
                  <div className="flex items-center space-x-4">
                    <Terminal className="w-6 h-6 text-brand-accent" />
                    <h3 className="text-2xl font-bold text-white">Architecture du Système</h3>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    {projects[selectedProject].stack.map(spec => (
                      <div key={spec.l} className="space-y-1">
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{spec.l}</p>
                        <p className="text-lg font-bold text-white">{spec.v}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </main>
    </>
  );
}
