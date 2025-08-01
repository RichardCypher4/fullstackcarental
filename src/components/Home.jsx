import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./home.css";

import bmv from "../assets/bmv.jpg";
import suv from "../assets/suv.jpg";
import velar from "../assets/velar.jpg";
import black from "../assets/black.jpg";

import RentCar from "./RentCar";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import Footer from "./Footer";

const carImages = [bmv, suv, velar, black];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hh">
      {/* Hero Section */}
      <div className="home-container" id="home">
        <div className="home-content">
          <h1 className="home-title">
            Easy And <span className="highlight">Fast Way</span> To Rent Your Car
          </h1>
          <p className="home-subtitle">
            We offer a wide range of premium cars to suit your needs — perfect for
            weekend getaways, business trips, or special occasions.
          </p>
          <button className="home-btn">Book Now</button>
        </div>

        <div className="home-car-wrapper">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={carImages[currentIndex]}
              alt="Car"
              className="home-car"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
            />
          </AnimatePresence>
        </div>
      </div>

      {/* Sections */}
      <div id="rentcar">
        <RentCar />
      </div>

      <div id="about">
        <AboutUs />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
