import React from "react";
import { motion } from "framer-motion";
import "./AboutUs.css";
import aboutImg from "../assets/benz.jpg";

const AboutUs = () => (
  <section className="aboutus-section">
    <div className="aboutus-content">
    
      <div className="aboutus-text">
        <h2>
          About <span>Us</span>
        </h2>
        <p>
          We provide <strong>premium car rentals</strong> with unmatched comfort, security, and style. Our fleet includes luxury, family, and utility vehicles to suit every journey. Whether for business, leisure, or special occasions, we ensure a smooth and memorable ride.
        </p>
        <ul>
          <li>Wide range of luxury and economy cars</li>
          <li>24/7 customer support</li>
          <li>Easy online booking and flexible rental plans</li>
          <li>Professional drivers available on request</li>
        </ul>
      </div>

      <motion.div
        className="aboutus-image"
        initial={{ opacity: 0, x: -150 }}   
        whileInView={{ opacity: 1, x: 0 }}  
        viewport={{ once: true, amount: 0.3 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img src={aboutImg} alt="About Car Rental" />
      </motion.div>
    </div>
  </section>
);

export default AboutUs;
