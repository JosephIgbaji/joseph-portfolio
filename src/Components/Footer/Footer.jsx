import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <h2>About</h2>
          <p className="about-right-para">
            I am a skilled and passionate web designer with experience in
            creating visually appealing and user friendly web app. I have a
            strong understanding of design and a keen eye for detail.
          </p>
          <div className="footer-social-icons">
            <SocialIcons
              svg={
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28 27H33L35 19H28V15C28 12.94 28 11 32 11H35V4.28C34.348 4.194 31.886 4 29.286 4C23.856 4 20 7.314 20 13.4V19H14V27H20V44H28V27Z"
                    fill="#737373"
                  />
                </svg>
              }
            />
            <SocialIcons
              svg={
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.078 45.0001C33.192 45.0001 43.101 29.9911 43.101 16.9981C43.101 16.5781 43.101 16.1521 43.083 15.7321C45.0122 14.3356 46.6772 12.6066 48 10.6261C46.1979 11.4207 44.2883 11.9443 42.333 12.1801C44.3926 10.949 45.9352 9.01203 46.674 6.72913C44.739 7.8755 42.621 8.68025 40.413 9.10813C38.9285 7.5272 36.9642 6.47988 34.8243 6.1284C32.6843 5.77692 30.4882 6.14089 28.576 7.16394C26.6639 8.18699 25.1424 9.81201 24.2473 11.7873C23.3523 13.7626 23.1335 15.9779 23.625 18.0901C19.7092 17.8938 15.8784 16.8765 12.3811 15.1044C8.88381 13.3322 5.79805 10.8447 3.324 7.80313C2.06802 9.97238 1.68472 12.5383 2.25194 14.9799C2.81916 17.4215 4.29436 19.5557 6.378 20.9491C4.81662 20.8961 3.28956 20.4768 1.92 19.7251V19.8601C1.92269 22.1326 2.70992 24.3344 4.14862 26.0934C5.58732 27.8524 7.58924 29.0607 9.816 29.5141C8.97079 29.747 8.09769 29.863 7.221 29.8591C6.60295 29.861 5.98614 29.8037 5.379 29.6881C6.00836 31.6443 7.23382 33.3546 8.88374 34.5796C10.5337 35.8045 12.5254 36.4827 14.58 36.5191C11.0897 39.2605 6.7782 40.7473 2.34 40.7401C1.55796 40.7434 0.776469 40.6983 0 40.6051C4.50454 43.4769 9.73589 45.0018 15.078 45.0001Z"
                    fill="#737373"
                  />
                </svg>
              }
            />
            <SocialIcons
              svg={
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.32 14.6698C12.72 14.6698 14.64 12.7198 14.64 10.3498C14.64 7.97979 12.69 6.02979 10.32 6.02979C7.95 6.02979 6 7.97979 6 10.3498C6 12.7198 7.95 14.6698 10.32 14.6698ZM18.75 17.9398V41.9998H26.19V30.1198C26.19 26.9698 26.79 23.9398 30.66 23.9398C34.53 23.9398 34.53 27.5398 34.53 30.2998V41.9998H42V28.7998C42 22.3198 40.62 17.3398 33.06 17.3398C29.43 17.3398 27 19.3198 26.01 21.2098H25.92V17.9098H18.78L18.75 17.9398ZM6.6 17.9398H14.07V41.9998H6.6V17.9398Z"
                    fill="#737373"
                  />
                </svg>
              }
            />
          </div>
        </div>
        <div className="footer-top-center">
          <h2>Links</h2>
          <li>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_237_125)">
                <path
                  d="M15.06 5.28289L20.717 10.9399C20.9979 11.2211 21.1557 11.6024 21.1557 11.9999C21.1557 12.3974 20.9979 12.7786 20.717 13.0599L15.061 18.7179C14.7796 18.9993 14.398 19.1574 14 19.1574C13.602 19.1574 13.2204 18.9993 12.939 18.7179C12.6576 18.4365 12.4995 18.0548 12.4995 17.6569C12.4995 17.2589 12.6576 16.8773 12.939 16.5959L16.035 13.4999H4.5C4.10218 13.4999 3.72064 13.3419 3.43934 13.0605C3.15804 12.7792 3 12.3977 3 11.9999C3 11.6021 3.15804 11.2205 3.43934 10.9392C3.72064 10.6579 4.10218 10.4999 4.5 10.4999H16.035L12.94 7.40389C12.6587 7.12249 12.5008 6.74089 12.5009 6.34304C12.501 5.94518 12.6591 5.56365 12.9405 5.28239C13.2219 5.00113 13.6035 4.84317 14.0014 4.84326C14.3992 4.84336 14.7807 5.00149 15.062 5.28289H15.06Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_237_125">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Home
          </li>
          <li>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_237_125)">
                <path
                  d="M15.06 5.28289L20.717 10.9399C20.9979 11.2211 21.1557 11.6024 21.1557 11.9999C21.1557 12.3974 20.9979 12.7786 20.717 13.0599L15.061 18.7179C14.7796 18.9993 14.398 19.1574 14 19.1574C13.602 19.1574 13.2204 18.9993 12.939 18.7179C12.6576 18.4365 12.4995 18.0548 12.4995 17.6569C12.4995 17.2589 12.6576 16.8773 12.939 16.5959L16.035 13.4999H4.5C4.10218 13.4999 3.72064 13.3419 3.43934 13.0605C3.15804 12.7792 3 12.3977 3 11.9999C3 11.6021 3.15804 11.2205 3.43934 10.9392C3.72064 10.6579 4.10218 10.4999 4.5 10.4999H16.035L12.94 7.40389C12.6587 7.12249 12.5008 6.74089 12.5009 6.34304C12.501 5.94518 12.6591 5.56365 12.9405 5.28239C13.2219 5.00113 13.6035 4.84317 14.0014 4.84326C14.3992 4.84336 14.7807 5.00149 15.062 5.28289H15.06Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_237_125">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>{" "}
            About
          </li>
          <li>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_237_125)">
                <path
                  d="M15.06 5.28289L20.717 10.9399C20.9979 11.2211 21.1557 11.6024 21.1557 11.9999C21.1557 12.3974 20.9979 12.7786 20.717 13.0599L15.061 18.7179C14.7796 18.9993 14.398 19.1574 14 19.1574C13.602 19.1574 13.2204 18.9993 12.939 18.7179C12.6576 18.4365 12.4995 18.0548 12.4995 17.6569C12.4995 17.2589 12.6576 16.8773 12.939 16.5959L16.035 13.4999H4.5C4.10218 13.4999 3.72064 13.3419 3.43934 13.0605C3.15804 12.7792 3 12.3977 3 11.9999C3 11.6021 3.15804 11.2205 3.43934 10.9392C3.72064 10.6579 4.10218 10.4999 4.5 10.4999H16.035L12.94 7.40389C12.6587 7.12249 12.5008 6.74089 12.5009 6.34304C12.501 5.94518 12.6591 5.56365 12.9405 5.28239C13.2219 5.00113 13.6035 4.84317 14.0014 4.84326C14.3992 4.84336 14.7807 5.00149 15.062 5.28289H15.06Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_237_125">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>{" "}
            Contact
          </li>
          <li>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_237_125)">
                <path
                  d="M15.06 5.28289L20.717 10.9399C20.9979 11.2211 21.1557 11.6024 21.1557 11.9999C21.1557 12.3974 20.9979 12.7786 20.717 13.0599L15.061 18.7179C14.7796 18.9993 14.398 19.1574 14 19.1574C13.602 19.1574 13.2204 18.9993 12.939 18.7179C12.6576 18.4365 12.4995 18.0548 12.4995 17.6569C12.4995 17.2589 12.6576 16.8773 12.939 16.5959L16.035 13.4999H4.5C4.10218 13.4999 3.72064 13.3419 3.43934 13.0605C3.15804 12.7792 3 12.3977 3 11.9999C3 11.6021 3.15804 11.2205 3.43934 10.9392C3.72064 10.6579 4.10218 10.4999 4.5 10.4999H16.035L12.94 7.40389C12.6587 7.12249 12.5008 6.74089 12.5009 6.34304C12.501 5.94518 12.6591 5.56365 12.9405 5.28239C13.2219 5.00113 13.6035 4.84317 14.0014 4.84326C14.3992 4.84336 14.7807 5.00149 15.062 5.28289H15.06Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_237_125">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>{" "}
            Skills
          </li>
          <li>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_237_125)">
                <path
                  d="M15.06 5.28289L20.717 10.9399C20.9979 11.2211 21.1557 11.6024 21.1557 11.9999C21.1557 12.3974 20.9979 12.7786 20.717 13.0599L15.061 18.7179C14.7796 18.9993 14.398 19.1574 14 19.1574C13.602 19.1574 13.2204 18.9993 12.939 18.7179C12.6576 18.4365 12.4995 18.0548 12.4995 17.6569C12.4995 17.2589 12.6576 16.8773 12.939 16.5959L16.035 13.4999H4.5C4.10218 13.4999 3.72064 13.3419 3.43934 13.0605C3.15804 12.7792 3 12.3977 3 11.9999C3 11.6021 3.15804 11.2205 3.43934 10.9392C3.72064 10.6579 4.10218 10.4999 4.5 10.4999H16.035L12.94 7.40389C12.6587 7.12249 12.5008 6.74089 12.5009 6.34304C12.501 5.94518 12.6591 5.56365 12.9405 5.28239C13.2219 5.00113 13.6035 4.84317 14.0014 4.84326C14.3992 4.84336 14.7807 5.00149 15.062 5.28289H15.06Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_237_125">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>{" "}
            Lifestyle
          </li>
        </div>
        <div className="footer-top-right">
          <h2>Have Questions?</h2>
          <li>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 11.5C11.337 11.5 10.7011 11.2366 10.2322 10.7678C9.76339 10.2989 9.5 9.66304 9.5 9C9.5 8.33696 9.76339 7.70107 10.2322 7.23223C10.7011 6.76339 11.337 6.5 12 6.5C12.663 6.5 13.2989 6.76339 13.7678 7.23223C14.2366 7.70107 14.5 8.33696 14.5 9C14.5 9.3283 14.4353 9.65339 14.3097 9.95671C14.1841 10.26 13.9999 10.5356 13.7678 10.7678C13.5356 10.9999 13.26 11.1841 12.9567 11.3097C12.6534 11.4353 12.3283 11.5 12 11.5ZM12 2C10.1435 2 8.36301 2.7375 7.05025 4.05025C5.7375 5.36301 5 7.14348 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 7.14348 18.2625 5.36301 16.9497 4.05025C15.637 2.7375 13.8565 2 12 2Z"
                fill="white"
              />
            </svg>
            14, Ahmadu Bello Way, Victoria Island, Lagos
          </li>
          <li>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.95 21C17.8667 21 15.8083 20.5457 13.775 19.637C11.7417 18.7283 9.89167 17.441 8.225 15.775C6.55833 14.1083 5.271 12.2583 4.363 10.225C3.455 8.19167 3.00067 6.13333 3 4.05C3 3.75 3.1 3.5 3.3 3.3C3.5 3.1 3.75 3 4.05 3H8.1C8.33333 3 8.54167 3.07933 8.725 3.238C8.90833 3.39667 9.01667 3.584 9.05 3.8L9.7 7.3C9.73333 7.56667 9.725 7.79167 9.675 7.975C9.625 8.15833 9.53333 8.31667 9.4 8.45L6.975 10.9C7.30833 11.5167 7.704 12.1123 8.162 12.687C8.62 13.2617 9.12433 13.816 9.675 14.35C10.1917 14.8667 10.7333 15.346 11.3 15.788C11.8667 16.23 12.4667 16.634 13.1 17L15.45 14.65C15.6 14.5 15.796 14.3873 16.038 14.312C16.28 14.2367 16.5173 14.216 16.75 14.25L20.2 14.95C20.4333 15.0167 20.625 15.1377 20.775 15.313C20.925 15.4883 21 15.684 21 15.9V19.95C21 20.25 20.9 20.5 20.7 20.7C20.5 20.9 20.25 21 19.95 21Z"
                fill="white"
              />
            </svg>
            +234 9036518841
          </li>
          <li>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 20C3.45 20 2.979 19.804 2.587 19.412C2.195 19.02 1.99934 18.5493 2 18V6C2 5.45 2.196 4.979 2.588 4.587C2.98 4.195 3.45067 3.99934 4 4H20C20.55 4 21.021 4.196 21.413 4.588C21.805 4.98 22.0007 5.45067 22 6V18C22 18.55 21.804 19.021 21.412 19.413C21.02 19.805 20.5493 20.0007 20 20H4ZM12 13L20 8V6L12 11L4 6V8L12 13Z"
                fill="white"
              />
            </svg>
            igbajijoseph.k@gmail.com
          </li>
        </div>
      </div>
      <p className="footer-copyright">
        Copyright ©2023 All rights reserved (Designed By IJK)
      </p>
    </section>
  );
};

export default Footer;

function SocialIcons({ svg }) {
  return <div className="social-icons">{svg}</div>;
}
