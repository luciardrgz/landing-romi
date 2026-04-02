import { Instagram, MessageCircle, MapPin, Leaf } from 'lucide-react';
import { WHATSAPP_LINK, SERVICIOS } from './consts.jsx';

const App = () => {
  return (
    <div className="min-h-screen font-sans bg-[#fdf8f6] text-[#4b3621] selection:bg-cafe-200">

      <header className="relative h-[90vh] flex items-center justify-center bg-[#f2e8e5] px-6 overflow-hidden">
        <div className="absolute -top-10 -left-10 text-monstera/10 rotate-45 pointer-events-none">
          <Leaf size={450} strokeWidth={0.5} />
        </div>
        <div className="absolute -bottom-20 -right-20 text-monstera/5 -rotate-12 pointer-events-none">
          <Leaf size={600} strokeWidth={0.5} />
        </div>

        <div className="relative z-10 text-center max-w-4xl">
          <span className="uppercase tracking-[0.4em] text-[10px] md:text-xs mb-6 block font-semibold text-cafe-600">
            Estética Profesional • Mar del Plata
          </span>
          <h1 className="text-8xl md:text-[11rem] font-serif mb-8 leading-none italic tracking-tighter">
            Romi
          </h1>
          <p className="text-base md:text-xl font-light leading-relaxed max-w-lg mx-auto mb-12 opacity-80 italic">
            "Realzando tu esencia natural a través de técnicas exclusivas en pestañas, uñas y cabello."
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer"
              className="w-full sm:w-auto bg-[#4b3621] text-white px-10 py-4 rounded-full hover:bg-cafe-600 transition-all shadow-xl flex items-center justify-center gap-3">
              <MessageCircle size={20} /> Agendar Turno
            </a>
            <a href="#servicios" className="w-full sm:w-auto border border-cafe-800 px-10 py-4 rounded-full hover:bg-cafe-800 hover:text-white transition-all uppercase text-xs tracking-widest font-semibold">
              Explorar servicios
            </a>
          </div>
        </div>
      </header>

      <div className="bg-cafe-800 text-[#fdf8f6] py-4 overflow-hidden whitespace-nowrap">
        <div className="flex animate-marquee gap-10 items-center uppercase text-[10px] tracking-[0.5em] font-medium">
          <span>Mar del Plata</span> • <span>Atención Personalizada</span> •
          <span>Gabinete Privado</span> • <span>Servicio a Domicilio</span> •
          <span>Mar del Plata</span> • <span>Atención Personalizada</span> •
          <span>Gabinete Privado</span> • <span>Servicio a Domicilio</span>
        </div>
      </div>

      <section id="servicios" className="py-32 px-6 max-w-6xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-6xl font-serif italic mb-4 text-cafe-800">Lo que hacemos</h2>
          <div className="h-[1px] bg-cafe-200 w-24 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-16 md:gap-8">
          {SERVICIOS.map((s, i) => (
            <div key={i} className="group relative p-8 bg-white/40 hover:bg-white transition-all duration-500 rounded-2xl border border-transparent hover:border-cafe-200 shadow-sm">
              <div className="mb-6 inline-block p-3 bg-cafe-100 rounded-full group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <h3 className="text-2xl font-serif mb-4 italic text-cafe-800">{s.nombre}</h3>
              <p className="text-cafe-800/70 text-sm leading-relaxed mb-6 font-light">
                {s.desc}
              </p>
              <div className="h-[1px] bg-cafe-200 w-full group-hover:w-0 transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </section>

      <section id="turnos" className="py-20 bg-white/50 border-t border-cafe-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-serif italic mb-4 text-cafe-800">
              Reservá tu turno
            </h2>
            <p className="text-cafe-800/60 font-light italic">
              Seleccioná el día y horario que mejor te quede.
            </p>
            <div className="h-[1px] bg-cafe-200 w-24 mx-auto mt-6"></div>
          </div>

          <div
            className="calendly-inline-widget shadow-xl rounded-2xl overflow-hidden border border-cafe-100"
            data-url="https://calendly.com/zielusweb/30min?hide_landing_page_details=1&hide_gdpr_banner=1&primary_color=4b3621"
            style={{ minWidth: '320px', height: '700px' }}
          />
        </div>
      </section>

      <footer className="pt-32 pb-16 px-6 bg-[#f2e8e5]/50 border-t border-cafe-200">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-end">
          <div>
            <h3 className="text-5xl font-serif italic mb-6">Romina</h3>
            <p className="text-cafe-800/60 max-w-xs mb-8 font-light">
              Atención exclusiva en Mar del Plata. Consultá por turnos a domicilio o en gabinete privado.
            </p>
            <div className="flex gap-6">
              <a href="https://instagram.com" className="p-3 border border-cafe-200 rounded-full hover:bg-cafe-800 hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href={WHATSAPP_LINK} className="p-3 border border-cafe-200 rounded-full hover:bg-cafe-800 hover:text-white transition-all">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          <div className="text-left md:text-right">
            <p className="flex items-center md:justify-end gap-2 text-sm uppercase tracking-widest mb-2 opacity-60">
              <MapPin size={14} /> Mar del Plata, Argentina
            </p>
            <p className="text-[10px] uppercase tracking-widest opacity-40">
              © 2026 Romi Estética Profesional
            </p>
          </div>
        </div>
      </footer>

      <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 md:bottom-10 md:right-10">
        <MessageCircle size={28} />
      </a>
    </div>

  );
};

export default App;