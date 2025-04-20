import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, PlaneTakeoff, CheckCircle, BookOpen, BarChart2 } from 'lucide-react';

const ChatbotDevelopment = () => {
  return (
    <div className="container mx-auto px-4 py-24 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold mb-6 text-primary">AI Chatbots</h1>
        <p className="text-xl max-w-3xl mx-auto text-gray-300">
          Unlock the Power of Automation: In today’s fast-changing business world, automation isn’t about replacing people — it’s about enhancing their impact. Boost efficiency, productivity, and employee satisfaction by letting technology do the heavy lifting.
        </p>
      </motion.div>

      <div className="space-y-24">
        <StepSection 
          step={1}
          title="Sales"
          icon={<Brain className="w-16 h-16 text-primary" />}
          description="Revolutionizing Sales and Marketing with AI"
          details={[
            "Automate Repetitive Tasks – Let AI handle routine sales and marketing activities, saving time and reducing manual effort.",
            "Optimize Customer Outreach – Reach the right audience with smarter targeting and personalized communication.",
            "Gain Actionable Insights – Leverage data-driven insights to make better decisions and focus on what truly drives growth."
          ]}
        />

        <StepSection 
          step={2}
          title="CRM"
          icon={<PlaneTakeoff className="w-16 h-16 text-primary" />}
          description="Transforming Customer Interactions with CRM Automation"
          details={[
            "Track Customer Behavior – Gain deep insights into customer actions to better understand their needs and preferences.",
            "Manage Your Sales Pipeline Efficiently – Keep deals moving smoothly with organized, automated pipeline management.",
            "Automate Follow-Ups – Stay connected and build stronger relationships with timely, personalized follow-ups."
          ]}
        />

        <StepSection 
          step={3}
          title="HR"
          icon={<CheckCircle className="w-16 h-16 text-primary" />}
          description="Optimizing HR Processes with AI Automation"
          details={[
            "Simplify Recruitment – Use AI to automate candidate screening and find the right talent faster.",
            "Automate Payroll & Admin Tasks – Save time with seamless, error-free payroll and HR operations.",
            "Enhance Employee Experience – Create a smoother, more efficient journey from hiring to onboarding and beyond."
          ]}
        />

        <StepSection 
          step={4}
          title="Finance"
          icon={<BookOpen className="w-16 h-16 text-primary" />}
          description="Enhancing Financial Accuracy with AI Automation"
          details={[
            "Automate Invoicing & Payments – Ensure timely transactions and reduce manual effort with smart automation.",
            "Eliminate Errors – Minimize mistakes in financial processes for greater accuracy and compliance.",
            "Gain Clear Financial Insights – Get real-time, reliable reports to support confident, data-driven decisions."
          ]}
        />

        <StepSection 
          step={5}
          title="Project Management"
          icon={<BarChart2 className="w-16 h-16 text-primary" />}
          description="Elevating Project Efficiency with AI-Powered Project Management"
          details={[
            "Streamline Task Management – Organize and assign tasks effortlessly with intelligent automation.",
            "Track Progress in Real-Time – Stay updated with clear visibility into project milestones and timelines.",
            "Enhance Team Communication – Improve collaboration and alignment for faster, more productive outcomes."
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

export default ChatbotDevelopment;
