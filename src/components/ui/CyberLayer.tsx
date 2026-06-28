"use client";

import { motion } from "framer-motion";


const metadata = [
  "PROTOCOL_V4: ACTIVE",
  "SECURE_GATEWAY: LIAISON",
  "DAKAR_SN_NODE: STABLE",
  "ENCRYPTION: AES_256",
  "ARCHITECTURE: SOVEREIGN",
  "LATENCY: 02ms",
  "SYSTEM_INTEGRITY: 100%"
];

export const CyberLayer = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[5]">
      {/* SCANLINE EFFECT */}
      <motion.div 
        initial={{ y: "-100%" }}
        animate={{ y: "1000%" }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="w-full h-[300px] bg-gradient-to-b from-transparent via-brand-navy/[0.01] to-transparent opacity-50"
      />

      {/* FLOATING METADATA */}
      {metadata.map((text, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.4, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 2,
            repeatDelay: 5
          }}
          style={{
            position: "absolute",
            top: `${15 + i * 12}%`,
            right: i % 2 === 0 ? "2%" : "auto",
            left: i % 2 !== 0 ? "2%" : "auto",
            writingMode: "vertical-rl",
          }}
          className="text-[8px] font-black text-brand-navy tracking-[0.5em] uppercase opacity-20"
        >
          {text}
        </motion.div>
      ))}

      {/* TERMINAL PULSE (BOTTOM LEFT) */}
      <div className="absolute bottom-10 left-10 space-y-1 opacity-20">
         <div className="flex items-center space-x-2">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
            <span className="text-[7px] font-black text-brand-navy uppercase tracking-widest">Sovereign_OS v7.1</span>
         </div>
      </div>
    </div>
  );
};
