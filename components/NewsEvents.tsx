import React from 'react';
import { NEWS_ITEMS } from '../constants';
import { Calendar, ArrowRight } from 'lucide-react';

const NewsEvents: React.FC = () => {
  return (
    <section id="noticias" className="py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-gold-600 font-bold tracking-widest uppercase text-sm">Actualidad</span>
            <h2 className="text-4xl font-serif text-wine-900 mt-2">Eventos y Noticias</h2>
          </div>
          <a href="#contacto" className="hidden md:flex items-center gap-2 text-wine-800 font-bold hover:text-gold-600 transition-colors">
             Suscribirse al Newsletter <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {NEWS_ITEMS.map((item) => (
            <article key={item.id} className="bg-white rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col">
              <div className="relative overflow-hidden h-56">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-gold-500 text-wine-900 text-xs font-bold px-3 py-1 uppercase tracking-wider">
                  {item.category}
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                  <Calendar size={14} />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-3 leading-tight hover:text-wine-800 cursor-pointer">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                  {item.summary}
                </p>
                <button className="text-gold-600 font-bold text-sm uppercase tracking-wider hover:text-wine-800 transition-colors self-start">
                  Leer más
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;