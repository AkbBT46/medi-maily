
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TextShimmer } from '@/components/ui/text-shimmer';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <TextShimmer
              as="div"
              duration={2.5}
              className="text-2xl font-bold [--base-color:theme(colors.blue.400)] [--base-gradient-color:theme(colors.blue.200)]"
            >
              MediMaily
            </TextShimmer>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-slate-300 hover:text-blue-400 transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-slate-300 hover:text-blue-400 transition-colors">
              Wie es funktioniert
            </a>
            <a href="#testimonials" className="text-slate-300 hover:text-blue-400 transition-colors">
              Testimonials
            </a>
            <a href="#pricing" className="text-slate-300 hover:text-blue-400 transition-colors">
              Preise
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-blue-400 text-blue-300 hover:bg-blue-900/30">
              Anmelden
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Kostenlos starten
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-300"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900 border-t border-slate-700">
              <a
                href="#features"
                className="block px-3 py-2 text-slate-300 hover:text-blue-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="block px-3 py-2 text-slate-300 hover:text-blue-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Wie es funktioniert
              </a>
              <a
                href="#testimonials"
                className="block px-3 py-2 text-slate-300 hover:text-blue-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <a
                href="#pricing"
                className="block px-3 py-2 text-slate-300 hover:text-blue-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Preise
              </a>
              <div className="pt-4 space-y-2">
                <Button variant="outline" className="w-full border-blue-400 text-blue-300 hover:bg-blue-900/30">
                  Anmelden
                </Button>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Kostenlos starten
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
