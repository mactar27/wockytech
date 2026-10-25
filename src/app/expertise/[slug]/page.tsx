import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// Dummy data for each expertise
const expertiseData = {
  "web-mobiles": {
    title: "Web / Mobiles",
    subtitle: "Applications modernes et mobiles sur-mesure et réactives.",
    content: "Nous concevons des applications web et mobiles performantes, pensées pour l'expérience utilisateur et la scalabilité. Notre approche intègre les dernières technologies (React, Next.js, Flutter) pour vous garantir des produits robustes et évolutifs.",
    benefits: [
      "Interfaces utilisateur intuitives et modernes",
      "Performances optimisées pour le web et le mobile",
      "Développement multi-plateformes",
      "Intégration d'API et services tiers complexes"
    ]
  },
  "critical-systems": {
    title: "Critical Systems",
    subtitle: "Architecture résiliente et systèmes haute disponibilité.",
    content: "Dans les environnements où la défaillance n'est pas une option, nous concevons des systèmes distribués capables de résister aux pannes et de maintenir une disponibilité continue. Idéal pour la finance, la santé ou l'administration publique.",
    benefits: [
      "Tolérance aux pannes et redondance",
      "Temps de réponse garanti sous forte charge",
      "Traçabilité complète des opérations",
      "Mises à jour sans interruption de service (Zero Downtime)"
    ]
  },
  "cloud-devops": {
    title: "Cloud / DevOps",
    subtitle: "Infrastructures cloud évolutives et pipelines CI/CD automatisés.",
    content: "Accélérez vos cycles de développement grâce à l'automatisation. Nous mettons en place des infrastructures as code (IaC), des pipelines de déploiement continu et une gestion optimisée de vos ressources cloud pour réduire les coûts et augmenter votre agilité.",
    benefits: [
      "Déploiements rapides, fréquents et fiables",
      "Infrastructure élastique qui s'adapte à la demande",
      "Supervision et logs centralisés",
      "Optimisation des coûts cloud (FinOps)"
    ]
  },
  "cybersec": {
    title: "Cybersec",
    subtitle: "Audit de sécurité, chiffrement et protection des données sensibles.",
    content: "La sécurité est au cœur de notre démarche. Nous protégeons vos actifs numériques par des audits approfondis, la mise en œuvre de cryptographie forte et la sécurisation de vos réseaux et applications contre les menaces modernes.",
    benefits: [
      "Audits de code et tests d'intrusion (Pen-testing)",
      "Chiffrement de bout en bout (AES-256, RSA)",
      "Conformité RGPD et normes de sécurité internationales",
      "Surveillance continue et détection d'intrusions"
    ]
  },
  "conseil": {
    title: "Conseil",
    subtitle: "Stratégie numérique, accompagnement et architecture SI.",
    content: "Nous vous accompagnons dans votre transformation digitale. De l'audit de votre système d'information existant à la définition d'une roadmap technique claire, nos experts vous guident pour faire les meilleurs choix technologiques.",
    benefits: [
      "Audits d'architecture et de performance",
      "Aide au choix technologique (Stack, Cloud, Outils)",
      "Accompagnement dans la transition vers l'agilité",
      "Mentorat et formation de vos équipes techniques"
    ]
  },
  "support": {
    title: "Support",
    subtitle: "Maintenance continue, monitoring et assistance réactive.",
    content: "Notre engagement ne s'arrête pas à la livraison. Nous assurons un suivi rigoureux de vos applications en production. Avec un monitoring 24/7 et des SLA adaptés à vos besoins, nous garantissons la pérennité de vos investissements.",
    benefits: [
      "Monitoring proactif et alertes temps réel",
      "Correction rapide des anomalies (SLA)",
      "Maintien en conditions opérationnelles (MCO)",
      "Mises à jour de sécurité et évolutives"
    ]
  }
};

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return Object.keys(expertiseData).map((slug) => ({
    slug,
  }));
}

export default async function ExpertisePage(props: { params: Params }) {
  const params = await props.params;
  const data = expertiseData[params.slug as keyof typeof expertiseData];

  if (!data) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#020408] selection:bg-blue-500/30">
      <Navbar />
      
      <article className="pt-32 pb-24 relative overflow-hidden">
        {/* Gradients de fond */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[20%] right-[-10%] w-[30%] h-[30%] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
          <Link 
            href="/#expertise" 
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Retour aux expertises
          </Link>
          
          <header className="space-y-6 mb-16">
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
              {data.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed max-w-2xl">
              {data.subtitle}
            </p>
          </header>
          
          <div className="prose prose-invert prose-lg max-w-none">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 mb-12 backdrop-blur-sm">
              <p className="text-slate-200 leading-relaxed m-0">
                {data.content}
              </p>
            </div>
            
            <h2 className="text-2xl font-bold text-white mb-6">Ce que nous vous apportons</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
              {data.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3 p-0 m-0">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
                  <span className="text-slate-300">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-20 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="text-xl font-bold text-white">Prêt à démarrer ?</h3>
              <p className="text-slate-400 text-sm">Discutons de votre projet en détail.</p>
            </div>
            <Link
              href="https://wa.me/221773519128"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-br from-blue-500 to-blue-700 text-white font-semibold rounded-full hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all transform hover:scale-105"
            >
              Contactez-nous
            </Link>
          </div>
        </div>
      </article>
      
      <Footer />
    </main>
  );
}
