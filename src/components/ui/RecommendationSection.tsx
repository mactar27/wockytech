"use client";

import { motion } from "framer-motion";
import { Award, FileText, CheckCircle } from "lucide-react";

export const RecommendationSection = () => {
  return (
    <section className="relative z-10 py-32 bg-slate-50 border-y border-slate-200 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-navy/5 blur-3xl -mr-48 -mt-48 rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-accent/5 blur-3xl -ml-48 -mb-48 rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-sm font-black text-brand-accent uppercase tracking-[0.4em]">Excellence Académique</h2>
              <h3 className="text-4xl md:text-5xl font-black text-brand-navy tracking-tighter italic">Recommandation Institutionnelle.</h3>
            </div>
            
            <p className="text-xl text-slate-600 leading-relaxed font-medium">
              Reconnaissance des compétences techniques et de l'engagement professionnel par la direction des Instituts Supérieurs d'Enseignement Professionnel (ISEP).
            </p>

            <div className="space-y-6">
              {[
                { label: "Moyenne Générale", val: "17.00/20", desc: "Mention Excellence sur l'ensemble du cursus." },
                { label: "Soutenance PFF", val: "17.87/20", desc: "Projet de Fin de Formation jugé exceptionnel." }
              ].map((stat, i) => (
                <div key={i} className="flex items-start space-x-4 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                  <div className="w-12 h-12 bg-brand-navy/5 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-brand-navy" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <p className="text-2xl font-black text-brand-navy">{stat.val}</p>
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    </div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
                    <p className="text-sm text-slate-500 font-medium">{stat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* STYLIZED LETTER */}
            <div className="bg-white p-12 md:p-16 rounded-sm shadow-2xl border border-slate-200 relative overflow-hidden">
              {/* WATERMARK */}
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
                <FileText className="w-96 h-96 -rotate-12" />
              </div>

              <div className="relative z-10 space-y-8">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <p className="text-[10px] font-black text-brand-navy uppercase tracking-widest">République du Sénégal</p>
                    <p className="text-[8px] font-bold text-slate-400 uppercase tracking-tight">Ministère de l'Enseignement Supérieur</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-bold text-slate-500">Diamniadio, le 25 Avril 2026</p>
                  </div>
                </div>

                <div className="h-[1px] w-full bg-slate-100" />

                <div className="space-y-4">
                  <h4 className="text-lg font-black text-brand-navy uppercase tracking-tight">Lettre de Recommandation Académique</h4>
                  <p className="text-xs text-slate-600 leading-relaxed text-justify">
                    Par la présente, la direction certifie que Monsieur **Amadou Mactar NDIAYE** a fait preuve d'une maîtrise exceptionnelle des outils de développement web et mobile durant son cursus à l'ISEP de Diamniadio.
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed text-justify">
                    Sa capacité à concevoir des architectures robustes et sécurisées, illustrée par sa note de **17.87/20** au Projet de Fin de Formation, témoigne d'un haut niveau de professionnalisme et d'une aptitude remarquable à résoudre des problèmes techniques complexes.
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed text-justify font-bold">
                    Nous recommandons vivement son profil pour toute mission de développement Full-stack ou d'architecture logicielle.
                  </p>
                </div>

                <div className="pt-12 flex justify-end">
                  <div className="text-center space-y-2">
                    <p className="text-[10px] font-black text-brand-navy uppercase tracking-widest">La Direction de l'ISEP</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FLOATING BADGE */}
            <div className="absolute -bottom-6 -right-6 bg-brand-accent text-white p-6 rounded-2xl shadow-xl hidden md:block">
              <p className="text-[10px] font-black uppercase tracking-widest mb-1">Status</p>
              <p className="text-xl font-bold tracking-tight">Recommandé</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
