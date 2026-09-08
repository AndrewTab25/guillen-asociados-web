import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowUpRight, Sparkles } from 'lucide-react';

export const FloatingWhatsAppBar = ({ onOpenQuote }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 150);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  const quickWhatsAppUrl = `https://wa.me/584143495873?text=${encodeURIComponent(
    "Hola Francis Lugo, me comunico desde la web de Guillén Corona & Asociados para solicitar una cotización inmediata de flete/aduanas."
  )}`;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 animate-fade-in">
      <div className="flex items-center gap-2 p-1.5 rounded-full bg-white/95 backdrop-blur-xl border border-slate-200 shadow-xl shadow-slate-300/50">
        
        {/* Status Indicator */}
        <div className="flex items-center gap-2 pl-3 pr-2 text-xs text-slate-700 font-medium hidden sm:flex">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          <span>Operaciones En Línea</span>
        </div>

        {/* Separator */}
        <div className="w-[1px] h-5 bg-slate-200 hidden sm:block"></div>

        {/* Quick Quote Button */}
        <button
          onClick={onOpenQuote}
          className="px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-1.5"
        >
          <Sparkles size={13} className="text-emerald-600" />
          <span>Cotizador Express</span>
        </button>

        {/* Direct WhatsApp Action Button */}
        <a
          href={quickWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all flex items-center gap-1.5"
        >
          <MessageCircle size={14} className="fill-current" />
          <span>WhatsApp Directo</span>
          <ArrowUpRight size={13} />
        </a>

      </div>
    </div>
  );
};
