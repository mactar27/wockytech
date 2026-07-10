"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Terminal, ShoppingBag, X } from "lucide-react";

const lumorProject = {
  title: "Lumoroptic",
  tagline: "Fournisseur Verrier • B2B Opticiens",
  desc: "Site fournisseur de verres optiques dédié aux opticiens. Interface épurée en cours de refonte : saisir le nom et le prénom du client, renseigner la correction (SPH, CYL, axe…), et commander les verres en quelques clics — sans friction.",
  stack: [
    { l: "Plateforme", v: "Next.js / Tailwind" },
    { l: "Cœur Métier", v: "Commande & Correction" },
    { l: "Cible", v: "Opticiens partenaires" },
    { l: "État", v: "Squelette → Site épuré" }
  ],
  views: [
    { t: "Identité de Marque", d: "Splash screen minimaliste : clarté visuelle et accès direct à l'outil de commande.", img: "/lumor-splash.png", category: "default" },
    { t: "Espace Opticien", d: "Connexion sécurisée réservée aux opticiens pour accéder au catalogue fournisseur.", img: "/lumor-login.png", category: "default" },
    { t: "Tableau de Bord", d: "Vue d'ensemble des commandes en cours et du suivi côté fournisseur.", img: "/lumor-dash.png", category: "default" },
    { t: "Stock Verrier", d: "Références verres disponibles côté fournisseur, avec gestion matricielle SPH/CYL.", img: "/lumor-stock.png", category: "default" },
    { t: "Nouvelle Commande (Étape 1)", d: "Saisie du nom et prénom du client, puis de la correction optique (ordonnance).", img: "/lumor-order-1.png", category: "default" },
    { t: "Nouvelle Commande (Étape 2)", d: "Validation des paramètres de verre et confirmation avant envoi au fournisseur.", img: "/lumor-order-2.png", category: "default" },
    { t: "Catalogue Fournisseur", d: "Administration des références verres, traitements et tarifs proposés aux opticiens.", img: "/lumor-catalog.png", category: "default" }
  ]
};

export default function LumoropticPage() {
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
            {lumorProject.tagline}
          </div>
        </div>
      </div>

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto space-y-24">
          {/* PROJECT HEADER */}
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter italic uppercase">{lumorProject.title}</h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
              {lumorProject.desc}
            </p>
          </div>

          {/* OPERATIONAL VIEWS GRID */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <ShoppingBag className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Vues Opérationnelles</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {lumorProject.views.map((view, i) => (
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
                       <p className="text-[10px] font-black text-white uppercase tracking-widest">Vue Lumoroptic</p>
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

          {/* TECHNICAL STACK */}
          <div className="bg-gray-50 border border-gray-200 p-10 rounded-3xl space-y-10">
            <div className="flex items-center space-x-4">
              <Terminal className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Architecture du Système</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {lumorProject.stack.map(spec => (
                <div key={spec.l} className="space-y-1">
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{spec.l}</p>
                  <p className="text-lg font-bold text-gray-900">{spec.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
