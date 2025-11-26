import React from 'react';

interface LogoProps {
  scrolled?: boolean;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ scrolled, className = "" }) => {
  // If scrolled (white background), use dark grey for the second P.
  // If not scrolled (transparent/dark background), use white for the second P.
  const p2Color = scrolled ? 'text-wine-900' : 'text-white';
  const subTextColor = scrolled ? 'text-gray-400' : 'text-gray-300';

  return (
    <div className={`flex flex-col items-center justify-center leading-none select-none ${className}`}>
      <div className="relative flex items-baseline">
         {/* Sparkle/Star */}
         <div className="absolute -top-2 left-[42%] text-gold-500 animate-pulse">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
         </div>
         
         {/* P1 - Orange */}
         <span className="font-sans font-bold text-4xl md:text-5xl text-gold-500 tracking-tighter z-10">P</span>
         
         {/* P2 - Grey/White (changes based on background) */}
         <span className={`font-sans font-bold text-4xl md:text-5xl tracking-tighter -ml-1 ${p2Color} transition-colors duration-300`}>P</span>
      </div>
      <span className={`text-[0.5rem] md:text-[0.6rem] tracking-[0.3em] uppercase font-sans font-bold ml-1 mt-1 ${subTextColor}`}>
        Importaciones
      </span>
    </div>
  );
};

export default Logo;