import React from "react";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      style={{
        padding: "40px",
        backgroundColor: "#f4f4f4",
        textAlign: "center",
      }}
    >
      <h2>What Our Clients Say</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "20px",
        }}
      >
        <div>
          <p>
            "The best event planners we've ever worked with. They made our
            wedding day stress-free!"
          </p>
          <p>- Abel</p>
        </div>
        <div>
          <p>
            "Our corporate event was a huge success thanks to their
            professionalism and attention to detail."
          </p>
          <p>- Hermon</p>
        </div>
        <div>
          <p>
            "A truly unforgettable birthday celebration. Every detail was
            perfect!"
          </p>
          <p>- Yunus</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
