import React from "react";
import "./ContactCard.css";

const ContactCard = ({ svg, title, details }) => {
  return (
    <section className="contact-card">
      <div className="contact-card-logo">{svg}</div>
      <h2 className="contact-card-title">{title}</h2>
      <p className="contact-card-details">{details}</p>
    </section>
  );
};

export default ContactCard;
