import React, { useState } from "react";
import "./Contact.css";
import Footer from "./Footer";
import Home from "./Home";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you could send the form data to your backend or email service
  };

  return (
    <>
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-info">
            <h2>Contact <span>Us</span></h2>
            <p>
              Have questions or need help? Reach out and our team will get back to you as soon as possible.
            </p>
            <ul>
              <li><strong>Email:</strong> support@carrental.com</li>
              <li><strong>Phone:</strong> +234 800 123 4567</li>
              <li><strong>Address:</strong> 123 Main Street, Lagos, Nigeria</li>
            </ul>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
            />
            <button type="submit">Send Message</button>
            {submitted && <p className="contact-success">Thank you! We'll be in touch soon.</p>}
          </form>
        </div>
      </section>
      
   
    </>
  );
};

export default Contact;