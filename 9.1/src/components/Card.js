import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <h2>{props.personName}</h2>
      <h2>{props.birthday}</h2>
      <h2>{props.fish}</h2>
      <h2>{props.meat}</h2>
    </div>
  );
};

export default Card;
