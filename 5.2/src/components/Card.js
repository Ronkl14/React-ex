import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.url} className="card-img" />
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
      <a href="#">{props.link1} </a>
      <a href="#">{props.link2} </a>
    </div>
  );
};

export default Card;
