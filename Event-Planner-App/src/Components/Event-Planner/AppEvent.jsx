import React from "react";
import Header from "./Header";
import Description from "./Description";
import EventCategories from "./EventCategories";
import Features from "./Features";
import Testimonials from "./Testimonials";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

function AppEvent() {
  return (
    <div>
      <Header />
      <Description />
      <EventCategories />
      <Features />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default AppEvent;
