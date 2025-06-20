
import React from 'react';
import { Button } from '@/components/ui/button';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Wir analysieren Ihre Praxis",
      description: "Wir untersuchen Ihre Zahnarztpraxis, Patientendemografie und Ziele, um eine maßgeschneiderte Strategie zu erstellen.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
    },
    {
      number: "02",
      title: "Wir erstellen Ihre Kampagnen",
      description: "Unser Team entwickelt gezielte E-Mail-Sequenzen, die potenzielle Patienten ansprechen.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
    },
    {
      number: "03",
      title: "Wir liefern Ergebnisse",
      description: "Verfolgen Sie die Leistung in Echtzeit mit unserem Dashboard und beobachten Sie, wie Ihre Praxis wächst.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 h-64 w-64 bg-blue-100 rounded-full opacity-40 blur-3xl -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 h-64 w-64 bg-blue-50 rounded-full opacity-30 blur-3xl -ml-32 -mb-32"></div>
      
      <div className="container-custom">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="section-title">Wie es funktioniert</h2>
          <p className="section-subtitle">
            Unser einfacher Drei-Schritte-Prozess macht E-Mail-Marketing mühelos für Ihre Zahnarztpraxis.
          </p>
        </div>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center gap-8 md:gap-12 animate-on-scroll`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative">
                  <div className="absolute -top-10 -left-10 text-7xl font-bold text-blue-200 z-0 opacity-80">
                    {step.number}
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-4 text-blue-900">{step.title}</h3>
                    <p className="text-blue-700 mb-6">{step.description}</p>
                    <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="bg-white p-2 rounded-lg shadow-xl transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 relative border border-blue-200">
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="rounded w-full h-auto object-cover"
                    style={{ height: '300px' }}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-on-scroll">
          <Button className="btn-primary">
            In Aktion Sehen
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
