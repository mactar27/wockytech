"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronRight, Shield, FolderKanban, MessageCircle, X } from "lucide-react";

const steps = [
  {
    icon: Shield,
    title: "Bienvenue sur WockyTech",
    description:
      "Portfolio d'Amadou Mactar Ndiaye — architecte Full-Stack basé à Dakar. Applications web et mobiles sécurisées, conçues pour la production.",
  },
  {
    icon: FolderKanban,
    title: "Projets opérationnels",
    description:
      "Projets phares (SGOP, Lumoroptic, Nostopp) et sites clients livrés — EZK Agency, Maison Auto, Bergerie Malia, Swanky Factory, Revotex…",
  },
  {
    icon: MessageCircle,
    title: "Collaborons",
    description:
      "Téléchargez le CV, parcourez la page Intelligence technique, ou contactez-moi directement par email et WhatsApp.",
  },
] as const;

export function Onboarding({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);
  const current = steps[step];
  const Icon = current.icon;
  const isLast = step === steps.length - 1;

  const next = () => {
    if (isLast) onComplete();
    else setStep((s) => s + 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[210] bg-white flex flex-col"
    >
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #0A1F44 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-accent/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 flex justify-between items-center px-6 md:px-12 py-6 max-w-3xl mx-auto w-full">
        <Image src="/logo.png" alt="WockyTech" width={140} height={48} className="object-contain" priority />
        <button
          type="button"
          onClick={onComplete}
          className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-brand-navy transition-colors flex items-center gap-1"
        >
          Passer
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-12 max-w-3xl mx-auto w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.35 }}
            className="space-y-10"
          >
            <div className="w-16 h-16 rounded-2xl bg-brand-navy text-white flex items-center justify-center shadow-xl shadow-brand-navy/20">
              <Icon className="w-8 h-8" />
            </div>

            <div className="space-y-4">
              <p className="text-[10px] font-black text-brand-accent uppercase tracking-[0.4em]">
                Étape {step + 1} / {steps.length}
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-brand-navy tracking-tight leading-tight">
                {current.title}
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed max-w-lg">{current.description}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex gap-2 pt-12">
          {steps.map((_, i) => (
            <div
              key={i}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === step ? "w-10 bg-brand-navy" : i < step ? "w-6 bg-brand-accent" : "w-6 bg-slate-200"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 px-6 md:px-12 py-8 max-w-3xl mx-auto w-full">
        <button
          type="button"
          onClick={next}
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-10 py-4 bg-brand-navy text-white text-xs font-black uppercase tracking-widest rounded-lg hover:bg-brand-accent transition-colors"
        >
          {isLast ? "Entrer sur le site" : "Continuer"}
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}
