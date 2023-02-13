import React from "react";
import Ballon from "./Ballon";
import "./Child.css";

const Child = (props) => {
  return (
    <div className="child">
      <h3>{props.name}</h3>
      <Ballon color={props.color}></Ballon>
    </div>
  );
};

export default Child;
