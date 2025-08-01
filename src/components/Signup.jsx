import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import "./signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false); // ✅ Success state
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://login-signup-msjq.onrender.com/api/auth/signup",
        formData,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      if (res.status === 200 || res.status === 201) {
        setSuccess(true); // Show success message
        setError("");

        // Delay redirect to login so user sees success message
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      }
    } catch (err) {
      setSuccess(false);
      setError(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <motion.div
      className="container d-flex justify-content-center align-items-center vh-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <form className="w-50 p-4 border rounded bg-white shadow" onSubmit={handleSubmit}>
        <h2 className="text-center mb-4">Sign Up</h2>

        {/* Error Message */}
        {error && <p className="text-danger">{error}</p>}

        {/* Success Message */}
        {success && <p className="text-success">Signup successful! Redirecting...</p>}

        <div className="mb-3">
          <label>Full Name</label>
          <input
            type="text"
            className="form-control"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">Sign Up</button>

        <p className="text-center mt-3">
          Already have an account?{" "}
          <Link to="/login" className="signup-link">
            Login
          </Link>
        </p>
      </form>
    </motion.div>
  );
};

export default Signup;
