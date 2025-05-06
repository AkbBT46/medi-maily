
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

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
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold text-medimaily-900">
            <span className="text-medimaily-600">Medi</span>Maily
          </a>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-medimaily-900 hover:text-medimaily-600 transition-colors">Home</a>
          <a href="#features" className="text-medimaily-900 hover:text-medimaily-600 transition-colors">Features</a>
          <a href="#pricing" className="text-medimaily-900 hover:text-medimaily-600 transition-colors">Pricing</a>
          <a href="#contact" className="text-medimaily-900 hover:text-medimaily-600 transition-colors">Contact</a>
        </nav>
        
        <div className="hidden md:block">
          <Button className="btn-primary">
            Get Started
          </Button>
        </div>
        
        <button 
          className="md:hidden text-medimaily-900" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
        <div className="md:hidden bg-white border-t border-gray-200 absolute w-full py-3">
          <div className="container-custom flex flex-col space-y-3">
            <a href="#" className="text-medimaily-900 hover:text-medimaily-600 transition-colors py-2">Home</a>
            <a href="#features" className="text-medimaily-900 hover:text-medimaily-600 transition-colors py-2">Features</a>
            <a href="#pricing" className="text-medimaily-900 hover:text-medimaily-600 transition-colors py-2">Pricing</a>
            <a href="#contact" className="text-medimaily-900 hover:text-medimaily-600 transition-colors py-2">Contact</a>
            <Button className="btn-primary w-full mt-3">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
