
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChromeGrid } from '@/components/ui/chrome-grid';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* 3D Background Grid */}
      <div className="fixed top-0 left-0 right-0 h-screen z-0 pointer-events-none">
        <ChromeGrid />
      </div>
      
      {/* Header Content */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className={`text-2xl font-bold flex items-center transition-colors ${
              scrolled ? 'text-medimaily-900' : 'text-white'
            }`}>
              <span className={scrolled ? 'text-medimaily-600' : 'text-medimaily-400'}>Medi</span>Maily
              <span className="ml-1 inline-block bg-medimaily-500 h-2 w-2 rounded-full animate-pulse"></span>
            </a>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#" className={`hover:text-medimaily-600 transition-colors relative group ${
              scrolled ? 'text-medimaily-900' : 'text-white'
            }`}>
              Startseite
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-medimaily-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#features" className={`hover:text-medimaily-600 transition-colors relative group ${
              scrolled ? 'text-medimaily-900' : 'text-white'
            }`}>
              Funktionen
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-medimaily-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#pricing" className={`hover:text-medimaily-600 transition-colors relative group ${
              scrolled ? 'text-medimaily-900' : 'text-white'
            }`}>
              Preise
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-medimaily-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#contact" className={`hover:text-medimaily-600 transition-colors relative group ${
              scrolled ? 'text-medimaily-900' : 'text-white'
            }`}>
              Kontakt
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-medimaily-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>
          
          <div className="hidden md:block">
            <Button className="btn-primary">
              Jetzt Starten
            </Button>
          </div>
          
          <button 
            className={`md:hidden transition-colors ${
              scrolled ? 'text-medimaily-900' : 'text-white'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/90 backdrop-blur-sm border-t border-gray-200 absolute w-full py-3 animate-slide-up">
            <div className="container-custom flex flex-col space-y-3">
              <a href="#" className="text-medimaily-900 hover:text-medimaily-600 transition-colors py-2">Startseite</a>
              <a href="#features" className="text-medimaily-900 hover:text-medimaily-600 transition-colors py-2">Funktionen</a>
              <a href="#pricing" className="text-medimaily-900 hover:text-medimaily-600 transition-colors py-2">Preise</a>
              <a href="#contact" className="text-medimaily-900 hover:text-medimaily-600 transition-colors py-2">Kontakt</a>
              <Button className="btn-primary w-full mt-3">
                Jetzt Starten
              </Button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
