import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick, index }) => {
  return (
    <motion.div 
      className="border-b border-gray-700 last:border-b-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <button
        className="w-full py-5 px-4 flex justify-between items-center text-left focus:outline-none"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <h3 className="text-xl font-semibold">{question}</h3>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
        )}
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div 
          className="px-4 pb-5 text-gray-300"
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      </motion.div>
    </motion.div>
  );
};

const FAQs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [refHeader, inViewHeader] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [refFAQs, inViewFAQs] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const faqData = [
    {
      question: "What is AI automation and how can it benefit my business?",
      answer: "AI automation refers to the use of artificial intelligence technologies to automate tasks and processes that traditionally required human intervention. It can benefit your business in multiple ways:<br/><br/><ul class='list-disc pl-5 space-y-2'><li>Increased operational efficiency by automating repetitive tasks</li><li>Reduced costs through labor savings and error reduction</li><li>Enhanced customer experiences through faster response times and personalization</li><li>Improved decision-making with data-driven insights</li><li>Scalability to handle growing business demands without proportional increases in resources</li></ul><br/>At Zeltrix AI, we help businesses identify the most valuable automation opportunities and implement solutions that deliver measurable ROI."
    },
    {
      question: "How do I know if my business is ready for AI adoption?",
      answer: "Business readiness for AI adoption can be assessed across several dimensions:<br/><br/><ul class='list-disc pl-5 space-y-2'><li><strong>Data readiness:</strong> Do you have sufficient quality data to train AI systems?</li><li><strong>Process clarity:</strong> Are your business processes well-defined and documented?</li><li><strong>Technical infrastructure:</strong> Do you have the necessary technical foundation to support AI implementation?</li><li><strong>Organizational alignment:</strong> Is there executive support and clear business objectives for AI initiatives?</li><li><strong>Skills and resources:</strong> Do you have access to the right expertise, either internally or through partners?</li></ul><br/>Zeltrix AI offers readiness assessments to help organizations evaluate their AI maturity and develop a strategic roadmap for successful adoption."
    },
    {
      question: "What industries does Zeltrix AI specialize in?",
      answer: "Zeltrix AI has successfully delivered AI automation solutions across multiple industries, including:<br/><br/><ul class='list-disc pl-5 space-y-2'><li><strong>Financial Services:</strong> Fraud detection, risk assessment, customer service automation, and document processing</li><li><strong>Healthcare:</strong> Patient engagement, administrative automation, and clinical decision support</li><li><strong>Retail & E-commerce:</strong> Personalization, inventory management, and customer service optimization</li><li><strong>Manufacturing:</strong> Predictive maintenance, quality control, and supply chain optimization</li><li><strong>Professional Services:</strong> Knowledge management, client engagement, and operational efficiency</li></ul><br/>Our industry-specific expertise allows us to understand the unique challenges and opportunities in each sector, delivering solutions that address specific business needs."
    },
    {
      question: "How long does it typically take to implement an AI solution?",
      answer: "Implementation timelines vary based on several factors:<br/><br/><ul class='list-disc pl-5 space-y-2'><li><strong>Solution complexity:</strong> Simple chatbots might be deployed in 4-6 weeks, while complex predictive systems could take 3-6 months</li><li><strong>Data readiness:</strong> Organizations with clean, accessible data can implement faster than those requiring significant data preparation</li><li><strong>Integration requirements:</strong> The number and complexity of system integrations impact timeline</li><li><strong>Organizational factors:</strong> Decision-making processes, change management needs, and resource availability</li></ul><br/>At Zeltrix AI, we typically follow a phased approach, starting with quick-win pilot projects that deliver value in 8-12 weeks, followed by iterative expansion. This approach balances the desire for quick results with the need for sustainable, scalable implementation."
    },
    {
      question: "What kind of ROI can I expect from AI automation?",
      answer: "ROI from AI automation varies widely depending on the specific application, industry, and implementation approach. However, we typically see:<br/><br/><ul class='list-disc pl-5 space-y-2'><li><strong>Cost reduction:</strong> 20-40% reduction in operational costs for automated processes</li><li><strong>Productivity gains:</strong> 30-50% improvement in employee productivity in augmented workflows</li><li><strong>Revenue impact:</strong> 10-30% increase in conversion rates through personalization and optimization</li><li><strong>Customer satisfaction:</strong> 15-35% improvement in customer satisfaction scores</li></ul><br/>Beyond these quantitative measures, organizations often realize significant qualitative benefits such as improved decision quality, enhanced agility, and better employee experiences. Zeltrix AI works with clients to establish clear success metrics and ROI tracking from the outset of each project."
    },
    {
      question: "How does Zeltrix AI ensure the security and privacy of our data?",
      answer: "Data security and privacy are foundational to our approach at Zeltrix AI:<br/><br/><ul class='list-disc pl-5 space-y-2'><li><strong>Comprehensive security framework:</strong> We implement industry-leading security practices across all solutions</li><li><strong>Data minimization:</strong> We only collect and process the data necessary for the specific AI application</li><li><strong>Privacy by design:</strong> Privacy considerations are integrated from the earliest stages of solution design</li><li><strong>Compliance expertise:</strong> Our solutions adhere to relevant regulations such as GDPR, CCPA, HIPAA, etc.</li><li><strong>Transparent data practices:</strong> We provide clear documentation on how data is used, stored, and protected</li><li><strong>Regular security assessments:</strong> All solutions undergo rigorous security testing and reviews</li></ul><br/>We work closely with clients to understand their specific security requirements and ensure our solutions meet or exceed their standards."
    },
    {
      question: "Do we need a large technical team to maintain AI solutions?",
      answer: "The technical resources required to maintain AI solutions depend on several factors:<br/><br/><ul class='list-disc pl-5 space-y-2'><li><strong>Solution complexity:</strong> More sophisticated AI systems may require more specialized support</li><li><strong>Integration depth:</strong> Deeply integrated solutions may need coordination across multiple technical teams</li><li><strong>Customization level:</strong> Highly customized solutions typically require more internal expertise</li></ul><br/>However, Zeltrix AI designs solutions with maintainability in mind, and we offer several support options:<br/><br/><ul class='list-disc pl-5 space-y-2'><li><strong>Fully managed services:</strong> We handle all technical maintenance and optimization</li><li><strong>Co-managed approach:</strong> We work alongside your team, providing specialized expertise</li><li><strong>Knowledge transfer:</strong> We train your team to independently maintain the solution</li></ul><br/>Many of our clients start with our managed services and gradually transition to more independent operation as their internal capabilities develop."
    },
    {
      question: "How does Zeltrix AI approach change management for AI implementation?",
      answer: "Successful AI implementation requires effective change management to ensure adoption and maximize value. Our approach includes:<br/><br/><ul class='list-disc pl-5 space-y-2'><li><strong>Stakeholder engagement:</strong> We identify and involve key stakeholders from the beginning</li><li><strong>Impact assessment:</strong> We analyze how AI will affect roles, processes, and workflows</li><li><strong>Communication strategy:</strong> We develop clear messaging about the purpose, benefits, and timeline</li><li><strong>Training programs:</strong> We provide role-specific training on how to work with AI systems</li><li><strong>Adoption monitoring:</strong> We track usage metrics and address barriers to adoption</li><li><strong>Continuous improvement:</strong> We gather feedback and iteratively enhance the solution</li></ul><br/>Our experience shows that thoughtful change management can accelerate time-to-value by 40-60% compared to implementations that neglect this critical aspect. Zeltrix AI partners with your organization to develop a change management approach tailored to your specific culture and needs."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-24">
      <motion.div
        ref={refHeader}
        initial={{ opacity: 0, y: 20 }}
        animate={inViewHeader ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold mb-6 text-primary">Frequently Asked Questions</h1>
        <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        <p className="text-xl max-w-3xl mx-auto">
          Find answers to common questions about AI automation, implementation processes, 
          and how Zeltrix AI can help transform your business operations.
        </p>
      </motion.div>

      <motion.div
        ref={refFAQs}
        initial={{ opacity: 0, y: 30 }}
        animate={inViewFAQs ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto bg-secondary-dark rounded-xl shadow-xl overflow-hidden"
      >
        {faqData.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => toggleFAQ(index)}
            index={index}
          />
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inViewFAQs ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center mt-16"
      >
        <h2 className="text-2xl font-semibold mb-4">Still have questions?</h2>
        <p className="mb-6">Our team is ready to help you find the answers you need.</p>
        <a 
          href="/contact" 
          className="inline-block bg-primary text-secondary px-8 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors"
        >
          Contact Us
        </a>
      </motion.div>
    </div>
  );
};

export default FAQs;
