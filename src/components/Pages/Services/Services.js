import React from 'react';
import { motion } from 'framer-motion';
import './Services.css';
import ChatBot from '../../ChatBot/ChatBot';
function Services() {
  const services = [
    {
      title: "Custom Software Development",
      icon: "💻",
      description: "When Off-the-Shelf Just Doesn't Cut It",
      details: "Are existing software options forcing you to change how you work? Our custom solutions fit your processes, not the other way around.",
      benefits: [
        "Software that matches how your team actually works",
        "Interfaces designed for your specific users",
        "Systems that grow with your organization",
        "Documentation and training that doesn't require a computer science degree"
      ]
    },
    {
      title: "Fintech Solutions",
      icon: "💳",
      description: "Financial Clarity Leads to Better Decisions",
      details: "Is tracking your finances taking time away from growing your business? Our fintech solutions bring order to financial chaos.",
      benefits: [
        "Clear visibility into your financial health",
        "Automated tracking of expenses and revenue",
        "Insights that highlight opportunities and issues",
        "Secure systems that protect sensitive financial data"
      ]
    },
    {
      title: "Healthcare Technology",
      icon: "🏥",
      description: "Better Care Through Better Systems",
      details: "Are administrative tasks taking time away from patient care? Our healthcare solutions streamline processes so you can focus on what matters most.",
      benefits: [
        "Streamlined patient information management",
        "Better coordination between care providers",
        "Reduced administrative overhead",
        "Data-driven insights for improved care decisions"
      ]
    },
    {
      title: "Agricultural Technology",
      icon: "🌾",
      description: "Growing More With Smarter Systems",
      details: "Struggling to maximize yields or manage farm operations efficiently? Our agritech solutions bring digital precision to agriculture.",
      benefits: [
        "Real-time monitoring of crop conditions",
        "Better decision-making through data and analytics",
        "Streamlined farm management processes",
        "Improved access to markets and fair pricing"
      ]
    },
    {
      title: "Real Estate Systems",
      icon: "🏢",
      description: "Property Management Made Simple",
      details: "Managing properties shouldn't mean drowning in paperwork. Our real estate technology simplifies every aspect of property management.",
      benefits: [
        "Centralized property and tenant management",
        "Automated rent collection and payment tracking",
        "Maintenance request systems",
        "Analytics that help optimize property performance"
      ]
    },
    {
      title: "AI & Data-Driven Systems",
      icon: "🤖",
      description: "Make Your Data Work For You",
      details: "Sitting on valuable data but not sure how to use it? Our AI solutions turn information into action.",
      benefits: [
        "Practical insights from your existing data",
        "Prediction tools that help you plan effectively",
        "Automation that handles repetitive analysis",
        "Clear recommendations, not just complicated reports"
      ]
    }
  ];

  return (
    <div>
      <div className="services-page">
        <motion.div 
          className="services-hero-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Solutions That Solve Real Problems</h1>
          <p>At Evarest, we don't just build what's technically impressive, we build what works. Every service we offer starts with understanding your challenge and ends with technology that makes a tangible difference.</p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                rotateY: 5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
            >
              <div className="service-icon">{service.icon}</div>
              <h2>{service.title}</h2>
              <h3>{service.description}</h3>
              <p>{service.details}</p>
              <div className="benefits">
                {service.benefits.map((benefit, i) => (
                  <motion.div 
                    key={i}
                    className="benefit"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                     {benefit}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <ChatBot />
    </div>
  );
}

export default Services;
