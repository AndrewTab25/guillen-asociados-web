import React, { useState } from 'react';
import { X, ArrowRight, ShieldCheck, Plane, Ship, Truck, Anchor } from 'lucide-react';

export const QuoteModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [service, setService] = useState('nacionalizacion');
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [weight, setWeight] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [details, setDetails] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    const serviceNames = {
      nacionalizacion: 'Nacionalización de Carga (2 a 3 días)',
      aereo: 'Flete Aéreo Express Internacional',
      maritimo: 'Flete Marítimo (FCL - Contenedor Completo)',
      buque: 'Descarga de Buque & Granel',
      brokers: 'Trading & Brokers de Materias Primas'
    };

    const text = `*SOLICITUD DE COTIZACIÓN - GUILLÉN CORONA & ASOCIADOS*\n\n` +
      `📌 *Servicio:* ${serviceNames[service] || service}\n` +
      `📍 *Ruta:* ${origin || 'Por definir'} ➔ ${destination || 'Venezuela'}\n` +
      `⚖️ *Volumen/Peso:* ${weight || 'A evaluar'}\n` +
      `👤 *Solicitante:* ${name}\n` +
      `🏢 *Empresa:* ${company || 'Particular'}\n` +
      `📞 *Teléfono:* ${phone}\n` +
      `📝 *Detalles adicionales:* ${details || 'Ninguno'}\n\n` +
      `Agradezco su atención y pronta propuesta tarifaria.`;

    const url = `https://wa.me/584143495873?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-all"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
            <ShieldCheck size={14} className="text-emerald-600" />
            <span>Cotizador Express Multimodal</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-brand-navy">
            Cotice su Operación Logística
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Respuesta prioritaria en menos de 2 horas hábiles por la Gerencia de Operaciones.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSend} className="space-y-4">
          
          {/* Service Selector Grid */}
          <div>
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
              Seleccione el Servicio Principal
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                { id: 'nacionalizacion', label: 'Nacionalización 2-3 Días', icon: ShieldCheck },
                { id: 'aereo', label: 'Flete Aéreo Express', icon: Plane },
                { id: 'maritimo', label: 'Flete Marítimo FCL', icon: Ship },
                { id: 'buque', label: 'Descarga de Buque', icon: Anchor },
                { id: 'terrestre', label: 'Tránsito Terrestre', icon: Truck },
              ].map((item) => {
                const Icon = item.icon;
                const isSelected = service === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setService(item.id)}
                    className={`flex items-center gap-2 p-2.5 rounded-xl border text-xs font-medium transition-all text-left ${
                      isSelected
                        ? 'bg-emerald-50 border-emerald-500 text-emerald-800 font-bold shadow-xs'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    <Icon size={16} className={isSelected ? 'text-emerald-600' : 'text-slate-400'} />
                    <span className="truncate">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Route Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="text-[11px] font-bold text-slate-600 uppercase block mb-1">
                Origen (Puerto/Ciudad)
              </label>
              <input
                type="text"
                placeholder="Ej. Miami, Colón, Shanghái"
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:bg-white focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="text-[11px] font-bold text-slate-600 uppercase block mb-1">
                Destino (Aduana/Puerto)
              </label>
              <input
                type="text"
                placeholder="Ej. Pto. Cabello, Maiquetía"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:bg-white focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="text-[11px] font-bold text-slate-600 uppercase block mb-1">
                Volumen / Peso Estimado
              </label>
              <input
                type="text"
                placeholder="Ej. 2 Contenedores / 500 Kg"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:bg-white focus:border-emerald-500"
              />
            </div>
          </div>

          {/* Contact Details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="text-[11px] font-bold text-slate-600 uppercase block mb-1">
                Su Nombre *
              </label>
              <input
                type="text"
                required
                placeholder="Ej. Alejandro Pérez"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:bg-white focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="text-[11px] font-bold text-slate-600 uppercase block mb-1">
                Empresa
              </label>
              <input
                type="text"
                placeholder="Nombre de empresa"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:bg-white focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="text-[11px] font-bold text-slate-600 uppercase block mb-1">
                WhatsApp / Teléfono *
              </label>
              <input
                type="tel"
                required
                placeholder="+58 412..."
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:bg-white focus:border-emerald-500"
              />
            </div>
          </div>

          {/* Additional details */}
          <div>
            <label className="text-[11px] font-bold text-slate-600 uppercase block mb-1">
              Descripción de la Mercancía o Requerimiento Especial
            </label>
            <textarea
              rows="2"
              placeholder="Describa tipo de producto, urgencia o detalles de la carga..."
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:bg-white focus:border-emerald-500"
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-emerald-600/20 flex items-center justify-center gap-2"
          >
            <span>Generar y Enviar Cotización por WhatsApp</span>
            <ArrowRight size={15} />
          </button>

          <p className="text-center text-[11px] text-slate-500">
            Conectará inmediatamente con Francis Lugo (Gerente de Operaciones de Guillén Corona & Asociados).
          </p>
        </form>

      </div>
    </div>
  );
};
