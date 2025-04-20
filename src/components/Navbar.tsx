import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain, MessageSquare, FileText, HelpCircle, Phone } from 'lucide-react';

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav className="bg-secondary-dark py-4 px-6 fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Brain className="w-8 h-8 text-primary" />
          <span className="text-2xl font-bold">Zeltrix AI</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <div 
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className="flex items-center space-x-1">
              <span>Services</span>
            </button>

            {isServicesOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 mt-2 w-64 bg-secondary-dark rounded-lg shadow-lg py-2"
              >
                <Link to="/services/ai-consulting" className="block px-4 py-2 hover:bg-secondary hover:text-primary">
                  AI Consulting
                </Link>
                <Link to="/services/chatbot-development" className="block px-4 py-2 hover:bg-secondary hover:text-primary">
                  Chatbot Development
                </Link>
                <Link to="/services/content-generation" className="block px-4 py-2 hover:bg-secondary hover:text-primary">
                  Content Generation
                </Link>
              </motion.div>
            )}
          </div>

          <Link to="/about" className="hover:text-primary">About</Link>
          <Link to="/blog" className="hover:text-primary">Blog</Link>
          <Link to="/faqs" className="hover:text-primary">FAQs</Link>
          <Link to="/contact" className="bg-primary text-secondary px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors">
            Contact Us
          </Link>
        </div>

        <button className="md:hidden">
          <MessageSquare className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
