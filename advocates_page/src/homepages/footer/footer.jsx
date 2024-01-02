import React from "react";
import IGicon from "../../assests/IGicon.png";
import twitter from "../../assests/Twittericon.png";
import insta from "../../assests/Instaicon.png";
import facebook from "../../assests/Facebookicon.png";
import pinterest from "../../assests/Pininteresticon.png";
import "./footer.css";
export default function Footer() {
  return (
    <>
      <div className="container1-footer">
        <img src={IGicon} alt="/" />
        <div className="links-footer">
          <div>Home</div>
          <div>Attorneys</div>
          <div>Practice Areas</div>
          <div>About Us</div>
        </div>
        <div className="socialmedia-footer">
          <img src={insta} alt="" />
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
          <img src={pinterest} alt="" />
        </div>
      </div>
      <div className="container2-footer">
        <div className="">© 2020 Acme. All right reserved.</div>
        <div className="middle-space-footer">Privacy Policy</div>
        <div>Terms of Service</div>
      </div>
    </>
  );
}
