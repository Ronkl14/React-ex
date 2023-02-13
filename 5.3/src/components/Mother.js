import React from "react";
import Child from "./Child";
import "./Mother.css";

const Mother = () => {
  const kids = [
    { name: "Ori", color: "red" },
    { name: "Ron", color: "blue" },
    { name: "Sigalit", color: "green" },
    { name: "Ruti", color: "yellow" },
    { name: "Alon", color: "purple" },
  ];

  return (
    <div className="container">
      <h1>A Tale Of Five Balloons</h1>
      <div className="mother">
        <Child name={kids[0].name} color={kids[0].color}></Child>
        <Child name={kids[1].name} color={kids[1].color}></Child>
        <Child name={kids[2].name} color={kids[2].color}></Child>
        <Child name={kids[3].name} color={kids[3].color}></Child>
        <Child name={kids[4].name} color={kids[4].color}></Child>
      </div>
    </div>
  );
};

export default Mother;
