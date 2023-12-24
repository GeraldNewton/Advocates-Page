import React from "react";
import gift from "../../assests/Gifticon.png";
import "./giftpic.css";
export default function Gift(){
    return(
        <div className="container-gift">
            <img src={gift} alt="" />
        </div>
    )
}