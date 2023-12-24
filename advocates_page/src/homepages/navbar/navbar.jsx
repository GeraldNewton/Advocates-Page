import React from "react";
import Logo from "../../assests/IGicon.png";
import "./navbar.css"
export default function Navbar() {
  return (
    <div className="navbar-navbar">
      <img src={Logo} alt="" />
      <div className="links-navbar">
        <div>Home</div>
        <div>Attorneys</div>
        <div>Practice Areas</div>
        <div>About Us</div>
      </div>
      <div className="contact-navbar">Contact Now</div>
    </div>
  );
}
