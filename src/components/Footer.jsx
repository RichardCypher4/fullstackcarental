import React from "react";
import { motion } from "framer-motion";
import "./Footer.css";
import BlueBMW from "../assets/bluebmv.jpg";

const testimonials = [
  {
    name: "John Doe",
    image: "https://i.pravatar.cc/60?img=1",
    feedback: "This app made renting cars so simple. Excellent experience!",
  },
  {
    name: "Sarah Lee",
    image: "https://i.pravatar.cc/60?img=2",
    feedback: "Great prices and premium cars. Customer service was amazing.",
  },
  {
    name: "David Kim",
    image: "https://i.pravatar.cc/60?img=3",
    feedback: "Quick booking and reliable vehicles. Highly recommend this app.",
  },
];

const Footer = () => {
  return (
    <div className="footer-container">
      {/* Title */}
      <h2 className="footer-title">
        What Our <span>Customers</span> Have To Say
      </h2>

      {/* Testimonials */}
      <div className="testimonial-cards">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <img
              className="testimonial-img"
              src={testimonial.image}
              alt={testimonial.name}
            />
            <h4>{testimonial.name}</h4>
            <p>{testimonial.feedback}</p>
          </div>
        ))}
      </div>

      {/* BMW Banner with scroll animation */}
      <motion.div
        className="bmw-banner"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="bmw-text">
          <h3>Drive Your Dream Car Today</h3>
          <p>Luxury, comfort, and performance — all in one place.</p>
        </div>
        <motion.img
          src={BlueBMW}
          alt="BMW"
          className="bmw-image"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
        />
      </motion.div>

     
      <div className="about-section">
        <div className="about-column">
          <h4>About Us</h4>
          <p>
            We provide <span>premium car rentals</span> with unmatched comfort
            and security, making every trip memorable.
          </p>
        </div>
        <div className="about-column">
          <h4>Contact</h4>
          <p>Email: support@carrental.com</p>
          <p>Phone: +234 800 123 4567</p>
        </div>
        <div className="about-column">
          <h4>Quick Links</h4>
          <p>Home</p>
          <p>Rent Car</p>
          <p>Bookings</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;