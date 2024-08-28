import React from "react";

const Features = () => {
  return (
    <section id="features" style={{ padding: "40px", textAlign: "center" }}>
      <h2>Our Features</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "20px",
        }}
      >
        <div>
          <h3>End-to-End Planning</h3>
          <p>From initial planning to event execution, we handle it all.</p>
        </div>
        <div>
          <h3>Customizable Packages</h3>
          <p>Choose packages that suit your needs and budget.</p>
        </div>
        <div>
          <h3>Experienced Team</h3>
          <p>Our team has years of experience in event management.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
