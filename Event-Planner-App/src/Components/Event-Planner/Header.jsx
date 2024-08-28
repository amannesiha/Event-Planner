import React from "react";

const Header = () => {
  return (
    <header style={{ padding: "20px", backgroundColor: "#333", color: "#fff" }}>
      <h1>Event Planner</h1>
      <nav>
        <a href="#events" style={{ margin: "0 15px", color: "#fff" }}>
          Events
        </a>
        <a href="#features" style={{ margin: "0 15px", color: "#fff" }}>
          Features
        </a>
        <a href="#testimonials" style={{ margin: "0 15px", color: "#fff" }}>
          Testimonials
        </a>
        <a href="#contact" style={{ margin: "0 15px", color: "#fff" }}>
          Contact Us
        </a>
      </nav>
    </header>
  );
};

export default Header;
