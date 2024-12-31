import React, { useEffect, useState } from 'react';

const Pricing = () => {
  const [slotsRemaining, setSlotsRemaining] = useState(4);

  useEffect(() => {
    const initializeCountdown = () => {
      const savedData = localStorage.getItem('slotsCountdown');
      if (savedData) {
        const { count, lastUpdate, stuckAtTwoSince } = JSON.parse(savedData);
        const now = new Date().getTime();
        const hoursSinceUpdate = (now - lastUpdate) / (1000 * 60 * 60);

        if (count === 2 && stuckAtTwoSince) {
          const daysSinceTwo = (now - stuckAtTwoSince) / (1000 * 60 * 60 * 24);
          if (daysSinceTwo >= 3) {
            // Reset after 3 days
            updateStorage(4);
            return;
          }
        }

        if (hoursSinceUpdate >= 16) {
          const decrementAmount = Math.floor(hoursSinceUpdate / 16);
          let newCount = Math.max(2, count - decrementAmount);
          
          if (newCount === 2 && count !== 2) {
            // Just reached 2, start the 3-day counter
            updateStorage(2, now);
          } else {
            updateStorage(newCount);
          }
        } else {
          setSlotsRemaining(count);
        }
      } else {
        // First time visitor
        updateStorage(4);
      }
    };

    const updateStorage = (count, stuckAtTwoTime = null) => {
      const now = new Date().getTime();
      const data = {
        count,
        lastUpdate: now,
        stuckAtTwoSince: count === 2 ? (stuckAtTwoTime || now) : null
      };
      localStorage.setItem('slotsCountdown', JSON.stringify(data));
      setSlotsRemaining(count);
    };

    initializeCountdown();
    const interval = setInterval(initializeCountdown, 1000 * 60); // Check every minute

    return () => clearInterval(interval);
  }, []);

  const handleGetStarted = () => {
    localStorage.setItem('contactSubject', 'I am interested in your services');
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
    window.dispatchEvent(new CustomEvent('setContactSubject'));
  };

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#0F4229] mb-4">Make the choice now</h2>
          <p className="text-xl text-gray-700 mb-3">Your business is depending on this decision</p>
          <p className="text-sm text-gray-500">All plans are free for the first 7 days</p>
        </div>
        <div className="flex justify-center">
          {/* Road to Wealth Plan */}
          <div className="relative w-full md:w-[350px] p-8 bg-white rounded-xl border border-gray-200 
            shadow-[0_0_20px_rgba(15,66,41,0.1)] 
            hover:shadow-[0_0_30px_rgba(15,66,41,0.2)] 
            transition-all duration-500
            animate-[pulse_3s_ease-in-out_infinite]
            before:content-['']
            before:absolute
            before:inset-[-2px]
            before:rounded-xl
            before:bg-gradient-to-r
            before:from-[#0F4229]
            before:to-[#2c1810]
            before:animate-[glow_3s_ease-in-out_infinite]
            before:opacity-0
            before:z-[-1]"
          >
            <div className="absolute -right-[40px] top-[32px] w-[170px] py-1 text-center text-sm font-medium rotate-45
              bg-[linear-gradient(90deg,_#2c1810_5%,_#4a2617_10%,_#2c1810_15%,_#4a2617_20%,_#2c1810_25%,_#4a2617_30%,_#2c1810_35%,_#4a2617_40%,_#2c1810_45%,_#4a2617_50%,_#2c1810_55%,_#4a2617_60%,_#2c1810_65%,_#4a2617_70%,_#2c1810_75%,_#4a2617_80%,_#2c1810_85%,_#4a2617_90%,_#2c1810_95%)]
              bg-[length:200%_100%]
              animate-[wood_8s_linear_infinite]
              border-y-[3px] border-[#1a0f0a]
              text-[#ffd7a6]
              shadow-[0_2px_4px_rgba(0,0,0,0.2)]
              before:content-['']
              before:absolute
              before:inset-0
              before:bg-[repeating-linear-gradient(90deg,_transparent_0%,_rgba(0,0,0,0.1)_2%,_transparent_4%)]">
              Popular
            </div>
            <div className="text-center">
              <h3 className="text-xl font-medium mb-2">Road to Wealth</h3>
              <div className="flex justify-center items-start mb-6">
                <span className="text-xl md:text-2xl mt-2 font-semibold">₦</span>
                <span className="text-5xl md:text-6xl font-semibold">50,000</span>
                <div className="flex flex-col mt-3 ml-2">
                  <span className="text-base md:text-lg line-through text-gray-400 font-semibold">₦70,000</span>
                  <span className="text-xs md:text-sm">/mo</span>
                </div>
              </div>
            </div>
            <div className="space-y-6 mb-8">
              {/* Main Offers */}
              <div className="space-y-3">
                <p className="font-medium text-[#0F4229] mb-2">Main Offers:</p>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-[#0F4229] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  <span className="font-medium">Social Media Posts Design</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-[#0F4229] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  <span className="font-medium">Business Flyer Design</span>
                </div>
              </div>

              {/* Bonuses */}
              <div className="space-y-3">
                <p className="font-medium text-[#0F4229] mb-2">Bonuses:</p>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-[#0F4229] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  <span>Logo and Branding Design</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-[#0F4229] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  <span>Social Media Ads Design</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-[#0F4229] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  <span>Social Media Account Creation</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-[#0F4229] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  <span>Social Media Optimisation</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-[#0F4229] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  <span>Creation of Catalog for Properties</span>
                </div>
              </div>
            </div>

            <button 
              onClick={handleGetStarted}
              className="w-full py-3 px-6 rounded-lg font-medium transition-all
              bg-[linear-gradient(90deg,_#2c1810_5%,_#4a2617_10%,_#2c1810_15%,_#4a2617_20%,_#2c1810_25%,_#4a2617_30%,_#2c1810_35%,_#4a2617_40%,_#2c1810_45%,_#4a2617_50%,_#2c1810_55%,_#2c1810_60%,_#2c1810_65%,_#2c1810_70%,_#2c1810_75%,_#2c1810_80%,_#2c1810_85%,_#2c1810_90%,_#2c1810_95%)]
              bg-[length:200%_100%]
              animate-[wood_8s_linear_infinite]
              border-[3px] border-[#1a0f0a]
              shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),_0_2px_4px_rgba(0,0,0,0.2)]
              hover:shadow-[inset_0_2px_4px_rgba(255,255,255,0.2),_0_4px_8px_rgba(0,0,0,0.3)]
              active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]
              text-[#ffd7a6]
              relative
              overflow-hidden
              before:content-['']
              before:absolute
              before:inset-0
              before:bg-[radial-gradient(circle_at_50%_-20%,_rgba(255,255,255,0.2)_0%,_transparent_45%)]
              hover:before:opacity-75
              after:content-['']
              after:absolute
              after:inset-0
              after:bg-[repeating-linear-gradient(90deg,_transparent_0%,_rgba(0,0,0,0.1)_2%,_transparent_4%)]"
            >
              Get Started
            </button>
            <div className="text-center mt-4 space-y-2">
              <p className="text-sm font-semibold text-red-600">
                {slotsRemaining} {slotsRemaining === 1 ? 'slot' : 'slots'} remaining this month
              </p>
              <p className="text-xs text-gray-600 italic">
                Current bonuses and discount will no longer be available once slots are filled
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
