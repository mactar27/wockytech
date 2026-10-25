import Link from "next/link";
import { ArrowLeft, Star, Quote, ArrowRight, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const clientReviews = [
  {
    author: "Directeur Général",
    company: "EZK Agency Dakar",
    rating: 5,
    date: "Projet 2026",
    title: "Une refonte digitale au-delà de nos attentes",
    feedback: "WockyTech a fait preuve d'une rigueur et d'une maîtrise technique exemplaires. Notre nouvelle plateforme est ultra-rapide, moderne et nous apporte de nouveaux prospects chaque semaine. Le respect des délais et la disponibilité de l'équipe ont fait toute la différence.",
    project: "Site institutionnel & Branding"
  },
  {
    author: "Fondateur",
    company: "Nonstopp Shop",
    rating: 5,
    date: "Projet 2026",
    title: "Un e-commerce ultra fluide et robuste",
    feedback: "La boutique en ligne créée par WockyTech encaisse les pics de trafic lors de nos lancements sans aucun ralentissement. L'interface mobile est intuitive pour nos clients et le panneau d'administration nous fait gagner un temps précieux au quotidien.",
    project: "Plateforme e-commerce sur mesure"
  },
  {
    author: "Responsable E-Commerce",
    company: "Dia'Rama Cosmétiques",
    rating: 5,
    date: "Projet 2026",
    title: "Design luxueux et expérience d'achat parfaite",
    feedback: "Nous avions besoin d'un univers visuel raffiné et d'un tunnel de commande sans friction. Le résultat est magnifique, nos clients adorent la clarté du site et nos ventes en ligne ont progressé immédiatement dès le premier mois.",
    project: "Boutique en ligne cosmétique & identité visuelle"
  },
  {
    author: "Créateur & Gérant",
    company: "Knitta Corner",
    rating: 5,
    date: "Projet 2025",
    title: "Une écoute proactive et un rendu d'une grande modernité",
    feedback: "Dès les premières maquettes, WockyTech a su capter l'esprit urbain et haut de gamme de notre marque. La réactivité, les conseils d'architecture et l'optimisation mobile ont dépassé nos espérances.",
    project: "Boutique Streetwear & Catalogue dynamique"
  },
  {
    author: "Directeur des Systèmes d'Information",
    company: "Administration & Services Publics",
    rating: 5,
    date: "Projet 2025",
    title: "Excellence architecturale et sécurité maximale",
    feedback: "L'expertise d'Amadou Mactar Ndiaye sur le projet SGOP a permis de bâtir un système souverain résilient, tolérant aux pannes et respectant les normes de sécurité les plus strictes. Un partenaire de confiance pour les projets d'envergure.",
    project: "Système de Gestion Opérationnelle (SGOP)"
  },
  {
    author: "Opticienne Associée",
    company: "Lumoroptic",
    rating: 5,
    date: "Projet 2025",
    title: "Un logiciel SaaS qui simplifie toute notre gestion",
    feedback: "La solution SaaS développée sur mesure nous a permis de centraliser nos ordonnances, verres et stocks en un seul endroit. Simple à prendre en main par toute l'équipe et très rapide.",
    project: "Application SaaS Médicale & Stocks"
  }
];

export default function ReviewsPage() {
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
              Témoignages &amp; Confiance
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-[#0A192F] tracking-tight">
              Ce que disent nos clients
            </h1>
            <p className="text-base text-slate-500 leading-relaxed">
              La satisfaction de nos partenaires est notre meilleure référence. Découvrez leurs retours d&apos;expérience sur les projets que nous avons menés ensemble.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clientReviews.map((rev, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_35px_rgba(0,102,255,0.08)] transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                      {rev.date}
                    </span>
                  </div>

                  <h2 className="text-base font-bold text-[#0A192F]">
                    &ldquo;{rev.title}&rdquo;
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {rev.feedback}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <p className="text-xs font-bold text-slate-900">{rev.author}</p>
                  <p className="text-xs text-[#0066FF] font-medium">{rev.company}</p>
                  <p className="text-[10px] text-slate-400 mt-1">{rev.project}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-16 bg-[#09152b] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl font-black">
            Rejoignez nos clients satisfaits
          </h2>
          <p className="text-sm text-slate-300">
            Discutons ensemble de vos objectifs digitaux et construisons une solution d&apos;exception.
          </p>
          <Link
            href="https://wa.me/221773519128"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0066FF] hover:bg-[#0052cc] text-white text-xs font-semibold px-8 py-3.5 rounded-full shadow-lg transition-all"
          >
            <span>Démarrer votre projet</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
