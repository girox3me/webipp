import React from 'react';
import { CONTENT } from '../constants';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2940&auto=format&fit=crop" 
          alt="Vinos finos" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-wine-900/70 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h2 className="text-gold-400 tracking-[0.3em] uppercase text-sm md:text-base mb-4 font-sans font-bold animate-fade-in-up">
          {CONTENT.company.name}
        </h2>
        <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-serif font-bold mb-6 leading-tight">
          {CONTENT.hero.title}
        </h1>
        <p className="text-gray-200 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          {CONTENT.hero.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#catalogo" 
            className="px-8 py-4 bg-gold-500 text-wine-900 font-bold tracking-wider hover:bg-white transition-colors duration-300 border border-transparent"
          >
            NUESTRA COLECCIÓN
          </a>
          <a 
            href="#contacto" 
            className="px-8 py-4 bg-transparent text-white border border-white font-bold tracking-wider hover:bg-white hover:text-wine-900 transition-colors duration-300"
          >
            CONTACTAR
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown size={32} className="text-gold-500" />
      </div>
    </section>
  );
};

export default Hero;