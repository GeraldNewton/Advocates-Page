import React from "react";
import "./choose.css"
// import Gift from "../../assests/Gifticon.png";
import Gift from "./giftpic";
export default function Choose(){
    function card(num){
        return(
            <div className="container-choose">
                <Gift/>
                <div className="percent-choose">{num}%</div>
                <div className="para-choose">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti dicta reiciendis in nesciunt! At soluta ut quas. Numquam necessitatibus.</div>
                <div className="tile-choose">Read more</div>
            </div>
        )
    }
    return(
        <div className="parent-choose">
            <div className="Heading-choose">Why Choose us?</div>
            <div className="giftcard-choose">{[card(98),card(100),card(100)]}</div>
            {/* remember to mention how to use foreach and array to represent elements in UI and understand what I did with card function to display it */}
        </div>
    )
}