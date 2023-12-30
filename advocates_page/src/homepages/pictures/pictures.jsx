import React from "react";
import "./pictures.css";
import Bussinessicon from "../../assests/Bussinessicon.png";
import Bussiness2icon from "../../assests/Bussiness2icon.png";
import Eldericon from "../../assests/Eldericon.png";
import Landlordicon from "../../assests/Landlordicon.png";
import Partnershipicon from "../../assests/Partnershipicon.png";
import Realestateicon from "../../assests/Realestateicon.png";
export default function Pictures() {
  function imageTile(image, left, text) {
    return (
      <div className="image-container-pictures">
        <div className="image-pictures" style={{ left: `${left}%` }}>
          {text}
        </div>
        <img src={image} className="row-picture" alt="" />
      </div>
    );
  }
  return (
    <div className="container-pictures">
      <div className="header-pictures">Area of practices</div>
      <div>
        {[
          imageTile(Bussinessicon, 40, "business law"),
          imageTile(Partnershipicon, 20, "partnership law"),
        ]}

        <div className="column-picture">
          {[
            imageTile(Realestateicon, 23, "real estate law"),
            imageTile(Bussiness2icon, 37, "business law"),
          ]}
        </div>
        <div>
          {[
            imageTile(Landlordicon, 35, "landlord disputes"),
            imageTile(Eldericon, 30, "elder abuse"),
          ]}
        </div>
      </div>
    </div>
  );
}
