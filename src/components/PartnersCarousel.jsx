import React from 'react';
import { Building2, CheckCircle } from 'lucide-react';
import { companyData } from '../data/companyData';

export const PartnersCarousel = () => {
  return (
    <section id="aliados" className="relative py-28 bg-slate-50/60 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold tracking-wider uppercase mb-3">
            <Building2 size={14} className="text-emerald-600" />
            <span>Respaldo y Confianza</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-brand-navy tracking-tight">
            Marcas que Confían <br />
            <span className="text-emerald-600">
              en nuestra experiencia.
            </span>
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Trabajamos junto a corporaciones e industrias líderes que confían en nuestra solvencia logística y cumplimiento normativo.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {companyData.partners.map((partner, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-between text-center border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-500/40 group transition-all duration-200"
            >
              {/* Logo Container */}
              <div className="w-full aspect-square rounded-xl bg-slate-50/50 p-3 flex items-center justify-center border border-slate-100 group-hover:bg-white transition-all overflow-hidden">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-full max-w-full object-contain filter group-hover:scale-105 transition-transform duration-200"
                />
              </div>

              <div className="mt-4 w-full">
                <h4 className="text-xs sm:text-sm font-bold text-brand-navy group-hover:text-emerald-700 transition-colors truncate">
                  {partner.name}
                </h4>
                <p className="text-[10px] sm:text-[11px] text-slate-500 mt-1 line-clamp-2 leading-tight">
                  {partner.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Proof Statement Card */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm text-center max-w-4xl mx-auto">
          <p className="text-slate-700 text-sm sm:text-base italic leading-relaxed">
            "En Guillén Corona y Asociados contamos con más de 15 años de experiencia en importación y exportación, un equipo altamente calificado y aliados globales que nos permiten gestionar cargas de forma eficiente, garantizando procesos seguros y confiables."
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-wider">
            <CheckCircle size={15} className="text-emerald-600" />
            <span>Compromiso de Solvencia Corporativa</span>
          </div>
        </div>

      </div>
    </section>
  );
};
