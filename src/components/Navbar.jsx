import React, { useState } from "react";
import { Link } from "react-scroll"; // <-- react-scroll for smooth scroll
import { Link as RouterLink } from "react-router-dom"; // for Login/Signup navigation
import "./navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <RouterLink to="/" onClick={closeMenu}>
            Car<span>Rental</span>
          </RouterLink>
        </div>

        {/* Toggle Button */}
        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Nav & Auth Links */}
        <div className={`navbar-menu ${menuOpen ? "open" : ""}`}>
          <ul className="navbar-links">
            <li>
              <Link to="home" smooth={true} duration={600} offset={-70} onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="rentcar" smooth={true} duration={600} offset={-70} onClick={closeMenu}>
                Rent Car
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={600} offset={-70} onClick={closeMenu}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={600} offset={-70} onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>

          <div className="navbar-auth">
            <RouterLink to="/login" className="login-btn" onClick={closeMenu}>
              Log in
            </RouterLink>
            <RouterLink to="/signup" className="signup-btn" onClick={closeMenu}>
              Sign Up
            </RouterLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
