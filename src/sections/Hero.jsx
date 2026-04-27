import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../consts';
import imagenFondo from '../assets/1.jpg';

export const Hero = () => (
    <header className="relative h-[95vh] flex items-center justify-center overflow-hidden">

        <div
            className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
            style={{
                backgroundImage: `url(${imagenFondo})`,
                backgroundAttachment: 'fixed'
            }}
        />

        <div className="absolute inset-0 z-10 bg-[#fdf8f6]/80 backdrop-blur-[3px] border-b border-cafe-100"></div>

        <div className="relative z-20 text-center max-w-5xl px-6">
            <span className="uppercase tracking-[0.4em] text-[10px] md:text-xs mb-8 block font-semibold text-cafe-600 drop-shadow-sm">
                Estética Profesional • Mar del Plata
            </span>

            <h1 className="text-8xl md:text-[11rem] font-serif mb-8 leading-none italic tracking-tighter text-cafe-800 drop-shadow-sm">
                Romi
            </h1>

            <p className="text-base md:text-xl leading-relaxed max-w-lg mx-auto mb-12 text-cafe-900/80">
                Realzamos tu esencia natural a través de técnicas exclusivas en pestañas, uñas y cabello.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer"
                    className="w-full sm:w-auto bg-[#4b3621] text-[#fdf8f6] px-10 py-5 rounded-full 
                   hover:bg-cafe-600 transition-all duration-300 shadow-xl 
                   flex items-center justify-center gap-3 active:scale-95 uppercase text-[10px] tracking-[0.2em] font-bold">
                    <MessageCircle size={18} /> Agendar Turno
                </a>

                <a href="#servicios"
                    className="w-full sm:w-auto border border-[#4b3621] text-[#4b3621] px-10 py-5 rounded-full 
                   hover:bg-[#4b3621] hover:text-[#fdf8f6] transition-all duration-300 
                   flex items-center justify-center uppercase text-[10px] tracking-[0.2em] font-bold backdrop-blur-sm active:scale-95">
                    Explorar servicios
                </a>
            </div>
        </div>


    </header>
);