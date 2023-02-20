import React from "react";
import "./Box.css";
import { useState, useEffect } from "react";

const Box = () => {
  const [color, setColor] = useState(true);
  const [circle, setCircle] = useState(false);
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setColor(!color);
      setCount(count + 1);
      count >= 5 ? setCircle(true) : setCircle(false);
    }, 500);
  }, [color, count]);

  return (
    <div
      className={`box ${color ? "red" : "blue"} ${circle ? "circle" : ""}`}
    ></div>
  );
};

export default Box;
