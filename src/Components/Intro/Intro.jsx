import React from "react";
import bg from "../../Assets/suit-hero-image.png";
import "./Intro.css";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <div className="introText">
          I'm{" "}
          <span className="introNameRed">
            Igbaji <br /> Joseph
          </span>{" "}
          Kolitem
        </div>
        <p className="introPara">
          Network Engineer, <br /> FullStack & Mobile Developer
        </p>
        <div className="text-lg">
          <Link to="contact" smooth={true} offset={-50} duration={500}>
            <button className="btn btn-hire">Hire Me</button>{" "}
          </Link>
          <Link to="portfolio" smooth={true} offset={-50} duration={500}>
            <button className="btn btn-my-works">My Works</button>{" "}
          </Link>
        </div>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
