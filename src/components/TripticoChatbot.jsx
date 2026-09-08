import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { 
  X, Send, MessageCircle, Clock, ShieldCheck, 
  Phone, Mail, ArrowRight, UserCheck, Anchor, Plane, Globe, CheckCircle2,
  Sparkles, RotateCcw
} from 'lucide-react';
import { companyData } from '../data/companyData';

export const TripticoChatbot = ({ isOpen, onClose }) => {
  // Active panel tab for mobile screens (0 = Reseña, 1 = Asistente, 2 = Contactos)
  const [mobileTab, setMobileTab] = useState(1);

  // Chat conversation state
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: '¡Hola! Bienvenido a Guillén Corona & Asociados, C.A. Soy su Asistente Virtual. ¿En qué podemos asesorarle hoy respecto a su carga o trámite aduanal?',
      time: 'Ahora'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatBottomRef = useRef(null);

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Knowledge base strictly from brochure
  const getBotResponse = (userQuery) => {
    const q = userQuery.toLowerCase();

    if (q.includes('tiempo') || q.includes('nacionalizacion') || q.includes('nacionalización') || q.includes('dias') || q.includes('días') || q.includes('cuanto tarda')) {
      return 'Nuestra especialidad operativa es la nacionalización de cargas en un tiempo de 2 a 3 días hábiles. Esto permite una reducción sustancial de costos en gestión externa y evita sobrecostos de almacenaje.';
    }

    if (q.includes('puerto') || q.includes('cabello') || q.includes('aeropuerto') || q.includes('guaira') || q.includes('maiquetia') || q.includes('cobertura')) {
      return 'Contamos con presencia y capacidad multimodal en los principales puertos y aeropuertos del país, incluyendo Puerto Cabello (operaciones y descarga de buques), La Guaira y Maiquetía (carga aérea), además de tránsito terrestre custodiado a planta.';
    }

    if (q.includes('buque') || q.includes('descarga') || q.includes('granel') || q.includes('barco')) {
      return 'Ofrecemos operaciones especializadas de descarga de buques directamente en muelle, tanto para carga general como para carga a granel seca o líquida, con supervisión de estiba y resguardo en zona portuaria.';
    }

    if (q.includes('flete') || q.includes('aereo') || q.includes('aéreo') || q.includes('maritimo') || q.includes('marítimo') || q.includes('terrestre') || q.includes('multimodal')) {
      return 'Gestionamos fletes internacionales para importaciones y exportaciones a nivel mundial, articulando transporte multimodal aéreo, marítimo (FCL/LCL) y terrestre con seguimiento permanente.';
    }

    if (q.includes('broker') || q.includes('trading') || q.includes('materia') || q.includes('mercado')) {
      return 'Nuestra división de Brokers brinda servicios de trading, comercialización de materias primas, estudios de mercado estratégicos y posicionamiento de marcas en el comercio exterior.';
    }

    if (q.includes('contacto') || q.includes('francis') || q.includes('telefono') || q.includes('número') || q.includes('llamar')) {
      return 'Puede comunicarse directamente con Francis Lugo (Gerente de Operaciones) al +58 0414-349.58.73 o con la Gerencia General al +58 0424-415.99.85.';
    }

    if (q.includes('quienes') || q.includes('empresa') || q.includes('experiencia') || q.includes('años')) {
      return 'Guillén Corona & Asociados, C.A. (RIF J-07591163-6) es un agente aduanal con más de 15 años de experiencia, enfocado en agenciamiento, nacionalización, consolidación y logística integral.';
    }

    return 'Gracias por su consulta. Coordinamos operaciones aduanales en 2 a 3 días, fletes internacionales y descarga de buques. Si desea una cotización formal, puede hacer clic en "Continuar en WhatsApp" para contactar con Francis Lugo.';
  };

  const handleSendMessage = (textToSend) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const userMsg = {
      sender: 'user',
      text: text.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);
    setMobileTab(1);

    setTimeout(() => {
      const reply = getBotResponse(text);
      setMessages(prev => [
        ...prev,
        {
          sender: 'bot',
          text: reply,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
      setIsTyping(false);
    }, 500);
  };

  const handleExportToWhatsApp = () => {
    const lastUserQuery = messages.filter(m => m.sender === 'user').pop()?.text || 'Consulta de servicios aduanales';
    const text = `*CONSULTA ASISTENTE VIRTUAL - GUILLÉN CORONA & ASOCIADOS*\n\n` +
      `Hola Francis Lugo (Gerencia de Operaciones), estuve consultando en la web sobre:\n\n` +
      `👉 "${lastUserQuery}"\n\n` +
      `Por favor indíquenme asesoría y cotización. Gracias.`;

    window.open(`https://wa.me/584143495873?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto"
          style={{ perspective: 2000 }}
        >
          {/* Backdrop with fade animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#061624]/70 backdrop-blur-md"
          />

          {/* Unfolding 3D Book / Tríptico Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.78, y: 55, rotateX: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 35, rotateX: -10 }}
            transition={{ 
              type: "spring", 
              stiffness: 240, 
              damping: 24,
              mass: 0.85
            }}
            className="relative w-full max-w-5xl bg-[#f7faf9] rounded-3xl shadow-[0_30px_70px_-15px_rgba(10,35,54,0.4)] border border-[#bfe2cf] my-auto flex flex-col max-h-[90vh] z-10"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Clean Header Bar */}
            <div className="bg-[#0b283d] text-white px-6 py-3.5 flex items-center justify-between border-b border-white/10 shrink-0 rounded-t-3xl">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white p-1 flex items-center justify-center shadow-xs">
                  <img src="/Logo/logo_guillen_corona.png" alt="Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <span className="font-display font-bold text-sm tracking-wide block">
                    Asistente Virtual
                  </span>
                  <p className="text-[10px] text-slate-300">
                    Guillén Corona & Asociados, C.A. · RIF {companyData.rif}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleExportToWhatsApp}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold transition-all shadow-xs active:scale-95"
                >
                  <MessageCircle size={14} className="fill-current" />
                  <span>Continuar en WhatsApp</span>
                </button>

                <button
                  onClick={onClose}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  aria-label="Cerrar ventana"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Mobile Tab Switcher */}
            <div className="lg:hidden flex border-b border-[#cce4d8] bg-[#eef6f2] shrink-0">
              <button
                onClick={() => setMobileTab(0)}
                className={`flex-1 py-2.5 text-xs font-bold text-center border-b-2 transition-colors ${
                  mobileTab === 0 
                    ? 'border-emerald-600 text-emerald-900 bg-white' 
                    : 'border-transparent text-slate-600'
                }`}
              >
                Reseña
              </button>
              <button
                onClick={() => setMobileTab(1)}
                className={`flex-1 py-2.5 text-xs font-bold text-center border-b-2 transition-colors flex items-center justify-center gap-1.5 ${
                  mobileTab === 1 
                    ? 'border-emerald-600 text-emerald-900 bg-white' 
                    : 'border-transparent text-slate-600'
                }`}
              >
                <Sparkles size={13} className="text-emerald-600" />
                <span>Asistente</span>
              </button>
              <button
                onClick={() => setMobileTab(2)}
                className={`flex-1 py-2.5 text-xs font-bold text-center border-b-2 transition-colors ${
                  mobileTab === 2 
                    ? 'border-emerald-600 text-emerald-900 bg-white' 
                    : 'border-transparent text-slate-600'
                }`}
              >
                Contactos
              </button>
            </div>

            {/* 3 Panels Layout with Genuine 3D Fold-Out Wings */}
            <div 
              className="grid grid-cols-1 lg:grid-cols-12 flex-1 min-h-0" 
              style={{ perspective: 1800, transformStyle: 'preserve-3d' }}
            >
              
              {/* PANEL 1: Left Wing / Resumen & Preguntas Rápidas (Folds Out) */}
              <motion.div 
                initial={{ opacity: 0, rotateY: -85 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: -85 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 130, 
                  damping: 18, 
                  delay: 0.14 
                }}
                style={{ 
                  transformOrigin: 'right center',
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'hidden'
                }}
                className={`relative lg:col-span-4 bg-[#f3f8f5] flex flex-col min-h-0 lg:rounded-bl-3xl border-b lg:border-b-0 border-[#cce4d8] triptico-fold-left ${
                  mobileTab === 0 ? 'flex' : 'hidden lg:flex'
                }`}
              >
                {/* Dynamic light/shadow overlay that disappears as wing unfolds */}
                <motion.div 
                  initial={{ opacity: 0.35 }}
                  animate={{ opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.14 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 pointer-events-none z-20 rounded-bl-3xl"
                />

                <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-5">
                  
                  {/* Logo & Mini Reseña */}
                  <div className="bg-white rounded-2xl p-4 border border-[#cbe4d7] shadow-xs text-center">
                    <img 
                      src="/Logo/logo_guillen_corona.png" 
                      alt="Guillén Corona" 
                      className="h-16 mx-auto object-contain mb-2"
                    />
                    <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                      Agentes Aduanales
                    </h4>
                    <p className="text-[11px] text-slate-500 font-mono mt-0.5">
                      RIF: {companyData.rif}
                    </p>
                  </div>

                  {/* Core Strengths */}
                  <div className="bg-[#e7f4ed] rounded-xl p-4 border border-[#bfe2cf] space-y-2.5">
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-900">
                      <Clock size={15} className="text-emerald-600 shrink-0" />
                      <span>Nacionalización en 2 a 3 días</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-900">
                      <ShieldCheck size={15} className="text-emerald-600 shrink-0" />
                      <span>Más de 15 años de experiencia</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-900">
                      <Globe size={15} className="text-emerald-600 shrink-0" />
                      <span>Capacidad Multimodal Total</span>
                    </div>
                  </div>

                  {/* Quick Inquiry Buttons */}
                  <div>
                    <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider block mb-2">
                      Consultas Frecuentes
                    </span>
                    <div className="space-y-1.5">
                      {[
                        "¿Cómo es la nacionalización en 2 a 3 días?",
                        "¿En qué puertos y aduanas operan?",
                        "¿Cómo funciona la descarga de buques?",
                        "¿Gestionan fletes aéreos y marítimos?",
                        "¿Quién es el contacto de operaciones?"
                      ].map((q, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSendMessage(q)}
                          className="w-full text-left p-2.5 rounded-xl bg-white hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 text-xs text-slate-700 hover:text-emerald-900 transition-all flex items-center justify-between group shadow-2xs active:scale-[0.99] cursor-pointer"
                        >
                          <span className="truncate pr-2 font-medium">{q}</span>
                          <ArrowRight size={13} className="text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all shrink-0" />
                        </button>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>


              {/* PANEL 2: Center Spine / El Asistente Virtual */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ duration: 0.35, delay: 0.08, ease: 'easeOut' }}
                className={`relative lg:col-span-5 bg-white flex flex-col min-h-0 triptico-fold-center border-x border-[#cce4d8] ${
                  mobileTab === 1 ? 'flex' : 'hidden lg:flex'
                }`}
              >
                
                {/* Top Status */}
                <div className="p-3 bg-[#edf6f2] border-b border-[#c8e5d5] flex items-center justify-between shrink-0">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">
                      <Sparkles size={14} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#0b283d]">
                        Asistente en Línea
                      </h4>
                      <p className="text-[10px] text-emerald-700 font-semibold">
                        Respuestas con base en información oficial
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => setMessages([{
                      sender: 'bot',
                      text: 'Conversación reiniciada. ¿En qué podemos asesorarle respecto a su trámite aduanal o flete?',
                      time: 'Ahora'
                    }])}
                    title="Reiniciar chat"
                    className="p-1.5 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                  >
                    <RotateCcw size={13} />
                  </button>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gradient-to-b from-white via-[#f9fbfb] to-[#f3f7f6]">
                  {messages.map((msg, index) => {
                    const isBot = msg.sender === 'bot';
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.25 }}
                        className={`flex flex-col ${isBot ? 'items-start' : 'items-end'}`}
                      >
                        <div
                          className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed shadow-2xs ${
                            isBot
                              ? 'bg-[#edf6f2] text-slate-800 border border-[#c6e5d5] rounded-tl-xs'
                              : 'bg-[#0b283d] text-white rounded-tr-xs'
                          }`}
                        >
                          <p>{msg.text}</p>
                        </div>
                        <span className="text-[9px] text-slate-400 mt-1 px-1">
                          {msg.time}
                        </span>
                      </motion.div>
                    );
                  })}

                  {isTyping && (
                    <div className="flex items-center gap-1.5 bg-[#edf6f2] text-slate-500 px-3 py-2 rounded-xl text-xs w-fit border border-[#c6e5d5]">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-bounce"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-bounce [animation-delay:0.2s]"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-bounce [animation-delay:0.4s]"></span>
                      <span className="text-[10px] font-medium ml-1">Escribiendo...</span>
                    </div>
                  )}

                  <div ref={chatBottomRef} />
                </div>

                {/* Input Bar */}
                <div className="p-3 bg-[#edf6f2] border-t border-[#c8e5d5] shrink-0">
                  <form 
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSendMessage();
                    }}
                    className="flex items-center gap-2"
                  >
                    <input
                      type="text"
                      placeholder="Escriba su pregunta aduanal o logística..."
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      className="flex-1 bg-white border border-[#bfe2cf] rounded-xl px-3.5 py-2 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    />

                    <button
                      type="submit"
                      disabled={!inputText.trim()}
                      className="p-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 text-white transition-all shrink-0 active:scale-95"
                      aria-label="Enviar mensaje"
                    >
                      <Send size={15} />
                    </button>
                  </form>

                  <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-[#d8ebe1] text-[10px] text-slate-500">
                    <span>¿Desea hablar con un asesor?</span>
                    <button
                      onClick={handleExportToWhatsApp}
                      className="text-emerald-800 font-bold hover:underline flex items-center gap-1"
                    >
                      <MessageCircle size={12} className="fill-current" />
                      <span>Pasar a WhatsApp</span>
                    </button>
                  </div>
                </div>

              </motion.div>


              {/* PANEL 3: Right Wing / Directorio de Contactos (Folds Out) */}
              <motion.div 
                initial={{ opacity: 0, rotateY: 85 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: 85 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 130, 
                  damping: 18, 
                  delay: 0.18 
                }}
                style={{ 
                  transformOrigin: 'left center',
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'hidden'
                }}
                className={`relative lg:col-span-3 bg-[#f2f7f5] flex flex-col min-h-0 lg:rounded-br-3xl rounded-b-3xl lg:rounded-bl-none triptico-fold-right ${
                  mobileTab === 2 ? 'flex' : 'hidden lg:flex'
                }`}
              >
                {/* Dynamic light/shadow overlay that disappears as right wing unfolds */}
                <motion.div 
                  initial={{ opacity: 0.35 }}
                  animate={{ opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.18 }}
                  className="absolute inset-0 bg-gradient-to-l from-transparent to-black/20 pointer-events-none z-20 rounded-br-3xl"
                />

                <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-5">
                  
                  <div>
                    <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block mb-1">
                      Atención Directa
                    </span>
                    <h4 className="text-sm font-display font-bold text-[#0b283d]">
                      Directorio Oficial
                    </h4>
                  </div>

                  {/* Contacts mini list */}
                  <div className="space-y-2.5">
                    {companyData.contactos.map((c, i) => (
                      <div key={i} className="bg-white rounded-xl p-3 border border-[#cbe3d6] shadow-2xs">
                        <span className="text-[10px] font-bold text-emerald-700 uppercase block">
                          {c.cargo}
                        </span>
                        {c.nombre && (
                          <span className="text-xs font-bold text-[#0b283d] block">
                            {c.nombre}
                          </span>
                        )}
                        <p className="text-[11px] text-slate-700 font-semibold mt-1">
                          {c.telefono}
                        </p>
                        <a
                          href={`https://wa.me/${c.telefonoRaw}?text=Hola%2C%20me%20comunico%20desde%20la%20p%C3%A1gina%20web%20de%20Guill%C3%A9n%20Corona`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 hover:text-emerald-900 underline"
                        >
                          <MessageCircle size={11} className="fill-current" />
                          <span>Escribir por WhatsApp</span>
                        </a>
                      </div>
                    ))}
                  </div>

                  {/* Mission Card */}
                  <div className="bg-[#e4f1ea] rounded-xl p-3.5 border border-[#bddccb]">
                    <h5 className="text-xs font-bold text-emerald-950 mb-1">
                      Misión:
                    </h5>
                    <p className="text-[11px] text-slate-700 leading-relaxed italic">
                      "{companyData.mision}"
                    </p>
                  </div>

                </div>
              </motion.div>

            </div>

          </motion.div>

        </div>
      )}
    </AnimatePresence>
  );
};
