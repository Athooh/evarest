import React from 'react';
import './About.css';
import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';

function About() {
  return (
    <div className="about">
      <HeroSection />
      <AboutEvarest />
      <MissionSection />
      <VisionSection />
      <TeamSection />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="About-hero-section">
      <div className="floating-tech-elements">
        <div className="tech-circle"></div>
        <div className="tech-circle"></div>
      </div>
      <div className='hero-text'>
       <h1>About Us</h1>
       <p>Learn more about Evarest and our mission.</p>
      </div>
    </div>
  );
}

function MissionSection() {
  return (
    <motion.div 
      className="mission-section"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Our Mission
      </motion.h3>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Technology That Makes a Difference
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Our mission at Evarest is straightforward: we create technology that solves real problems for real people. We build solutions that are accessible, practical, and effective—whether for a small local business or a large organization.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        We're committed to understanding the challenges our clients face before writing a single line of code. This approach ensures we deliver technology that truly works in your context, addresses your specific needs, and creates meaningful impact where it matters most.
      </motion.p>
    </motion.div>
  );
}

function VisionSection() {
  return (
    <div className="vision-section">
      <div className='vision-container'>
        <motion.div 
          className='vision-box'
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h3>Our Vision & Purpose</h3>
          <h1>Building the Future We Want to See</h1>
          <p>We believe technology should work for people, not the other way around. In a world of increasingly complex systems, our purpose is to create solutions that feel simple, work reliably, and solve real problems.</p>
        </motion.div>

        <motion.div 
          className='vision-list'
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <div className="image-background"></div>
          <div className="image-frame">
            <div className="floating-shape"></div>
            <div className="floating-dots"></div>
            <div className="vision-content">
              <p>We're working toward a future where:</p>
              <ul>
                <li>Businesses spend less time fighting with technology and more time serving customers</li>
                <li>Organizations can focus on their mission instead of managing systems.</li>
                <li>Communities benefit from infrastructure that anticipates and meets their needs.</li>
                <li>Technology bridges gaps instead of creating new ones.</li>
              </ul>
              <p>At Evarest, we're building that future one solution at a time. Want to build it with us?</p>
              <div className='vision-button'>
                <motion.button 
                  className='button'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function AboutEvarest() {
  return (
    <div className="about-evarest">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Our Journey
      </motion.h3>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Solving Real Problems From Day One
      </motion.h1>
      <div className="book-pages">
        {[
          "Evarest began with a challenge and a question. Could technology make healthcare more accessible in Kenya? At Zone01 Kisumu's first hackathon, our founding team built AfyaChain, a blockchain solution that provided access to medical records by the patient from anywhere in the world. We won the competition, but more importantly, we discovered our purpose.",
          "That weekend taught us something powerful. When developers truly understand a problem, technology can transform lives. Not with fancy buzzwords or complicated systems, but with practical solutions that work where they're needed most.",
          "Since then, we've grown from a hackathon team into a full-service technology company, tackling challenges across healthcare, finance, infrastructure, and social impact. The name changed to Evarest, but our approach remains the same: listen carefully, build thoughtfully, and deliver technology that makes a meaningful difference."
        ].map((text, index) => (
          <motion.div
            key={index}
            className="book-page sticky-note"
            initial={{ opacity: 0, x: 100, rotate: index * 2 - 2 }}
            whileInView={{ opacity: 1, x: 0, rotate: index * 2 - 2 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8,
              delay: index * 0.2,
              type: "spring",
              stiffness: 100,
              damping: 12
            }}
            whileHover={{ 
              rotate: (index * 2 - 2) - 2,
              y: -5,
              transition: { duration: 0.2 }
            }}
          >
            <div className="tape"></div>
            <div className="page-content">
              <p>{text}</p>
              <div className="page-number">{index + 1}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function TeamSection() {
  const members = [
    { 
      name: "Stella Achar", 
      role: "CEO", 
      image: "./assets/achar.jpeg",
      linkedin: "https://linkedin.com/in/stella-achar-oiro"
    },
    { 
      name: "Seth Athooh", 
      role: "CTO", 
      image: "./assets/seth.jpeg",
      linkedin: "https://www.linkedin.com/in/oathooh/"
    },
    { 
      name: "Vincent Omondi", 
      role: "CFO", 
      image: "./assets/vincent.jpeg",
      linkedin: "https://www.linkedin.com/in/vincent-omondi"
    },
    { 
      name: "Raymond Caleb", 
      role: "COO", 
      image: "./assets/caleb.jpeg",
      linkedin: "https://linkedin.com/in/raymond-caleb"
    },
    { 
      name: "Tabitha Wendy", 
      role: "CMO", 
      image: "./assets/wendy.jpeg",
      linkedin: "https://www.linkedin.com/in/wendy-tabitha-387b0722b/"
    },
    { 
      name: "Cheryl Owala", 
      role: "CTO", 
      image: "./assets/cheryl.jpeg",
      linkedin: "https://www.linkedin.com/in/cheryl-owala-423731191/"
    }
  ];

  return (
    <div className="team-section">
      <div className="about-container">
        <div className="team-heading">
          <h1>Meet Our Team</h1>
        </div>
        <motion.div 
          className="members"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {members.map((member, index) => (
            <motion.div
              key={index}
              className="member"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { 
                  opacity: 1, 
                  scale: 1,
                  transition: {
                    type: "spring",
                    duration: 0.8,
                    bounce: 0.3
                  }
                }
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0px 5px 15px rgba(0,0,0,0.1)"
              }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={member.image} 
                alt={`${member.name} - ${member.role}`}
                onError={(e) => {
                  e.target.src = "./assets/avatar.png"; // Fallback to default avatar if image fails to load
                }}
              />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              {member.linkedin && (
                <motion.a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin-link"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`Visit ${member.name}'s LinkedIn profile`}
                >
                  <FaLinkedin size={24} />
                </motion.a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default About;
