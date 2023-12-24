import React from "react";
import "./choose.css"
import Gift from "../../assests/Gifticon.png";
export default function Choose(){
    function card(num){
        return(
            <div className="container-choose">
                <div className="gift-choose">
                    <img src={Gift} alt=""/>
                </div>
                <div className="percent-choose">{num}%</div>
                <div className="para-choose">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti dicta reiciendis in nesciunt! At soluta ut quas. Numquam necessitatibus veniam ullam in molestias amet reiciendis omnis expedita. Alias, autem reprehenderit.</div>
                <div className="tile-choose">Read more</div>
            </div>
        )
    }
    return(
        <div>
            <div>Why Choose us?</div>
            <div className="giftcard-choose">{[card(98),card(100),card(100)]}</div>
            {/* remember to mention how to use foreach and array to represent elements in UI */}
        </div>
    )
}