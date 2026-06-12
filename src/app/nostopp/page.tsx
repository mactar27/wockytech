"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Terminal, ShoppingBag, X } from "lucide-react";

const nostoppProject = {
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
    { t: "Identité de Marque", d: "Expérience immersive en noir et blanc reflétant l'ADN Street-Luxury de la marque.", img: "/nostopp-home.png", category: "default" },
    { t: "Expérience Retail", d: "Boutique dynamique avec navigation optimisée et interface de sélection 'from scratch'.", img: "/nostopp-shop.png", category: "default" },
    { t: "Analytique Opérationnelle", d: "Tableau de bord de suivi des performances de vente et des tendances mensuelles.", img: "/nostopp-admin-dash.png", category: "default" },
    { t: "Admin d'Inventaire", d: "Gestion complète du catalogue produit, des prix et des stocks en temps réel.", img: "/nostopp-admin-products.png", category: "default" },
    { t: "Logistique Directe", d: "Système de suivi de commandes avec intégration WhatsApp pour une interaction client instantanée.", img: "/nostopp-admin-orders.png", category: "default" }
  ]
};

export default function NostoppPage() {
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
            {nostoppProject.tagline}
          </div>
        </div>
      </div>

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto space-y-24">
          {/* PROJECT HEADER */}
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter italic uppercase">{nostoppProject.title}</h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
              {nostoppProject.desc}
            </p>
          </div>

          {/* OPERATIONAL VIEWS GRID */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <ShoppingBag className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Vues Opérationnelles</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {nostoppProject.views.map((view, i) => (
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
                       <p className="text-[10px] font-black text-white uppercase tracking-widest">Vue Nostopp</p>
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
              {nostoppProject.stack.map(spec => (
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
