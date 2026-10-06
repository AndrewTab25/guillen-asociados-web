import React, { useState, useRef } from 'react';
import { 
  Anchor, 
  Plane, 
  Truck, 
  MapPin, 
  MessageCircle, 
  Globe, 
  Clock, 
  ShieldCheck 
} from 'lucide-react';
import { HighwayTransitTruck } from './MaritimeAviationGraphics';

export const OperationalCoverage = () => {
  const airBlockRef = useRef(null);
  const videoRef = useRef(null);
  const rafRef = useRef(null);
  const [activeAirStep, setActiveAirStep] = useState(0);
  const hubs = [
    {
      title: "Puerto Cabello",
      type: "Terminal Marítima & Descarga de Buques",
      desc: "Principal puerto marítimo de Venezuela. Gestión de atraque, tolvas para carga a granel, contenedores y supervisión en zona portuaria.",
      icon: Anchor,
      badge: "Operación Portuaria Principal",
      animation: "ship"
    },
    {
      title: "La Guaira",
      type: "Aduana Marítima (Alianza Estratégica)",
      desc: "Coordinación e intermediación aduanal a través de aliados estratégicos para despachos de la región central y capital.",
      icon: Anchor,
      badge: "Alianza Estratégica",
      animation: "waves"
    },
    {
      title: "Maiquetía",
      type: "Aduana Aérea (Alianza Estratégica)",
      desc: "Intermediación y coordinación express de carga aérea internacional, repuestos y suministros mediante aliados en Maiquetía.",
      icon: Plane,
      badge: "Alianza Aérea Express",
      animation: "plane"
    },
    {
      title: "Tránsito Terrestre a Planta",
      type: "Conectividad Nacional",
      desc: "Coordinación de transporte terrestre custodiado desde muelles y aeropuertos directamente hasta la planta del cliente.",
      icon: Truck,
      badge: "Entrega Final Custodiada",
      animation: "truck"
    }
  ];

  const operationalPillars = [
    {
      step: "01",
      badge: "Cero Retrasos",
      title: "Revisión Documental Previa",
      desc: "Verificación técnica de facturas, listas de empaque y guías antes del arribo para garantizar el cumplimiento legal sin contratiempos.",
      icon: Clock
    },
    {
      step: "02",
      badge: "Cálculo Exacto",
      title: "Clasificación y Aranceles",
      desc: "Determinación precisa del código arancelario y régimen aduanal correspondiente para un presupuesto transparente y sin sorpresas.",
      icon: ShieldCheck
    },
    {
      step: "03",
      badge: "Ahorro Operativo",
      title: "Optimización de Almacenaje",
      desc: "Coordinación anticipada en aduana para retirar la mercancía con la máxima celeridad, minimizando costos de permanencia.",
      icon: Truck
    }
  ];

  // Scrub background airplane video as mouse moves across the block
  const handleMouseMove = (e) => {
    if (!airBlockRef.current || !videoRef.current) return;

    if (!videoRef.current.paused) {
      videoRef.current.pause();
    }

    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    rafRef.current = requestAnimationFrame(() => {
      if (!airBlockRef.current || !videoRef.current) return;
      const rect = airBlockRef.current.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const rawX = (clientX - rect.left) / rect.width;
      const x = Math.max(0, Math.min(1, rawX));

      const duration = videoRef.current.duration || 10;
      videoRef.current.currentTime = x * duration;

      const stepIdx = Math.min(3, Math.floor(x * 4));
      setActiveAirStep(stepIdx);
    });
  };

  const handleStepHover = (idx) => {
    setActiveAirStep(idx);
    if (videoRef.current) {
      const duration = videoRef.current.duration || 10;
      videoRef.current.currentTime = (idx / 4) * duration + 0.6;
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  return (
    <section id="cobertura" className="relative py-20 bg-[#f3f8f8] border-b border-[#cce4d8] overflow-hidden">
      
      {/* Ghosted Port Terminal Watermark Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-[0.04] mix-blend-luminosity filter grayscale"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=1920&q=80')` 
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-[#006e42] uppercase tracking-wider bg-[#dff3e8] border border-[#b9e4cd] px-3.5 py-1.5 rounded-full">
            Presencia Estratégica
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#0a2336] mt-3 tracking-tight">
            Cobertura en Principales Puertos y Aeropuertos
          </h2>
          <p className="mt-3 text-base text-slate-700">
            Manejo y gestión de cargas terrestres, aéreas y marítimas con seguimiento riguroso en zona portuaria y planta.
          </p>
        </div>

        {/* 4 Hubs Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hubs.map((hub, idx) => {
            const Icon = hub.icon;
            return (
              <div 
                key={idx}
                className="bg-white/95 backdrop-blur-xs rounded-2xl p-6 border border-[#cde4d9] hover:border-emerald-500/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#e5f4ec] text-emerald-800 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all">
                      <Icon size={20} />
                    </div>

                    {/* Mini live status beacon */}
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-emerald-800 bg-[#e6f4ee] px-2 py-0.5 rounded-full border border-[#bfe2cf]">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span>Activo</span>
                    </span>
                  </div>

                  <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block mb-1">
                    {hub.badge}
                  </span>

                  <h3 className="text-lg font-display font-bold text-[#0a2336] mb-1 group-hover:text-emerald-800 transition-colors">
                    {hub.title}
                  </h3>

                  <p className="text-xs font-semibold text-slate-500 mb-3">
                    {hub.type}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {hub.desc}
                  </p>
                </div>

                {/* Thematic Animated Graphics per Hub */}
                <div className="pt-3 border-t border-[#e2efe8]">
                  {hub.animation === 'ship' && (
                    <div className="h-10 relative flex items-center justify-between overflow-hidden bg-[#edf6f3] rounded-lg px-2 border border-[#d6ebe0]">
                      <div className="flex items-center gap-1.5 animate-ship-bob">
                        <svg width="32" height="18" viewBox="0 0 40 22" fill="none">
                          <path d="M2 14L8 20H32L38 14H2Z" fill="#0b283d" />
                          <rect x="10" y="8" width="6" height="6" fill="#009f63" />
                          <rect x="18" y="8" width="6" height="6" fill="#0284c7" />
                          <rect x="26" y="6" width="6" height="8" fill="#e2efe9" />
                        </svg>
                        <span className="text-[10px] font-bold text-emerald-900">Atraque y Calado</span>
                      </div>
                      <div className="w-12 h-1 bg-emerald-300/60 rounded-full animate-pulse"></div>
                    </div>
                  )}

                  {hub.animation === 'waves' && (
                    <div className="h-10 relative flex items-center justify-between overflow-hidden bg-[#eaf3f5] rounded-lg px-2 border border-[#d3e5eb]">
                      <div className="flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-600"></span>
                        </span>
                        <span className="text-[10px] font-bold text-slate-700">Dársena de Despacho</span>
                      </div>
                      <svg width="42" height="12" viewBox="0 0 60 16" className="animate-wave-flow">
                        <path d="M0 8C15 2 15 14 30 8C45 2 45 14 60 8" stroke="#0284c7" strokeWidth="2" fill="none" strokeLinecap="round" />
                      </svg>
                    </div>
                  )}

                  {hub.animation === 'plane' && (
                    <div className="h-10 relative flex items-center justify-between overflow-hidden bg-[#edf5f8] rounded-lg px-2 border border-[#d6e7ef]">
                      <div className="flex items-center gap-1.5">
                        <svg width="24" height="20" viewBox="0 0 30 24" fill="none" className="transform rotate-[-12deg] text-emerald-700">
                          <path d="M28 12C28 13 24 15 20 15H10L4 22H2L6 15H2L0 12L2 9H6L2 2H4L10 9H20C24 9 28 11 28 12Z" fill="#009f63" />
                        </svg>
                        <span className="text-[10px] font-bold text-[#0b283d]">Ruta Aérea Express</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                        <span className="text-[9px] font-semibold text-emerald-800">Maiquetía</span>
                      </div>
                    </div>
                  )}

                  {hub.animation === 'truck' && (
                    <HighwayTransitTruck />
                  )}

                  <div className="flex items-center justify-between text-[11px] mt-2 text-slate-500 font-medium">
                    <span className="flex items-center gap-1">
                      <MapPin size={11} className="text-emerald-600" />
                      Venezuela
                    </span>
                    <span className="text-[10px] text-slate-600">Monitoreo 24/7</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* BLOQUE OPERATIVO CON EL VIDEO DEL AVIÓN EN EL FONDO       */}
        {/* Deslizar el ratón sobre el bloque avanza el avión de fondo */}
        {/* ========================================================= */}
        <div 
          ref={airBlockRef}
          onMouseMove={handleMouseMove}
          onTouchMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="mt-14 rounded-3xl relative overflow-hidden bg-[#071d2c] border border-[#1b3d54] shadow-xl text-white transition-all group"
        >
          {/* Capa de Video en el Fondo */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
            <video
              ref={videoRef}
              src="/videos/airplane-scene.mp4"
              playsInline
              muted
              loop
              autoPlay
              preload="auto"
              className="w-full h-full object-cover opacity-40 filter brightness-110 contrast-105"
            />
            
            {/* Gradiente corporativo profundo para garantizar 100% de contraste */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#061927]/95 via-[#09263a]/80 to-[#061927]/92" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061927] via-transparent to-transparent opacity-85" />
          </div>

          {/* Contenido en Primer Plano */}
          <div className="relative z-10 p-7 sm:p-9 lg:p-10">
            
            {/* Encabezado del Bloque + CTA WhatsApp */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 pb-8 border-b border-white/10">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
                  <Plane size={14} className="text-emerald-400 transform -rotate-12" />
                  <span>Asesoría y Booking Previo al Arribo</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight">
                  ¿Tiene una Carga Próxima a Arribar a Puerto o Aeropuerto?
                </h3>
                
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  Coordinamos la verificación documental previa y el desaduanamiento express para evitar sobrecostos de almacenaje y agilizar la llegada a su planta.
                </p>
              </div>

              {/* Botón WhatsApp Directo */}
              <a
                href="https://wa.me/584143495873?text=Hola%20Francis%20Lugo%2C%20tengo%20una%20carga%20por%20arribar%20y%20deseo%20coordinar%20su%20desaduanamiento"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-lg hover:shadow-emerald-500/25 active:scale-95"
              >
                <MessageCircle size={17} className="fill-current" />
                <span>Consultar Operación</span>
              </a>
            </div>

            {/* 3 Pilares Operativos Reales del Folleto */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
              {operationalPillars.map((pillar, idx) => {
                const PillarIcon = pillar.icon;
                const isActive = activeAirStep === idx;

                return (
                  <div
                    key={idx}
                    onMouseEnter={() => handleStepHover(idx)}
                    className={`rounded-2xl p-6 transition-all duration-300 border flex flex-col justify-between cursor-pointer ${
                      isActive
                        ? 'bg-white/[0.14] border-emerald-400/80 shadow-lg shadow-emerald-950/50 -translate-y-1'
                        : 'bg-white/[0.05] border-white/10 hover:bg-white/[0.09] hover:border-white/20'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className={`text-sm font-black tracking-widest font-mono ${isActive ? 'text-emerald-400' : 'text-slate-400'}`}>
                          {pillar.step}
                        </span>
                        
                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                          isActive ? 'bg-emerald-500 text-white shadow-sm' : 'bg-white/10 text-slate-300'
                        }`}>
                          <PillarIcon size={18} />
                        </div>
                      </div>

                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full inline-block mb-2 ${
                        isActive 
                          ? 'bg-emerald-400/20 text-emerald-300 border border-emerald-400/30' 
                          : 'bg-white/10 text-slate-300 border border-white/5'
                      }`}>
                        {pillar.badge}
                      </span>

                      <h4 className="text-lg font-bold text-white mb-2">
                        {pillar.title}
                      </h4>

                      <p className="text-xs text-slate-300 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Barra Informativa Inferior */}
            <div className="mt-8 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
                <span>Especialistas en agenciamiento aduanal, logística multimodal y coordinación continua en planta y puerto.</span>
              </div>
              <span className="text-slate-400 text-[11px]">
                Guillén Corona & Asociados • RIF: J-07591163-6
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
