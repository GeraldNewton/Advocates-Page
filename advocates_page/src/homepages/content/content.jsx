import React from "react";
import Emailtile from "./emailtile.jsx";
// import Personicon from "../assests/Personicon.png";
import "./content.css";
import Person from "./personicon.jsx";
export default function Content() {
  return (
    <div className="content-content">
      <div className="text-content">
        <div>
          <div className="lighttext-content">You don't have to</div>
          <div className="strongtext-content">Fight them Alone.</div>
        </div>
        <div className="para-content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
          aliquam debitis velit, cupiditate, adipisci accusantium consequatur
          quaerat alias, provident omnis expedita illo quibusdam modi molestias
          ipsam quidem laudantium fugiat dignissimos? Consectetur quo sequi
          eligendi. Iste maxime explicabo suscipit minima natus neque 
        </div>
        <div>
          <Emailtile />
        </div>
      </div>
      <div className="picture-content">
        <Person />
      </div>
    </div>
  );
}
