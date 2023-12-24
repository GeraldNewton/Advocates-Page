import React from "react";
import Messageicon from "../../assests/Messageicon.png";
import "./emailtile.css";
export default function Emailtile() {
  return (
    <div className="emailtile-emailtile">
      <img src={Messageicon} alt="" className="Messageicon-emailtile" />
      <div className="text-emailtile">Enter your e-mail address</div>
      <div className="button-emailtile">Let's talk</div>
    </div>
  );
}
