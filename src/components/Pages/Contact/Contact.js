import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCalendar, FaLinkedin, FaTwitter} from 'react-icons/fa';
import './Contact.css';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    source: ''
  });

  const [mapLoaded, setMapLoaded] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  // Exact Lake Basin Mall Kisumu coordinates
  const position = [-0.0647243, 34.7744026];

  const customIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  return (
    <div className="contact-page">
      <motion.div 
        className="contact-hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Let's Start a Conversation</h1>
        <p>Ready to solve your technology challenges? Every great solution starts with a simple conversation.</p>
      </motion.div>

      <div className="contact-grid">
        {/* Contact Information */}
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2>Get in Touch</h2>
          
          <div className="contact-methods">
            <motion.a 
              href="mailto:hello@evarest.com"
              className="contact-method"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope />
              <div>
                <h3>Email Us</h3>
                <p>hello@evarest.com</p>
              </div>
            </motion.a>

            <motion.a 
              href="tel:+254712345678"
              className="contact-method"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPhone />
              <div>
                <h3>Call Us</h3>
                <p>+254 (0) 712 345 678</p>
              </div>
            </motion.a>

            <motion.div 
              className="contact-method"
              whileHover={{ scale: 1.05 }}
            >
              <FaMapMarkerAlt />
              <div>
                <h3>Visit Us</h3>
                <p>Lake Basin Mall<br />Kisumu-Kakamega Road<br />Kisumu, Kenya</p>
              </div>
            </motion.div>

            <motion.a 
              href="#calendar"
              className="contact-method"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaCalendar />
              <div>
                <h3>Schedule a Chat</h3>
                <p>Book a time that works for you</p>
              </div>
            </motion.a>
          </div>

          <div className="social-links">
            <motion.a 
              href="https://linkedin.com/company/evarest"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a 
              href="https://twitter.com/EvarestTech"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTwitter />
            </motion.a>
            {/* <motion.a 
              href="https://github.com/evarest"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a> */}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form 
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2>Send Us a Message</h2>
          
          <div className="form-group">
            <input 
              type="text" 
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>

          <div className="form-group">
            <input 
              type="email" 
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>

          <div className="form-group">
            <input 
              type="tel" 
              placeholder="Phone (optional)"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>

          <div className="form-group">
            <textarea 
              placeholder="What challenge can we help you solve?"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
              rows={4}
            />
          </div>

          <div className="form-group">
            <select 
              value={formData.source}
              onChange={(e) => setFormData({...formData, source: e.target.value})}
              required
            >
              <option value="">How did you hear about us?</option>
              <option value="search">Search Engine</option>
              <option value="social">Social Media</option>
              <option value="referral">Referral</option>
              <option value="other">Other</option>
            </select>
          </div>

          <motion.button 
            type="submit"
            className="submit-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>

      {/* Map Section */}
      <motion.div 
        className="map-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="map-container">
          {!mapLoaded && <div className="map-loading">Loading map...</div>}
          <MapContainer 
            center={position} 
            zoom={15}
            style={{ height: '100%', width: '100%' }}
            whenReady={() => setMapLoaded(true)}
            scrollWheelZoom={false}
            zoomControl={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              loading="lazy"
            />
            <Marker position={position} icon={customIcon}>
              <Popup className="custom-popup">
                <strong>Evarest Technology Solutions</strong><br />
                Lake Basin Mall, Kisumu
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
