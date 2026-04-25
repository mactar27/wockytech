"use client";

import { motion } from "framer-motion";

export const CyberQRCode = () => {
  return (
    <div className="relative p-4 bg-white rounded-2xl shadow-2xl border border-slate-200 group overflow-hidden">
      {/* SCANNING LINE */}
      <motion.div 
        initial={{ y: -20 }}
        animate={{ y: 140 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="absolute inset-x-0 h-[2px] bg-brand-accent/50 z-10 blur-sm"
      />
      
      {/* CORNER BRACKETS */}
      <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-brand-navy rounded-tl-sm" />
      <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-brand-navy rounded-tr-sm" />
      <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-brand-navy rounded-bl-sm" />
      <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-brand-navy rounded-br-sm" />

      {/* REAL QR CODE IMAGE from API */}
      <div className="relative w-[110px] h-[110px] bg-white p-2 rounded-lg">
        <img 
          src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://wockytech.xyz&color=0A1F44" 
          alt="QR Code Scannable" 
          className="w-full h-full opacity-90 group-hover:opacity-100 transition-opacity"
        />
      </div>

      {/* LABEL */}
      <div className="mt-4 text-center">
         <p className="text-[7px] font-black text-brand-navy uppercase tracking-[0.3em]">Scanner Liaison</p>
      </div>
    </div>
  );
};
