import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, PlaneTakeoff, CheckCircle, BookOpen, BarChart2 } from 'lucide-react';

const ContentGeneration = () => {
  return (
    <div className="container mx-auto px-4 py-24 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold mb-6 text-primary">AI Content Generation Systems</h1>
        <p className="text-xl max-w-3xl mx-auto text-gray-300">
         Experience how AI can supercharge your content process — enhancing productivity, streamlining workflows, and unlocking a constant flow of fresh, creative ideas. Let innovation lead the way.
        </p>
      </motion.div>

      <div className="space-y-24">
        <StepSection 
          step={1}
          title="Automation"
          icon={<Brain className="w-16 h-16 text-primary" />}
          description="Automated Content Production"
          details={[
            "Generate Simple Content Quickly – Create social media posts, product descriptions, and data-driven reports with ease.",
            "Save Time & Resources – Let AI handle routine content tasks, freeing up your team for higher-level work..",
            "Ensure Consistency & Efficiency – Maintain a unified brand voice and streamline your content production process."
          ]}
        />

        <StepSection 
          step={2}
          title="Customized"
          icon={<PlaneTakeoff className="w-16 h-16 text-primary" />}
          description="Customized Content"
          details={[
            "Analyze User Data & Behavior – AI studies how users interact to understand their preferences and needs.",
            "Deliver Personalized Content – Create content tailored to each user for a more engaging experience.",
            "Boost Conversions – Personalized experiences lead to stronger engagement and higher conversion rates."
          ]}
        />

        <StepSection 
          step={3}
          title="SEO"
          icon={<CheckCircle className="w-16 h-16 text-primary" />}
          description="SEO Refinement"
          details={[
            "Analyze Search Engine Algorithms – AI studies current SEO trends and algorithm updates.",
            "Recommend Best SEO Practices – Get data-driven guidance to optimize your content effectively.",
            "Improve Search Visibility – Boost your rankings and reach more audiences with smarter SEO strategies."
          ]}
        />

        <StepSection 
          step={4}
          title="Compilation"
          icon={<BookOpen className="w-16 h-16 text-primary" />}
          description="Content Compilation"
          details={[
            "Understand User Behavior – AI analyzes past actions, preferences, and interactions.",
            "Curate Relevant Content – Automatically selects and delivers content tailored to each user.",
            "Enhance User Engagement – Create a more personalized experience that keeps users interested and coming back."
          ]}
        />

        <StepSection 
          step={5}
          title="Strategy"
          icon={<BarChart2 className="w-16 h-16 text-primary" />}
          description="Content Strategy"
          details={[
            "Analyze Performance & Trends – AI reviews your content data and monitors industry shifts.",
            "Recommend Smart Strategies – Get insights on the best topics, formats, and posting schedules.",
            "Maximize Impact – Create high-performing content that aligns with audience interests and timing."
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

export default ContentGeneration;
