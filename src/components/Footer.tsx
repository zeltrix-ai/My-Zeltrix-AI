import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-secondary-dark py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4">Elevating your business with Artificial Intelligence</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" onClick={scrollToTop} className="text-white hover:text-primary transition">Home</Link></li>
              <li><Link to="/services/ai-consulting" onClick={scrollToTop} className="text-white hover:text-primary transition">Services</Link></li>
              <li><Link to="/blog" onClick={scrollToTop} className="text-white hover:text-primary transition">Blog</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" onClick={scrollToTop} className="text-white hover:text-primary transition">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" onClick={scrollToTop} className="text-white hover:text-primary transition">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://www.facebook.com/marzuk.amin.7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/marzuk_ul_amin/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Reach us at</h3>
            <address className="text-white not-italic">
              <p>161/4/3 Gulshan Badda Link Road,</p>
              <p>Dhaka</p>
              <a
                href="mailto:marzukulamin123@gmail.com"
                className="text-white hover:text-primary transition"
              >
                marzukulamin123@gmail.com
              </a>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Zeltrix AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
