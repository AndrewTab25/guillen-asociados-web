import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export const TopBar = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('es-VE', {
        timeZone: 'America/Caracas',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      }));
    };
    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#0b283d] text-white text-xs py-2.5 px-4 border-b border-white/10 hidden md:block">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left: Estado en vivo de terminales aduanales */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-semibold text-slate-200">Terminales & Aduanas:</span>
            <span className="text-emerald-400 font-medium">Operativas 24/7</span>
          </div>
          <span className="text-slate-600 hidden lg:inline">•</span>
          <span className="text-slate-300 text-[11px] hidden lg:inline">
            Puerto Cabello • La Guaira • Maiquetía
          </span>
        </div>

        {/* Right: Reloj Oficial en Tiempo Real (Venezuela GMT-4) */}
        <div className="flex items-center gap-4">
          <span className="text-slate-400 text-[11px] hidden xl:inline">
            Atención Administrativa: Lun - Vie 8:00 AM - 5:00 PM
          </span>
          <div className="flex items-center gap-2 text-slate-300 font-mono text-[11px]">
            <Clock size={12} className="text-emerald-400" />
            <span className="text-slate-400 text-[10px] uppercase tracking-wider">Hora Oficial VET:</span>
            <span className="text-emerald-300 font-bold bg-white/5 px-2 py-0.5 rounded border border-white/10">
              {time || 'Cargando...'}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};
