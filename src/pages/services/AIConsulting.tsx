import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, PlaneTakeoff, CheckCircle, BookOpen, BarChart2 } from 'lucide-react';

const AIConsulting = () => {
  return (
    <div className="container mx-auto px-4 py-24 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold mb-6 text-primary">AI Consulting</h1>
        <p className="text-xl max-w-3xl mx-auto text-gray-300">
          Our AI consulting services are tailored to seamlessly integrate with your business operations, 
          providing strategic guidance that fits your unique needs like a glove and transforms your 
          business capabilities in the digital age.
        </p>
      </motion.div>

      <div className="space-y-24">
        <StepSection 
          step={1}
          title="Strategy"
          icon={<Brain className="w-16 h-16 text-primary" />}
          description="A customized AI strategy in sync with your business objectives and pinpointing areas where AI can supercharge your business and customer experience."
          details={[
            "Comprehensive business analysis to identify AI opportunities",
            "Competitive landscape evaluation",
            "ROI projections for AI implementation",
            "Prioritization of AI initiatives based on impact"
          ]}
        />

        <StepSection 
          step={2}
          title="Planning"
          icon={<PlaneTakeoff className="w-16 h-16 text-primary" />}
          description="This step involves sketching a comprehensive blueprint for embedding AI into your existing structure which highlights resources, timelines and the path to execution."
          details={[
            "Detailed implementation roadmap with milestones",
            "Resource allocation and team structure recommendations",
            "Technology stack selection and architecture design",
            "Risk assessment and mitigation strategies"
          ]}
        />

        <StepSection 
          step={3}
          title="Selection"
          icon={<CheckCircle className="w-16 h-16 text-primary" />}
          description="Move forward with us assisting you in handpicking the perfect AI solutions weighing factors like cost, scalability and business goals."
          details={[
            "Vendor and technology evaluation framework",
            "Proof-of-concept development for critical solutions",
            "Total cost of ownership analysis",
            "Scalability and future-proofing assessment"
          ]}
        />

        <StepSection 
          step={4}
          title="Training"
          icon={<BookOpen className="w-16 h-16 text-primary" />}
          description="Progress with indispensable training and ceaseless support from us ensuring that your team can effectively wield AI tools in your operation."
          details={[
            "Customized training programs for different user roles",
            "Knowledge transfer sessions with your technical teams",
            "Documentation and best practices guides",
            "Ongoing support and mentorship during transition"
          ]}
        />

        <StepSection 
          step={5}
          title="Optimization"
          icon={<BarChart2 className="w-16 h-16 text-primary" />}
          description="Lastly after deploying AI tools we monitor their performance and refine them overtime, adjusting your strategy as necessary through regular touchpoints."
          details={[
            "Performance monitoring and KPI tracking",
            "Continuous improvement recommendations",
            "Regular strategy review sessions",
            "Adaptation to emerging AI technologies and trends"
          ]}
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-20 text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
        <button 
          onClick={() => {
            // @ts-ignore
            if (window.Calendly) window.Calendly.initPopupWidget({url: 'https://calendly.com/zeltrix-ai/30min'});
          }}
          className="bg-primary text-secondary px-8 py-3 rounded-lg text-xl font-bold hover:bg-primary-dark transition-colors"
        >
          Schedule a Free Consultation
        </button>
      </motion.div>
    </div>
  );
};

interface StepSectionProps {
  step: number;
  title: string;
  icon: React.ReactNode;
  description: string;
  details: string[];
}

const StepSection = ({ step, title, icon, description, details }: StepSectionProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className={`flex flex-col md:flex-row items-center ${step % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-12`}
    >
      <motion.div variants={itemVariants} className="md:w-1/3 flex justify-center">
        <div className="relative">
          <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/20 to-primary-dark/20 blur-xl"></div>
          <div className="relative bg-secondary-dark p-8 rounded-full">
            {icon}
          </div>
          <div className="absolute -top-4 -right-4 bg-primary text-secondary w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">
            {step}
          </div>
        </div>
      </motion.div>
      
      <div className="md:w-2/3">
        <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-4 text-primary">{title}</motion.h2>
        <motion.p variants={itemVariants} className="text-xl mb-6 text-gray-300">{description}</motion.p>
        
        <motion.ul variants={containerVariants} className="space-y-3">
          {details.map((detail, index) => (
            <motion.li 
              key={index} 
              variants={itemVariants}
              className="flex items-start gap-3"
            >
              <span className="text-primary mt-1">•</span>
              <span>{detail}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  );
};

export default AIConsulting;
