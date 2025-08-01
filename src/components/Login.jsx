import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import './login.css';

const Login = () => {
  const [formData, setFormData] = useState({
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
        "https://login-signup-msjq.onrender.com/api/auth/login",
        formData
      );

      if (res.status === 200) {
        setSuccess(true); 
        setError("");

      
        setTimeout(() => {
          navigate("/home");
        }, 1500);
      }
    } catch (err) {
      setSuccess(false);
      setError(err.response?.data?.message || "Login failed");
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
        <h2 className="text-center mb-4">Login</h2>

        {/* Error message */}
        {error && <p className="text-danger">{error}</p>}

        {/* Success message */}
        {success && <p className="text-success">Login successful!</p>}

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

        <button type="submit" className="btn btn-primary w-100">Login</button>

        <p className="text-center mt-3">
          Don’t have an account?{" "}
          <Link to="/signup" className="signup-link">
            Sign up
          </Link>
        </p>
      </form>
    </motion.div>
  );
};

export default Login;
