import React, { useState } from 'react';
import { Target, Compass, Award, Shield, CheckCircle2, Users } from 'lucide-react';
import { companyData } from '../data/companyData';

export const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('mision');

  const tabs = [
    { id: 'mision', label: 'Misión', icon: Target },
    { id: 'vision', label: 'Visión', icon: Compass },
    { id: 'valores', label: 'Valores Corporativos', icon: Shield },
    { id: 'fortalezas', label: 'Fortalezas', icon: Award },
  ];

  return (
    <section id="nosotros" className="relative py-20 bg-[#f3f8f7] border-b border-[#cce4d8] overflow-hidden">
      
      {/* Ghosted Maritime Logistics Watermark */}
      <div 
        className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-[0.035] mix-blend-luminosity filter grayscale"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1920&q=80')` 
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#006e42] uppercase tracking-wider bg-[#dff3e8] border border-[#b9e4cd] px-3.5 py-1.5 rounded-full">
            Trayectoria y Compromiso
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#0a2336] mt-3 tracking-tight">
            {companyData.about.title}
          </h2>
          <p className="mt-4 text-base text-slate-700 leading-relaxed font-medium">
            {companyData.about.summary}
          </p>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            {companyData.about.description}
          </p>
        </div>

        {/* 3 Core Pillars from Brochure */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {companyData.about.pillars.map((pillar, idx) => {
            const icons = [Compass, Award, Users];
            const Icon = icons[idx];
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-7 border border-[#cde4d9] hover:border-emerald-500/50 hover:shadow-md transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#e5f4ec] text-emerald-800 flex items-center justify-center mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-200">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-display font-bold text-[#0a2336] mb-2 group-hover:text-emerald-800 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Interactive Corporate Identity Tabs in Pastel */}
        <div className="bg-[#eaf4ef] rounded-3xl p-6 sm:p-10 border border-[#c2e2d3] shadow-xs">
          
          {/* Tab Selector Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8 pb-6 border-b border-[#c8e5d6]">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                    isActive
                      ? 'bg-[#0a2336] text-white shadow-sm'
                      : 'bg-white text-slate-700 hover:text-slate-900 border border-[#c6e3d5]'
                  }`}
                >
                  <Icon size={16} className={isActive ? 'text-emerald-400' : 'text-slate-400'} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Display */}
          <div className="max-w-3xl mx-auto">
            {activeTab === 'mision' && (
              <div className="space-y-4 animate-fade-in text-center sm:text-left">
                <span className="text-xs font-bold text-[#006e42] uppercase tracking-wider block">
                  Nuestro Propósito Fundamental
                </span>
                <h3 className="text-2xl font-display font-bold text-[#0a2336]">
                  Misión Institucional
                </h3>
                <p className="text-base text-slate-700 leading-relaxed">
                  {companyData.mision}
                </p>
              </div>
            )}

            {activeTab === 'vision' && (
              <div className="space-y-4 animate-fade-in text-center sm:text-left">
                <span className="text-xs font-bold text-[#0f4c64] uppercase tracking-wider block">
                  Hacia Dónde Vamos
                </span>
                <h3 className="text-2xl font-display font-bold text-[#0a2336]">
                  Visión Estratégica
                </h3>
                <p className="text-base text-slate-700 leading-relaxed">
                  {companyData.vision}
                </p>
              </div>
            )}

            {activeTab === 'valores' && (
              <div className="space-y-5 animate-fade-in text-center sm:text-left">
                <span className="text-xs font-bold text-[#006e42] uppercase tracking-wider block">
                  Principios Rectores
                </span>
                <h3 className="text-2xl font-display font-bold text-[#0a2336]">
                  Valores Corporativos
                </h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {companyData.valoresCorporativos}
                </p>
                <div className="flex flex-wrap gap-2 pt-2 justify-center sm:justify-start">
                  {companyData.valores.map((val, i) => (
                    <span 
                      key={i}
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white border border-[#c3e2d3] text-xs font-bold text-slate-800 shadow-2xs"
                    >
                      <CheckCircle2 size={15} className="text-emerald-600" />
                      <span>{val}</span>
                    </span>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'fortalezas' && (
              <div className="space-y-4 animate-fade-in text-center sm:text-left">
                <span className="text-xs font-bold text-[#006e42] uppercase tracking-wider block">
                  Capacidad Comprobada
                </span>
                <h3 className="text-2xl font-display font-bold text-[#0a2336]">
                  Nuestras Fortalezas Operativas
                </h3>
                <p className="text-base text-slate-700 leading-relaxed">
                  {companyData.fortalezas}
                </p>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
