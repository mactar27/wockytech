"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronRight } from "lucide-react";
import { SocialIcons } from "@/components/ui/SocialIcons";

const navLinks = [
  { href: "/#projects", label: "Projets" },
  { href: "/#expertise", label: "Expertise" },
  { href: "/#technologies", label: "Technologies" },
  { href: "/#about", label: "À Propos" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50">
      <nav className="flex justify-between items-center px-6 md:px-12 py-6 max-w-7xl mx-auto">
        <Link href="/" className="w-[160px] md:w-[240px] shrink-0">
          <Image
            src="/logo.png"
            alt="WockyTech"
            width={300}
            height={120}
            className="object-contain hover:opacity-90 transition-opacity"
            priority
          />
        </Link>

        <div className="hidden lg:flex items-center gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-brand-navy transition-colors">
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-4 border-l border-slate-200 pl-6 text-slate-400">
            <SocialIcons />
          </div>
          <Link
            href="https://wa.me/221773519128"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-brand-navy py-2.5 px-6 rounded-lg text-white hover:bg-brand-accent transition-colors"
          >
            Contact <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-brand-navy"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-slate-100 bg-[#F0F3FA]/95 backdrop-blur-md px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-bold text-brand-navy uppercase tracking-widest py-2"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-5 pt-2 text-slate-400">
            <SocialIcons className="w-5 h-5" />
          </div>
          <Link
            href="https://wa.me/221773519128"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="block text-center bg-brand-navy text-white py-4 rounded-lg text-xs font-black uppercase tracking-widest"
          >
            WhatsApp
          </Link>
        </div>
      )}
    </header>
  );
}
