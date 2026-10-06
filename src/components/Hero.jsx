import React, { useState } from 'react';
import { ShieldCheck, Clock, Globe, ArrowRight, MessageCircle } from 'lucide-react';
import { companyData } from '../data/companyData';
import { SkyCargoPlane, SeaCargoShip } from './MaritimeAviationGraphics';
import { InteractiveFluidBackground } from './InteractiveFluidBackground';

export const Hero = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    servicio: 'Nacionalización de Cargas (2 a 3 días)',
    origen: '',
    destino: 'Puerto Cabello',
    tipoCarga: 'Carga General'
  });

  const popularDestinations = ['Puerto Cabello', 'La Guaira', 'Maiquetía'];

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const message = `*SOLICITUD DE COTIZACIÓN - GUILLÉN CORONA & ASOCIADOS*\n\n` +
      `• *Cliente / Empresa:* ${formData.nombre || 'Particular'}\n` +
      `• *Servicio:* ${formData.servicio}\n` +
      `• *Ruta:* ${formData.origen || 'Por coordinar'} ➔ ${formData.destino}\n` +
      `• *Tipo de Mercancía:* ${formData.tipoCarga}\n\n` +
      `Hola Francis Lugo (Gerencia de Operaciones), me comunico a través del sitio web para solicitar cotización y tiempos de respuesta.`;

    const url = `https://wa.me/584143495873?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="hero" className="relative bg-gradient-to-b from-[#edf6f4] via-[#f2f7f7] to-[#e8f2f2] pt-10 pb-10 lg:pt-16 lg:pb-8 border-b border-[#cce4d8] overflow-hidden">
      
      {/* Native Interactive Maritime Fluid Waves (Reacts smoothly to cursor) */}
      <InteractiveFluidBackground />

      {/* Ghosted / Watermark background image with ultra-soft opacity */}
      <div 
        className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-[0.05] mix-blend-luminosity filter grayscale"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1920&q=80')` 
        }}
        aria-hidden="true"
      />

      {/* Animated Sky Cargo Plane crossing the upper hemisphere */}
      <SkyCargoPlane />

      {/* Decorative subtle pastel ambient background */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-br from-[#d9efe4]/50 to-[#d6ebf5]/30 rounded-full blur-3xl pointer-events-none -z-0"></div>
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-gradient-to-tr from-[#d5ebf5]/40 to-[#d8efe2]/30 rounded-full blur-3xl pointer-events-none -z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Corporate Information & Pitch */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#dff3e8] border border-[#b9e4cd] text-[#006e42] text-xs font-bold uppercase tracking-wider shadow-2xs">
              <ShieldCheck size={15} className="text-emerald-700" />
              <span>Agente Aduanal Certificado · RIF: {companyData.rif}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-display font-extrabold text-[#0a2336] tracking-tight leading-[1.15]">
              Soluciones Logísticas y Aduanales Integrales
            </h1>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl font-normal">
              Agenciamiento aduanal, logística multimodal y gestión especializada en los principales puertos y aeropuertos de Venezuela con más de 15 años de trayectoria profesional.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="https://wa.me/584143495873?text=Hola%20Francis%20Lugo%2C%20deseo%20solicitar%20asesor%C3%ADa%20y%20cotizaci%C3%B3n%20con%20Guill%C3%A9n%20Corona%20%26%20Asociados"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-md transition-all duration-200 active:scale-95"
              >
                <MessageCircle size={17} className="fill-current" />
                <span>Contactar por WhatsApp</span>
              </a>

              <a
                href="#servicios"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-semibold text-sm shadow-xs transition-all"
              >
                <span>Ver Nuestros Servicios</span>
                <ArrowRight size={15} />
              </a>
            </div>

            {/* 3 Pillars / Highlights directly from brochure */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#cce4d8]">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/85 border border-[#cde5d8] shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-[#e2f4ea] border border-[#b6e2cb] flex items-center justify-center text-emerald-800 shrink-0">
                  <Clock size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0a2336] uppercase tracking-wider">Nacionalización</h4>
                  <p className="text-xs text-slate-700 font-semibold">De 2 a 3 días hábiles</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/85 border border-[#cde5d8] shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-[#e3eef6] border border-[#b8d6ea] flex items-center justify-center text-sky-800 shrink-0">
                  <ShieldCheck size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0a2336] uppercase tracking-wider">Experiencia</h4>
                  <p className="text-xs text-slate-700 font-semibold">Más de 15 años</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/85 border border-[#cde5d8] shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-[#e5f3ed] border border-[#bce4d1] flex items-center justify-center text-teal-800 shrink-0">
                  <Globe size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0a2336] uppercase tracking-wider">Multimodal</h4>
                  <p className="text-xs text-slate-700 font-semibold">Aérea, Marítima, Tierra</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Smart WhatsApp Quote Card in Pastel Container */}
          <div className="lg:col-span-5">
            <div className="bg-[#ffffff]/95 rounded-2xl border border-[#c4e1d3] p-6 sm:p-7 shadow-xl shadow-[#0b283d]/5">
              
              <div className="border-b border-[#e2efe8] pb-3.5 mb-3.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                    Atajo Rápido
                  </span>
                  <span className="text-[10px] font-semibold text-emerald-800 bg-[#e4f4ec] px-2 py-0.5 rounded border border-[#bfe4d0]">
                    Atención 24/7
                  </span>
                </div>
                <h3 className="text-lg font-display font-bold text-[#0a2336] mt-1">
                  Cotizar Operación Logística
                </h3>
                <p className="text-xs text-slate-600 mt-0.5">
                  Complete los datos y se abrirá WhatsApp con la solicitud formateada.
                </p>
              </div>

              <form onSubmit={handleWhatsAppSubmit} className="space-y-3 text-xs">
                <div>
                  <label className="font-bold text-slate-800 block mb-1">
                    Su Nombre o Empresa
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Distribuidora del Centro C.A."
                    value={formData.nombre}
                    onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                    className="w-full bg-[#f6faf8] border border-[#c8e3d6] rounded-lg px-3.5 py-2 text-slate-800 focus:outline-none focus:bg-white focus:border-emerald-500 text-xs"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-800 block mb-1">
                    Servicio Requerido
                  </label>
                  <select
                    value={formData.servicio}
                    onChange={(e) => setFormData({...formData, servicio: e.target.value})}
                    className="w-full bg-[#f6faf8] border border-[#c8e3d6] rounded-lg px-3.5 py-2 text-slate-800 focus:outline-none focus:bg-white focus:border-emerald-500 text-xs cursor-pointer"
                  >
                    <option value="Nacionalización de Cargas (2 a 3 días)">Nacionalización de Cargas (2 a 3 días)</option>
                    <option value="Fletes Internacionales">Fletes Internacionales</option>
                    <option value="Importación y Exportación">Importación y Exportación</option>
                    <option value="Descarga de Buque (Carga General o Granel)">Descarga de Buque (Carga General o Granel)</option>
                    <option value="Brokers & Trading de Materias Primas">Brokers & Trading de Materias Primas</option>
                    <option value="Atención Personalizada en Planta y Puerto">Atención Personalizada en Planta y Puerto</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="font-bold text-slate-800 block mb-1">
                      Origen de la Carga
                    </label>
                    <input
                      type="text"
                      placeholder="Ej. País o puerto de origen..."
                      value={formData.origen}
                      onChange={(e) => setFormData({...formData, origen: e.target.value})}
                      className="w-full bg-[#f6faf8] border border-[#c8e3d6] rounded-lg px-3 py-1.5 text-slate-800 focus:outline-none focus:bg-white focus:border-emerald-500 text-xs"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-slate-800 block mb-1">
                      Destino (Venezuela)
                    </label>
                    <input
                      type="text"
                      placeholder="Ej. Pto. Cabello..."
                      value={formData.destino}
                      onChange={(e) => setFormData({...formData, destino: e.target.value})}
                      className="w-full bg-[#f6faf8] border border-[#c8e3d6] rounded-lg px-3 py-1.5 text-slate-800 focus:outline-none focus:bg-white focus:border-emerald-500 text-xs"
                    />
                    <div className="flex flex-wrap gap-1 mt-1.5">
                      {popularDestinations.map((dest) => (
                        <button
                          key={dest}
                          type="button"
                          onClick={() => setFormData({...formData, destino: dest})}
                          className="text-[10px] bg-[#eef7f3] hover:bg-[#d8efe3] text-emerald-900 px-1.5 py-0.5 rounded border border-[#c2e4d2] transition-colors"
                        >
                          +{dest.split(' ')[0]}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="font-bold text-slate-800 block mb-1">
                    Tipo de Mercancía o Carga
                  </label>
                  <input
                    type="text"
                    placeholder="Ej. Materias primas, carga a granel, repuestos..."
                    value={formData.tipoCarga}
                    onChange={(e) => setFormData({...formData, tipoCarga: e.target.value})}
                    className="w-full bg-[#f6faf8] border border-[#c8e3d6] rounded-lg px-3.5 py-1.5 text-slate-800 focus:outline-none focus:bg-white focus:border-emerald-500 text-xs"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-sm flex items-center justify-center gap-2 mt-2 active:scale-98"
                >
                  <MessageCircle size={16} className="fill-current" />
                  <span>Enviar Cotización a WhatsApp</span>
                </button>

                <p className="text-center text-[10px] text-slate-600 pt-0.5">
                  Atención directa con Francis Lugo (Gerente de Operaciones)
                </p>
              </form>

            </div>
          </div>

        </div>
      </div>

      {/* Animated Cargo Vessel sailing smoothly across the pastel ocean horizon */}
      <div className="mt-8 lg:mt-12">
        <SeaCargoShip />
      </div>
    </section>
  );
};

