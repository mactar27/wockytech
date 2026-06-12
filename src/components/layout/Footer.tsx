import Link from "next/link";
import { SocialIcons } from "@/components/ui/SocialIcons";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-slate-100 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-4">
          <p className="text-lg font-black text-brand-navy tracking-tight">WockyTech</p>
          <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
            Architectures numériques sécurisées. Basé à Dakar, Sénégal.
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Navigation</p>
          <div className="flex flex-col gap-2 text-sm text-slate-600">
            <Link href="/#projects" className="hover:text-brand-navy transition-colors">Projets</Link>
            <Link href="/intelligence" className="hover:text-brand-navy transition-colors">Intelligence</Link>
            <Link href="/sgop" className="hover:text-brand-navy transition-colors">SGOP</Link>
            <Link href="/lumoroptic" className="hover:text-brand-navy transition-colors">Lumoroptic</Link>
            <Link href="/nostopp" className="hover:text-brand-navy transition-colors">Nostopp</Link>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Réseaux</p>
          <div className="flex gap-4 text-slate-400">
            <SocialIcons className="w-5 h-5" />
          </div>
          <Link
            href="/MonCv.pdf"
            download="MonCv.pdf"
            className="inline-block text-sm font-bold text-brand-accent hover:text-brand-navy transition-colors"
          >
            Télécharger le CV →
          </Link>
        </div>
      </div>

      <div className="border-t border-slate-200 py-6 text-center">
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
          © 2026 WockyTech • Amadou Mactar Ndiaye
        </p>
      </div>
    </footer>
  );
}
