import React from 'react';
import { ShieldCheck, Globe2, Anchor, TrendingUp, ArrowUpRight, Award, CheckCircle } from 'lucide-react';
import { companyData } from '../data/companyData';

export const ServicesGrid = ({ onOpenQuote }) => {
  const iconMap = {
    ShieldCheck: ShieldCheck,
    Globe2: Globe2,
    Anchor: Anchor,
    TrendingUp: TrendingUp
  };

  return (
    <section id="servicios" className="relative py-28 bg-slate-50/60 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold tracking-wider uppercase mb-3">
              <Award size={14} className="text-emerald-600" />
              <span>Servicios Especializados</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-brand-navy tracking-tight">
              Soluciones Aduanales y <br />
              <span className="text-emerald-600">
                Comercio Exterior Integral.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-slate-600 text-sm sm:text-base leading-relaxed">
            Eliminamos cuellos de botella con procesos aduanales ágiles, seguimiento exhaustivo en muelle y transporte seguro hasta su destino.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {companyData.services.map((service, idx) => {
            const IconComponent = iconMap[service.icon] || ShieldCheck;
            return (
              <div 
                key={service.id}
                className="bg-white rounded-2xl p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 group-hover:scale-105 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-200">
                      <IconComponent size={26} />
                    </div>
                    <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
                      DIVISIÓN 0{idx + 1}
                    </span>
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                    {service.category}
                  </span>

                  <h3 className="text-xl sm:text-2xl font-display font-bold text-brand-navy mt-1 mb-2 group-hover:text-emerald-700 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm font-semibold text-slate-700 mb-3">
                    {service.headline}
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div>
                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 mb-6">
                    {service.badges.map((badge, bIdx) => (
                      <span 
                        key={bIdx}
                        className="px-2.5 py-1 rounded-md bg-slate-100 text-[11px] font-medium text-slate-700"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  {/* Direct Action */}
                  <button
                    onClick={onOpenQuote}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 group-hover:text-emerald-800 hover:underline"
                  >
                    <span>Consultar Operación</span>
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Corporate Values Bar */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
              VALORES CORPORATIVOS
            </span>
            <h4 className="text-lg font-display font-bold text-brand-navy mt-0.5">
              Pilares de Nuestra Solvencia Profesional
            </h4>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {companyData.values.map((val, i) => (
              <div 
                key={i} 
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-semibold text-slate-800"
              >
                <CheckCircle size={15} className="text-emerald-600" />
                <span>{val}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
