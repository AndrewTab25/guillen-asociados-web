import React from 'react';
import { Phone, Mail, ArrowUp } from 'lucide-react';
import { companyData } from '../data/companyData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0b283d] text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Logo & Resumen */}
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-2.5 inline-block shadow-sm">
              <img 
                src="/Logo/logo_guillen_corona.png" 
                alt={companyData.name} 
                className="h-16 w-auto object-contain"
              />
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Soluciones integrales en agenciamiento aduanal y logística nacional e internacional. Compromiso, puntualidad y estricto cumplimiento normativo en cada operación.
            </p>

            <div className="text-xs text-emerald-400 font-semibold">
              RIF: {companyData.rif}
            </div>
          </div>

          {/* Col 2: Navegación */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><a href="#hero" className="hover:text-emerald-400 transition-colors">Inicio</a></li>
              <li><a href="#nosotros" className="hover:text-emerald-400 transition-colors">¿Quiénes Somos?</a></li>
              <li><a href="#servicios" className="hover:text-emerald-400 transition-colors">Nuestros Servicios</a></li>
              <li><a href="#marcas" className="hover:text-emerald-400 transition-colors">Marcas Aliadas</a></li>
              <li><a href="#contacto" className="hover:text-emerald-400 transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Col 3: Servicios Principales */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Nuestros Servicios
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><span>Nacionalización de Cargas (2 a 3 días)</span></li>
              <li><span>Fletes Internacionales</span></li>
              <li><span>Importación y Exportación</span></li>
              <li><span>Descarga de Buque (Granel y General)</span></li>
              <li><span>Brokers & Trading</span></li>
              <li><span>Atención Especializada</span></li>
            </ul>
          </div>

          {/* Col 4: Contactos Operativos */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Contacto Operativo
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-emerald-400 shrink-0" />
                <span>+58 0414-349.58.73 (Operaciones)</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-emerald-400 shrink-0" />
                <span>+58 0424-415.99.85 (Gerencia)</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-emerald-400 shrink-0" />
                <span>+58 0414-597.06.17 (Analista)</span>
              </li>
              <li className="flex items-center gap-2 pt-1 text-slate-400">
                <Mail size={14} className="text-sky-400 shrink-0" />
                <span className="truncate">francislugo@guillencoronayasociados.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} {companyData.name}. Todos los derechos reservados.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors uppercase text-xs font-semibold"
          >
            <span>Volver arriba</span>
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
};
