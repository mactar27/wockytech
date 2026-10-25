import Link from "next/link";
import { ArrowLeft, CheckCircle2, ArrowRight, Code2, Smartphone, Sparkles, Gauge } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const servicesList = [
  {
    slug: "sites-web",
    title: "Sites Web & Plateformes",
    tagline: "Des solutions web sur mesure qui convertissent et valorisent votre marque.",
    icon: Code2,
    desc: "Nous concevons des sites vitrines d'exception, des plateformes e-commerce à fort trafic et des applications web ultra-rapides. Chaque solution est optimisée pour le SEO, la vitesse de chargement et l'expérience sur mobile.",
    features: [
      "Architecture Next.js, React & Tailwind CSS moderne",
      "Optimisation SEO technique et vitesse d'affichage 100/100 Google Lighthouse",
      "Paiements en ligne sécurisés (Stripe, Wave, Orange Money)",
      "Back-office de gestion intuitif et autonome"
    ]
  },
  {
    slug: "applications-mobiles",
    title: "Applications Mobiles iOS & Android",
    tagline: "Des applications fluides, réactives et prêtes pour les stores.",
    icon: Smartphone,
    desc: "Création d'applications mobiles cross-platform (React Native, Flutter) et natives pour offrir une ergonomie parfaite à vos utilisateurs. Synchronisation temps réel, notifications push et fonctionnement hors-ligne.",
    features: [
      "Développement iOS & Android à partir d'une codebase unifiée et robuste",
      "Notifications push ciblées et engagement utilisateur",
      "Intégration fluide de fonctionnalités matérielles (caméra, géolocalisation, biométrie)",
      "Publication et maintenance sur App Store & Google Play Store"
    ]
  },
  {
    slug: "design-moderne",
    title: "Design UI/UX & Identité Visuelle",
    tagline: "Une identité remarquable et des interfaces intuitives.",
    icon: Sparkles,
    desc: "Nous façonnons des parcours utilisateurs fluides et mémorables. De la recherche UX au prototypage Figma jusqu'à la création de votre charte graphique, nous créons des produits qui séduisent vos clients.",
    features: [
      "Design systems modulaires et cohérents",
      "Prototypage interactif Figma haute fidélité",
      "Micro-animations fluides avec Framer Motion",
      "Conception centrée utilisateur pour maximiser la conversion"
    ]
  },
  {
    slug: "solutions-performantes",
    title: "Solutions Performantes & Cloud",
    tagline: "Infrastructures résilientes, sécurisées et évolutives.",
    icon: Gauge,
    desc: "Pour les projets critiques exigeant une disponibilité continue, nous bâtissons des architectures fiables, des APIs sécurisées et des pipelines CI/CD automatisés sur le Cloud (AWS, Vercel, GCP).",
    features: [
      "Architectures micro-services et APIs REST / GraphQL haute performance",
      "Déploiement continu automatisé (CI/CD) & monitoring 24/7",
      "Chiffrement de bout en bout et audits de sécurité stricts",
      "Haute disponibilité et tolérance aux pannes"
    ]
  }
];

export default function ServicesPage() {
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
              WockyTech Solutions
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-[#0A192F] tracking-tight">
              Nos Services Détaillés
            </h1>
            <p className="text-base text-slate-500 leading-relaxed">
              Nous combinons ingénierie de pointe, créativité et rigueur technique pour concevoir des produits digitaux performants qui propulsent votre activité.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
          {servicesList.map((srv, idx) => (
            <div
              key={srv.slug}
              id={srv.slug}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 sm:p-12 rounded-3xl border border-slate-100 shadow-[0_4px_30px_rgba(0,0,0,0.03)] bg-gradient-to-br ${
                idx % 2 === 0 ? "from-white to-[#F9FBFF]" : "from-[#F9FBFF] to-white"
              }`}
            >
              <div className="lg:col-span-7 space-y-5">
                <div className="w-12 h-12 rounded-2xl bg-[#0066FF] text-white flex items-center justify-center shadow-lg shadow-blue-500/25">
                  <srv.icon className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl sm:text-3xl font-black text-[#0A192F]">
                    {srv.title}
                  </h2>
                  <p className="text-sm font-semibold text-[#0066FF]">
                    {srv.tagline}
                  </p>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {srv.desc}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                  {srv.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-700 font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-center items-center p-8 rounded-2xl bg-white border border-slate-100 shadow-sm text-center space-y-5">
                <h3 className="text-base font-bold text-[#0A192F]">
                  Vous avez un projet en {srv.title} ?
                </h3>
                <p className="text-xs text-slate-500">
                  Échangeons sur vos besoins pour concevoir ensemble la meilleure solution.
                </p>
                <Link
                  href="https://wa.me/221773519128"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#0066FF] hover:bg-[#0052cc] text-white text-xs font-semibold px-6 py-3 rounded-full shadow-md transition-all hover:scale-[1.02]"
                >
                  <span>Demander un devis pour ce service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
