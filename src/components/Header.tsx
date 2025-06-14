
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MacOSDock from '@/components/ui/mac-os-dock';

// Sample app data for the dock
const sampleApps = [
  { 
    id: 'finder', 
    name: 'Finder', 
    icon: 'https://cdn.jim-nielsen.com/macos/1024/finder-2021-09-10.png?rf=1024' 
  },
  { 
    id: 'calculator', 
    name: 'Calculator', 
    icon: 'https://cdn.jim-nielsen.com/macos/1024/calculator-2021-04-29.png?rf=1024' 
  },
  { 
    id: 'terminal', 
    name: 'Terminal', 
    icon: 'https://cdn.jim-nielsen.com/macos/1024/terminal-2021-06-03.png?rf=1024' 
  },
  { 
    id: 'mail', 
    name: 'Mail', 
    icon: 'https://cdn.jim-nielsen.com/macos/1024/mail-2021-05-25.png?rf=1024' 
  },
  { 
    id: 'safari', 
    name: 'Safari', 
    icon: 'https://cdn.jim-nielsen.com/macos/1024/safari-2021-06-02.png?rf=1024' 
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openApps, setOpenApps] = useState<string[]>(['finder', 'safari']);

  const handleAppClick = (appId: string) => {
    console.log('App clicked:', appId);
    
    // Toggle app in openApps array
    setOpenApps(prev => 
      prev.includes(appId) 
        ? prev.filter(id => id !== appId)
        : [...prev, appId]
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-600">
              MediMaily
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors">
              Wie es funktioniert
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">
              Testimonials
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">
              Preise
            </a>
          </nav>

          {/* MacOS Dock */}
          <div className="hidden lg:flex items-center">
            <MacOSDock
              apps={sampleApps}
              onAppClick={handleAppClick}
              openApps={openApps}
            />
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
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
              className="text-gray-700"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <a
                href="#features"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Wie es funktioniert
              </a>
              <a
                href="#testimonials"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <a
                href="#pricing"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Preise
              </a>
              {/* Mobile Dock */}
              <div className="pt-4 flex justify-center">
                <MacOSDock
                  apps={sampleApps}
                  onAppClick={handleAppClick}
                  openApps={openApps}
                />
              </div>
              <div className="pt-4 space-y-2">
                <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
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
