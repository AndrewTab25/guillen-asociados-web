import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  ShieldCheck, 
  Briefcase, 
  UserCheck, 
  Clock, 
  CheckCircle2,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

const contactMembers = [
  {
    id: 'gerente-general',
    cargo: 'Gerente General',
    area: 'Dirección Corporativa & Finanzas',
    email: 'contabilidad@guillencoronayasociados.com',
    telefono: '+58 0424-415.99.85',
    telefonoRaw: '584244159985',
    whatsappMsg: 'Hola, me comunico desde la página web de Guillén Corona & Asociados con la Gerencia General para una consulta institucional.',
    Icon: Briefcase,
    badge: 'Dirección Corporativa',
    status: 'Disponible',
    statusBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    avatarLetters: 'GG',
    avatarGradient: 'from-slate-700 via-slate-800 to-[#0b283d]',
    accentColor: 'border-slate-300 hover:border-slate-400',
    horario: 'Lun - Vie · 8:00 AM a 5:00 PM',
    descripcion: 'Consultas administrativas, facturación comercial, solvencias y convenios institucionales.',
    btnLabel: 'Contactar Gerencia General',
    isPrincipal: false
  },
  {
    id: 'gerente-operaciones',
    cargo: 'Gerente de Operaciones',
    nombre: 'Francis Lugo',
    area: 'Atención Principal Aduanal & Cargas',
    email: 'francislugo@guillencoronayasociados.com',
    telefono: '+58 0414-349.58.73',
    telefonoRaw: '584143495873',
    whatsappMsg: 'Hola Francis Lugo, me comunico desde la página web de Guillén Corona & Asociados para coordinar una operación aduanal.',
    Icon: ShieldCheck,
    badge: 'Operaciones Aduanales',
    topPill: '⭐ Atención Prioritaria 24/7',
    status: 'En Línea 24/7',
    statusBg: 'bg-emerald-50 text-emerald-700 border-emerald-300 ring-2 ring-emerald-400/20',
    avatarLetters: 'FL',
    avatarGradient: 'from-emerald-600 via-emerald-700 to-[#006e42]',
    accentColor: 'border-emerald-500 shadow-xl shadow-emerald-900/10 ring-4 ring-emerald-500/10',
    horario: 'Atención Operativa 24/7',
    descripcion: 'Desaduanamiento express en 2 a 3 días hábiles, trámites SENIAT, booking aéreo y marítimo para Maiquetía y Puerto Cabello.',
    btnLabel: 'Contactar a Francis Lugo',
    isPrincipal: true
  },
  {
    id: 'analista-operaciones',
    cargo: 'Analista de Operaciones',
    area: 'Mesa Técnica & Despacho Portuario',
    email: 'operaciones1@guillencoronayasociados.com',
    telefono: '+58 0414-597.06.17',
    telefonoRaw: '584145970617',
    whatsappMsg: 'Hola, me comunico desde la página web de Guillén Corona & Asociados con el Analista de Operaciones.',
    Icon: UserCheck,
    badge: 'Mesa Técnica & Despacho',
    status: 'En Patio & Muelle',
    statusBg: 'bg-teal-50 text-teal-700 border-teal-200',
    avatarLetters: 'AO',
    avatarGradient: 'from-teal-700 via-cyan-800 to-slate-800',
    accentColor: 'border-[#cbe4d7] hover:border-teal-500/50',
    horario: 'Operaciones en Puerto & Almacén',
    descripcion: 'Inspección física en patio, aforo aduanal, estatus de guías y coordinación de despacho custodiado a planta.',
    btnLabel: 'Contactar Mesa Técnica',
    isPrincipal: false
  }
];

