import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import ceoImage from '../assets/KaniJoshVisuals Ceo.png';

const woodButtonStyle = `bg-[linear-gradient(90deg,_#2c1810_5%,_#4a2617_10%,_#2c1810_15%,_#4a2617_20%,_#2c1810_25%,_#4a2617_30%,_#2c1810_35%,_#4a2617_40%,_#2c1810_45%,_#4a2617_50%,_#2c1810_55%,_#4a2617_60%,_#2c1810_65%,_#4a2617_70%,_#2c1810_75%,_#4a2617_80%,_#2c1810_85%,_#4a2617_90%,_#2c1810_95%)]
  bg-[length:200%_100%] animate-[wood_8s_linear_infinite] border-[3px] border-[#1a0f0a]
  shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),_0_2px_4px_rgba(0,0,0,0.2)]
  hover:shadow-[inset_0_2px_4px_rgba(255,255,255,0.2),_0_4px_8px_rgba(0,0,0,0.3)]
  text-[#ffd7a6] relative overflow-hidden
  before:content-[''] before:absolute before:inset-0
  before:bg-[radial-gradient(circle_at_50%_-20%,_rgba(255,255,255,0.2)_0%,_transparent_45%)]
  hover:before:opacity-75`;

const floatingAnimation = `animate-[floating_2s_ease-in-out_infinite]`;

// Add these keyframes to your global CSS or tailwind.config.js
// @keyframes floating {
//   0%, 100% { transform: translateY(0px); }
//   50% { transform: translateY(-10px); }
// }

export default function About() {
  // Get date that updates every 3 days
  const getUpdateDate = () => {
    const now = new Date();
    const dayGroup = Math.floor(now.getDate() / 3);
    const baseDate = new Date(now.getFullYear(), now.getMonth(), dayGroup * 3);
    return baseDate.toLocaleDateString('en-US', { 
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <section id="about" className="py-20 bg-[#F8F8F8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Forest-themed decorative elements */}
        <div className="absolute left-0 top-0 w-32 h-64 bg-[url('/pine-tree-left.png')] opacity-20"></div>
        <div className="absolute right-0 bottom-0 w-32 h-64 bg-[url('/pine-tree-right.png')] opacity-20"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-serif text-[#0F4229] mb-6">Faith-Driven Excellence</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transforming real estate businesses with purpose-driven digital solutions. We combine Christian values
            with proven marketing strategies to help your property business thrive in the digital age.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-16"
        >
          <img
            src={ceoImage}
            alt="KaniJoshVisuals CEO"
            className="w-48 h-48 object-cover object-[center_25%] scale-125 rounded-full border-4 border-[#0F4229] shadow-lg mb-8"
          />
          <h3 className="text-2xl font-serif text-[#0F4229] mb-1">Mr. Okani Joshua</h3>
          <p className="text-gray-600 font-medium">CEO & Digital Marketing Strategist</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Real Estate Focused",
              description: "3+ years specialized experience in crafting high-converting websites and marketing strategies exclusively for real estate businesses."
            },
            {
              title: "Proven Results",
              description: "Helped numerous real estate agencies increase their online leads by 200% through strategic digital marketing and brand positioning."
            },
            {
              title: "Value-Driven Approach",
              description: "Combining Christian principles with marketing expertise to deliver honest, effective, and results-focused digital solutions."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <h3 className="text-2xl font-serif text-[#0F4229] mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className={`px-6 py-3 rounded-full text-sm font-medium cursor-pointer ${woodButtonStyle}`}
          >
            Schedule Your First Design
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 max-w-3xl mx-auto text-left p-8 bg-white rounded-lg shadow-sm"
          >
            <p className="text-sm text-gray-500 mb-4 font-bold underline">Last Updated on: {getUpdateDate()}</p>
            <div className="text-gray-700 leading-relaxed space-y-6 text-lg">
              <p className="font-medium text-xl mb-6">Dear Business Owner,</p>
              <p>We get it.</p>
              <p>Growing a business is hard.</p>
              <p>You're probably worried about where your next customer will come from. <span className="font-bold">Stressed</span> and sleeping like a teething two-year-old rolling around on the bed in <span className="font-bold">worry</span>.</p>
              <p>And to top it all off, you're being pulled in a million different directions.</p>
              <p><span className="font-bold">Oh my God...</span></p>
              <p>Should I <span className="font-bold">blog</span>?</p>
              <p>Start a <span className="font-bold">podcast</span>?</p>
              <p>Build a <span className="font-bold">personal brand</span>?</p>
              <p>Document my whole life on <span className="font-bold">Instagram</span>?</p>
              <p>What about <span className="font-bold">AI</span>? Everybody's talking about <span className="font-bold">AI</span>.</p>
              <p>Should I run some <span className="font-bold">ads</span>?</p>
              <p>Drop <span className="font-bold">₦10k</span> on a <span className="font-bold">logo</span>?</p>
              <p>Post on <span className="font-bold">LinkedIn</span> or <span className="font-bold">Instagram</span> five times per day?</p>
              <p>Look, we've all been there. But we are here to help you now.</p>
              <p>Imagine your <span className="font-bold">dream client</span> is on the search for a house to buy.</p>
              <p>They search social media... <span className="font-bold">EVERYBODY IS ON SOCIAL MEDIA!</span></p>
              <p>Imagine they do not find you on social media... Would you ever meet them?</p>
              <p><span className="font-bold">No!</span></p>
              <p>You see where I'm driving at... You might not be active 24/7, but your social media is!</p>
              <p>Stop the delay and do what's best for <span className="font-bold">YOU</span>, for your <span className="font-bold">FAMILY</span>, for your <span className="font-bold">CHILDREN</span>, and most importantly... <span className="font-bold">THEIR FUTURE!</span></p>
            </div>
          </motion.div>

          <div className="flex flex-col items-center -mt-6 md:-mt-12">
            <svg 
              className={`w-24 h-24 ${floatingAnimation} -mb-2 md:-mb-4`}
              viewBox="0 0 100 100"
              fill="none"
              stroke="#0F4229"
              strokeWidth="3"
            >
              <path
                d="M50,10 C70,30 30,50 50,70 L40,65 M50,70 L60,65"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <Link
              to="contact"
              smooth={true}
              duration={500}
              className={`px-6 py-3 rounded-full text-sm font-medium cursor-pointer ${woodButtonStyle}`}
            >
              Schedule Your First Design
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}