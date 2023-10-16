import React from "react";
import "./Skill.css";

const Skill = ({ icon, title, details }) => {
  return (
    <div className="skill-card">
      {icon}
      <h2 className="skill-card-title">{title}</h2>
      <p>{details}</p>
      <hr />
    </div>
  );
};

export default Skill;
