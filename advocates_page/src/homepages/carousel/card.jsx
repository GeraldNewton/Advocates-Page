import React from "react";
import "./card.css"
export default function Card({name,img}) {
  return (
    <div className="container-card">
      <img src={img} alt="" />
      <div className="name-card">{name}</div>
      <div className="ceo-card">CEO of Hunt</div>
      <div className="para-card">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
        repellendus omnis voluptatem nulla ad neque, dolorum sapiente provident
        rerum dicta error aut consectetur facilis, non explicabo quasi cumque
        corrupti officia.
      </div>
    </div>
  );
}
