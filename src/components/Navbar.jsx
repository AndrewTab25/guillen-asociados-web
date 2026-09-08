import React, { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { companyData } from '../data/companyData';

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#f7faf9]/95 backdrop-blur-md border-b border-[#c8e2d6] shadow-2xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo alone */}
          <a href="#hero" className="flex items-center group py-2">
            <img 
              src="/Logo/logo_guillen_corona.png" 
              alt={companyData.name} 
              className="h-14 sm:h-16 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-[#0a2336]">
            <a href="#hero" className="hover:text-emerald-700 transition-colors py-1">
              Inicio
            </a>
            <a href="#nosotros" className="hover:text-emerald-700 transition-colors py-1">
              ¿Quiénes Somos?
            </a>
            <a href="#servicios" className="hover:text-emerald-700 transition-colors py-1">
              Servicios
            </a>
            <a href="#cobertura" className="hover:text-emerald-700 transition-colors py-1">
              Puertos & Cobertura
            </a>
            <a href="#marcas" className="hover:text-emerald-700 transition-colors py-1">
              Marcas Aliadas
            </a>
            <a href="#contacto" className="hover:text-emerald-700 transition-colors py-1">
              Contacto
            </a>
          </nav>

          {/* Single Minimalist WhatsApp CTA */}
          <div className="hidden sm:flex items-center">
            <a
              href="https://wa.me/584143495873?text=Hola%20Francis%20Lugo%2C%20deseo%20solicitar%20asesor%C3%ADa%20y%20cotizaci%C3%B3n%20aduanal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold shadow-sm hover:shadow-md transition-all duration-200 active:scale-95"
            >
              <MessageCircle size={15} className="fill-current" />
              <span>Cotizar por WhatsApp</span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg bg-[#e7f2ed] text-slate-700 border border-[#c6e1d5]"
            aria-label="Abrir menú"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#f7faf9] border-b border-[#c8e2d6] px-6 py-5 space-y-4 shadow-xl">
          <nav className="flex flex-col gap-3 text-base font-semibold text-slate-800">
            <a 
              href="#hero" 
              onClick={() => setMobileOpen(false)}
              className="py-2 border-b border-slate-200/60 hover:text-emerald-700"
            >
              Inicio
            </a>
            <a 
              href="#nosotros" 
              onClick={() => setMobileOpen(false)}
              className="py-2 border-b border-slate-200/60 hover:text-emerald-700"
            >
              ¿Quiénes Somos?
            </a>
            <a 
              href="#servicios" 
              onClick={() => setMobileOpen(false)}
              className="py-2 border-b border-slate-200/60 hover:text-emerald-700"
            >
              Nuestros Servicios
            </a>
            <a 
              href="#cobertura" 
              onClick={() => setMobileOpen(false)}
              className="py-2 border-b border-slate-200/60 hover:text-emerald-700"
            >
              Puertos & Cobertura
            </a>
            <a 
              href="#marcas" 
              onClick={() => setMobileOpen(false)}
              className="py-2 border-b border-slate-200/60 hover:text-emerald-700"
            >
              Marcas Aliadas
            </a>
            <a 
              href="#contacto" 
              onClick={() => setMobileOpen(false)}
              className="py-2 hover:text-emerald-700"
            >
              Contacto
            </a>
          </nav>

          <a
            href="https://wa.me/584143495873?text=Hola%20Francis%20Lugo%2C%20deseo%20solicitar%20asesor%C3%ADa%20y%20cotizaci%C3%B3n%20aduanal"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="w-full py-2.5 rounded-xl bg-[#25D366] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm"
          >
            <MessageCircle size={16} className="fill-current" />
            <span>Cotizar por WhatsApp</span>
          </a>
        </div>
      )}
    </header>
  );
};
