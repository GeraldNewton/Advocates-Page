import Personicon from "../../assests/Personicon.png";
import React from "react";
import "./personicon.css"
export default function PersonIcon(){
    return(
        <div className="PersonIcon-PersonIcon">
            <img src={Personicon} className="person-PersonIcon"alt="" />
        </div>
    )
}