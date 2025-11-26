import React from 'react';
import { WAREHOUSES, CONTENT } from '../constants';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Locations: React.FC = () => {
  return (
    <section id="contacto" className="py-24 bg-wine-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Info & Warehouses */}
            <div>
                <span className="text-gold-500 font-bold tracking-widest uppercase text-sm">Contacto</span>
                <h2 className="text-4xl font-serif mt-2 mb-8">Nuestra Red de Distribución</h2>
                <p className="text-gray-300 mb-12 leading-relaxed">
                    Contamos con una infraestructura logística robusta que nos permite abastecer eficientemente a toda la república.
                </p>

                <div className="space-y-8">
                    {WAREHOUSES.map((wh) => (
                        <div key={wh.id} className="flex gap-4 border-b border-wine-800 pb-6 last:border-0">
                            <div className="mt-1">
                                <MapPin className="text-gold-500" size={24} />
                            </div>
                            <div>
                                <h4 className="text-xl font-serif font-bold text-white">{wh.city}, {wh.state}</h4>
                                <p className="text-gray-400 text-sm mt-1">{wh.address}</p>
                                <p className="text-gold-400 text-sm mt-2 flex items-center gap-2">
                                    <Phone size={14} /> {wh.phone}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-sm p-8 md:p-12 text-gray-900 shadow-2xl">
                <h3 className="text-2xl font-serif font-bold mb-2 text-wine-900">Hablemos de Negocios</h3>
                <p className="text-gray-500 mb-8 text-sm">Complete el formulario para cotizaciones mayoristas o alianzas comerciales.</p>
                
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Nombre</label>
                            <input type="text" className="w-full border-b-2 border-gray-200 py-2 focus:outline-none focus:border-wine-900 transition-colors bg-transparent" placeholder="Su nombre" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Empresa</label>
                            <input type="text" className="w-full border-b-2 border-gray-200 py-2 focus:outline-none focus:border-wine-900 transition-colors bg-transparent" placeholder="Restaurante / Hotel" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Correo Electrónico</label>
                        <input type="email" className="w-full border-b-2 border-gray-200 py-2 focus:outline-none focus:border-wine-900 transition-colors bg-transparent" placeholder="correo@empresa.com" />
                    </div>
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Mensaje</label>
                        <textarea rows={4} className="w-full border-b-2 border-gray-200 py-2 focus:outline-none focus:border-wine-900 transition-colors bg-transparent resize-none" placeholder="¿En qué podemos ayudarle?"></textarea>
                    </div>
                    <button className="w-full bg-wine-900 text-white font-bold py-4 uppercase tracking-widest hover:bg-gold-600 transition-colors duration-300">
                        Enviar Mensaje
                    </button>
                </form>
                
                <div className="mt-8 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                        <Mail size={16} /> {CONTENT.company.email}
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock size={16} /> Lun - Vie: 9:00 - 18:00
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Locations;