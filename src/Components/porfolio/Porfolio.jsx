import React from "react";
import "./portfolio.css";
import PortfolioCard from "./PortfolioCard";
import casebud from "../../Assets/casebud.png";
import corporate from "../../Assets/corporate-filing.png";
import sasom from "../../Assets/sasomit.png";
import xtekie from "../../Assets/X.png";
import gvendor from "../../Assets/oaks-logo.png";
import edubanc from "../../Assets/edubanc.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="relative">
        <h1 className="skills-title">MY WORKS</h1>
        <h1 className="absolute w-full top-[30px] text-opacity-40 text-gray-400 text-[2.5rem]">
          MY WORKS
        </h1>
      </div>
      <h2 className="skill-title-para">
        Click on the link to view the various project
      </h2>
      <div className="skills-list">
        <a href="https://edubanc-malenxe.vercel.app/" target="_blank">
          <PortfolioCard
            icon={edubanc}
            title="EDUBANC"
            details="NEXT.JS APPLICATION"
          />
        </a>
        <a href="https://www.sasomit.com/" target="_blank">
          <PortfolioCard
            icon={sasom}
            title="SASOM IT"
            details="REACT.JS APPLICATION"
          />
        </a>
        <a href="https://casebud.vercel.app/" target="_blank">
          <PortfolioCard
            icon={casebud}
            title="CASEBUD"
            details="REACT.JS VITE APPLICATION"
          />
        </a>
        <a href="https://oaks-survey.vercel.app/" target="_blank">
          <PortfolioCard
            icon={gvendor}
            title="GLOBAL VENDOR"
            details="VITE AND NODE WEB APPLICATION"
          />
        </a>
        <a href="https://new-corporate-malenxe.vercel.app" target="_blank">
          <PortfolioCard
            icon={corporate}
            title="COROPORATE FILLING"
            details="VITE AND NODE WEB APPLICATION"
          />
        </a>
        {/* <PortfolioCard
          icon={
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.9867 46.6933C16.7467 48.9866 29.9733 53.7333 40.4533 49.3599C39.4363 48.9644 38.455 48.4826 37.52 47.9199C33.8815 48.7483 30.1231 48.9109 26.4267 48.3999C22.9333 47.9999 24.9867 46.6933 24.9867 46.6933ZM39.2 42.2133C34.5068 43.2339 29.6766 43.4682 24.9067 42.9066C21.4133 42.5333 23.7067 40.8533 23.7067 40.8533C14.64 43.8399 28.7467 47.2533 41.4133 43.5199C40.5898 43.2494 39.8347 42.8036 39.2 42.2133ZM44.0533 16.2666C44.0533 16.2666 25.7333 20.8266 34.48 30.9066C34.8213 31.3157 35.0755 31.7901 35.2273 32.3007C35.3791 32.8114 35.4252 33.3476 35.3628 33.8767C35.3004 34.4058 35.1309 34.9166 34.8645 35.3779C34.598 35.8392 34.2404 36.2414 33.8133 36.5599C33.8133 36.5599 40.3733 33.1733 37.36 28.9333C34.3467 24.6933 32.4 23.0133 44.0533 16.2666Z"
                fill="#D72036"
              />
              <path
                d="M48.3466 51.0399C48.3466 51.0399 49.84 52.2666 46.6666 53.2266C40.6133 55.0666 21.52 55.6266 16.2133 53.2266C14.2933 52.3999 17.8666 51.2533 18.88 51.0133C19.4806 50.8582 20.0998 50.7864 20.72 50.7999C18.5866 49.3066 6.98664 53.7332 14.8266 55.0133C36.2933 58.6666 53.8666 53.5199 48.3466 51.0399ZM40.9866 38.0266C41.7708 37.5307 42.5909 37.0939 43.44 36.7199C43.44 36.7199 39.4133 37.4399 35.44 37.7866C31.1673 38.199 26.867 38.2436 22.5866 37.9199C16.24 37.0933 25.9733 34.6666 25.9733 34.6666C23.0442 34.6439 20.1531 35.3301 17.5466 36.6666C12.0533 39.4133 31.12 40.6133 40.9866 38.0266ZM43.4133 44.5333C43.3551 44.6238 43.2831 44.7048 43.2 44.7733C56.5333 41.2533 51.68 32.3733 45.28 34.6133C44.9269 34.7431 44.6206 34.9752 44.4 35.2799C44.4 35.2799 44.7733 35.1466 45.5466 34.9599C48.8 34.2933 53.3333 39.3066 43.4133 44.5333ZM32 34.6666C30.0266 30.2133 23.3066 26.2933 32 19.4399C42.9066 10.8799 37.3333 5.33325 37.3333 5.33325C39.5733 14.1599 29.3333 16.8266 25.76 22.3199C23.28 26.0799 27.0133 30.1066 32 34.6666Z"
                fill="#D72036"
              />
              <path
                d="M43.7601 56.8533C35.7034 58.2327 27.4819 58.3586 19.3867 57.2267C19.3867 57.2267 20.6134 58.24 26.9601 58.64C36.5867 59.2533 51.3601 58.32 51.7334 53.76C51.7334 53.76 51.0401 55.4667 43.7601 56.8533Z"
                fill="#D72036"
              />
            </svg>
          }
          title="JAVA"
          details="SPRINGBOOT"
        /> */}
        <a href="https://www.xperiencedtekie.pro/" target="_blank">
          <PortfolioCard
            icon={xtekie}
            title="EXPERIENCED TEKKIE"
            details="NEXTJS FULLSTACK WEB APPLICATION"
          />
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
