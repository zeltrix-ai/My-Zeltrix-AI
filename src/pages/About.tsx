import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [refHeading, inViewHeading] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [refContent, inViewContent] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [refMission, inViewMission] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="container mx-auto px-4 py-24">
      <motion.div
        ref={refHeading}
        initial={{ opacity: 0, y: 20 }}
        animate={inViewHeading ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold mb-6 text-primary">About Us</h1>
        <div className="w-24 h-1 bg-primary mx-auto"></div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <motion.div
          ref={refContent}
          initial={{ opacity: 0, x: -30 }}
          animate={inViewContent ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl text-primary font-semibold mb-6">Our Story</h2>
          <p className="text-lg mb-6">
            Zeltrix AI is an innovative agency specializing in business automation and digital transformation, 
            founded by S M Marzuk Ul Amin. Our team of AI experts is committed to guiding businesses through 
            the complexities of AI integration.
          </p>
          <p className="text-lg mb-6">
            Guided by a steadfast commitment to empowering organizations from small businesses to 
            enterprise-level corporations, we help companies excel in the AI revolution and seize 
            the opportunities of tomorrow.
          </p>
          <p className="text-lg">
            With our deep expertise in artificial intelligence and machine learning technologies, 
            we provide tailored solutions that address specific business challenges and drive 
            meaningful results.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inViewContent ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="rounded-lg overflow-hidden shadow-xl"
        >
          <img 
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80" 
            alt="AI Technology" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <motion.div
        ref={refMission}
        initial={{ opacity: 0, y: 40 }}
        animate={inViewMission ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="bg-secondary-dark p-10 rounded-xl shadow-lg"
      >
        <h2 className="text-3xl font-semibold mb-8 text-center text-primary">Our Mission</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-medium mb-4">Customized AI Solutions</h3>
            <p className="text-lg mb-6">
              We focus on automating businesses through customized AI solutions that are tailored 
              to your specific needs. Our approach elevates your business operations and significantly 
              improves efficiency across all departments.
            </p>
            <h3 className="text-2xl font-medium mb-4">Business Adaptability</h3>
            <p className="text-lg">
              Our solutions are designed with adaptability in mind, ensuring they align perfectly 
              with your business goals and objectives. As your business evolves, our AI systems 
              evolve with you, providing continuous value and support.
            </p>
          </div>
          <div className="grid grid-rows-2 gap-6">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="AI Solutions" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Business Growth" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inViewMission ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-center mt-20"
      >
        <h2 className="text-3xl text-primary font-semibold mb-6">Join Us on the Journey</h2>
        <p className="text-xl max-w-3xl mx-auto">
          Partner with Zeltrix AI and embark on a transformative journey that will position your 
          business at the forefront of innovation and technological advancement.
        </p>
        <button className="mt-8 bg-primary text-secondary px-8 py-3 rounded-lg text-lg font-medium hover:bg-primary-dark transition-colors">
          Get in Touch
        </button>
      </motion.div>
    </div>
  );
};

export default About;
