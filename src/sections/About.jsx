import fotoRomi from '../assets/romi.png';
import { Sparkles, Heart, Scissors, MapPin } from 'lucide-react';

export const About = () => (
    <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">

            <div className="relative">
                <div className="absolute -inset-4 border border-cafe-200 rounded-[3rem] rotate-3 pointer-events-none"></div>
                <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl">
                    <img
                        src={fotoRomi}
                        alt="Romi - Estética Profesional"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                    />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
                    <p className="font-serif italic text-cafe-800 text-lg">"Pasión por los detalles"</p>
                </div>
            </div>

            <div className="space-y-8">
                <div>
                    <span className="uppercase tracking-[0.3em] text-[10px] font-bold text-cafe-600 block mb-4">
                        Conoceme
                    </span>
                    <h2 className="text-5xl md:text-7xl font-serif italic text-cafe-800 leading-tight">
                        Hola, soy Romi!
                    </h2>
                </div>

                <p className="text-lg text-cafe-800/80 leading-relaxed">
                    Mi misión es realzar tu belleza natural a través de un servicio
                    exclusivo y personalizado. En cada turno, busco crear un espacio de
                    bienestar donde te sientas cuidada y renovada.
                </p>

                <div className="space-y-4">
                    <p className="text-cafe-800 font-medium italic text-xl">Hago:</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8">
                        {[
                            { txt: 'Pestañas (pelo por pelo y volumen)', icon: <Sparkles size={16} /> },
                            { txt: 'Uñas (full nail art y kapping)', icon: <Heart size={16} /> },
                            { txt: 'Extensiones que no se notan', icon: <Scissors size={16} /> },
                            { txt: 'Atención en gabinete o a domicilio', icon: <MapPin size={16} /> }
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-4 text-[11px] text-cafe-700/80 uppercase tracking-[0.2em] font-bold border-b border-cafe-100 pb-3 group">
                                <span className="text-cafe-400 group-hover:text-cafe-600 transition-colors duration-300 mt-[2px]">
                                    {item.icon}
                                </span>
                                <span className="leading-tight">{item.txt}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </section>
);