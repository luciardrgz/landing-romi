import { Instagram, MessageCircle, MapPin, Sparkles } from 'lucide-react';
import { WHATSAPP_LINK, INSTAGRAM_URL } from '../consts';

export const Footer = () => (
  <footer className="pt-32 pb-16 px-6 bg-[#f2e8e5]/50 border-t border-cafe-200">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-end">
      <div className="group">
        <div className="flex items-center gap-3 mb-6">
          <h3 className="text-5xl font-serif italic text-cafe-800">Romina</h3>
          <Sparkles 
            size={28} 
            className="text-cafe-600 animate-sparkle opacity-80 group-hover:scale-125 transition-transform duration-700" 
          />
        </div>
        
        <p className="text-cafe-800/60 max-w-xs mb-8 font">
          Atención exclusiva en Mar del Plata. Consultá por turnos a domicilio o en gabinete privado.
        </p>

        <div className="flex gap-6">
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" 
             className="p-3 border border-cafe-200 rounded-full hover:bg-cafe-800 hover:text-white transition-all duration-300">
            <Instagram size={20} />
          </a>
          <a href={WHATSAPP_LINK} 
             className="p-3 border border-cafe-200 rounded-full hover:bg-cafe-800 hover:text-white transition-all duration-300">
            <MessageCircle size={20} />
          </a>
        </div>
      </div>

      <div className="text-left md:text-right">
        <p className="flex items-center md:justify-end gap-2 text-[10px] uppercase tracking-[0.3em] mb-2 opacity-60 text-cafe-800">
          <MapPin size={12} /> Mar del Plata, Argentina
        </p>
        <p className="text-[9px] uppercase tracking-[0.4em] opacity-40 text-cafe-800">
          © 2026 Romi Estética Profesional
        </p>
      </div>
    </div>
  </footer>
);