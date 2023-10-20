import React from "react";
import bg from "../../Assets/hero-image-nbg.png";
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
        <p className="introPara">A freelance Developer</p>
        <div className="introBtn">
          <Link to="contact" smooth={true} offset={-50} duration={500}>
            <button className="btn btn-hire">Hire Me</button>{" "}
          </Link>
          <Link>
            <button className="btn btn-my-works">My Works</button>{" "}
          </Link>
        </div>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
