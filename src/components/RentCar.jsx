import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./RentCar.css";

import Toyota from "../assets/toyota.jpg";
import Velar from "../assets/velar.jpg";
import Hilux from "../assets/hilux.jpg";
import BlueBMW from "../assets/bluebmv.jpg";
import Benz from "../assets/Benz.jpg";
import RollsRoyce from "../assets/black.jpg";

const mockCars = [
  { model: "Toyota Camry 2022", image: Toyota },
  { model: "Range Rover Velar", image: Velar },
  { model: "Toyota Hilux", image: Hilux },
  { model: "BMW X6 Blue", image: BlueBMW },
  { model: "Benz", image: Benz },
  { model: "Rolls Royce Phantom", image: RollsRoyce },
];

const RentCar = () => {
  const navigate = useNavigate();

  const handleRent = (car) => {
    navigate("/bookcar", { state: { car } });
  };

  return (
    <div className="rentcar-container">
      <h2 className="rentcar-title">
        Latest <span>Inventory</span>
      </h2>

      <div className="car-grid">
        {mockCars.map((car, index) => (
          <motion.div
            key={index}
            className="car-card"
            initial={{ opacity: 0, x: -150 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.2 }} 
          >
            <img src={car.image} alt={car.model} className="car-img" />
            <h3 className="car-model">{car.model}</h3>
            <button className="rent-btn" onClick={() => handleRent(car)}>
              Rent Car
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RentCar;
