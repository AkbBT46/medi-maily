
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-100 py-16 md:py-24 border-t border-slate-800">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Kontaktieren Sie uns</h2>
            <p className="text-slate-300 mb-8 max-w-md">
              Haben Sie Fragen zu MediMaily oder möchten Sie wissen, wie wir Ihrer Zahnarztpraxis helfen können? Senden Sie uns eine Nachricht, und wir melden uns in Kürze bei Ihnen.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-slate-100 mb-1">Adresse</h3>
                  <p className="text-slate-300">Zahnstraße 123, 10115 Berlin</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-slate-100 mb-1">E-Mail</h3>
                  <a href="mailto:hallo@medimaily.de" className="text-slate-300 hover:text-blue-400 transition-colors">
                    hallo@medimaily.de
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-slate-100 mb-1">Telefon</h3>
                  <a href="tel:+4930123456789" className="text-slate-300 hover:text-blue-400 transition-colors">
                    (030) 12345-6789
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-slate-300">
                    Ihr Name
                  </label>
                  <Input 
                    id="name" 
                    className="bg-slate-800 border-slate-700 text-slate-100 placeholder-slate-400 focus:border-blue-500" 
                    placeholder="Max Mustermann"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-slate-300">
                    E-Mail-Adresse
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    className="bg-slate-800 border-slate-700 text-slate-100 placeholder-slate-400 focus:border-blue-500" 
                    placeholder="max@beispiel.de"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="practice" className="block mb-2 text-sm font-medium text-slate-300">
                  Praxisname
                </label>
                <Input 
                  id="practice" 
                  className="bg-slate-800 border-slate-700 text-slate-100 placeholder-slate-400 focus:border-blue-500" 
                  placeholder="Ihre Zahnarztpraxis"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-slate-300">
                  Nachricht
                </label>
                <Textarea 
                  id="message" 
                  className="bg-slate-800 border-slate-700 text-slate-100 placeholder-slate-400 focus:border-blue-500" 
                  placeholder="Lassen Sie uns wissen, wie wir Ihnen helfen können..."
                  rows={4}
                />
              </div>
              
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Nachricht Senden
              </Button>
              
              <p className="text-xs text-slate-400 mt-4">
                Mit dem Absenden dieses Formulars stimmen Sie unserer <a href="#" className="text-blue-400 hover:text-blue-300">Datenschutzerklärung</a> zu.
              </p>
            </form>
          </div>
        </div>
        
        <hr className="border-slate-800 my-12" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold text-slate-100">
              <span className="text-blue-400">Medi</span>Maily
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-5">
            <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">Startseite</a>
            <a href="#features" className="text-slate-300 hover:text-blue-400 transition-colors">Funktionen</a>
            <a href="#pricing" className="text-slate-300 hover:text-blue-400 transition-colors">Preise</a>
            <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">Datenschutz</a>
            <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">Impressum</a>
          </div>
        </div>
        
        <div className="text-center text-slate-400 text-sm mt-8">
          © {new Date().getFullYear()} MediMaily. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
