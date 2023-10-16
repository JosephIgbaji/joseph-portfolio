import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import IJKLogo from "../../Assets/IJK-logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={IJKLogo} alt="" className="logo" />
      <div className="desktopMenu">
        <Link className="desktopMenuListItem">Home</Link>
        <Link className="desktopMenuListItem">About</Link>
        <Link className="desktopMenuListItem">Skills</Link>
        <Link className="desktopMenuListItem">Lifestyle</Link>
        {/* <Link className="desktopMenuListItem">Contact</Link> */}
      </div>
      <button className="desktopMenuBtn">Contact me</button>
    </nav>
  );
};

export default Navbar;
