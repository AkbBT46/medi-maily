
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-medimaily-900 text-white py-16 md:py-24">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
            <p className="text-gray-300 mb-8 max-w-md">
              Have questions about MediMaily or want to see how we can help your dental practice? Send us a message and we'll get back to you shortly.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-medimaily-300 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-white mb-1">Address</h3>
                  <p className="text-gray-300">123 Dental Suite, San Francisco, CA 94103</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-medimaily-300 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-white mb-1">Email</h3>
                  <a href="mailto:hello@medimaily.com" className="text-gray-300 hover:text-white transition-colors">
                    hello@medimaily.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-medimaily-300 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-white mb-1">Phone</h3>
                  <a href="tel:+14155559876" className="text-gray-300 hover:text-white transition-colors">
                    (415) 555-9876
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">
                    Your Name
                  </label>
                  <Input 
                    id="name" 
                    className="bg-medimaily-800 border-medimaily-700 text-white placeholder-gray-400 focus:border-medimaily-500" 
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">
                    Email Address
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    className="bg-medimaily-800 border-medimaily-700 text-white placeholder-gray-400 focus:border-medimaily-500" 
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="practice" className="block mb-2 text-sm font-medium text-gray-300">
                  Practice Name
                </label>
                <Input 
                  id="practice" 
                  className="bg-medimaily-800 border-medimaily-700 text-white placeholder-gray-400 focus:border-medimaily-500" 
                  placeholder="Your Dental Practice"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  className="bg-medimaily-800 border-medimaily-700 text-white placeholder-gray-400 focus:border-medimaily-500" 
                  placeholder="Let us know how we can help..."
                  rows={4}
                />
              </div>
              
              <Button className="w-full bg-medimaily-500 hover:bg-medimaily-600 text-white">
                Send Message
              </Button>
              
              <p className="text-xs text-gray-400 mt-4">
                By submitting this form, you agree to our <a href="#" className="text-medimaily-300 hover:text-white">Privacy Policy</a>.
              </p>
            </form>
          </div>
        </div>
        
        <hr className="border-medimaily-800 my-12" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold text-white">
              <span className="text-medimaily-400">Medi</span>Maily
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-5">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Terms</a>
          </div>
        </div>
        
        <div className="text-center text-gray-400 text-sm mt-8">
          © {new Date().getFullYear()} MediMaily. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
