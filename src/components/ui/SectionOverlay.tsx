"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Phone, ExternalLink, ArrowRight, X } from "lucide-react";

// CUSTOM OFFICIAL SVG ICONS
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-slate-900">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#0077b5]">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.981 0 1.775-.773 1.775-1.729V1.729C24 .774 23.206 0 22.222 0z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-pink-500">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.584.07-4.849.149-3.227 1.664-4.771 4.919-4.92 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-green-500">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 1118.41-4.883 9.834 9.834 0 01-10.037 9.515M12 0C5.373 0 0 5.373 0 12c0 2.123.55 4.12 1.591 5.859L0 24l6.335-1.652C7.906 23.45 9.882 24 12 24c6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12" />
  </svg>
);

interface SectionOverlayProps {
  sectionId: number;
  isVisible: boolean;
  onClose?: () => void;
}

export default function SectionOverlay({ sectionId, isVisible, onClose }: SectionOverlayProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           exit={{ opacity: 0, scale: 0.95 }}
           className="fixed inset-0 z-[60] flex items-center justify-center p-6 bg-brand-dark/40 backdrop-blur-sm"
        >
          <motion.div 
            className="w-full max-w-xl glass p-8 md:p-12 rounded-[40px] border-brand-accent/30 relative shadow-[0_0_50px_rgba(37,99,235,0.2)]"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors group pointer-events-auto"
            >
              <X className="w-6 h-6 text-brand-muted group-hover:text-white transition-colors" />
            </button>

            <div className="space-y-8">
              {sectionId === 2 && (
                <>
                  <div className="flex items-center space-x-4">
                    <span className="w-10 h-10 rounded-xl bg-brand-accent flex items-center justify-center font-bold text-lg text-white shadow-[0_0_15px_rgba(37,99,235,0.5)]">02</span>
                    <h2 className="text-3xl font-display font-bold uppercase tracking-wider text-slate-900 italic">À Propos</h2>
                  </div>
                  <p className="text-lg text-slate-600 leading-relaxed font-medium">
                    Développeur web passionné de technologie chez <span className="text-brand-accent font-bold">WockyTech</span>. 
                    Je conçois des applications modernes, performantes et sécurisées.
                    <br /><br />
                    Mon objectif est de repousser les limites du web avec des expériences immersives et scalables.
                  </p>
                </>
              )}

              {sectionId === 3 && (
                <>
                  <div className="flex items-center space-x-4">
                    <span className="w-10 h-10 rounded-xl bg-brand-accent flex items-center justify-center font-bold text-lg text-white shadow-[0_0_15px_rgba(37,99,235,0.5)]">03</span>
                    <h2 className="text-3xl font-display font-bold uppercase tracking-wider text-slate-900 italic">Hard Skills</h2>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {['React / Next.js', 'TypeScript', 'Node.js / Express', 'MySQL / Prisma', 'Three.js / Canvas', 'Tailwind CSS'].map((skill) => (
                      <div key={skill} className="flex items-center space-x-3 bg-slate-900/5 p-4 rounded-2xl border border-slate-900/10 hover:border-brand-accent/40 transition-colors">
                        <div className="w-2 h-2 rounded-full bg-brand-accent shadow-[0_0_5px_rgba(37,99,235,1)]" />
                        <span className="font-bold text-sm tracking-wide text-slate-800">{skill}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {sectionId === 4 && (
                <>
                  <div className="flex items-center space-x-4">
                    <span className="w-10 h-10 rounded-xl bg-brand-accent flex items-center justify-center font-bold text-lg text-white shadow-[0_0_15px_rgba(37,99,235,0.5)]">04</span>
                    <h2 className="text-3xl font-display font-bold uppercase tracking-wider text-slate-900 italic">Contact</h2>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    <a href="https://github.com/mactar27" target="_blank" className="flex items-center justify-between p-5 bg-slate-900/5 rounded-2xl border border-slate-900/10 hover:bg-slate-900/10 transition-all group">
                      <div className="flex items-center space-x-4"><GithubIcon /><span className="font-bold text-slate-900">GitHub</span></div>
                      <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-slate-900 opacity-50 group-hover:opacity-100" />
                    </a>
                    <a href="https://www.linkedin.com/in/amadou-mactar-ndiaye-306a3328a/" target="_blank" className="flex items-center justify-between p-5 bg-[#0077b5]/10 rounded-2xl border border-[#0077b5]/30 hover:bg-[#0077b5]/20 transition-all group">
                      <div className="flex items-center space-x-4"><LinkedinIcon /><span className="font-bold text-[#0077b5]">LinkedIn</span></div>
                      <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-slate-900 opacity-50 group-hover:opacity-100" />
                    </a>
                    <a href="https://wa.me/221773519128" target="_blank" className="flex items-center justify-between p-5 bg-green-500/10 rounded-2xl border border-green-500/20 hover:bg-green-500/20 transition-all group">
                      <div className="flex items-center space-x-4"><WhatsAppIcon /><span className="font-bold text-green-600">WhatsApp Direct</span></div>
                      <span className="text-[10px] text-green-500 font-bold uppercase">Dispo 24/7</span>
                    </a>
                  </div>
                </>
              )}

              <button 
                onClick={onClose}
                className="w-full py-5 bg-slate-900 text-white rounded-2xl font-bold uppercase tracking-[0.2em] shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:scale-[1.02] active:scale-95 transition-all pointer-events-auto"
              >
                Continuer la course
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
