import React, { useEffect } from 'react';
import { Hero } from './sections/Hero';
import { Marquee } from './sections/Marquee';
import { Servicios } from './sections/Servicios';
import { Turnos } from './sections/Turnos';
import { Footer } from './sections/Footer';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from './consts';
import Lenis from 'lenis';
import { About } from './sections/About';

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smoothHorizontal: false,
      mouseMultiplier: 1,
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen font-sans bg-[#fdf8f6] text-[#4b3621] selection:bg-cafe-200">
      <Hero />
      <Marquee />
      <About />
      <Servicios />
      <Turnos />
      <Footer />

      <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 md:bottom-10 md:right-10">
        <MessageCircle size={28} />
      </a>
    </div>
  );
};

export default App;