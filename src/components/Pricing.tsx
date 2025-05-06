
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Basic",
      description: "Perfect for small dental practices",
      monthlyPrice: 199,
      annualPrice: 179,
      features: [
        "Up to 1,000 patient emails",
        "3 automated campaigns",
        "Basic email templates",
        "Monthly performance report",
        "Email support"
      ]
    },
    {
      name: "Pro",
      description: "Ideal for growing practices",
      monthlyPrice: 349,
      annualPrice: 299,
      isPopular: true,
      features: [
        "Up to 5,000 patient emails",
        "10 automated campaigns",
        "Advanced templates with customization",
        "Weekly performance reports",
        "A/B testing capabilities",
        "Priority email & chat support"
      ]
    },
    {
      name: "Premium",
      description: "For established dental groups",
      monthlyPrice: 599,
      annualPrice: 499,
      features: [
        "Unlimited patient emails",
        "Unlimited campaigns",
        "Custom template design service",
        "Dedicated account manager",
        "Advanced analytics & insights",
        "Custom integrations",
        "Phone, email & chat support"
      ]
    }
  ];

  return (
    <section id="pricing" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Simple, Transparent Pricing</h2>
          <p className="section-subtitle">
            Choose the plan that best fits your practice's needs and goals.
          </p>
          
          <div className="flex items-center justify-center mt-8 mb-12">
            <span className={`mr-3 ${isAnnual ? 'text-medimaily-600 font-medium' : 'text-gray-500'}`}>
              Annual Billing
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
                className={`block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer ${
                  !isAnnual ? 'bg-medimaily-600' : ''
                }`}
              >
                <span
                  className={`block h-6 w-6 rounded-full bg-white transform transition-transform ${
                    !isAnnual ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </label>
            </div>
            <span className={`ml-3 ${!isAnnual ? 'text-medimaily-600 font-medium' : 'text-gray-500'}`}>
              Monthly Billing
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-white rounded-lg shadow-lg border ${
                plan.isPopular ? 'border-medimaily-500' : 'border-gray-100'
              } relative overflow-hidden`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-medimaily-500 text-white py-1 px-3 transform rotate-45 translate-x-8 translate-y-2">
                    Popular
                  </div>
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-xl font-bold mb-2 text-medimaily-900">{plan.name}</h3>
                <p className="text-medimaily-700 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-medimaily-900">
                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-medimaily-700">/month</span>
                  {isAnnual && (
                    <div className="text-sm text-medimaily-600 mt-2">
                      Billed annually (save ${(plan.monthlyPrice - plan.annualPrice) * 12}/year)
                    </div>
                  )}
                </div>
                
                <Button 
                  className={`w-full ${
                    plan.isPopular ? 'btn-primary' : 'bg-white border border-medimaily-600 text-medimaily-600 hover:bg-medimaily-50'
                  }`}
                >
                  Choose Plan
                </Button>
                
                <div className="mt-8">
                  <h4 className="text-lg font-medium mb-4 text-medimaily-900">What's included:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-medimaily-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-medimaily-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center text-medimaily-700">
          Need a custom solution? <a href="#contact" className="text-medimaily-600 font-medium">Contact us</a> for enterprise pricing.
        </div>
      </div>
    </section>
  );
};

export default Pricing;
