import "./Contact.css";
import mySuitImage from "../../Assets/mySuitImage.png";

import React from "react";
import ContactCard from "../ContactCard/ContactCard";

const Contact = () => {
  return (
    <section className="contact">
      <h2 className="contact-title">Contact Me</h2>
      <h2 className="contact-title-grey">Contact</h2>
      <p className="contact-para">
        You can get in touch with me via the following means as listed below or
        kindly fill out the contact form.
      </p>
      <div className="contact-link">
        <ContactCard
          svg={
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_39_116)">
                <path
                  d="M63.3568 16.528L55.7568 10.672C55.2404 10.3404 54.6789 10.085 54.0896 9.91355C53.5027 9.72361 52.8918 9.61802 52.2752 9.59995H30.4L32.9632 25.6H52.2752C52.8 25.6 53.456 25.4816 54.0864 25.2864C54.7168 25.0912 55.3248 24.8224 55.7536 24.5312L63.3536 18.6688C63.7856 18.3776 64 17.9904 64 17.6C64 17.2096 63.7856 16.8224 63.3568 16.528ZM27.2 3.19995H24C23.5757 3.19995 23.1687 3.36852 22.8686 3.66858C22.5686 3.96864 22.4 4.3756 22.4 4.79995V16H11.7248C11.1936 16 10.5408 16.1184 9.9104 16.3168C9.2768 16.5088 8.672 16.7744 8.2432 17.072L0.6432 22.928C0.2112 23.2192 0 23.6096 0 24C0 24.3872 0.2112 24.7744 0.6432 25.072L8.2432 30.9344C8.672 31.2256 9.2768 31.4944 9.9104 31.6864C10.5408 31.8816 11.1936 32 11.7248 32H22.4V59.2C22.4 59.6243 22.5686 60.0313 22.8686 60.3313C23.1687 60.6314 23.5757 60.8 24 60.8H27.2C27.6243 60.8 28.0313 60.6314 28.3314 60.3313C28.6314 60.0313 28.8 59.6243 28.8 59.2V4.79995C28.8 4.3756 28.6314 3.96864 28.3314 3.66858C28.0313 3.36852 27.6243 3.19995 27.2 3.19995Z"
                  fill="#D72036"
                />
              </g>
              <defs>
                <clipPath id="clip0_39_116">
                  <rect width="64" height="64" fill="white" />
                </clipPath>
              </defs>
            </svg>
          }
          title="Address"
          details="14, Ahmadu Bello Way, Victoria Island, Lagos"
        />
        <ContactCard
          svg={
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M58.6667 16.0001C58.6667 13.0667 56.2667 10.6667 53.3334 10.6667H10.6667C7.73337 10.6667 5.33337 13.0667 5.33337 16.0001V48.0001C5.33337 50.9334 7.73337 53.3334 10.6667 53.3334H53.3334C56.2667 53.3334 58.6667 50.9334 58.6667 48.0001V16.0001ZM53.3334 16.0001L32 29.3334L10.6667 16.0001H53.3334ZM53.3334 48.0001H10.6667V21.3334L32 34.6667L53.3334 21.3334V48.0001Z"
                fill="#D72036"
              />
            </svg>
          }
          title="Email Address"
          details="igbajijoseph.k@gmail.com"
        />
        <ContactCard
          svg={
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.44 13.3333C17.6 15.7067 18 18.0267 18.64 20.24L15.44 23.44C14.3467 20.24 13.6533 16.8533 13.4133 13.3333H17.44ZM43.7333 45.3867C46 46.0267 48.32 46.4267 50.6667 46.5867V50.56C47.1467 50.32 43.76 49.6267 40.5333 48.56L43.7333 45.3867ZM20 8H10.6667C9.2 8 8 9.2 8 10.6667C8 35.7067 28.2933 56 53.3333 56C54.8 56 56 54.8 56 53.3333V44.0267C56 42.56 54.8 41.36 53.3333 41.36C50.0267 41.36 46.8 40.8267 43.8133 39.84C43.5486 39.744 43.2682 39.6988 42.9867 39.7067C42.2933 39.7067 41.6267 39.9733 41.0933 40.48L35.2267 46.3467C27.6678 42.481 21.519 36.3322 17.6533 28.7733L23.52 22.9067C24.2667 22.16 24.48 21.12 24.1867 20.1867C23.1751 17.1148 22.6619 13.9008 22.6667 10.6667C22.6667 9.2 21.4667 8 20 8Z"
                fill="#D72036"
              />
            </svg>
          }
          title="Contact Number"
          details="(+234) 9036518841"
        />
      </div>
      <div className="contact-form-section">
        <img src={mySuitImage} alt="" />
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea className="form-textarea" placeholder="message"></textarea>
          <button className="contact-submit-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
