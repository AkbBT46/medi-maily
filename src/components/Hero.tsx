
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-medimaily-50 to-white">
      <div className="container-custom text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-medimaily-900 max-w-4xl mx-auto">
          Automatisierte E-Mails. <span className="text-medimaily-600">Echte Patienten.</span>
        </h1>
        <p className="text-lg md:text-xl text-medimaily-700 mb-10 max-w-2xl mx-auto">
          Helfen Sie Ihrer Zahnarztpraxis zu wachsen mit personalisierten E-Mail-Kampagnen, die mehr Patienten gewinnen und halten.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="btn-primary text-base py-6 px-8">
            Demo Anfordern
          </Button>
          <Button variant="outline" className="btn-outline text-base py-6 px-8">
            Mehr Erfahren
          </Button>
        </div>
        
        <div className="mt-16 md:mt-20 relative">
          <div className="bg-white rounded-lg shadow-xl p-2 md:p-4 max-w-3xl mx-auto">
            <img 
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1400&q=80" 
              alt="MediMaily Dashboard" 
              className="rounded w-full h-auto object-cover"
              style={{ maxHeight: '500px' }}
            />
            <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 bg-medimaily-50 rounded-full p-3 md:p-6 shadow-lg">
              <div className="bg-medimaily-600 text-white font-bold rounded-full h-16 w-16 md:h-24 md:w-24 flex items-center justify-center">
                <div>
                  <div className="text-sm md:text-base">Bis zu</div>
                  <div className="text-xl md:text-3xl">35%</div>
                </div>
              </div>
              <div className="absolute bottom-0 left-full whitespace-nowrap pl-3 font-medium text-sm md:text-base text-medimaily-900">
                Mehr Patienten-<br />Anfragen
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center text-center">
          <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
            <img src="https://via.placeholder.com/150x50?text=Dental+Kunde" alt="Kundenlogo" className="h-10 w-auto mx-auto" />
          </div>
          <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
            <img src="https://via.placeholder.com/150x50?text=Dental+Kunde" alt="Kundenlogo" className="h-10 w-auto mx-auto" />
          </div>
          <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
            <img src="https://via.placeholder.com/150x50?text=Dental+Kunde" alt="Kundenlogo" className="h-10 w-auto mx-auto" />
          </div>
          <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
            <img src="https://via.placeholder.com/150x50?text=Dental+Kunde" alt="Kundenlogo" className="h-10 w-auto mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
