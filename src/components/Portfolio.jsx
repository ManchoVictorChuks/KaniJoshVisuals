import { motion } from 'framer-motion';
import brandIdentity from '../assets/Brand identity.jpg';
import perfectHome from '../assets/Find A Perfect Home For Your Family.jpg';
import flyerDesign from '../assets/Flyer design with a white house for real estate property for sale_.jpg';
import catalogDesign from '../assets/I will create brochure design, product booklet, and catalog design.jpg';
import socialMediaDesign from '../assets/Pin by Vijay Shanthi Builders Ltd on Fortune Square _ Real estate marketing design, Real estate advertising, Social media ideas design.jpg';
import realEstateGraphics from '../assets/real estate graphics design.jpg';

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "Brand Identity Design",
      category: "Brand Design",
      image: brandIdentity,
    },
    {
      title: "Perfect Home Campaign",
      category: "Social Media Design",
      image: perfectHome,
    },
    {
      title: "Property Sale Flyer",
      category: "Print Design",
      image: flyerDesign,
    },
    {
      title: "Property Catalog",
      category: "Catalog Design",
      image: catalogDesign,
    },
    {
      title: "Social Media Campaign",
      category: "Social Media Content",
      image: socialMediaDesign,
    },
    {
      title: "Real Estate Graphics",
      category: "Digital Design",
      image: realEstateGraphics,
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-serif text-[#0F4229] mb-6">Our Portfolio</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our collection of premium design work for real estate professionals
          </p>
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg shadow-xl break-inside-avoid mb-8"
            >
              <div className="relative w-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full object-cover transition-all duration-500 group-hover:brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                  <div className="text-white p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-200">{item.category}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <a
            href="https://www.instagram.com/kanijoshvisuals/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block py-3 px-8 rounded-lg font-medium transition-all
              bg-[linear-gradient(90deg,_#2c1810_5%,_#4a2617_10%,_#2c1810_15%,_#4a2617_20%,_#2c1810_25%,_#4a2617_30%,_#2c1810_35%,_#4a2617_40%,_#2c1810_45%,_#4a2617_50%,_#2c1810_55%,_#4a2617_60%,_#2c1810_65%,_#4a2617_70%,_#2c1810_75%,_#4a2617_80%,_#2c1810_85%,_#4a2617_90%,_#2c1810_95%)]
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
            View More on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
