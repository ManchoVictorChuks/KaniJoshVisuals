import { motion } from 'framer-motion';
import { FaPalette, FaLaptop, FaPrint, FaPencilAlt } from 'react-icons/fa';

const woodIconStyle = `text-2xl mb-4 mx-auto inline-flex items-center justify-center
  w-12 h-12 p-2.5
  bg-[linear-gradient(90deg,_#2c1810_5%,_#4a2617_10%,_#2c1810_15%,_#4a2617_20%,_#2c1810_25%,_#4a2617_30%,_#2c1810_35%,_#4a2617_40%,_#2c1810_45%,_#2c1810_50%,_#2c1810_55%,_#4a2617_60%,_#2c1810_65%,_#4a2617_70%,_#2c1810_75%,_#4a2617_80%,_#2c1810_85%,_#4a2617_90%,_#2c1810_95%)]
  bg-[length:200%_100%] animate-[wood_8s_linear_infinite]
  text-[#ffd7a6] rounded-full border-2 border-[#1a0f0a]
  shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),_0_2px_4px_rgba(0,0,0,0.2)]
  hover:shadow-[inset_0_2px_4px_rgba(255,255,255,0.2),_0_4px_8px_rgba(0,0,0,0.3)]
  relative overflow-hidden
  before:content-[''] before:absolute before:inset-0
  before:bg-[radial-gradient(circle_at_50%_-20%,_rgba(255,255,255,0.2)_0%,_transparent_45%)]
  hover:before:opacity-75`;

const services = [
  {
    icon: <FaPalette className={woodIconStyle} />,
    title: "Brand Identity",
    description: "Creating unique and memorable brand identities that resonate with your audience."
  },
  {
    icon: <FaLaptop className={woodIconStyle} />,
    title: "Digital Design",
    description: "Crafting engaging digital experiences for web and social media platforms."
  },
  {
    icon: <FaPrint className={woodIconStyle} />,
    title: "Print Design",
    description: "Designing professional print materials that make a lasting impression."
  },
  {
    icon: <FaPencilAlt className={woodIconStyle} />,
    title: "Custom Illustration",
    description: "Creating unique illustrations tailored to your specific needs and vision."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">Services</h2>
          <p className="text-xl text-gray-600">Expert solutions for all your design needs</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              {service.icon}
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}