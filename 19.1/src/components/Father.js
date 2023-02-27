import React from "react";
import { useContext, useEffect } from "react";
import GiftsContext from "../context/context";
import Son from "./Son";

const Father = () => {
  const { setGifts } = useContext(GiftsContext);

  useEffect(() => {
    setGifts(["rc car", "cool pen", "microwave", "talking cactus"]);
  }, [setGifts]);

  return <Son />;
};

export default Father;
