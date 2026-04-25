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
          className="fixed inset-0 z-[200] bg-brand-navy flex flex-col items-center justify-center overflow-hidden"
        >
          {/* BACKGROUND EFFECTS */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #2563EB 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
            <motion.div 
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-accent/10 to-transparent" 
            />
          </div>

          <div className="relative z-10 w-full max-w-md px-10 space-y-12">
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
                  className="absolute -inset-8 border border-white/5 rounded-full"
                />
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-12 border border-white/10 rounded-full border-dashed"
                />
                <div className="bg-white p-6 rounded-3xl shadow-[0_0_50px_rgba(37,99,235,0.3)] border border-white/20">
                  <Image 
                    src="/favicon.png" 
                    alt="WockyTech" 
                    width={80} 
                    height={80} 
                    priority
                    className="object-contain"
                  />
                </div>
              </div>
            </motion.div>

            {/* STATUS TEXT */}
            <div className="space-y-6">
              <div className="flex justify-between items-end">
                <div className="space-y-1">
                  <p className="text-[10px] font-black text-brand-accent uppercase tracking-[0.4em]">Operational Status</p>
                  <p className="text-white font-mono text-xs font-bold h-4">{status}</p>
                </div>
                <p className="text-brand-accent font-mono text-sm font-black">{Math.round(progress)}%</p>
              </div>

              {/* PROGRESS BAR */}
              <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden border border-white/5">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  className="h-full bg-brand-accent shadow-[0_0_15px_rgba(37,99,235,0.8)]"
                />
              </div>

              {/* ICONS STATUS */}
              <div className="flex justify-between px-2">
                {[Shield, Lock, Cpu, Globe, Activity].map((Icon, i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      opacity: progress > (i + 1) * 20 ? 1 : 0.2,
                      scale: progress > (i + 1) * 20 ? [1, 1.2, 1] : 1
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* BOTTOM DECORATION */}
          <div className="absolute bottom-12 text-center space-y-2">
            <p className="text-[8px] font-black text-white/20 uppercase tracking-[0.6em]">WockyTech Sovereign Systems v4.0</p>
            <div className="flex justify-center space-x-1">
               {[...Array(3)].map((_, i) => (
                 <motion.div 
                   key={i}
                   animate={{ opacity: [0.2, 1, 0.2] }}
                   transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                   className="w-1 h-1 bg-brand-accent rounded-full"
                 />
               ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
