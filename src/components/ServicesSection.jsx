import React, { useState } from 'react';
import { Clock, Globe, ArrowLeftRight, Anchor, TrendingUp, UserCheck, MessageCircle } from 'lucide-react';
import { companyData } from '../data/companyData';

export const ServicesSection = () => {
  const [filter, setFilter] = useState('todos');

  const iconMap = {
    Clock: Clock,
    Globe: Globe,
    ArrowLeftRight: ArrowLeftRight,
    Anchor: Anchor,
    TrendingUp: TrendingUp,
    UserCheck: UserCheck
  };

  const handleServiceWhatsApp = (serviceTitle) => {
    const text = `Hola Francis Lugo, me comunico desde la página web de Guillén Corona & Asociados para solicitar cotización y asesoría en: *${serviceTitle}*.`;
    window.open(`https://wa.me/584143495873?text=${encodeURIComponent(text)}`, '_blank');
  };

  const filteredServices = companyData.servicios.filter(srv => {
    if (filter === 'todos') return true;
    if (filter === 'aduanas') return srv.id === 'nacionalizacion' || srv.id === 'atencion-personalizada';
    if (filter === 'fletes') return srv.id === 'fletes' || srv.id === 'import-export';
    if (filter === 'operaciones') return srv.id === 'descarga-buque' || srv.id === 'brokers';
    return true;
  });

  return (
    <section id="servicios" className="relative py-20 bg-[#e9f3f2] border-b border-[#cce4d8] overflow-hidden">
      
      {/* Ghosted Cargo Operations Watermark */}
      <div 
        className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-[0.035] mix-blend-luminosity filter grayscale"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80')` 
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#006e42] uppercase tracking-wider bg-[#dff3e8] border border-[#b9e4cd] px-3.5 py-1.5 rounded-full">
            Servicios Integrales
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#0a2336] mt-3 tracking-tight">
            Nuestros Servicios
          </h2>
          <p className="mt-3 text-base text-slate-700">
            Agenciamiento aduanal, logística multimodal y coordinación especializada en planta y puerto.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'todos', label: 'Todos los Servicios (06)' },
            { id: 'aduanas', label: 'Aduanas & Planta' },
            { id: 'fletes', label: 'Fletes & Comercio Exterior' },
            { id: 'operaciones', label: 'Buques & Trading' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setFilter(item.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                filter === item.id
                  ? 'bg-[#0a2336] text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:text-slate-900 border border-[#cbe2d7]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((srv) => {
            const IconComponent = iconMap[srv.icon] || Clock;
            return (
              <div
                key={srv.id}
                className="bg-white rounded-2xl p-7 border border-[#cde4d9] shadow-xs hover:shadow-lg hover:border-emerald-500/50 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#e5f4ec] text-emerald-800 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all duration-200 shadow-2xs">
                      <IconComponent size={24} />
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-[#eef6f3] text-[11px] font-bold text-emerald-900 border border-[#c7e4d5]">
                      {srv.highlight}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-[#0a2336] mb-2.5 group-hover:text-emerald-800 transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {srv.desc}
                  </p>
                </div>

                {/* Direct WhatsApp Shortcut */}
                <div className="pt-6 mt-6 border-t border-[#e2efe8]">
                  <button
                    onClick={() => handleServiceWhatsApp(srv.title)}
                    className="w-full py-2.5 px-3 rounded-xl bg-[#e5f5ed] hover:bg-[#25D366] text-[#006e42] hover:text-white text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2 border border-[#bce2cf] hover:border-[#25D366] shadow-2xs"
                  >
                    <MessageCircle size={15} className="fill-current" />
                    <span>Cotizar este servicio</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
