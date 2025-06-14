
import React, { useRef, useEffect } from 'react';
import { Clock, CheckCircle, Inbox } from 'lucide-react';

const Benefits = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const benefits = [
    {
      icon: <Clock className="h-10 w-10 text-blue-400" />,
      title: "Zeit Sparen",
      description: "Automatisieren Sie Ihr E-Mail-Marketing und sparen Sie bis zu 15 Stunden pro Woche, die Sie stattdessen für die Patientenbetreuung aufwenden können."
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-blue-400" />,
      title: "Effizienz Steigern",
      description: "Unsere zielgerichteten Kampagnen übermitteln die richtige Botschaft an die richtigen Patienten zum genau richtigen Zeitpunkt."
    },
    {
      icon: <Inbox className="h-10 w-10 text-blue-400" />,
      title: "Anfragen Erhöhen",
      description: "Kunden berichten von einer durchschnittlichen Steigerung der Patientenanfragen um 35% innerhalb der ersten drei Monate."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="features" className="section-padding bg-slate-800/50" ref={sectionRef}>
      <div className="container-custom">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="section-title">Warum Zahnarztpraxen uns wählen</h2>
          <p className="section-subtitle">
            Wir helfen Ihnen, stärkere Patientenbeziehungen durch gezielte, personalisierte E-Mail-Kampagnen aufzubauen.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="animate-on-scroll bg-slate-800/60 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-700/50 hover:border-blue-500/50 transform hover:-translate-y-1 card-hover"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-6">
                <div className="bg-blue-900/50 w-16 h-16 rounded-full flex items-center justify-center">
                  {benefit.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-100">{benefit.title}</h3>
              <p className="text-slate-300">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 rounded-lg bg-gradient-to-r from-blue-900/30 to-blue-800/30 border border-blue-700/50 shadow-lg animate-on-scroll">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold mb-2 text-slate-100">Bereit, Ihre Praxis zu vergrößern?</h3>
              <p className="text-slate-300">Vereinbaren Sie eine kostenlose 30-minütige Beratung mit unseren Experten.</p>
            </div>
            <button className="btn-primary whitespace-nowrap">
              Beratungstermin Buchen
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
