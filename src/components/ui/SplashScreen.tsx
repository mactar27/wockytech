"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Shield, Lock, Cpu, Globe, Activity } from "lucide-react";

export const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("INITIALISATION DU SYSTÈME...");
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setShow(false);
            setTimeout(onComplete, 500);
          }, 500);
          return 100;
        }
        return prev + 1.5;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  useEffect(() => {
    if (progress > 20) setStatus("CHARGEMENT DES ARCHITECTURES SOUVERAINES...");
    if (progress > 50) setStatus("SÉCURISATION DES NŒUDS OPÉRATIONNELS...");
    if (progress > 80) setStatus("VÉRIFICATION DE L'INTÉGRITÉ DU SYSTÈME...");
    if (progress === 100) setStatus("SYSTÈME PRÊT. ACCÈS AUTORISÉ.");
  }, [progress]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="fixed inset-0 z-[200] bg-white flex flex-col items-center justify-center overflow-hidden"
        >
          <div className="relative z-10 w-full max-w-lg px-10 space-y-16">
            {/* LOGO AREA */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center"
            >
              <div className="relative">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-12 border border-brand-navy/5 rounded-full"
                />
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-16 border border-brand-navy/10 rounded-full border-dashed"
                />
                <div className="relative bg-white p-10 rounded-[40px] shadow-[0_20px_60px_rgba(10,31,68,0.1)] border border-slate-100">
                  <Image 
                    src="/favicon.png" 
                    alt="WockyTech" 
                    width={180} 
                    height={180} 
                    priority
                    className="object-contain"
                  />
                </div>
              </div>
            </motion.div>

            {/* STATUS TEXT */}
            <div className="space-y-8">
              <div className="flex justify-between items-end">
                <div className="space-y-1">
                  <p className="text-[11px] font-black text-brand-accent uppercase tracking-[0.4em]">Operational Status</p>
                  <p className="text-brand-navy font-mono text-xs font-bold h-4">{status}</p>
                </div>
                <p className="text-brand-navy font-mono text-sm font-black">{Math.round(progress)}%</p>
              </div>

              {/* PROGRESS BAR */}
              <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  className="h-full bg-brand-navy shadow-[0_0_20px_rgba(10,31,68,0.2)]"
                />
              </div>

              {/* ICONS STATUS */}
              <div className="flex justify-between px-4">
                {[Shield, Lock, Cpu, Globe, Activity].map((Icon, i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      opacity: progress > (i + 1) * 20 ? 1 : 0.15,
                      scale: progress > (i + 1) * 20 ? [1, 1.3, 1] : 1,
                      color: progress > (i + 1) * 20 ? "#0A1F44" : "#CBD5E1"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* BOTTOM DECORATION */}
          <div className="absolute bottom-16 text-center space-y-3">
            <p className="text-[10px] font-black text-brand-navy/30 uppercase tracking-[0.8em]">WockyTech Sovereign Systems v4.0</p>
            <div className="flex justify-center space-x-2">
               {[...Array(3)].map((_, i) => (
                 <motion.div 
                   key={i}
                   animate={{ opacity: [0.2, 1, 0.2] }}
                   transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                   className="w-1.5 h-1.5 bg-brand-accent rounded-full"
                 />
               ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
