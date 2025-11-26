import React from 'react';
import { FEATURED_PRODUCTS } from '../constants';
import { Star } from 'lucide-react';

const Catalog: React.FC = () => {
  return (
    <section id="catalogo" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
            <span className="text-gold-600 font-bold tracking-widest uppercase text-sm">Selección Premium</span>
            <h2 className="text-4xl font-serif text-wine-900 mt-2 mb-6">Nuestro Catálogo</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
                Una muestra de nuestra extensa selección de etiquetas nacionales e internacionales, curada para los paladares más exigentes.
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURED_PRODUCTS.map((product) => (
                <div key={product.id} className="group relative">
                    <div className="aspect-[2/3] w-full overflow-hidden bg-gray-200 relative">
                        <img
                            src={product.imageUrl}
                            alt={product.name}
                            className="h-full w-full object-cover object-center group-hover:opacity-90 transition-opacity duration-300 grayscale group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <button className="bg-white text-wine-900 px-6 py-2 font-bold uppercase tracking-wider text-sm hover:bg-gold-500 transition-colors">
                                Ver Detalle
                            </button>
                        </div>
                    </div>
                    <div className="mt-4 flex justify-between">
                        <div>
                            <h3 className="text-lg font-serif font-medium text-gray-900">
                                {product.name}
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">{product.region}</p>
                        </div>
                        <p className="text-sm font-medium text-gold-600">{product.type}</p>
                    </div>
                    <div className="mt-1 flex items-center">
                         <div className="flex text-gold-500">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={12} fill={i < 4 ? "currentColor" : "none"} />
                            ))}
                         </div>
                         <span className="ml-2 text-xs text-gray-400">{product.priceRange}</span>
                    </div>
                </div>
            ))}
        </div>
        
        <div className="mt-16 text-center">
            <button className="inline-block px-10 py-4 border-2 border-wine-900 text-wine-900 font-bold uppercase tracking-widest hover:bg-wine-900 hover:text-white transition-colors duration-300">
                Descargar Catálogo Completo (PDF)
            </button>
        </div>
      </div>
    </section>
  );
};

export default Catalog;