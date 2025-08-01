import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import RentCar from "./components/RentCar";
import BookCar from "./components/BookCar";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Default page is now login */}
        <Route path="/login" element={<Login />} /> 
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} /> {/* Home moved to /home */}
        <Route path="/rentcar" element={<RentCar />} />
        <Route path="/bookcar" element={<BookCar />} />  
        <Route path="/footer" element={<Footer />} /> 
        <Route path="/about" element={<AboutUs />} /> 
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
    </Router>
  );
}

export default App;
