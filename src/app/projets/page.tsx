import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, ArrowRight, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const fullProjects = [
  {
    title: "Nonstopp",
    url: "https://nonstopp.shop/",
    category: "E-Commerce & Luxe",
    tag: "Production",
    description: "Plateforme e-commerce performante pour la marque de prêt-à-porter Nonstopp. Expérience d'achat fluide, gestion des stocks en temps réel et checkout sécurisé optimisé pour un taux de conversion maximal.",
    techs: ["Next.js", "React", "Tailwind CSS", "Stripe", "Mobile First"],
    image: "/nostopp-shop.png",
  },
  {
    title: "EZK Agency",
    url: "https://www.ezkagency.com/",
    category: "Agence Digitale & Marketing",
    tag: "Client International",
    description: "Site vitrine institutionnel et immersif pour l'agence de communication digitale EZK Agency à Dakar. Présentation des pôles d'expertise, portfolio dynamique et génération de leads qualifiés.",
    techs: ["Next.js", "Framer Motion", "Tailwind CSS", "SEO Avancé"],
    image: "/ezkkkk.png",
  },
  {
    title: "Knitta Corner",
    url: "https://knitta-corner.shop/",
    category: "Mode & Streetwear",
    tag: "E-Commerce",
    description: "Boutique en ligne streetwear présentant des collections exclusives et accessoires tendance. Interface moderne aux animations subtiles conçue pour engager une communauté jeune et connectée.",
    techs: ["Next.js", "E-commerce Engine", "TypeScript", "Responsive UI"],
    image: "/nostopp-home.png",
  },
  {
    title: "Dia'Rama Cosmétiques",
    url: "https://www.dia-rama.com/",
    category: "Cosmétiques & Beauté Naturelle",
    tag: "Marque Premium",
    description: "Plateforme e-commerce haut de gamme dédiée aux soins et parfums naturels inspirés de la beauté africaine. Expérience visuelle raffinée, storytelling de marque et tunnel de commande simplifié.",
    techs: ["Next.js", "React", "UX/UI Design", "Payment Gateway"],
    image: "/gen-branding.png",
  },
  {
    title: "Dilyaa",
    url: "https://www.dilyaa.com/",
    category: "Lifestyle & Soins",
    tag: "Boutique en ligne",
    description: "Boutique lifestyle et conseils de style offrant un catalogue diversifié d'accessoires et produits de beauté. Architecture performante et responsive garantissant une vitesse d'affichage instantanée.",
    techs: ["Next.js", "Tailwind CSS", "Catalogue Dynamique"],
    image: "/gen-agency.png",
  },
  {
    title: "Vyynaa",
    url: "https://www.vyynaa.com/",
    category: "Beauté & Bien-être",
    tag: "E-Commerce",
    description: "Site marchand spécialisé dans les articles de beauté et tendances lifestyle. Filtrage intuitif des produits, panier d'achat fluide et intégration omnicanale.",
    techs: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/nostopp-admin-dash.png",
  },
  {
    title: "SGOP — Système Souverain",
    url: "/sgop",
    category: "Système Critique & Sécurité",
    tag: "Architecture Nationale",
    description: "Système de Gestion Opérationnelle et d'immatriculation citoyenne hautement sécurisé, résilient et conçu pour les institutions publiques sénégalaises.",
    techs: ["Spring Boot", "React", "PostgreSQL", "Chiffrement Avancé"],
    image: "/sgop-citizen.png",
  },
  {
    title: "Lumoroptic SaaS",
    url: "/lumoroptic",
    category: "Logiciel SaaS & Santé",
    tag: "Plateforme Cloud",
    description: "Solution SaaS de gestion de stocks, catalogue de verres correcteurs et suivi de commandes pour les cabinets d'optique.",
    techs: ["React", "Node.js", "Cloud Database", "Analytics"],
    image: "/lumor-dash.png",
  }
];

export default function ProjectsPage() {
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
              Portfolio &amp; Études de cas
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-[#0A192F] tracking-tight">
              Nos Réalisations Détaillées
            </h1>
            <p className="text-base text-slate-500 leading-relaxed">
              Explorez en détail les applications, plateformes e-commerce et systèmes sur mesure que nous avons conçus et déployés pour nos clients partenaires.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {fullProjects.map((p, idx) => (
              <div
                key={idx}
                className="group flex flex-col bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,102,255,0.12)] hover:border-blue-200 transition-all duration-300"
              >
                {/* Visual Preview */}
                <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-slate-50 border-b border-slate-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold text-[#0066FF] shadow-sm">
                      {p.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col flex-1 justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        {p.category}
                      </span>
                    </div>
                    <h2 className="text-2xl font-black text-[#0A192F] group-hover:text-[#0066FF] transition-colors">
                      {p.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {p.description}
                    </p>
                  </div>

                  {/* Tech stack pills */}
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {p.techs.map((t, i) => (
                        <span key={i} className="text-[10px] font-medium px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-100 text-slate-600">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                      <a
                        href={p.url}
                        target={p.url.startsWith("http") ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-bold text-[#0066FF] hover:text-[#0052cc] group-hover:gap-3 transition-all"
                      >
                        <span>Visiter le projet en direct</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
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
            Prêt à lancer votre prochain projet ?
          </h2>
          <p className="text-sm text-slate-300">
            Confiez-nous la conception de votre site web ou application sur mesure.
          </p>
          <Link
            href="https://wa.me/221773519128"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0066FF] hover:bg-[#0052cc] text-white text-xs font-semibold px-8 py-3.5 rounded-full shadow-lg transition-all"
          >
            <span>Parlons de votre projet</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
