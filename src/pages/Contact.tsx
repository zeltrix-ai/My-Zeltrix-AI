import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, MapPin, Calendar, Send } from 'lucide-react';
import CalendlyWidget from '../components/CalendlyWidget';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [budget, setBudget] = useState('');
  const [showCalendly, setShowCalendly] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [refHeader, inViewHeader] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [refForm, inViewForm] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [refInfo, inViewInfo] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send the form data to your backend
    console.log({ name, email, message, budget });
    setFormSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setName('');
      setEmail('');
      setMessage('');
      setBudget('');
      setFormSubmitted(false);
    }, 3000);
  };

  const budgetOptions = [
    { value: '$3,000-$5,000', label: '$3,000-$5,000' },
    { value: '$5,000-$15,000', label: '$5,000-$15,000' },
    { value: '$15,000-$25,000', label: '$15,000-$25,000' },
    { value: '$25,000+', label: '$25,000+' },
  ];

  return (
    <div className="container mx-auto px-4 py-24">
      <motion.div
        ref={refHeader}
        initial={{ opacity: 0, y: 20 }}
        animate={inViewHeader ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold mb-6 text-primary">Contact Us</h1>
        <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        <p className="text-xl max-w-3xl mx-auto">
          Ready to transform your business with AI? Get in touch with our team of experts
          and discover how Zeltrix AI can help you achieve your automation goals.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <motion.div
          ref={refForm}
          initial={{ opacity: 0, x: -30 }}
          animate={inViewForm ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-secondary-dark rounded-xl shadow-xl p-8"
        >
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          
          {formSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-900/30 border border-green-500 text-green-300 rounded-lg p-4 flex items-center"
            >
              <div className="bg-green-500 rounded-full p-2 mr-4">
                <Send className="w-5 h-5 text-secondary-dark" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Message Sent!</h3>
                <p>Thank you for reaching out. We'll get back to you shortly.</p>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full bg-secondary border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-secondary border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="budget" className="block text-sm font-medium mb-2">
                  Project Budget
                </label>
                <select
                  id="budget"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  required
                  className="w-full bg-secondary border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="" disabled>Select your budget range</option>
                  {budgetOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={5}
                  className="w-full bg-secondary border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Tell us about your project and how we can help..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary text-secondary font-medium py-3 rounded-lg hover:bg-primary-dark transition-colors flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          )}
        </motion.div>
        
        <motion.div
          ref={refInfo}
          initial={{ opacity: 0, x: 30 }}
          animate={inViewInfo ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-primary/20 p-3 rounded-lg mr-4">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Phone</h3>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/20 p-3 rounded-lg mr-4">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Email</h3>
                  <p className="text-gray-300">contact@zeltrixai.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/20 p-3 rounded-lg mr-4">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Office</h3>
                  <p className="text-gray-300">
                    161/4/3,Gulshan Badda Link Road<br />
                    Gulshan,Dhaka<br />
                    Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-secondary-dark rounded-xl shadow-xl p-8">
            <div className="flex items-center mb-6">
              <Calendar className="w-6 h-6 text-primary mr-3" />
              <h2 className="text-2xl font-bold">Schedule a Discovery Call</h2>
            </div>
            <p className="mb-6 text-gray-300">
              Not ready to commit? Schedule a free 30-minute discovery call with one of our AI consultants to discuss your needs and explore how we can help.
            </p>
            <button
              onClick={() => setShowCalendly(true)}
              className="w-full bg-primary/20 text-primary border border-primary font-medium py-3 rounded-lg hover:bg-primary hover:text-secondary transition-colors flex items-center justify-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule a Call
            </button>
          </div>
          
          <div className="bg-gradient-to-br from-secondary-dark to-secondary p-8 rounded-xl shadow-xl">
            <h3 className="text-xl font-bold mb-4">Why Choose Zeltrix AI?</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="bg-primary text-secondary rounded-full p-1 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Expert team of AI specialists</span>
              </li>
              <li className="flex items-start">
                <div className="bg-primary text-secondary rounded-full p-1 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Tailored solutions for your industry</span>
              </li>
              <li className="flex items-start">
                <div className="bg-primary text-secondary rounded-full p-1 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Proven track record of success</span>
              </li>
              <li className="flex items-start">
                <div className="bg-primary text-secondary rounded-full p-1 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>End-to-end implementation support</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      {showCalendly && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
        >
          <div className="relative bg-secondary-dark rounded-xl w-full max-w-4xl h-[80vh] overflow-hidden">
            <button
              onClick={() => setShowCalendly(false)}
              className="absolute top-4 right-4 bg-secondary-dark rounded-full p-2 z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <CalendlyWidget />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Contact;
