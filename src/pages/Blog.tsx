import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

// Blog data
const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Business Process Automation",
    slug: "future-of-ai-in-business-process-automation",
    summary: "Discover how AI is revolutionizing business processes and creating unprecedented efficiency gains across industries.",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    date: "October 15, 2023"
  },
  {
    id: 2,
    title: "Implementing Chatbots: A Strategic Guide for Businesses",
    slug: "implementing-chatbots-strategic-guide",
    summary: "Learn how to successfully implement chatbots in your business to enhance customer service and streamline operations.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1506&q=80",
    date: "September 28, 2023"
  },
  {
    id: 3,
    title: "AI-Driven Content Generation: Transforming Marketing Strategies",
    slug: "ai-driven-content-generation",
    summary: "Explore how AI-powered content generation is reshaping marketing strategies and delivering personalized customer experiences.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    date: "September 12, 2023"
  },
  {
    id: 4,
    title: "Measuring ROI on AI Investments: Key Metrics for Success",
    slug: "measuring-roi-on-ai-investments",
    summary: "Understand the essential metrics and frameworks for measuring the return on investment of your AI implementation projects.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    date: "August 30, 2023"
  }
];

const Blog = () => {
  const [refHeader, inViewHeader] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [refBlogs, inViewBlogs] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="container mx-auto px-4 py-24">
      <motion.div
        ref={refHeader}
        initial={{ opacity: 0, y: 20 }}
        animate={inViewHeader ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold mb-6 text-primary">Blog for Business Transformation: Automation Insights</h1>
        <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        <p className="text-xl max-w-3xl mx-auto">
          Dive into our collection of insights designed to help your business harness the transformative power of AI. 
          From implementation strategies to measuring success, our blog provides actionable knowledge to drive your 
          digital transformation journey.
        </p>
      </motion.div>

      <motion.div
        ref={refBlogs}
        initial={{ opacity: 0, y: 30 }}
        animate={inViewBlogs ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="grid md:grid-cols-2 lg:grid-cols-2 gap-10"
      >
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={inViewBlogs ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
          >
            <Link to={`/blog/${post.slug}`} className="block">
              <div className="bg-secondary-dark rounded-xl overflow-hidden shadow-lg h-full transition-transform duration-300 group-hover:shadow-2xl relative">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="text-primary text-sm font-medium mb-2">{post.date}</div>
                  <h2 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{post.title}</h2>
                  
                  {/* Summary that appears on hover */}
                  <div className="absolute inset-0 bg-secondary-dark bg-opacity-90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="p-8 text-center">
                      <h3 className="text-2xl font-bold mb-4 text-primary">{post.title}</h3>
                      <p className="text-lg">{post.summary}</p>
                      <span className="inline-block mt-6 text-primary font-medium">Read More →</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Blog;
