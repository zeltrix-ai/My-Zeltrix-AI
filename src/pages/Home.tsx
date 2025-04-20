import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Brain, PlaneTakeoff, CheckCircle, BookOpen, BarChart2 } from 'lucide-react';

const RotatingCube = () => {
  const mesh = useRef<THREE.Mesh>(null!);
  
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={mesh} rotation={[0, 0, 0]} position={[0, 0, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#00ff9d" />
    </mesh>
  );
};

const Home = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      budget: formData.get('budget'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('https://hook.eu2.make.com/71vrhhe2eq1oiaotufmefn5qfpnxn976', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Thank you for your message. We will get back to you soon!');
        (e.target as HTMLFormElement).reset();
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your message. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-secondary">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Suspense fallback={null}>
              <RotatingCube />
              <OrbitControls autoRotate />
            </Suspense>
          </Canvas>
        </div>
        
        <div className="container mx-auto px-4 z-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl font-bold mb-6 text-primary">
              Transform Your Business with AI
            </h1>
            <p className="text-2xl mb-8 text-white">
              Automate, optimize, and scale your operations with cutting-edge AI solutions
            </p>
            <a
              href="#contact"
              className="bg-primary text-secondary px-8 py-4 rounded-lg text-xl font-bold hover:bg-primary-dark transition-colors"
            >
              Book a Discovery Call
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary-light">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-primary">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
  title: (
    <div className="flex items-center gap-2">
      <Brain className="w-10 h-10 text-primary" />
      <span>AI Consulting</span>
    </div>
  ),
  description: 'The world is quickly shifting to a digital and AI-driven future, and staying behind isn’t an option. We help you explore what’s possible, find the right AI use cases, and build a clear strategy to stay ahead and work smarter.',
},

              {
                title: (<div className="flex items-center gap-2">
      <PlaneTakeoff className="w-10 h-10 text-primary" />
      <span>Chatbot Development</span>
    </div>),
                description: 'Elevate your customer service without hiring more staff. Our smart chatbots handle support instantly, boost customer satisfaction, and free up your team to focus on what matters most. Deliver better service, faster — and stand out from the competition.',
              },
              {
                title: (
    <div className="flex items-center gap-2">
      <CheckCircle className="w-10 h-10 text-primary" />
      <span>Workflow Automations</span>
    </div>
  ),
                description: 'Stop wasting time on repetitive tasks. Our AI-powered Zapier automations streamline your workflows, save time, and boost efficiency — all while fitting right into your existing systems. Let us help you move faster, work smarter, and stay ahead of the competition.',
              },
              {
                title: (
    <div className="flex items-center gap-2">
      <BookOpen className="w-10 h-10 text-primary" />
      <span>Content Generation</span>
    </div>
  ),
                description: 'Transform your existing content into fresh, engaging material with our AI-powered content generation. We help you repurpose old data into impactful, high-quality pieces that boost your online presence and keep your brand ahead in the digital game.',
              },
              {
                title: (
    <div className="flex items-center gap-2">
      <BarChart2 className="w-10 h-10 text-primary" />
      <span>Workforce Transition</span>
    </div>
  ),
                description: 'AI and automation are the future — is your team ready? We provide end-to-end support to smoothly prepare your workforce, ensuring minimal disruption, steady productivity, and full readiness for what’s next. Don’t wait — future-proof your business today.',
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-secondary p-6 rounded-lg hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl font-bold mb-4 text-primary">{service.title}</h3>
                <p className="text-white">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-primary">Why Choose Zeltrix AI</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Data Processing',
                description: 'Advanced algorithms for efficient data processing and analysis',
              },
              {
                title: 'Prompt Engineering Excellence',
                description: 'Cutting-edge injection-proof techniques for secure AI interactions',
              },
              {
                title: 'Thorough App Evaluation',
                description: 'Comprehensive assessment and optimization of AI applications',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-2xl font-bold mb-4 text-primary">{feature.title}</h3>
                <p className="text-white">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-secondary-light">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-primary">Contact Us</h2>
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-secondary border border-primary text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-secondary border border-primary text-white"
                />
              </div>
              <div>
                <label htmlFor="budget" className="block text-white mb-2">Budget Range</label>
                <select
                  id="budget"
                  name="budget"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-secondary border border-primary text-white"
                >
                  <option value="3000-5000">$3,000 - $5,000</option>
                  <option value="5000-15000">$5,000 - $15,000</option>
                  <option value="15000-25000">$15,000 - $25,000</option>
                  <option value="25000+">$25,000+</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-white mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-secondary border border-primary text-white"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-secondary py-3 rounded-lg font-bold hover:bg-primary-dark transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Calendly Widget */}
     
    </div>
  );
};

export default Home;
