"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, 
  ExternalLink, 
  Smartphone, 
  Sparkles, 
  Gauge,
  CheckCircle2,
  Globe
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// ── Real projects list from user ──────────────────────────────────────────────
const userProjects = [
  {
    name: "nonstopp.shop",
    domain: "Boutique en ligne mode, streetwear & articles exclusifs",
    url: "https://nonstopp.shop/",
  },
  {
    name: "ezkagency.com",
    domain: "Agence de communication digitale, branding & marketing",
    url: "https://www.ezkagency.com/",
  },
  {
    name: "knitta-corner.shop",
    domain: "Boutique mode, streetwear haut de gamme & accessoires",
    url: "https://knitta-corner.shop/",
  },
  {
    name: "dia-rama.com",
    domain: "Marque et cosmétiques haut de gamme inspirés de la beauté africaine",
    url: "https://www.dia-rama.com/",
  },
  {
    name: "dilyaa.com",
    domain: "Plateforme lifestyle, soins, accessoires & conseils de style",
    url: "https://www.dilyaa.com/",
  },
  {
    name: "vyynaa.com",
    domain: "Boutique en ligne cosmétique, beauté & articles lifestyle",
    url: "https://www.vyynaa.com/",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden">
      <Navbar />

      {/* ══════════════════════════════════════════════════════════════
          HERO SECTION — EXACT REPRODUCTION OF MOCKUP
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden pt-6 pb-12 md:pt-10 md:pb-16 bg-gradient-to-r from-[#F4F8FD] via-[#F8FAFF] to-[#E8F2FF]">
        
        {/* Soft fluid background ambient glows */}
        <div className="absolute top-0 right-0 w-[550px] h-[500px] bg-gradient-to-bl from-blue-400/25 via-sky-300/20 to-transparent rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-[90px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-2 items-center">

            {/* Left Column: Copy identical to mockup */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-6 space-y-6"
            >
              {/* Badge: Agence digitale & Développement */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF3FF] text-[#0066FF] text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#0066FF]" />
                Agence digitale &amp; Développement
              </div>

              {/* Title exact */}
              <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-black tracking-tight text-[#0A192F] leading-[1.12]">
                Des sites web &amp;<br />
                applications sur mesure<br />
                qui font{" "}
                <span className="text-[#0066FF]">
                  la différence
                </span>
              </h1>

              {/* Subtitle exact */}
              <p className="text-base text-slate-500 max-w-lg leading-relaxed font-normal">
                Nous concevons des solutions digitales modernes, rapides et évolutives pour donner vie à vos idées.
              </p>

              {/* 2 CTA Buttons exacts */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#0066FF] hover:bg-[#0052cc] text-white font-medium text-xs sm:text-sm px-6 py-3 rounded-full shadow-[0_4px_16px_rgba(0,102,255,0.3)] hover:shadow-[0_6px_22px_rgba(0,102,255,0.45)] transition-all duration-200"
                >
                  <span>Demander un devis</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#projets"
                  className="inline-flex items-center gap-2 border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-medium text-xs sm:text-sm px-6 py-3 rounded-full transition-all duration-200 shadow-sm"
                >
                  Nos réalisations
                </Link>
              </div>

              {/* 4 Feature Badges in single line exact to mockup */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-2 border-t border-slate-200/60">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-blue-50 text-[#0066FF] flex items-center justify-center shrink-0">
                    <Globe className="w-3.5 h-3.5" />
                  </div>
                  <div className="leading-tight">
                    <p className="text-[11px] font-semibold text-slate-800">Design moderne</p>
                    <p className="text-[10px] text-slate-400">et élégant</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-blue-50 text-[#0066FF] flex items-center justify-center shrink-0">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <div className="leading-tight">
                    <p className="text-[11px] font-semibold text-slate-800">Performance</p>
                    <p className="text-[10px] text-slate-400">optimale</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-blue-50 text-[#0066FF] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div className="leading-tight">
                    <p className="text-[11px] font-semibold text-slate-800">Sécurité</p>
                    <p className="text-[10px] text-slate-400">renforcée</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-blue-50 text-[#0066FF] flex items-center justify-center shrink-0">
                    <Gauge className="w-3.5 h-3.5" />
                  </div>
                  <div className="leading-tight">
                    <p className="text-[11px] font-semibold text-slate-800">Accompagnement</p>
                    <p className="text-[10px] text-slate-400">personnalisé</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Hero Mockup Devices Image with transparent cutout */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-6 flex justify-end items-center relative"
            >
              <div className="relative w-full max-w-[680px] lg:scale-105">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/AD64C114-5E72-48DE-97F7-4618A53AA817.PNG"
                  alt="WockyTech — Mockup ordinateur portable et smartphone"
                  className="w-full h-auto object-contain [filter:drop-shadow(0_20px_35px_rgba(0,102,255,0.14))]"
                  loading="eager"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION: NOS SERVICES
      ══════════════════════════════════════════════════════════════ */}
      <section id="services" className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Header */}
          <div className="text-center space-y-2 mb-12">
            <p className="text-xs font-bold text-[#0066FF] tracking-wide">
              Nos Services
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-[#0A192F] tracking-tight">
              Nos Services
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
              Des solutions complètes pour accompagner votre transformation digitale.
            </p>
          </div>

          {/* 4 Cards Grid with Voir plus links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Sites Web */}
            <Link
              href="/services#sites-web"
              className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,102,255,0.08)] hover:border-blue-100 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-11 h-11 rounded-xl bg-[#0066FF] text-white flex items-center justify-center font-mono font-bold text-sm shadow-md">
                  &lt;/&gt;
                </div>
                <h3 className="text-base font-bold text-[#0A192F] group-hover:text-[#0066FF] transition-colors">
                  Sites Web
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Sites vitrines, e-commerce et plateformes web modernes, rapides et optimisés pour le SEO.
                </p>
              </div>
              <div className="pt-6 flex items-center justify-between text-xs font-semibold text-[#0066FF]">
                <span>Voir plus</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </Link>

            {/* Card 2: Applications Mobiles */}
            <Link
              href="/services#applications-mobiles"
              className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,102,255,0.08)] hover:border-blue-100 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-11 h-11 rounded-xl bg-[#0066FF] text-white flex items-center justify-center shadow-md">
                  <Smartphone className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#0A192F] group-hover:text-[#0066FF] transition-colors">
                  Applications Mobiles
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Développement iOS &amp; Android performantes, intuitives et sur mesure.
                </p>
              </div>
              <div className="pt-6 flex items-center justify-between text-xs font-semibold text-[#0066FF]">
                <span>Voir plus</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </Link>

            {/* Card 3: Design Moderne */}
            <Link
              href="/services#design-moderne"
              className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,102,255,0.08)] hover:border-blue-100 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-11 h-11 rounded-xl bg-[#0066FF] text-white flex items-center justify-center shadow-md">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#0A192F] group-hover:text-[#0066FF] transition-colors">
                  Design Moderne
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Des interfaces élégantes et expériences utilisateur fluides et intuitives.
                </p>
              </div>
              <div className="pt-6 flex items-center justify-between text-xs font-semibold text-[#0066FF]">
                <span>Voir plus</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </Link>

            {/* Card 4: Solutions Performantes */}
            <Link
              href="/services#solutions-performantes"
              className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,102,255,0.08)] hover:border-blue-100 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-11 h-11 rounded-xl bg-[#0066FF] text-white flex items-center justify-center shadow-md">
                  <Gauge className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#0A192F] group-hover:text-[#0066FF] transition-colors">
                  Solutions Performantes
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Architectures fiables, sécurisées et évolutives pour vos projets d&apos;aujourd&apos;hui et de demain.
                </p>
              </div>
              <div className="pt-6 flex items-center justify-between text-xs font-semibold text-[#0066FF]">
                <span>Voir plus</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </Link>

          </div>

          {/* Section CTA: Voir tous les services */}
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#0066FF] hover:text-[#0052cc] py-2 px-6 rounded-full border border-blue-200 hover:border-blue-400 bg-blue-50/50 hover:bg-blue-50 transition-all"
            >
              <span>Découvrir tous nos services en détail</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION: MES RÉALISATIONS — EXACT BLUE WAVE & SPLIT LAYOUT
      ══════════════════════════════════════════════════════════════ */}
      <section id="projets" className="relative pt-12 pb-24 overflow-hidden">
        
        {/* Curving blue shape in background identical to mockup */}
        <div className="absolute inset-0 pointer-events-none -z-0">
          <svg
            className="w-full h-full object-cover"
            viewBox="0 0 1440 600"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M0 280C240 180 500 320 800 240C1100 160 1300 220 1440 260V600H0V280Z"
              fill="url(#blueWaveGrad)"
            />
            <defs>
              <linearGradient id="blueWaveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0066FF" />
                <stop offset="100%" stopColor="#0052cc" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Left: Heading & CTA */}
            <div className="lg:col-span-3 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#0066FF]">
                <span className="w-4 h-[2px] bg-[#0066FF]" />
                <span>Mes projets</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0A192F] tracking-tight">
                Mes réalisations
              </h2>
              <p className="text-xs text-slate-500 leading-relaxed">
                Découvrez quelques-uns des sites et applications que j&apos;ai développés pour nos clients partenaires.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-blue-600 text-[#0066FF] hover:bg-blue-50 text-xs font-semibold transition-colors"
                >
                  <span>Démarrer un projet</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Center: Interactive Dark List of Projects */}
            <div className="lg:col-span-5 bg-[#0A192F] rounded-2xl p-4 sm:p-5 shadow-2xl border border-slate-800 text-white space-y-1.5">
              {userProjects.map((proj, idx) => (
                <a
                  key={idx}
                  href={proj.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-2.5 rounded-xl hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center gap-2.5 min-w-0 pr-2">
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-400 shrink-0" />
                    <span className="text-xs font-bold text-white group-hover:text-blue-400 shrink-0">
                      {proj.name}
                    </span>
                    <span className="text-[10px] text-slate-400 truncate hidden sm:inline">
                      {proj.domain}
                    </span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all shrink-0" />
                </a>
              ))}
            </div>

            {/* Right: 2x2 Showcase Card Preview in High Definition */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-full max-w-[420px] bg-white rounded-2xl p-2.5 shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-300">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/projects-showcase-crisp.png"
                  alt="Aperçu net des réalisations WockyTech"
                  className="w-full h-auto object-cover rounded-xl"
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION: APERÇU AVIS CLIENTS & TÉMOIGNAGES
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-slate-50/60 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div className="space-y-2">
              <p className="text-xs font-bold text-[#0066FF] uppercase tracking-wider">
                Témoignages
              </p>
              <h2 className="text-3xl font-black text-[#0A192F] tracking-tight">
                Ils nous font confiance
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 max-w-xl">
                Découvrez comment nous accompagnons nos clients au quotidien dans la réalisation de leurs plateformes.
              </p>
            </div>
            <Link
              href="/avis"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#0066FF] hover:text-[#0052cc] py-2.5 px-5 rounded-full border border-blue-200 bg-white hover:bg-blue-50 transition-all shrink-0"
            >
              <span>Voir tous les avis clients</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-3">
              <div className="flex items-center gap-1 text-amber-400">
                {"★★★★★"}
              </div>
              <h3 className="text-sm font-bold text-[#0A192F]">
                &ldquo;Refonte digitale au-delà de nos attentes&rdquo;
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Notre nouvelle plateforme est ultra-rapide, moderne et nous apporte de nouveaux prospects chaque semaine.
              </p>
              <p className="text-[11px] font-bold text-slate-700 pt-2 border-t border-slate-100">
                EZK Agency Dakar
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-3">
              <div className="flex items-center gap-1 text-amber-400">
                {"★★★★★"}
              </div>
              <h3 className="text-sm font-bold text-[#0A192F]">
                &ldquo;Un e-commerce ultra fluide et robuste&rdquo;
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                La boutique encaisse les pics de trafic lors de nos lancements sans aucun ralentissement. L&apos;interface mobile est parfaite.
              </p>
              <p className="text-[11px] font-bold text-slate-700 pt-2 border-t border-slate-100">
                Nonstopp Shop
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-3">
              <div className="flex items-center gap-1 text-amber-400">
                {"★★★★★"}
              </div>
              <h3 className="text-sm font-bold text-[#0A192F]">
                &ldquo;Design luxueux et expérience d&apos;achat parfaite&rdquo;
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Le résultat est magnifique, nos clients adorent la clarté du site et nos ventes en ligne ont progressé immédiatement.
              </p>
              <p className="text-[11px] font-bold text-slate-700 pt-2 border-t border-slate-100">
                Dia&apos;Rama Cosmétiques
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
