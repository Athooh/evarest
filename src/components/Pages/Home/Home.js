import React from "react";
import { motion } from "framer-motion";
import "./Home.css";
import "../../Button/Button.css";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

function Home() {
  return (
    <div className="home">
      <HeroSection />
      <ServicesSection />
      <OurCompany />
      <StatsSection />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="hero-section">
        {/* Hero Content - Slides in from the Left */}
        <motion.div
          className="hero-content"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1>Empowering Businesses, Elevating Innovation.</h1>
          <p>We build cutting-edge applications for your business.</p>
          <button className="button">Get Started</button>
        </motion.div>

        {/* Hero Image - Slides in from the Right */}
        <motion.div
          className="hero-image"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }} // Delay to stagger effect
        >
          <img src="./assets/hero.png" alt="hero" />
        </motion.div>
      </div>
  );
}


function ServicesSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      document.querySelectorAll(".service").forEach((service, index) => {
        service.style.transitionDelay = `${index * 0.2}s`;
        service.classList.add("fade-in");
      });
    }
  }, [inView]);

  return (
    <div className="services" ref={ref}>
      <h3>Services</h3>
      <h1>Our services include:</h1>
      <div className="services-list">
        <div className="service">
          <img src="./assets/ux.png" alt="Visual Design" />
          <h4>Visual Design</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel sit maxime assumenda. maiores, magnam</p>
        </div>
        <div className="service">
          <img src="./assets/app-development.png" alt="Development" />
          <h4>Development</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel sit maxime assumenda. maiores, magnam</p>
        </div>
        <div className="service">
          <img src="./assets/laptop.png" alt="Testing" />
          <h4>QA Testing</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel sit maxime assumenda. maiores, magnam</p>
        </div>
        <div className="service">
          <img src="./assets/it-manager.png" alt="IT" />
          <h4>IT Management</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel sit maxime assumenda. maiores, magnam</p>
        </div>
        <div className="service">
          <img src="./assets/cyber-security.png" alt="security" />
          <h4>Cyber Security</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel sit maxime assumenda. maiores, magnam</p>
        </div>
        <div className="service">
          <img src="./assets/telecommunication.png" alt="wireless" />
          <h4>Wireless Connectivity</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel sit maxime assumenda. maiores, magnam</p>
        </div>
      </div>
    </div>
  );
}


function StatsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [counts, setCounts] = useState({
    projects: 0,
    partners: 0,
    years: 0,
    countries: 0,
  });

  useEffect(() => {
    if (inView) {
      const incrementCounts = () => {
        setCounts((prevCounts) => ({
          projects: Math.min(prevCounts.projects + 1, 150),
          partners: Math.min(prevCounts.partners + 1, 50),
          years: Math.min(prevCounts.years + 1, 10),
          countries: Math.min(prevCounts.countries + 1, 20),
        }));
      };

      const interval = setInterval(incrementCounts, 20);

      return () => clearInterval(interval);
    }
  }, [inView]);

  return (
    <div className="stats-section" ref={ref}>
      <h3>Our Achievements</h3>
      <div className="stats-list">
        <div className="stat">
          <h4>Projects Undertaken</h4>
          <p>{counts.projects}+</p>
        </div>
        <div className="stat">
          <h4>Partners</h4>
          <p>{counts.partners}+</p>
        </div>
        <div className="stat">
          <h4>Years in Business</h4>
          <p>{counts.years}+</p>
        </div>
        <div className="stat">
          <h4>Countries Served</h4>
          <p>{counts.countries}+</p>
        </div>
      </div>
    </div>
  );
}
 
function OurCompany() {
  return (
    <div className="company">
      <div className="our-company">
        <div className="company-section">
            <h3>Our Company</h3>
            <h1>Innovative It Helping Service All Over the World</h1>
            <p>
            It is a long established fact that a reader will be distracted by the rea dable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more or less normal distribution of letters, as opposed to using Content here,content here normal distribution looking at its.
            </p>
            <p>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form variations passages.
            </p>
            <button className="button">Learn More</button>
        </div>
        <div className="company-image">
          <img src="./assets/company.jpg" alt="company" />
        </div>
      </div>
    </div>
  );
}
export default Home;

