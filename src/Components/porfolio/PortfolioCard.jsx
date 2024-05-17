import React from "react";
import "./portfoliocard.css";

const PortfolioCard = ({ icon, title, details }) => {
  return (
    <div className="card">
      <div className="">
        <img className="h-[50px] object-contain" src={icon} alt="" />
      </div>
      <h2 className="text-black">{title}</h2>
      <p>{details}</p>
      <hr />
    </div>
  );
};

export default PortfolioCard;
