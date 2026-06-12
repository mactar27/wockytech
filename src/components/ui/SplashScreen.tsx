"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Shield, Lock, Cpu, Globe, Activity } from "lucide-react";

const STATUS_STEPS = [
  { at: 0, text: "Initialisation…" },
  { at: 25, text: "Chargement du portfolio…" },
  { at: 55, text: "Préparation des projets…" },
  { at: 85, text: "Presque prêt…" },
  { at: 100, text: "Bienvenue." },
] as const;

const DURATION_MS = 2400;
const ICONS = [Shield, Lock, Cpu, Globe, Activity];

function getStatus(progress: number): string {
  let message: string = STATUS_STEPS[0].text;
  for (const step of STATUS_STEPS) {
    if (progress >= step.at) message = step.text;
  }
  return message;
}

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState<string>(STATUS_STEPS[0].text);
  const onCompleteRef = useRef(onComplete);

  onCompleteRef.current = onComplete;

  useEffect(() => {
    let frameId = 0;
    let exitTimeoutId: ReturnType<typeof setTimeout> | undefined;
    let completeTimeoutId: ReturnType<typeof setTimeout> | undefined;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const nextProgress = Math.min(100, (elapsed / DURATION_MS) * 100);

      setProgress(nextProgress);
      setStatus(getStatus(nextProgress));

      if (nextProgress < 100) {
        frameId = requestAnimationFrame(tick);
        return;
      }

      exitTimeoutId = setTimeout(() => {
        completeTimeoutId = setTimeout(() => onCompleteRef.current(), 400);
      }, 400);
    };

    frameId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(exitTimeoutId);
      clearTimeout(completeTimeoutId);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-[200] bg-white flex flex-col items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #0A1F44 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-navy/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-md px-8 space-y-12">
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center space-y-6"
        >
          <div className="relative flex flex-col items-center">
            <motion.div
              animate={{ scale: [1, 1.05, 1], opacity: [0.25, 0.45, 0.25] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-8 bg-brand-accent/15 blur-2xl rounded-full"
            />
            <Image
              src="/logo.png"
              alt="WockyTech"
              width={300}
              height={120}
              priority
              className="relative object-contain w-[220px] md:w-[280px] h-auto"
            />
            <p className="mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-[0.35em]">
              Technologies Souveraines
            </p>
          </div>
        </motion.div>

        <div className="space-y-5">
          <div className="flex justify-between items-center">
            <p className="text-xs font-medium text-slate-500">{status}</p>
            <p className="text-sm font-black text-brand-navy tabular-nums">{Math.round(progress)}%</p>
          </div>

          <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-brand-navy to-brand-accent"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex justify-between px-2">
            {ICONS.map((Icon, i) => (
              <motion.div
                key={i}
                animate={{
                  opacity: progress > (i + 1) * 18 ? 1 : 0.2,
                  scale: progress > (i + 1) * 18 ? 1 : 0.9,
                }}
                transition={{ duration: 0.25 }}
              >
                <Icon
                  className="w-5 h-5"
                  style={{ color: progress > (i + 1) * 18 ? "#0A1F44" : "#CBD5E1" }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <p className="absolute bottom-10 text-[9px] font-bold text-slate-300 uppercase tracking-[0.5em]">
        Amadou Mactar Ndiaye
      </p>
    </motion.div>
  );
}
