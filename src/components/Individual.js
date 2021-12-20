import React from "react";
import photo from "./imgs/sort.gif";
const Individual = (props) => {
  return (
    <div className="individual-main">
      <a href={props.href}>
        <img className={props.imgClass} src={props.img}></img>
      </a>
      <div className="individual-text">
        <h3 className="individual-text-header">{props.header}</h3>
        <p className="individual-text-para">{props.text}</p>
      </div>
    </div>
  );
};

export default Individual;
