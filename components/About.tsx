import React from 'react';
import { CONTENT } from '../constants';
import { Target, Eye, Award, Truck, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="nosotros" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-gold-600 font-bold tracking-widest uppercase text-sm">Sobre Nosotros</span>
          <h2 className="text-4xl font-serif text-wine-900 mt-2 mb-6">Nuestra Esencia</h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-8">
            <div className="bg-slate-50 p-8 border-l-4 border-gold-500 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Target className="text-wine-800" size={24} />
                <h3 className="text-2xl font-serif text-wine-900">Misión</h3>
              </div>
              <p className="text-gray-600 leading-relaxed font-sans">
                {CONTENT.company.mission}
              </p>
            </div>

            <div className="bg-slate-50 p-8 border-l-4 border-wine-800 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="text-wine-800" size={24} />
                <h3 className="text-2xl font-serif text-wine-900">Visión</h3>
              </div>
              <p className="text-gray-600 leading-relaxed font-sans">
                {CONTENT.company.vision}
              </p>
            </div>
          </div>
          
          <div className="relative h-full min-h-[400px]">
             <img 
                src="https://images.unsplash.com/photo-1569919786897-c65008d60686?q=80&w=2000&auto=format&fit=crop" 
                alt="Bodega de vinos" 
                className="w-full h-full object-cover rounded-lg shadow-xl"
             />
             <div className="absolute -bottom-6 -left-6 bg-wine-900 text-white p-8 max-w-xs hidden lg:block shadow-2xl">
                <p className="font-serif italic text-lg">"La calidad no es un acto, es un hábito."</p>
             </div>
          </div>
        </div>

        {/* Strengths Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {CONTENT.company.strengths.map((strength, idx) => (
                <div key={idx} className="flex flex-col items-center p-4 group">
                    <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-4 text-wine-800 group-hover:bg-wine-800 group-hover:text-gold-500 transition-colors duration-300">
                         {idx === 0 && <Award size={28} />}
                         {idx === 1 && <TrendingUp size={28} />}
                         {idx === 2 && <Target size={28} />}
                         {idx === 3 && <Truck size={28} />}
                         {idx === 4 && <Eye size={28} />}
                    </div>
                    <h4 className="font-bold text-gray-800">{strength}</h4>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default About;