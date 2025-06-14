import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import MacOSDock from '@/components/ui/mac-os-dock';
import { AppleHelloEnglishEffect } from '@/components/ui/apple-hello-effect';

// Sample app data with actual macOS-style icons
const sampleApps = [
  { 
    id: 'finder', 
    name: 'Finder', 
    icon: 'https://cdn.jim-nielsen.com/macos/1024/finder-2021-09-10.png?rf=1024' 
  },
  { 
    id: 'calculator', 
    name: 'Calculator', 
    icon: 'https://cdn.jim-nielsen.com/macos/1024/calculator-2021-04-29.png?rf=1024' 
  },
  { 
    id: 'terminal', 
    name: 'Terminal', 
    icon: 'https://cdn.jim-nielsen.com/macos/1024/terminal-2021-06-03.png?rf=1024' 
  },
  { 
    id: 'mail', 
    name: 'Mail', 
    icon: 'https://cdn.jim-nielsen.com/macos/1024/mail-2021-05-25.png?rf=1024' 
  },
  { 
    id: 'notes', 
    name: 'Notes', 
    icon: 'https://cdn.jim-nielsen.com/macos/1024/notes-2021-05-25.png?rf=1024' 
  },
  { 
    id: 'safari', 
    name: 'Safari', 
    icon: 'https://cdn.jim-nielsen.com/macos/1024/safari-2021-06-02.png?rf=1024' 
  },
  { 
    id: 'photos', 
    name: 'Photos', 
    icon: 'https://cdn.jim-nielsen.com/macos/1024/photos-2021-05-28.png?rf=1024' 
  },
  { 
    id: 'music', 
    name: 'Music', 
    icon: 'https://cdn.jim-nielsen.com/macos/1024/music-2021-05-25.png?rf=1024' 
  },
  { 
    id: 'calendar', 
    name: 'Calendar', 
    icon: 'https://cdn.jim-nielsen.com/macos/1024/calendar-2021-04-29.png?rf=1024' 
  },
];

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [openApps, setOpenApps] = useState<string[]>(['finder', 'safari']);
  const [animationKey, setAnimationKey] = useState(0);

  const handleAppClick = (appId: string) => {
    console.log('App clicked:', appId);
    
    // Open specific applications based on the clicked icon
    if (appId === 'finder') {
      // Open file manager/explorer
      window.open('file://', '_blank');
    } else if (appId === 'calculator') {
      // Open Calculator application
      window.open('calculator://', '_blank');
    } else if (appId === 'terminal') {
      // Open Terminal application
      window.open('terminal://', '_blank');
    } else if (appId === 'mail') {
      // Open Outlook application
      window.open('ms-outlook://', '_blank');
    } else if (appId === 'notes') {
      // Open Notes application
      window.open('ms-onenote://', '_blank');
    } else if (appId === 'safari') {
      // Open default browser
      window.open('https://www.google.com', '_blank');
    } else if (appId === 'photos') {
      // Open Photos application
      window.open('ms-photos://', '_blank');
    } else if (appId === 'music') {
      // Open Music/Spotify application
      window.open('spotify://', '_blank');
    } else if (appId === 'calendar') {
      // Open Calendar application
      window.open('ms-outlook://calendar', '_blank');
    }
    
    // Toggle app in openApps array
    setOpenApps(prev => 
      prev.includes(appId) 
        ? prev.filter(id => id !== appId)
        : [...prev, appId]
    );
  };

  const handleAnimationComplete = () => {
    // Restart the animation by changing the key
    setAnimationKey(prev => prev + 1);
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative z-10 min-h-screen flex items-center">
      <div className="container-custom text-center relative">
        {/* MacOS Dock positioned above the title */}
        <div className={`mb-8 flex justify-center transition-all duration-700 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <MacOSDock
            apps={sampleApps}
            onAppClick={handleAppClick}
            openApps={openApps}
          />
        </div>

        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-blue-500 max-w-4xl mx-auto transition-all duration-700 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          Automatisierte E-Mails. <span className="text-medimaily-400">
Mehr Patienten.</span>
        </h1>

        {/* MediMaily Animation */}
        <div className={`mb-6 flex justify-center transition-all duration-700 delay-75 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <AppleHelloEnglishEffect 
            key={animationKey}
            speed={1.1} 
            className="h-16 md:h-20 text-medimaily-400"
            onAnimationComplete={handleAnimationComplete}
          />
        </div>
        
        <p className={`text-lg md:text-xl text-white/80 mb-6 max-w-2xl mx-auto transition-all duration-700 delay-100 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          Helfen Sie Ihrer Zahnarztpraxis zu wachsen mit personalisierten E-Mail-Kampagnen, die mehr Patienten gewinnen und halten.
        </p>
        
        <p className={`text-lg md:text-xl font-medium text-medimaily-300 mb-10 transition-all duration-700 delay-200 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Mehr Zeit, mehr Anfragen, weniger Aufwand...</p>
        
        <div className={`flex flex-col sm:flex-row justify-center gap-4 transition-all duration-700 delay-300 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <Button className="btn-primary text-base py-6 px-8">
            Demo Anfordern
          </Button>
          <Button variant="outline" className="btn-outline text-base py-6 border-white/30 text-white bg-orange-500 hover:bg-orange-400 px-[38px] my-0 mx-0">
            Mehr Erfahren
          </Button>
        </div>
        
        <div className={`mt-16 md:mt-20 relative transition-all duration-700 delay-500 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg shadow-xl p-2 md:p-4 max-w-3xl mx-auto relative z-10 hover:shadow-2xl transition-all duration-300 border border-white/20">
            <img src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1400&q=80" alt="MediMaily Dashboard" className="rounded w-full h-auto object-cover" style={{
            maxHeight: '500px'
          }} />
            <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 bg-medimaily-50 rounded-full p-3 md:p-6 shadow-lg animate-bounce-in">
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
          {['Kunde 1', 'Kunde 2', 'Kunde 3', 'Kunde 4'].map((kunde, index) => <div key={index} className={`grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500 delay-${index * 100} ease-out ${isLoaded ? 'translate-y-0 opacity-70' : 'translate-y-10 opacity-0'}`}>
              <img src={`https://via.placeholder.com/150x50?text=Dental+${kunde}`} alt={`${kunde} Logo`} className="h-10 w-auto mx-auto" />
            </div>)}
        </div>
      </div>
    </section>
  );
};

export default Hero;
