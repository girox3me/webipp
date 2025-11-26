import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import NewsEvents from './components/NewsEvents';
import Catalog from './components/Catalog';
import Locations from './components/Locations';
import SommelierBot from './components/SommelierBot';
import Logo from './components/Logo';
import { Menu, X } from 'lucide-react';
import { CONTENT } from './constants';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Catálogo', href: '#catalogo' },
    { name: 'Noticias', href: '#noticias' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <div className="font-sans text-gray-900 bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-40 transition-all duration-500 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
          {/* Logo Area */}
          <a href="#inicio" className="flex items-center gap-2 group">
             <Logo scrolled={scrolled} />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-bold uppercase tracking-widest hover:text-gold-500 transition-colors ${scrolled ? 'text-gray-800' : 'text-white/90'}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gold-500"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={30} /> : <Menu size={30} color={scrolled ? '#2D2D2D' : 'white'} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl md:hidden flex flex-col animate-fade-in-up">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="p-4 text-center text-wine-900 font-bold uppercase tracking-widest hover:bg-slate-50 border-b border-gray-100 last:border-0"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>

      <main>
        <Hero />
        <About />
        <Catalog />
        <NewsEvents />
        <Locations />
      </main>

      <footer className="bg-wine-900 text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
             <div className="mb-4 flex justify-center md:justify-start">
                {/* Static Footer Logo (Always white text for dark bg) */}
                <Logo scrolled={false} /> 
             </div>
             <p className="text-gray-400 text-sm">© 2024 Importaciones PP. Todos los derechos reservados.</p>
          </div>
          <div className="flex gap-6 text-gray-400 text-sm">
             <a href="#" className="hover:text-gold-500 transition-colors">Aviso de Privacidad</a>
             <a href="#" className="hover:text-gold-500 transition-colors">Términos y Condiciones</a>
          </div>
        </div>
      </footer>

      <SommelierBot />
    </div>
  );
}

export default App;