import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppFloat = ({ onOpenAssistant }) => {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={onOpenAssistant}
        aria-label="Abrir Asistente Virtual"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#0b283d] hover:bg-[#009f63] text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 group"
      >
        {/* Subtle breathing pulse ring for alive feedback */}
        <span 
          className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none" 
          style={{ animationDuration: '3s' }} 
        />

        <MessageCircle 
          size={25} 
          className="fill-current text-white transition-transform duration-300 group-hover:scale-110 group-active:scale-90" 
        />
        
        {/* Active online dot */}
        <span className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-[#25D366] border-2 border-white flex items-center justify-center shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
        </span>
      </button>
    </div>
  );
};

