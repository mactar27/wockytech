"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
      <nav className="flex justify-between items-center px-6 md:px-12 py-3.5 max-w-7xl mx-auto">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0 group">
          <Image
            src="/logo-clean.png"
            alt="WockyTech"
            width={140}
            height={36}
            className="h-7 sm:h-8 w-auto object-contain"
            priority
          />
        </Link>

        {/* Center Nav Links identical to mockup */}
        <div className="hidden md:flex items-center gap-8 text-[13px] font-semibold text-slate-700">
          <Link
            href="/"
            className={`relative py-1 transition-colors ${
              isHome ? "text-blue-600 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-blue-600 after:rounded-full" : "hover:text-blue-600"
            }`}
          >
            Accueil
          </Link>

          {/* Services dropdown */}
          <div
            className="relative py-1"
            onMouseEnter={() => setServicesDropdown(true)}
            onMouseLeave={() => setServicesDropdown(false)}
          >
            <Link
              href="/services"
              className={`flex items-center gap-1 cursor-pointer transition-colors ${
                pathname === "/services" ? "text-blue-600 font-bold" : "hover:text-blue-600"
              }`}
            >
              <span>Services</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />
            </Link>

            {servicesDropdown && (
              <div className="absolute top-full left-0 w-56 pt-2 z-50">
                <div className="bg-white rounded-2xl p-2 shadow-2xl border border-slate-100 space-y-1">
                  <Link
                    href="/services#sites-web"
                    className="block px-3 py-2 text-xs font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50/60 rounded-xl transition-colors"
                  >
                    Sites Web &amp; E-commerce
                  </Link>
                  <Link
                    href="/services#applications-mobiles"
                    className="block px-3 py-2 text-xs font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50/60 rounded-xl transition-colors"
                  >
                    Applications Mobiles
                  </Link>
                  <Link
                    href="/services#design-moderne"
                    className="block px-3 py-2 text-xs font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50/60 rounded-xl transition-colors"
                  >
                    Design Moderne UI/UX
                  </Link>
                  <Link
                    href="/services#solutions-performantes"
                    className="block px-3 py-2 text-xs font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50/60 rounded-xl transition-colors"
                  >
                    Solutions Performantes &amp; Cloud
                  </Link>
                  <div className="border-t border-slate-100 pt-1">
                    <Link
                      href="/services"
                      className="block px-3 py-2 text-xs font-bold text-blue-600 hover:bg-blue-50 rounded-xl transition-colors"
                    >
                      Voir tous les services →
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/#projets"
            className="hover:text-blue-600 transition-colors py-1"
          >
            Projets
          </Link>
          <Link
            href="/avis"
            className={`py-1 transition-colors ${
              pathname === "/avis" ? "text-blue-600 font-bold after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-blue-600 after:rounded-full" : "hover:text-blue-600"
            }`}
          >
            Avis
          </Link>
          <Link
            href="/contact"
            className={`py-1 transition-colors ${
              pathname === "/contact" ? "text-blue-600 font-bold after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-blue-600 after:rounded-full" : "hover:text-blue-600"
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Right CTA Button identical to mockup */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#0066FF] hover:bg-[#0052cc] text-white text-xs font-semibold px-6 py-2.5 rounded-full shadow-[0_4px_16px_rgba(0,102,255,0.3)] hover:shadow-[0_6px_22px_rgba(0,102,255,0.45)] transition-all duration-300 hover:scale-[1.02]"
          >
            <span>Parlons de votre projet</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-slate-700 hover:text-blue-600"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu dropdown */}
      {open && (
        <div className="md:hidden border-t border-slate-100 bg-white px-6 py-6 space-y-4 shadow-xl">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="block text-sm font-semibold text-slate-700 hover:text-blue-600 py-1"
          >
            Accueil
          </Link>
          <Link
            href="/services"
            onClick={() => setOpen(false)}
            className="block text-sm font-semibold text-slate-700 hover:text-blue-600 py-1"
          >
            Services
          </Link>
          <Link
            href="/#projets"
            onClick={() => setOpen(false)}
            className="block text-sm font-semibold text-slate-700 hover:text-blue-600 py-1"
          >
            Projets
          </Link>
          <Link
            href="/avis"
            onClick={() => setOpen(false)}
            className="block text-sm font-semibold text-slate-700 hover:text-blue-600 py-1"
          >
            Avis
          </Link>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block text-sm font-semibold text-slate-700 hover:text-blue-600 py-1"
          >
            Contact
          </Link>
          <div className="pt-3 border-t border-slate-100 flex justify-center">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 bg-[#0066FF] text-white text-xs font-semibold px-6 py-2.5 rounded-full shadow-md w-full justify-center"
            >
              <span>Parlons de votre projet</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
