import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';
import firewoodImage from '../assets/Ethical & Sustainable Firewood Materials _ Green Olive Firewood.jpg';

const woodButtonStyle = `bg-[linear-gradient(90deg,_#2c1810_5%,_#4a2617_10%,_#2c1810_15%,_#4a2617_20%,_#2c1810_25%,_#4a2617_30%,_#2c1810_35%,_#4a2617_40%,_#2c1810_45%,_#4a2617_50%,_#2c1810_55%,_#4a2617_60%,_#2c1810_65%,_#4a2617_70%,_#2c1810_75%,_#4a2617_80%,_#2c1810_85%,_#4a2617_90%,_#2c1810_95%)]
  bg-[length:200%_100%] animate-[wood_8s_linear_infinite] border-[3px] border-[#1a0f0a]
  shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),_0_2px_4px_rgba(0,0,0,0.2)]
  hover:shadow-[inset_0_2px_4px_rgba(255,255,255,0.2),_0_4px_8px_rgba(0,0,0,0.3)]
  text-[#ffd7a6] relative overflow-hidden
  before:content-[''] before:absolute before:inset-0
  before:bg-[radial-gradient(circle_at_50%_-20%,_rgba(255,255,255,0.2)_0%,_transparent_45%)]
  hover:before:opacity-75`;

const Bird = ({ delay, mobileDelay, top, scale = 1 }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <motion.div
      className="absolute"
      initial={{ left: "-10%", top }}
      animate={{ left: "120%" }}
      transition={{
        duration: 15,
        delay: isMobile ? mobileDelay : delay,
        repeat: Infinity,
        ease: "linear"
      }}
      style={{ transform: `scale(${scale})` }}
    >
      <svg width="50" height="30" viewBox="0 0 50 30" fill="currentColor" className="text-[#0F4229] opacity-70">
        <motion.path
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, 8, 0, -8, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
          d="M 10,15
             Q 15,10 20,15
             L 30,8
             Q 35,5 40,8
             L 45,12
             Q 42,13 40,12
             L 30,15
             Q 25,18 20,15
             Q 15,18 10,15
             Z"
        />
      </svg>
    </motion.div>
  );
};

export default function Hero() {
  return (
    <section className="min-h-screen pt-32 px-4 bg-white relative overflow-hidden">
      {/* Birds with adjusted mobile delays */}
      <Bird delay={0} mobileDelay={5} top="15%" scale={0.8} />
      <Bird delay={3} mobileDelay={8} top="12%" scale={0.6} />
      <Bird delay={6} mobileDelay={11} top="15%" scale={0.7} />
      <Bird delay={9} mobileDelay={14} top="25%" scale={0.8} />
      <Bird delay={12} mobileDelay={17} top="18%" scale={0.6} />
      <Bird delay={15} mobileDelay={20} top="22%" scale={0.9} />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-4 md:mb-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-4xl font-medium text-[#0F4229] mb-4 max-w-5xl mx-auto leading-tight"
          >
            The High Converting Design Offer That Has Led The Growth of Over 30 Real Estate Businesses in Nigeria on Social Media
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg text-gray-600 mb-4 max-w-2xl mx-auto font-medium"
          >
            Transform your real estate business with our proven social media design strategy that has helped Nigerian realtors increase their visibility and close more deals.
          </motion.p>

          {/* Guarantee Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-start justify-center gap-2 mb-8 max-w-2xl mx-auto px-4"
          >
            <div className="w-8 h-8 mt-1 flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#0F4229]">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="text-base text-gray-700 italic font-medium text-left">
              "If the designs do not make you stand on your table and dance, neglecting the ceiling fan, you get 100% of your money back."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center gap-4"
          >
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className={`px-6 py-3 rounded-full text-sm font-medium cursor-pointer ${woodButtonStyle}`}
            >
              Start Growing Now
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="text-black border border-gray-300 px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-50 cursor-pointer"
            >
              Learn more
            </Link>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative"
        >
          {/* Image container with adjusted height for mobile */}
          <div 
            className="w-full h-[250px] md:h-[350px] bg-cover bg-center bg-no-repeat rounded-xl shadow-lg overflow-hidden"
            style={{ 
              backgroundImage: `url(${firewoodImage})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center center'
            }}
          ></div>
          
          {/* Trusted by section with reduced margins for mobile */}
          <div className="mt-8 md:mt-16 text-center">
            <p className="text-gray-500 mb-8">We've been trusted by founders from</p>
            <div className="flex justify-center items-center gap-8 flex-wrap opacity-60">
              <img src="/google.svg" alt="Google" className="h-6" />
              <img src="/aws.svg" alt="AWS" className="h-6" />
              <img src="/microsoft.svg" alt="Microsoft" className="h-6" />
              <img src="/stanford.svg" alt="Stanford" className="h-6" />
              <img src="/500.svg" alt="500 Startups" className="h-6" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}