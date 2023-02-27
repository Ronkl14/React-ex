import React from "react";
import { useContext } from "react";
import GiftsContext from "../context/context";

const Grandson = () => {
  const { gifts } = useContext(GiftsContext);
  return (
    <div>
      {gifts.map((gift) => (
        <p>{gift}</p>
      ))}
    </div>
  );
};

export default Grandson;
