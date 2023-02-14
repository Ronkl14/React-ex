import React from "react";
import "./CustomButton.css";

const CustomButton = (props) => {
  return (
    <button className={props.color} onClick={props.clickFunc}>
      {props.color}
    </button>
  );
};

export default CustomButton;
