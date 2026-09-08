import React from 'react';
import { Quote } from 'lucide-react';
import { companyData } from '../data/companyData';

export const PartnersSection = () => {
  return (
    <section id="marcas" className="py-20 bg-[#ebf4f1] border-b border-[#cce4d8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-[#006e42] uppercase tracking-wider bg-[#dff3e8] border border-[#b9e4cd] px-3.5 py-1.5 rounded-full">
            Alianzas y Respaldo
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#0a2336] mt-3 tracking-tight">
            Marcas que confían en nosotros.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl mx-auto">
            Empresas con sólida trayectoria industrial y comercial que respaldan nuestra experiencia y confían en nuestras soluciones logísticas.
          </p>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {companyData.marcas.map((marca, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 border border-[#cbe4d7] shadow-2xs hover:shadow-md hover:border-emerald-500/50 transition-all duration-200 flex flex-col items-center justify-between text-center group"
            >
              <div className="w-full h-24 sm:h-28 flex items-center justify-center p-2">
                <img
                  src={marca.logo}
                  alt={marca.name}
                  className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
                />
              </div>
              <span className="text-xs font-bold text-slate-800 mt-2 truncate w-full group-hover:text-emerald-800 transition-colors">
                {marca.name}
              </span>
            </div>
          ))}
        </div>

        {/* Exact Quote from Brochure */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-[#c9e3d5] text-center max-w-3xl mx-auto shadow-xs relative">
          <Quote size={28} className="text-emerald-500/30 mx-auto mb-2" />
          <p className="text-slate-700 text-sm sm:text-base italic leading-relaxed">
            "Trabajamos junto a empresas reconocidas que confían en nuestra experiencia logística. Entre ellas destacan Industrias Roses, Flexoprint, Addigrains, EON, Grupo ADMI y Molanca, compañías con sólida trayectoria en sus respectivos sectores."
          </p>
          <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block mt-3">
            Guillén Corona & Asociados, C.A.
          </span>
        </div>

      </div>
    </section>
  );
};
