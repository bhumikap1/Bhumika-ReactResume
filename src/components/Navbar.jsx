import React from "react";
import { Link } from "react-router-dom";
import '../styles/Navbar.css';
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">Bhumika Pawar</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/education">Education</Link></li>
        <li><Link to="/worksexperience">Work Experience</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/certifications">Certifications</Link></li>
        <li><Link to="/resume">Resume</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
