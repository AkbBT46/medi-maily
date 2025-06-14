
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Basis",
      description: "Perfekt für kleine Zahnarztpraxen",
      monthlyPrice: 199,
      annualPrice: 179,
      features: [
        "Bis zu 1.000 Patienten-E-Mails",
        "3 automatisierte Kampagnen",
        "Einfache E-Mail-Vorlagen",
        "Monatlicher Leistungsbericht",
        "E-Mail-Support"
      ]
    },
    {
      name: "Pro",
      description: "Ideal für wachsende Praxen",
      monthlyPrice: 349,
      annualPrice: 299,
      isPopular: true,
      features: [
        "Bis zu 5.000 Patienten-E-Mails",
        "10 automatisierte Kampagnen",
        "Erweiterte Vorlagen mit Anpassung",
        "Wöchentliche Leistungsberichte",
        "A/B-Test-Funktionen",
        "Prioritäts-E-Mail & Chat-Support"
      ]
    },
    {
      name: "Premium",
      description: "Für etablierte Zahnarztzentren",
      monthlyPrice: 599,
      annualPrice: 499,
      features: [
        "Unbegrenzte Patienten-E-Mails",
        "Unbegrenzte Kampagnen",
        "Maßgeschneiderter Vorlagendesign-Service",
        "Persönlicher Account Manager",
        "Erweiterte Analysen & Erkenntnisse",
        "Maßgeschneiderte Integrationen",
        "Telefon-, E-Mail- & Chat-Support"
      ]
    }
  ];

  return (
    <section id="pricing" className="section-padding bg-blue-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Einfache, transparente Preise</h2>
          <p className="section-subtitle">
            Wählen Sie den Plan, der am besten zu den Bedürfnissen und Zielen Ihrer Praxis passt.
          </p>
          
          <div className="flex items-center justify-center mt-8 mb-12">
            <span className={`mr-3 ${isAnnual ? 'text-blue-600 font-medium' : 'text-blue-500'}`}>
              Jährliche Abrechnung
            </span>
            <div className="relative inline-block w-12 align-middle select-none">
              <input
                type="checkbox"
                name="billing"
                id="billing"
                checked={!isAnnual}
                onChange={() => setIsAnnual(!isAnnual)}
                className="sr-only"
              />
              <label
                htmlFor="billing"
                className={`block overflow-hidden h-6 rounded-full bg-blue-200 cursor-pointer ${
                  !isAnnual ? 'bg-blue-600' : ''
                }`}
              >
                <span
                  className={`block h-6 w-6 rounded-full bg-white transform transition-transform ${
                    !isAnnual ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </label>
            </div>
            <span className={`ml-3 ${!isAnnual ? 'text-blue-600 font-medium' : 'text-blue-500'}`}>
              Monatliche Abrechnung
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-white rounded-lg shadow-lg border ${
                plan.isPopular ? 'border-blue-500' : 'border-blue-200'
              } relative overflow-hidden`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-blue-500 text-white py-1 px-3 transform rotate-45 translate-x-8 translate-y-2">
                    Beliebt
                  </div>
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-xl font-bold mb-2 text-blue-900">{plan.name}</h3>
                <p className="text-blue-700 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-blue-900">
                    {isAnnual ? plan.annualPrice : plan.monthlyPrice}€
                  </span>
                  <span className="text-blue-700">/Monat</span>
                  {isAnnual && (
                    <div className="text-sm text-blue-600 mt-2">
                      Jährlich abgerechnet (spare {(plan.monthlyPrice - plan.annualPrice) * 12}€/Jahr)
                    </div>
                  )}
                </div>
                
                <Button 
                  className={`w-full ${
                    plan.isPopular ? 'btn-primary' : 'bg-white border border-blue-600 text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  Plan Wählen
                </Button>
                
                <div className="mt-8">
                  <h4 className="text-lg font-medium mb-4 text-blue-900">Was enthalten ist:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-blue-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center text-blue-700">
          Benötigen Sie eine maßgeschneiderte Lösung? <a href="#contact" className="text-blue-600 font-medium">Kontaktieren Sie uns</a> für Unternehmenspreise.
        </div>
      </div>
    </section>
  );
};

export default Pricing;
