import React, { useState } from 'react';
import { Plane, Ship, Truck, ShieldCheck, CheckCircle2, ArrowRight, Compass, Activity } from 'lucide-react';

export const MultimodalScrollytelling = ({ onOpenQuote }) => {
  const [activeTab, setActiveTab] = useState(0);

  const pillars = [
    {
      id: "aereo",
      tabTitle: "División Aérea",
      icon: Plane,
      badge: "Velocidad Máxima · Rutas Globales",
      title: "Carga Aérea Internacional & Vuelos Críticos",
      subtitle: "Conectando los principales hubs aeroportuarios del mundo con despacho prioritario.",
      highlightStat: "12-24 hrs",
      highlightLabel: "Tiempo de Tránsito Aéreo Express",
      description: "Gestionamos fletes aéreos comerciales y vuelos chárter especializados para mercancías de alto valor, repuestos industriales de urgencia y suministros médicos que no admiten demoras.",
      points: [
        "Vuelos chárter y espacio consolidado en aerolíneas de primer nivel",
        "Manejo de mercancía peligrosa (DGR) y control de temperatura",
        "Despacho y recepción inmediata en terminales aéreas internacionales",
        "Trazabilidad satelital permanente del manifiesto aéreo"
      ],
      tagColor: "bg-sky-50 text-sky-800 border-sky-200"
    },
    {
      id: "maritimo",
      tabTitle: "División Marítima",
      icon: Ship,
      badge: "Gran Escala · Puertos Mundiales",
      title: "Descarga de Buque & Carga Contenerizada",
      subtitle: "Liderazgo en terminales portuarias: Carga a granel, proyectos especiales y contenedores.",
      highlightStat: "+50.000 Tn",
      highlightLabel: "Capacidad de Operación Portuaria",
      description: "Operaciones integrales de atraque y descarga directa de buques en muelle. Supervisión continua de estiba, tolvas para carga a granel seca o líquida y coordinación de patios de contenedores.",
      points: [
        "Operaciones directas de descarga de buques a granel y carga suelta",
        "Fletes marítimos FCL (Contenedor Completo) y LCL (Carga Consolidada)",
        "Booking y enlace directo con las principales navieras globales",
        "Supervisión física de carga y custodia en zona portuaria"
      ],
      tagColor: "bg-teal-50 text-teal-800 border-teal-200"
    },
    {
      id: "aduanal",
      tabTitle: "Agenciamiento Aduanal",
      icon: ShieldCheck,
      badge: "Especialidad Core · Récord Operativo",
      title: "Nacionalización Express en 2 a 3 Días",
      subtitle: "Eliminamos la burocracia y mitigamos sobrecostos con más de 15 años de solvencia aduanera.",
      highlightStat: "2 - 3 Días",
      highlightLabel: "Tiempo Récord de Desaduanamiento",
      description: "Nuestro equipo de peritos y agentes aduanales gestiona la clasificación arancelaria exacta, permisos especiales, reconocimientos y liquidación con el máximo rigor de ley.",
      points: [
        "Desaduanamiento acelerado reduciendo sustancialmente costos de almacenaje",
        "Gestión documental rigurosa conforme a normativas y convenios internacionales",
        "Tránsito terrestre coordinado y custodiado hasta la puerta de su planta",
        "Asesoría fiscal-aduanera para maximizar beneficios arancelarios"
      ],
      tagColor: "bg-emerald-50 text-emerald-800 border-emerald-200"
    }
  ];

  const current = pillars[activeTab];

  return (
    <section id="multimodal" className="relative py-28 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold tracking-wider uppercase mb-3">
            <Compass size={14} className="text-emerald-600" />
            <span>Capacidad Multimodal Total</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-brand-navy tracking-tight">
            De Cielo a Mar y Tierra. <br />
            <span className="text-emerald-600">
              Sin fisuras ni demoras.
            </span>
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Articulamos la cadena logística completa con presencia activa en los puertos y aeropuertos más importantes del país.
          </p>
        </div>

        {/* Tab Navigation Pill Bar */}
        <div className="flex justify-center mb-10">
          <div className="p-1.5 rounded-2xl bg-slate-100 border border-slate-200/80 inline-flex flex-wrap gap-2 shadow-inner">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-white text-brand-navy shadow-md shadow-slate-200 border border-slate-200 font-bold scale-[1.01]'
                      : 'text-slate-600 hover:text-brand-navy hover:bg-white/60'
                  }`}
                >
                  <Icon size={18} className={isActive ? 'text-emerald-600' : 'text-slate-400'} />
                  <span>{pillar.tabTitle}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Display Card */}
        <div className="bg-slate-50/70 rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/90 relative overflow-hidden shadow-sm">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Column: Details & Specs */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider border bg-white shadow-xs">
                <span className={current.tagColor}>{current.badge}</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-display font-bold text-brand-navy tracking-tight leading-tight">
                {current.title}
              </h3>

              <p className="text-slate-600 text-base leading-relaxed">
                {current.description}
              </p>

              {/* Feature Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {current.points.map((point, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3.5">
                <button
                  onClick={onOpenQuote}
                  className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-emerald-600/20 flex items-center gap-2"
                >
                  <span>Solicitar Asesoría para esta división</span>
                  <ArrowRight size={15} />
                </button>

                <a
                  href="#contacto"
                  className="px-6 py-3 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 font-semibold text-xs uppercase tracking-wider transition-all"
                >
                  Hablar con un Agente
                </a>
              </div>
            </div>

            {/* Right Column: Telemetry Board */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-lg shadow-slate-100">
                
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
                      TELEMETRÍA DE OPERACIÓN
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                    EN LÍNEA
                  </span>
                </div>

                {/* Big Metric Display */}
                <div className="my-5 text-center py-6 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-4xl sm:text-5xl font-display font-extrabold text-brand-navy tracking-tight">
                    {current.highlightStat}
                  </span>
                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-700 mt-2">
                    {current.highlightLabel}
                  </p>
                </div>

                {/* Status Items */}
                <div className="space-y-2.5 text-xs">
                  <div className="flex justify-between py-2 border-b border-slate-100 text-slate-600">
                    <span>Verificación Arancelaria:</span>
                    <span className="text-emerald-700 font-semibold">SENIAT / SIDUNEA OK</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-100 text-slate-600">
                    <span>Custodia Portuaria:</span>
                    <span className="text-brand-navy font-semibold">Pto. Cabello & La Guaira</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-100 text-slate-600">
                    <span>Disponibilidad de Booking:</span>
                    <span className="text-emerald-700 font-semibold">Inmediata</span>
                  </div>
                  <div className="flex justify-between py-2 text-slate-600">
                    <span>Seguimiento en Planta:</span>
                    <span className="text-brand-navy font-semibold">GPS + Custodia Física</span>
                  </div>
                </div>

                {/* Footer of Card */}
                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1 text-emerald-700 font-medium">
                    <Activity size={12} />
                    Cumplimiento Normativo Legal
                  </span>
                  <span>RIF J-07591163-6</span>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
