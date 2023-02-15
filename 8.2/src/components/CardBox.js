import React from "react";
import data from "../data.js";
import TurtleCard from "./TurtleCard.js";
import "./CardBox.css";
import ToppingButton from "./ToppingButton.js";

const CardBox = (props) => {
  return (
    <div className="card-box">
      {data.map((turtle) => (
        <TurtleCard
          name={turtle.name}
          imgUrl={turtle.img}
          toppingArr={turtle.pizzaToppings}
        />
      ))}
    </div>
  );
};

export default CardBox;
