"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Shield, Smartphone, Terminal, Activity, X } from "lucide-react";

const sgopProject = {
  title: "SGOP Portail",
  tagline: "Briefing de Sécurité • Système-7",
  desc: "Système de Gestion Opérationnelle de la Police : Une infrastructure souveraine conçue pour l'administration moderne du Sénégal. Aujourd'hui, la gestion des interventions souffre de deux grandes fractures. Côté citoyen, le problème est l'urgence et la confiance. Quand une agression ou une arnaque cyber se produit, le citoyen perd un temps précieux à trouver la bonne unité, à se déplacer, et n'a souvent aucun suivi en temps réel de sa plainte. L'information se perd en route. Côté police, nos agents sur le terrain et dans les commissariats font face à un système fragmenté : registres papiers lents, manque de coordination en temps réel entre les unités tactiques, et surtout, un défi majeur sur l'intégrité des preuves numériques (qui peuvent être altérées ou perdues avant d'arriver au commandement). C'est exactement pour résoudre cela que nous avons créé le SGOP (Système de Gestion Opérationnelle de la Police). C'est une plateforme unifiée qui connecte directement le citoyen en détresse à la bonne unité de police en quelques secondes, tout en garantissant au commandement que chaque rapport est scellé cryptographiquement et inviolable.",
  stack: [
    { l: "Architecture", v: "Next.js / Node.js" },
    { l: "Langage", v: "TypeScript Full-Stack" },
    { l: "Sécurité", v: "AES-256 / RBAC / MFA" },
    { l: "Performance", v: "Vercel Edge Runtime" }
  ],
  faq: [
    {
      q: "C'est fait avec quoi votre système ?",
      a: "C'est développé en TypeScript sur le framework Next.js (React). J'ai choisi TypeScript au lieu de JavaScript car il oblige à typer strictement les données. Ça élimine une énorme partie des bugs silencieux et rend le code beaucoup plus robuste pour un environnement critique."
    },
    {
      q: "Pourquoi avoir choisi Next.js plutôt qu'un vieux standard comme PHP ou Java ?",
      a: "Pour la performance et la sécurité. Next.js permet le rendu côté serveur (SSR) et l'Edge Computing. Cela veut dire que les pages publiques sont générées ultra-rapidement, ce qui nous protège mieux contre les pics de trafic (ou les attaques DDoS) comparé à des serveurs traditionnels."
    },
    {
      q: "Qu'est-ce que vous utilisez pour stocker les données ?",
      a: "C'est une architecture hybride. Côté serveur, c'est du PostgreSQL (le standard le plus robuste pour les données relationnelles et la sécurité). Côté client, dans l'appareil de l'agent, j'utilise Dexie.js (IndexedDB). C'est ça qui permet au système de fonctionner hors-ligne si le réseau coupe."
    },
    {
      q: "Si un pirate tape du code SQL dans le formulaire public, que se passe-t-il ?",
      a: "J'utilise Zod pour la validation des schémas. Avant même qu'une donnée touche la base de données, Zod vérifie mathématiquement que c'est bien du texte, la bonne longueur, et le bon format. Toute tentative d'injection SQL ou de script (XSS) est rejetée automatiquement à la porte d'entrée."
    },
    {
      q: "L'interface est très propre, vous utilisez quoi ?",
      a: "J'utilise TailwindCSS couplé à des composants Radix UI. Cela permet d'avoir une interface 'Premium' et très réactive, tout en garantissant une accessibilité parfaite (utilisable au clavier, par des lecteurs d'écran). C'est ce qui donne ce côté 'glassmorphism' et moderne."
    }
  ],
  views: [
    // CÔTÉ POLICE
    { t: "Portail d'Accès Sécurisé", d: "Interface d'authentification robuste avec gestion des rôles (RBAC) pour une sécurité maximale.", img: "/sgop-splash.png", category: "police" },
    { t: "Tableau de Bord Stratégique", d: "Vue globale des opérations et monitoring temps réel pour la prise de décision.", img: "/sgop-dash.png", category: "police" },
    { t: "Hub de Cybersécurité", d: "Console de supervision des menaces avec validation stricte des flux de données.", img: "/sgop-cyber.png", category: "police" },
    { t: "Vue Police_01", d: "Capture d'écran côté police du système SGOP.", img: "/sgop-view-5.png", category: "police" },
    { t: "Vue Police_02", d: "Capture d'écran côté police du système SGOP.", img: "/sgop-view-6.png", category: "police" },
    { t: "Vue Police_03", d: "Capture d'écran côté police du système SGOP.", img: "/sgop-view-7.png", category: "police" },
    { t: "Vue Police_04", d: "Capture d'écran côté police du système SGOP.", img: "/sgop-view-8.png", category: "police" },
    { t: "Vue Police_05", d: "Capture d'écran côté police du système SGOP.", img: "/sgop-view-9.png", category: "police" },
    // CÔTÉ CITOYEN
    { t: "Vue Citoyen_01", d: "Interface côté citoyen du système SGOP.", img: "/sgop-citizen-1.jpg", category: "citizen" },
    { t: "Vue Citoyen_02", d: "Interface côté citoyen du système SGOP.", img: "/sgop-citizen-2.jpg", category: "citizen" },
    { t: "Vue Citoyen_03", d: "Interface côté citoyen du système SGOP.", img: "/sgop-citizen-3.jpg", category: "citizen" }
  ]
};

