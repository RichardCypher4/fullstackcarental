import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import "./BookCar.css";

import RollsRoyce from "../assets/black.jpg";
import Toyota from "../assets/toyota.jpg";
import Velar from "../assets/velar.jpg";
import Hilux from "../assets/hilux.jpg";
import BlueBMW from "../assets/bluebmv.jpg";
import Footer from "./Footer";

const mockCars = [
  {
    model: "Rolls Royce Phantom",
    passengerCapacity: 4,
    luggageCapacity: 3,
    fullDayPrice: 120000,
    halfDayPrice: 70000,
    additionalHourPrice: 15000,
    airportTransferPrice: 50000,
    description:
      "The Rolls Royce Phantom offers unmatched luxury and handcrafted interiors, ideal for weddings and premium events. Smooth rides and a quiet cabin redefine comfort.",
    image: RollsRoyce,
  },
  {
    model: "Toyota Camry 2022",
    passengerCapacity: 5,
    luggageCapacity: 4,
    fullDayPrice: 25000,
    halfDayPrice: 15000,
    additionalHourPrice: 3000,
    airportTransferPrice: 10000,
    description:
      "Toyota Camry 2022 combines reliability, comfort, and affordability. Perfect for family or city driving, with excellent fuel efficiency.",
    image: Toyota,
  },
  {
    model: "Range Rover Velar",
    passengerCapacity: 5,
    luggageCapacity: 4,
    fullDayPrice: 90000,
    halfDayPrice: 50000,
    additionalHourPrice: 12000,
    airportTransferPrice: 35000,
    description:
      "Range Rover Velar blends sleek design and powerful performance, perfect for adventurous trips or luxurious commutes.",
    image: Velar,
  },
  {
    model: "Toyota Hilux",
    passengerCapacity: 5,
    luggageCapacity: 3,
    fullDayPrice: 60000,
    halfDayPrice: 30000,
    additionalHourPrice: 8000,
    airportTransferPrice: 20000,
    description:
      "Toyota Hilux is rugged and reliable, designed for heavy-duty work and family adventures. Built to tackle tough terrains with ease.",
    image: Hilux,
  },
  {
    model: "BMW X6 Blue",
    passengerCapacity: 5,
    luggageCapacity: 3,
    fullDayPrice: 110000,
    halfDayPrice: 65000,
    additionalHourPrice: 14000,
    airportTransferPrice: 40000,
    description:
      "BMW X6 Blue combines sporty elegance with high-end tech and performance. A premium choice for stylish and powerful drives.",
    image: BlueBMW,
  },
];


const BookCar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const car = location.state?.car;

  const selectedCar = mockCars.find((c) => c.model === car?.model) || mockCars[0];

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    age: "",
    pickupDate: "",
    serviceType: "",
    city: "",
    vehicleType: selectedCar.model.split(" ")[0],
    vehicleYear: "",
    vehicleQuantity: 1,
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://carental-ey7b.onrender.com/api/bookings",
        formData
      );
      console.log("Booking success:", res.data);
      setMessage("Booking successful!");
    } catch (err) {
      console.error("Booking error details:", err.response?.data || err.message);
      setMessage("Failed to book car. Try again.");
    }
  };

  return (
    <>
    <div className="bookcar-container">
      {/* Back button for mobile */}
      <button
        className="back-btn-mobile"
        onClick={() => navigate(-1)}
        aria-label="Go back"
      >
        &#8592; Back
      </button>
      <div className="car-info-container">
        <motion.div
          className="car-image"
          initial={{ x: -120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <img src={selectedCar.image} alt={selectedCar.model} />
        </motion.div>

        <div className="car-details">
          <h2>{selectedCar.model}</h2>
          <p><strong>Passengers:</strong> {selectedCar.passengerCapacity}</p>
          <p><strong>Luggage:</strong> {selectedCar.luggageCapacity}</p>
          <p><strong>Full Day Price:</strong> ₦{selectedCar.fullDayPrice.toLocaleString()}</p>
          <p><strong>Half Day Price:</strong> ₦{selectedCar.halfDayPrice.toLocaleString()}</p>
          <p><strong>Additional Hour:</strong> ₦{selectedCar.additionalHourPrice.toLocaleString()}</p>
          <p><strong>Airport Transfer:</strong> ₦{selectedCar.airportTransferPrice.toLocaleString()}</p>
        </div>
      </div>

      {/* Car description */}
      <motion.div
        className="car-description"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <p>{selectedCar.description}</p>
      </motion.div>

      {/* Booking form */}
      <motion.div
        className="bookcar-form"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <h2>Book This Car</h2>
        <form onSubmit={handleSubmit} className="form-large">
          <input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <input type="text" name="phone" placeholder="Phone" onChange={handleChange} required />
          <input type="number" name="age" placeholder="Age" onChange={handleChange} required />
          <input type="date" name="pickupDate" onChange={handleChange} required />
          <input type="text" name="serviceType" placeholder="Service Type (Full/Half Day)" onChange={handleChange} required />
          <input type="text" name="city" placeholder="City" onChange={handleChange} required />
          <input type="text" name="vehicleType" value={formData.vehicleType} readOnly />
          <input type="text" name="vehicleYear" placeholder="Vehicle Year" onChange={handleChange} required />
          <input type="number" name="vehicleQuantity" placeholder="Vehicle Quantity" value={formData.vehicleQuantity} onChange={handleChange} required />

          <button type="submit">Confirm Booking</button>
        </form>
        {message && <p className="success-message">{message}</p>}
      </motion.div>
    </div>
    <Footer />
    </>
  );
};

export default BookCar;
