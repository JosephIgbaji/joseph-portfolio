import React from "react";
import "./About.css";
import image from "../../Assets/my_image.png";
import myCv from "../documents/Joseph-Igbaji-CV.pdf";

const About = () => {
  return (
    <section id="about-section">
      <img src={image} alt="" className="about-img" />
      <div className="about-right">
        <h1 className="about-right-title">About Me</h1>
        <h1 className="about-title-grey">About</h1>
        <p className="about-right-para">
          I am a skilled and passionate Fullstack Developer with experience in
          creating visually appealing and user friendly applications. I have a
          strong understanding of Javascript, design implementations and a keen
          eye for detail, etc.
        </p>

        <div className="about-info">
          <div className="about-left-info">
            <li>Name:</li>
            <li id="address">Address:</li>
            <li>Email:</li>
            <li>Phone:</li>
          </div>
          <div className="about-right-info">
            <li>Igbaji Joseph Kolitem</li>
            <li>14. Ahmadu Bello Way, Victoria Island, lagos</li>
            <li>Igbajijoseph.k@gmail.com</li>
            <li>(+234) 9036518841</li>
          </div>
        </div>
        <button className="about-download-cv-btn">
          <a
            // href={myCv}
            href="https://drive.google.com/file/d/1_VHLgUKrK3yIUTEJ57n0WOZxKushdaOt/view?usp=drive_link"
            download="joseph-cv.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Download CV
          </a>
        </button>
      </div>
    </section>
  );
};

export default About;
