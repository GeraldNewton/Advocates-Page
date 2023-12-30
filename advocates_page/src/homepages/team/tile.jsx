import React from "react";
import "./tile.css";
export default function Tile({name,cases,img}){
    return(
        <div className="container-tile">
            <img src={img} alt=""  className="img-tile"/>
            <div className="content-tile">
                <div className="name-tile">{name}</div>
                <div className="case-tile">{cases} cases</div>
            </div>
        </div>
    )

}