import React from 'react';
import { ArrowRight, Clock, ShieldCheck } from 'lucide-react';
import { companyData } from '../data/companyData';

export const ProcessSteps = ({ onOpenQuote }) => {
  return (
    <section id="proceso" className="relative py-28 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold tracking-wider uppercase mb-3">
            <Clock size={14} className="text-emerald-600" />
            <span>Metodología de Trabajo</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-brand-navy tracking-tight">
            De Origen a Destino <br />
            <span className="text-emerald-600">
              en 3 etapas transparentes.
            </span>
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Un flujo operativo probado a lo largo de 15 años que reduce costos de almacenaje y agiliza las entregas.
          </p>
        </div>

        {/* 3 Step Cards (Airvoir Style in Clean Light Theme) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {companyData.processSteps.map((step, idx) => (
            <div 
              key={idx}
              className="bg-slate-50/70 rounded-2xl p-8 border border-slate-200 hover:border-emerald-500/40 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Big Step Number */}
                <div className="flex items-baseline justify-between mb-6">
                  <span className="text-5xl sm:text-6xl font-display font-extrabold text-slate-300 group-hover:text-emerald-600 transition-colors">
                    {step.step}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold uppercase tracking-wider text-emerald-800 shadow-xs">
                    {step.badge}
                  </span>
                </div>

                <h3 className="text-xl font-display font-bold text-brand-navy mb-3 group-hover:text-emerald-700 transition-colors">
                  {step.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/70 flex items-center justify-between text-xs text-slate-500">
                <span>Fase 0{idx + 1} de 03</span>
                <span className="text-emerald-700 font-semibold">Garantizada</span>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Callout for 2-3 Days Clearance */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-sky-50 border border-emerald-200 p-8 sm:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase tracking-wider mb-2">
              <ShieldCheck size={16} className="text-emerald-600" />
              <span>Diferencial Competitivo Exclusivo</span>
            </div>
            <h4 className="text-2xl sm:text-3xl font-display font-extrabold text-brand-navy">
              ¿Por qué pagar sobrecostos portuarios y demoras?
            </h4>
            <p className="text-slate-600 text-sm mt-2 leading-relaxed">
              En Guillén Corona & Asociados desaduanamos su carga en un plazo récord de <strong className="text-emerald-800 font-bold">2 a 3 días hábiles</strong>. Evaluamos su caso sin compromiso.
            </p>
          </div>

          <button
            onClick={onOpenQuote}
            className="shrink-0 px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md shadow-emerald-600/20 flex items-center gap-2"
          >
            <span>Iniciar Consulta Express</span>
            <ArrowRight size={15} />
          </button>
        </div>

      </div>
    </section>
  );
};
