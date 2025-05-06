
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "MediMaily hat unsere Patientenansprache transformiert. Wir haben eine 40%ige Steigerung der Terminbuchungen allein durch E-Mail-Kampagnen erlebt.",
      author: "Dr. Sarah Johnson",
      position: "Smile Bright Dental",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
    },
    {
      quote: "Ihr Team hat genau verstanden, was unsere Praxis braucht. Die personalisierten Follow-up-E-Mails haben unsere Patientenbindung deutlich verbessert.",
      author: "Dr. Michael Chen",
      position: "Pacific Heights Dental",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80"
    },
    {
      quote: "Ich bin beeindruckt, wie einfach MediMaily das E-Mail-Marketing gestaltet. Wir verbinden uns mit Patienten auf bedeutungsvolle Weise, ohne unsere Arbeitslast zu erhöhen.",
      author: "Dr. Amanda Rivera",
      position: "Family Dental Care",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Was unsere Kunden sagen</h2>
          <p className="section-subtitle">
            Zahnärzte vertrauen MediMaily, um ihre Praxen zu vergrößern.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-gray-100 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 pb-8 px-8">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 relative">
                    <div className="absolute -top-2 -left-2 bg-medimaily-500 h-full w-full rounded-full opacity-20"></div>
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author} 
                      className="w-20 h-20 rounded-full object-cover relative z-10"
                    />
                  </div>
                  <div className="mb-4 text-medimaily-900">
                    <svg className="w-8 h-8 text-medimaily-300 mb-2 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="mb-4">{testimonial.quote}</p>
                  </div>
                  <div>
                    <p className="font-bold text-medimaily-900">{testimonial.author}</p>
                    <p className="text-sm text-medimaily-600">{testimonial.position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <div className="bg-medimaily-50 rounded-lg p-8 max-w-3xl text-center">
            <p className="text-xl text-medimaily-700 mb-4">
              "MediMaily war ein Game-Changer für unsere Zahnarztpraxis. Ihre E-Mail-Automatisierung hat dieses Jahr über 150.000 € zusätzlichen Umsatz generiert."
            </p>
            <div className="inline-flex items-center">
              <div className="h-px w-8 bg-medimaily-300 mr-4"></div>
              <p className="font-bold text-medimaily-900">Dr. Robert Williams, Williams Dental Group</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
