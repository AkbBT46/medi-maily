
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Improved animation on scroll with IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    // Find all elements with animate-on-scroll class
    const elements = document.querySelectorAll('.animate-on-scroll');    
    elements.forEach(element => {
      observer.observe(element);
    });
    
    // Clean up
    return () => {
      elements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Benefits />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
