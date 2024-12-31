import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const nameInputRef = useRef(null);

  useEffect(() => {
    const handleSetSubject = () => {
      const savedSubject = localStorage.getItem('contactSubject');
      if (savedSubject) {
        setFormData(prev => ({
          ...prev,
          subject: savedSubject
        }));
        localStorage.removeItem('contactSubject');
        nameInputRef.current?.focus();
      }
    };

    // Listen for the custom event
    window.addEventListener('setContactSubject', handleSetSubject);
    
    // Also check on mount
    handleSetSubject();

    return () => window.removeEventListener('setContactSubject', handleSetSubject);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format the message for WhatsApp with the new template
    const whatsappMessage = encodeURIComponent(
      `Hi, I am ${formData.name}, i am reaching out from your website, ${formData.subject}, ${formData.message}.\n\n` +
      `reach me on; ${formData.email} or ${formData.phone}`
    );

    // Updated WhatsApp number
    const whatsappNumber = '2349095471759';
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-primary text-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Let's Create Something Amazing</h2>
          <p className="text-xl text-gray-300">Get in touch to start your next project</p>
        </motion.div>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              ref={nameInputRef}
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-accent"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-accent"
              required
            />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-accent"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-accent"
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-accent"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-accent hover:bg-opacity-90 text-white py-3 px-6 rounded-lg font-semibold transition duration-300"
          >
            Send Message via WhatsApp
          </button>
        </motion.form>
      </div>
    </section>
  );
}