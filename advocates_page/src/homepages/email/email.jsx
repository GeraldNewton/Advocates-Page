import React from "react";
import "./email.css";
export default function email() {
  const handleSearch=(e)=>{
    e.preventDefault();
  }
  return (
    <div className="container-email">
      <div className="head-email">Subscribe our newsletter</div>
      <div className="content-email">
        <form onSubmit={(e)=>handleSearch(e)} className="search-wrapper">
        <input className="Name-input-email" placeholder="Name"/>
        <input className="email-input-email" placeholder="Enter your Email"/>
        <button className="button-input-email">SEND</button>
        </form>
      </div>
    </div>
  );
}
