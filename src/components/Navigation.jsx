import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

// Add this button style as a constant at the top of the file
const woodButtonStyle = `bg-[linear-gradient(90deg,_#2c1810_5%,_#4a2617_10%,_#2c1810_15%,_#4a2617_20%,_#2c1810_25%,_#4a2617_30%,_#2c1810_35%,_#4a2617_40%,_#2c1810_45%,_#4a2617_50%,_#2c1810_55%,_#4a2617_60%,_#2c1810_65%,_#4a2617_70%,_#2c1810_75%,_#4a2617_80%,_#2c1810_85%,_#4a2617_90%,_#2c1810_95%)]
  bg-[length:200%_100%] animate-[wood_8s_linear_infinite] border-[3px] border-[#1a0f0a]
  shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),_0_2px_4px_rgba(0,0,0,0.2)]
  hover:shadow-[inset_0_2px_4px_rgba(255,255,255,0.2),_0_4px_8px_rgba(0,0,0,0.3)]
  text-[#ffd7a6] relative overflow-hidden
  before:content-[''] before:absolute before:inset-0
  before:bg-[radial-gradient(circle_at_50%_-20%,_rgba(255,255,255,0.2)_0%,_transparent_45%)]
  hover:before:opacity-75`;

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Learn', to: 'about' },
    { name: 'Results', to: 'results' },
    { name: 'Services', to: 'services' },
  ];

  return (
    <div className="fixed w-full z-50 px-4 pt-4">
      <nav className={`
        max-w-7xl mx-auto rounded-2xl transition-all duration-300
        ${isScrolled 
          ? 'bg-white shadow-lg' 
          : 'bg-white'
        }
      `}>
        <div className="px-6 py-4">
          <div className="flex justify-between items-center">
            <Link 
              to="home" 
              className="text-black text-xl font-medium cursor-pointer"
            >
              kanijoshvisuals
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-black"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className="text-black hover:text-gray-600 cursor-pointer text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className={`px-5 py-2 rounded-full text-sm font-medium ${woodButtonStyle}`}
              >
                Get onboarded
              </Link>
            </div>
          </div>

          {/* Mobile menu */}
          {isOpen && (
            <div className="md:hidden mt-4 border-t border-gray-100">
              <div className="py-3 space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    smooth={true}
                    duration={500}
                    className="block text-black hover:text-gray-600 py-2 text-sm font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className={`block px-5 py-2 rounded-full text-sm font-medium text-center ${woodButtonStyle}`}
                  onClick={() => setIsOpen(false)}
                >
                  Get onboarded
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}