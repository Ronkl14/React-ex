import React from "react";
import "./Ballon.css";

const Ballon = (props) => {
  const balloonColor = { backgroundColor: props.color };
  return <div className="ballon" style={balloonColor}></div>;
};

export default Ballon;
