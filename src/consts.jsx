import { Sparkles, Heart, Scissors } from 'lucide-react';

export const WHATSAPP_NUMBER = "542236908042";

export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20Romi!%20Vi%20tu%20web%20y%20quiero%20consultarte%20por%20un%20turno...`;

export const SERVICIOS = [
  { 
    nombre: "Extensiones de Pestañas", 
    desc: "Técnica pelo a pelo y volumen ruso para una mirada profunda y natural.",
    icon: <Sparkles size={20} className="text-cafe-600" />
  },
  { 
    nombre: "Uñas Esculpidas", 
    desc: "Soft gel, capping y nail art artesanal. Durabilidad y cuidado para tus manos.",
    icon: <Heart size={20} className="text-cafe-600" />
  },
  { 
    nombre: "Extensiones de Cabello", 
    desc: "Largo y volumen inmediato con colocaciones imperceptibles y seguras.",
    icon: <Scissors size={20} className="text-cafe-600" />
  }
];