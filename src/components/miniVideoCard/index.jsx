import React from "react";
import "./index.css";

function MiniVideoCard({ title, image }) {
  return (
    <div className="miniVideoCard" style={{marginLeft: "65px"}}>
      <img src={image} />
      <div className="title">{title}</div>
    </div>
  );
}

export default MiniVideoCard;
