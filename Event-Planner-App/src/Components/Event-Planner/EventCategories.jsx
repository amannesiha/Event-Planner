import React from "react";

const EventCategories = () => {
  return (
    <section
      id="events"
      style={{
        padding: "40px",
        backgroundColor: "#f4f4f4",
        textAlign: "center",
      }}
    >
      <h2>Our Event Categories</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "20px",
        }}
      >
        <div>
          <h3>Weddings</h3>
          <p>Beautifully crafted wedding ceremonies and receptions.</p>
        </div>
        <div>
          <h3>Corporate Events</h3>
          <p>Professional and impressive corporate gatherings.</p>
        </div>
        <div>
          <h3>Private Parties</h3>
          <p>Intimate celebrations for birthdays, anniversaries, and more.</p>
        </div>
      </div>
    </section>
  );
};

export default EventCategories;
