import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Their social media designs completely transformed how we showcase our properties. Our engagement has increased significantly since working with them.",
      author: "Oluwaseun Adebayo",
      role: "CEO, Prime Estates Nigeria"
    },
    {
      quote: "The property catalogs they created for us are top-notch. Our clients now have a better viewing experience, and our closure rate has improved.",
      author: "Chioma Okonkwo",
      role: "Managing Director, Oakfield Properties"
    },
    {
      quote: "From social media management to brand design, they've helped establish our company as a premium real estate brand in Lagos.",
      author: "Babajide Olatunji",
      role: "Founder, Heritage Homes Ltd"
    }
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-serif text-[#0F4229] mb-6">Client Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Every project tells a unique story of collaboration and growth
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#F8F8F8] p-8 rounded-lg relative"
            >
              <div className="absolute top-4 left-4 text-6xl text-[#0F4229] opacity-10">"</div>
              <p className="text-gray-600 mb-6 relative z-10">{testimonial.quote}</p>
              <div>
                <p className="font-medium text-[#0F4229]">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="inline-block px-8 py-4 text-white font-medium text-sm rounded-lg
              bg-[url('/wood-texture.jpg')] bg-cover bg-center
              shadow-[inset_0_2px_4px_rgba(255,255,255,0.3)]
              hover:shadow-[inset_0_2px_8px_rgba(255,255,255,0.5)]
              transition-all duration-300"
          >
            Get onboarded
          </Link>
        </div>
      </div>
    </section>
  );
}