export default function SGOPPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-brand-navy selection:text-white">
      {/* HEADER */}
      <div className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <X className="w-6 h-6 text-gray-600 hover:text-gray-900" />
            <span className="text-sm font-medium text-gray-600 hover:text-gray-900">Retour</span>
          </Link>
          <div className="inline-flex items-center space-x-2 px-4 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-blue-600 text-[10px] font-bold uppercase tracking-[0.3em]">
            {sgopProject.tagline}
          </div>
        </div>
      </div>

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto space-y-24">
          {/* PROJECT HEADER */}
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter italic uppercase">{sgopProject.title}</h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
              {sgopProject.desc}
            </p>
          </div>

          {/* OPERATIONAL VIEWS GRID */}
          <div className="space-y-16">
            {/* CÔTÉ POLICE */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <Shield className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">CÔTÉ POLICE</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {sgopProject.views.filter(v => v.category === 'police').map((view, i) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0, transition: { delay: i * 0.1 } }}
                    key={i}
                    className="space-y-6 group"
                  >
                    <div className="aspect-video relative bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 shadow-lg group-hover:border-blue-600/50 transition-all">
                      <Image
                        src={view.img}
                        alt={view.t}
                        fill
                        className="object-contain opacity-80 group-hover:opacity-100 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                         <p className="text-[10px] font-black text-white uppercase tracking-widest">Vue Police</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-gray-900 tracking-tight">{view.t}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{view.d}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CÔTÉ CITOYEN */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <Smartphone className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">CÔTÉ CITOYEN</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {sgopProject.views.filter(v => v.category === 'citizen').map((view, i) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0, transition: { delay: i * 0.1 } }}
                    key={i}
                    className="space-y-6 group"
                  >
                    <div className="aspect-video relative bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 shadow-lg group-hover:border-blue-600/50 transition-all">
                      <Image
                        src={view.img}
                        alt={view.t}
                        fill
                        className="object-contain opacity-80 group-hover:opacity-100 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                         <p className="text-[10px] font-black text-white uppercase tracking-widest">Vue Citoyen</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-gray-900 tracking-tight">{view.t}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{view.d}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* TECHNICAL STACK */}
          <div className="bg-gray-50 border border-gray-200 p-10 rounded-3xl space-y-10">
            <div className="flex items-center space-x-4">
              <Terminal className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Architecture du Système</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {sgopProject.stack.map(spec => (
                <div key={spec.l} className="space-y-1">
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{spec.l}</p>
                  <p className="text-lg font-bold text-gray-900">{spec.v}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ SECTION */}
          <div className="bg-gray-50 border border-gray-200 p-10 rounded-3xl space-y-8">
            <div className="flex items-center space-x-4">
              <Activity className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Questions Techniques</h2>
            </div>
            <div className="space-y-6">
              {sgopProject.faq.map((item, i) => (
                <div key={i} className="space-y-3">
                  <h3 className="text-lg font-bold text-blue-600">{item.q}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
