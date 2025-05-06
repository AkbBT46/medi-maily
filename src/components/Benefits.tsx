
import React from 'react';
import { Clock, CheckCircle, Inbox } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Clock className="h-10 w-10 text-medimaily-600" />,
      title: "Zeit Sparen",
      description: "Automatisieren Sie Ihr E-Mail-Marketing und sparen Sie bis zu 15 Stunden pro Woche, die Sie stattdessen für die Patientenbetreuung aufwenden können."
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-medimaily-600" />,
      title: "Effizienz Steigern",
      description: "Unsere zielgerichteten Kampagnen übermitteln die richtige Botschaft an die richtigen Patienten zum genau richtigen Zeitpunkt."
    },
    {
      icon: <Inbox className="h-10 w-10 text-medimaily-600" />,
      title: "Anfragen Erhöhen",
      description: "Kunden berichten von einer durchschnittlichen Steigerung der Patientenanfragen um 35% innerhalb der ersten drei Monate."
    }
  ];

  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Warum Zahnarztpraxen uns wählen</h2>
          <p className="section-subtitle">
            Wir helfen Ihnen, stärkere Patientenbeziehungen durch gezielte, personalisierte E-Mail-Kampagnen aufzubauen.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 hover:border-medimaily-200"
            >
              <div className="mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-medimaily-900">{benefit.title}</h3>
              <p className="text-medimaily-700">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 rounded-lg bg-medimaily-50 border border-medimaily-100">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold mb-2 text-medimaily-900">Bereit, Ihre Praxis zu vergrößern?</h3>
              <p className="text-medimaily-700">Vereinbaren Sie eine kostenlose 30-minütige Beratung mit unseren Experten.</p>
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
