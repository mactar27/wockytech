"use client";

import Link from "next/link";
import { ArrowLeft, Mail, MapPin, Phone, MessageSquare, Send, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-12 pb-16 bg-gradient-to-b from-[#F5F8FF] via-[#FAFCFF] to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retour à l&apos;accueil</span>
          </Link>
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF3FF] text-[#0066FF] text-xs font-semibold">
              Contact &amp; Devis
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-[#0A192F] tracking-tight">
              Parlons de votre projet
            </h1>
            <p className="text-base text-slate-500 leading-relaxed">
              Vous avez une idée de site web, d&apos;application mobile ou de système sur mesure ? Nous sommes à votre écoute pour vous conseiller et vous accompagner.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left Col: Contact Details */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-black text-[#0A192F]">
                  Coordonnées directes
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Notre équipe est basée à Dakar, Sénégal et intervient pour des clients à l&apos;international en 100% digital.
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-4 p-5 rounded-2xl border border-slate-100 bg-slate-50/50">
                  <div className="w-10 h-10 rounded-xl bg-[#0066FF] text-white flex items-center justify-center shrink-0 shadow-md">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400">Email professionnel</p>
                    <a href="mailto:ndiayeamadoumactar3@gmail.com" className="text-sm font-bold text-slate-900 hover:text-[#0066FF] transition-colors">
                      ndiayeamadoumactar3@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl border border-slate-100 bg-slate-50/50">
                  <div className="w-10 h-10 rounded-xl bg-[#0066FF] text-white flex items-center justify-center shrink-0 shadow-md">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400">WhatsApp direct</p>
                    <a href="https://wa.me/221773519128" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-slate-900 hover:text-[#0066FF] transition-colors">
                      +221 77 351 91 28
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl border border-slate-100 bg-slate-50/50">
                  <div className="w-10 h-10 rounded-xl bg-[#0066FF] text-white flex items-center justify-center shrink-0 shadow-md">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400">Localisation</p>
                    <p className="text-sm font-bold text-slate-900">
                      Dakar, Sénégal — Présence Digitale Mondiale
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-blue-50/60 border border-blue-100 space-y-3">
                <p className="text-xs font-bold text-[#0066FF] uppercase tracking-wider">
                  Nos engagements
                </p>
                <div className="space-y-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0066FF]" />
                    <span>Réponse sous 24h ouvrées garantie</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0066FF]" />
                    <span>Devis clair, transparent et sans engagement</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0066FF]" />
                    <span>Conseil technique personnalisé adapté à votre budget</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: Contact Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-[0_10px_40px_rgba(0,102,255,0.06)] space-y-6">
              <h2 className="text-2xl font-black text-[#0A192F]">
                Envoyez-nous un message
              </h2>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); window.location.href="mailto:ndiayeamadoumactar3@gmail.com"; }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">Nom complet *</label>
                    <input
                      type="text"
                      required
                      placeholder="Votre nom"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/15 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="nom@exemple.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/15 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">Téléphone / WhatsApp</label>
                    <input
                      type="tel"
                      placeholder="+221 ..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/15 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">Type de projet</label>
                    <select
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/15 outline-none transition-all bg-white"
                    >
                      <option>Site Web Vitrine ou E-Commerce</option>
                      <option>Application Mobile iOS / Android</option>
                      <option>Design UI/UX & Refonte</option>
                      <option>Système Critique & Cloud</option>
                      <option>Autre</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">Description de votre projet *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Parlez-nous de vos besoins, vos objectifs et vos délais..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/15 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#0066FF] hover:bg-[#0052cc] text-white font-semibold text-sm px-8 py-3.5 rounded-full shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.01]"
                >
                  <span>Envoyer ma demande</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
