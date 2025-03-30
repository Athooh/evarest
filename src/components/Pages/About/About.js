import React from 'react';
import './About.css';
import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';

function About() {
  return (
    <div className="about">
      <HeroSection />
      <MissionSection />
      <AboutEvarest />
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
    <div className="mission-section">
      <h3>Our Mission</h3>
      <p>At Evarest, we are dedicated to providing the best solutions for your needs.</p>
    </div>
  );
}

function AboutEvarest() {
  return (
    <div className="about-evarest">
        <h3>About Evarest</h3>
        <p>Evarest is a technology company focused on innovation and excellence.</p>      
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
      linkedin: "https://linkedin.com/in/vincent-omondi"
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
      linkedin: "https://linkedin.com/in/tabitha-wendy"
    },
    { 
      name: "Cheryl Owala", 
      role: "CTO", 
      image: "./assets/cheryl.jpeg",
      linkedin: "https://linkedin.com/in/cheryl-owala"
    }
  ];

  return (
    <div className="team-section">
      <div className="about-container">
        <div className="team-heading">
          <h2>Meet Our Team</h2>
          <p>Our team is composed of experts in various fields.</p>
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