export const ContactSection = () => {
  const [form, setForm] = useState({
    nombre: '',
    empresa: '',
    telefono: '',
    servicio: 'Nacionalización de Cargas (2 a 3 días)',
    mensaje: ''
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const text = `*SOLICITUD DE CONTACTO WEB - GUILLÉN CORONA & ASOCIADOS*\n\n` +
      `• *Nombre:* ${form.nombre}\n` +
      `• *Empresa:* ${form.empresa || 'Particular'}\n` +
      `• *Teléfono / WhatsApp:* ${form.telefono}\n` +
      `• *Servicio:* ${form.servicio}\n` +
      `• *Detalles de la Carga:* ${form.mensaje}\n\n` +
      `Hola Francis Lugo (Gerencia de Operaciones), solicito atención y asesoría sobre este requerimiento.`;

    window.open(`https://wa.me/584143495873?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contacto" className="py-20 bg-[#f4f9f7] border-b border-[#cce4d8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-[#006e42] uppercase tracking-wider bg-[#dff3e8] border border-[#b9e4cd] px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 shadow-xs">
            <Sparkles size={13} className="text-emerald-600" />
            Canales de Atención Directa
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#0a2336] mt-3.5 tracking-tight">
            Contáctanos
          </h2>
          <p className="mt-3 text-base text-slate-700 leading-relaxed">
            Comuníquese directamente con nuestro equipo directivo y de operaciones aduanales para una atención inmediata.
          </p>
        </div>

        {/* 3 Contact Cards: 100% visible, zero overlaps, perfectly aligned */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-20">
          {contactMembers.map((contact) => (
            <div
              key={contact.id}
              className={`bg-white rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl relative ${
                contact.isPrincipal
                  ? 'border-2 border-emerald-500 shadow-xl shadow-emerald-950/10 ring-4 ring-emerald-500/10'
                  : 'border border-[#cbe4d7] shadow-md shadow-slate-900/5 hover:border-emerald-400/50'
              }`}
            >
              {/* Featured Badge if Principal */}
              {contact.isPrincipal && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#0b283d] text-emerald-300 text-[11px] font-black uppercase tracking-wider px-4 py-1 rounded-full shadow-md border border-emerald-500/40 flex items-center gap-1.5 whitespace-nowrap">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{contact.topPill}</span>
                </div>
              )}

              <div>
                {/* Top Row: Category tag and status badge */}
                <div className="flex items-center justify-between gap-2 mb-4 pt-1">
                  <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg border flex items-center gap-1.5 ${
                    contact.isPrincipal
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                      : 'bg-slate-50 text-slate-700 border-slate-200'
                  }`}>
                    <contact.Icon size={13} className={contact.isPrincipal ? 'text-emerald-700' : 'text-slate-600'} />
                    {contact.badge.replace('⭐ ', '')}
                  </span>

                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border flex items-center gap-1.5 ${contact.statusBg}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    {contact.status}
                  </span>
                </div>

                {/* Profile Header: Avatar + Titles */}
                <div className="flex items-start gap-3.5 mb-4">
                  <div className={`w-13 h-13 rounded-2xl bg-gradient-to-br ${contact.avatarGradient} flex items-center justify-center text-white font-display font-black text-lg shadow-md shrink-0`}>
                    {contact.avatarLetters}
                  </div>

                  <div className="min-w-0 flex-1">
                    {contact.nombre ? (
                      <>
                        <h3 className="text-2xl font-display font-black text-[#0a2336] leading-tight">
                          {contact.nombre}
                        </h3>
                        <p className="text-xs font-bold text-emerald-700 uppercase tracking-wide mt-0.5">
                          {contact.cargo}
                        </p>
                      </>
                    ) : (
                      <>
                        <h3 className="text-2xl font-display font-black text-[#0a2336] leading-tight">
                          {contact.cargo}
                        </h3>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mt-0.5">
                          {contact.area}
                        </p>
                      </>
                    )}
                  </div>
                </div>

                {/* Role Description Box */}
                <div className="bg-[#f8fbfa] p-3.5 rounded-2xl border border-[#e2efe8] mb-5">
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {contact.descripcion}
                  </p>
                </div>

                {/* Contact Channels (Phone, Email, Schedule) */}
                <div className="space-y-2.5 text-xs text-slate-600 mb-6">
                  {/* Phone */}
                  <a 
                    href={`tel:${contact.telefonoRaw}`}
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-emerald-50/70 border border-transparent hover:border-emerald-200 transition-all group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#e7f4ed] border border-[#bde4cf] flex items-center justify-center text-emerald-700 shrink-0 group-hover:scale-105 transition-transform">
                      <Phone size={14} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-[10px] uppercase font-bold text-slate-400 block leading-none mb-1">
                        Teléfono Directo
                      </span>
                      <span className="font-bold text-slate-900 group-hover:text-emerald-700 transition-colors text-sm">
                        {contact.telefono}
                      </span>
                    </div>
                    <ArrowUpRight size={14} className="text-slate-400 group-hover:text-emerald-700 transition-colors" />
                  </a>

                  {/* Email */}
                  <a 
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-sky-50/70 border border-transparent hover:border-sky-200 transition-all group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#e4eff6] border border-[#bcdbf0] flex items-center justify-center text-sky-700 shrink-0 group-hover:scale-105 transition-transform">
                      <Mail size={14} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-[10px] uppercase font-bold text-slate-400 block leading-none mb-1">
                        Correo Institucional
                      </span>
                      <span className="font-semibold text-slate-800 group-hover:text-sky-700 transition-colors text-[11px] sm:text-xs leading-tight block">
                        {contact.email}
                      </span>
                    </div>
                    <ArrowUpRight size={14} className="text-slate-400 group-hover:text-sky-700 transition-colors shrink-0" />
                  </a>

                  {/* Operating Schedule */}
                  <div className="flex items-center gap-2 px-2.5 pt-1 text-[11px] text-slate-500">
                    <Clock size={12} className="text-slate-400 shrink-0" />
                    <span>{contact.horario}</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp CTA Button */}
              <a
                href={`https://wa.me/${contact.telefonoRaw}?text=${encodeURIComponent(contact.whatsappMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3.5 px-4 rounded-xl text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-sm active:scale-98 cursor-pointer ${
                  contact.isPrincipal
                    ? 'bg-[#25D366] hover:bg-[#20bd5a] shadow-emerald-600/30'
                    : 'bg-[#0b283d] hover:bg-[#006e42] shadow-slate-900/20'
                }`}
              >
                <MessageCircle size={16} className="fill-current" />
                <span>{contact.btnLabel}</span>
              </a>
            </div>
          ))}
        </div>

        {/* Contact Form Section with clean styling */}
        <div className="bg-white rounded-3xl border border-[#cbe4d7] p-8 sm:p-12 max-w-4xl mx-auto shadow-sm">
          <div className="border-b border-[#e2efe8] pb-5 mb-6">
            <span className="text-xs font-bold text-[#006e42] uppercase tracking-wider bg-[#e4f4ec] px-2.5 py-1 rounded-md inline-block mb-2">
              Mensajería Inmediata
            </span>
            <h3 className="text-2xl font-display font-bold text-[#0a2336]">
              Formulario de Consulta Directa
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Envíenos los detalles de su carga o requerimiento y el equipo de Operaciones se comunicará de inmediato.
            </p>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-800 block mb-1">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Carlos Silva"
                  value={form.nombre}
                  onChange={(e) => setForm({...form, nombre: e.target.value})}
                  className="w-full bg-[#f8fbfa] border border-[#c8e3d6] rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:bg-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-800 block mb-1">
                  Empresa / Razón Social
                </label>
                <input
                  type="text"
                  placeholder="Ej. Distribuidora C.A."
                  value={form.empresa}
                  onChange={(e) => setForm({...form, empresa: e.target.value})}
                  className="w-full bg-[#f8fbfa] border border-[#c8e3d6] rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:bg-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-800 block mb-1">
                  Teléfono / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+58 414 1234567"
                  value={form.telefono}
                  onChange={(e) => setForm({...form, telefono: e.target.value})}
                  className="w-full bg-[#f8fbfa] border border-[#c8e3d6] rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:bg-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-800 block mb-1">
                  Servicio de Interés
                </label>
                <select
                  value={form.servicio}
                  onChange={(e) => setForm({...form, servicio: e.target.value})}
                  className="w-full bg-[#f8fbfa] border border-[#c8e3d6] rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:bg-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 cursor-pointer"
                >
                  <option value="Nacionalización de Cargas (2 a 3 días)">Nacionalización de Cargas (2 a 3 días)</option>
                  <option value="Fletes Internacionales">Fletes Internacionales</option>
                  <option value="Importación y Exportación">Importación y Exportación</option>
                  <option value="Descarga de Buque (Granel / General)">Descarga de Buque (Granel / General)</option>
                  <option value="Brokers / Trading de Materias Primas">Brokers / Trading de Materias Primas</option>
                  <option value="Atención Personalizada en Planta y Puerto">Atención Personalizada en Planta y Puerto</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-800 block mb-1">
                Detalles de la Carga o Mensaje *
              </label>
              <textarea
                rows="3"
                required
                placeholder="Indique tipo de mercancía, puerto o aduana de llegada, volumen estimado..."
                value={form.mensaje}
                onChange={(e) => setForm({...form, mensaje: e.target.value})}
                className="w-full bg-[#f8fbfa] border border-[#c8e3d6] rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:bg-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm uppercase tracking-wider transition-all duration-200 shadow-md shadow-emerald-500/20 flex items-center justify-center gap-2 active:scale-98 cursor-pointer"
            >
              <MessageCircle size={18} className="fill-current" />
              <span>Enviar por WhatsApp a Operaciones</span>
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};
