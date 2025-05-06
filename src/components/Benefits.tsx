
import React from 'react';
import { Clock, CheckCircle, Inbox } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Clock className="h-10 w-10 text-medimaily-600" />,
      title: "Save Time",
      description: "Automate your email marketing and save up to 15 hours per week that you can spend on patient care instead."
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-medimaily-600" />,
      title: "Boost Efficiency",
      description: "Our targeted campaigns deliver the right message to the right patients at exactly the right time."
    },
    {
      icon: <Inbox className="h-10 w-10 text-medimaily-600" />,
      title: "Increase Inquiries",
      description: "Clients report an average 35% increase in patient inquiries within the first three months."
    }
  ];

  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Why Dental Practices Choose Us</h2>
          <p className="section-subtitle">
            We help you build stronger patient relationships through targeted, personalized email campaigns.
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
              <h3 className="text-2xl font-bold mb-2 text-medimaily-900">Ready to grow your practice?</h3>
              <p className="text-medimaily-700">Schedule a free 30-minute consultation with our experts.</p>
            </div>
            <button className="btn-primary whitespace-nowrap">
              Book Your Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
