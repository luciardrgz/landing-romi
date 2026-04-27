import { SERVICIOS } from '../consts';

export const Servicios = () => (
    <section id="servicios" className="py-32 px-6 max-w-6xl mx-auto">
        <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-6xl font-serif italic mb-4 text-cafe-800">Servicios</h2>
            <div className="h-[1px] bg-cafe-200 w-24 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-16 md:gap-8">
            {SERVICIOS.map((s, i) => (
                <div 
                    key={i} 
                    className="group relative p-8 bg-white rounded-[2.5rem] 
                               border border-cafe-100/50 shadow-sm
                               hover:shadow-[0_20px_50px_rgba(75,54,33,0.08)] 
                               hover:-translate-y-2 transition-all duration-500 ease-out"
                >
                    <div className="mb-8 inline-block p-4 bg-cafe-50 rounded-2xl 
                                    group-hover:bg-cafe-800 group-hover:text-white 
                                    transition-all duration-500 shadow-inner">
                        <div className="group-hover:scale-110 transition-transform duration-500">
                            {s.icon}
                        </div>
                    </div>

                    <h3 className="text-2xl font-serif mb-4 italic text-cafe-800">
                        {s.nombre}
                    </h3>

                    <p className="text-cafe-800/70 text-sm leading-relaxed mb-8">
                        {s.desc}
                    </p>

                    <div className="h-[1.5px] bg-cafe-200/40 w-12 group-hover:w-full group-hover:bg-cafe-600 transition-all duration-700"></div>
                </div>
            ))}
        </div>
    </section>
);