import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="relative z-10 bg-[#09152b] text-white pt-14 pb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & slogan */}
          <div className="md:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/logo-white.png"
                alt="WockyTech"
                width={140}
                height={36}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-xs text-slate-400 font-medium tracking-wide">
              Idées • Code • Impact
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div className="md:col-span-2 space-y-3">
            <p className="text-xs font-semibold text-white">Navigation</p>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><Link href="/" className="hover:text-blue-400 transition-colors">Accueil</Link></li>
              <li><Link href="#services" className="hover:text-blue-400 transition-colors">Services</Link></li>
              <li><Link href="#projets" className="hover:text-blue-400 transition-colors">Projets</Link></li>
              <li><Link href="#avis" className="hover:text-blue-400 transition-colors">Avis</Link></li>
              <li><Link href="#contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Col 3: Nos services */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-semibold text-white">Nos services</p>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><Link href="#services" className="hover:text-blue-400 transition-colors">Sites Web</Link></li>
              <li><Link href="#services" className="hover:text-blue-400 transition-colors">Applications Mobiles</Link></li>
              <li><Link href="#services" className="hover:text-blue-400 transition-colors">Design Moderne</Link></li>
              <li><Link href="#services" className="hover:text-blue-400 transition-colors">Solutions Performantes</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact & Socials */}
          <div className="md:col-span-3 space-y-4">
            <p className="text-xs font-semibold text-white">Contact</p>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href="mailto:contact@wockytech.xyz" className="hover:text-blue-400 transition-colors">
                  contact@wockytech.xyz
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Dakar, Sénégal</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="https://wa.me/221773519128"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0066FF] hover:bg-[#0052cc] text-white text-xs font-semibold px-6 py-2.5 rounded-full shadow-lg transition-all"
              >
                <span>Parlons de votre projet</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>© {new Date().getFullYear()} WockyTech. Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-white transition-colors">Politique de confidentialité</Link>
            <Link href="#" className="hover:text-white transition-colors">Conditions d&apos;utilisation</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
