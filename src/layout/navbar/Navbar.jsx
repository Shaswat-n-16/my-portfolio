import React from "react";
import "./Navbar.css"; // Import your CSS file for styling

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="brand">Portfolio</div>
      <div className="menu">
        <a href="#home">Home</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
