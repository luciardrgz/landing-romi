import { CALENDLY_URL } from '../consts';

export const Turnos = () => (
  <section id="turnos" className="py-20 bg-white/50 border-t border-cafe-200">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-serif italic mb-4 text-cafe-800">
          Reservá tu turno
        </h2>
        <p className="text-cafe-800/60 italic">
          Seleccioná el día y horario que mejor te quede.
        </p>
        <div className="h-[1px] bg-cafe-200 w-24 mx-auto mt-6"></div>
      </div>

      <div
        className="calendly-inline-widget shadow-xl rounded-2xl overflow-hidden border border-cafe-100"
        data-url={CALENDLY_URL}
        style={{ minWidth: '320px', height: '700px' }}
      />
    </div>
  </section>
);