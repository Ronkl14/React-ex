import React from "react";
import CustomButton from "./CustomButton";
import { useState } from "react";

const Parent = (props) => {
  const colors = ["blue", "red", "yellow"];
  const [colorName, setColorName] = useState("");

  return (
    <div>
      {colors.map((color) => (
        <CustomButton color={color} clickFunc={() => setColorName(color)} />
      ))}
      <h2>The chosen color: {colorName}</h2>
    </div>
  );
};

export default Parent;
