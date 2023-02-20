import React from "react";
import { useState, useEffect } from "react";

const Color = () => {
  const [favoriteColor, setFavoriteColor] = useState("red");
  useEffect(() => {
    const id = setTimeout(() => setFavoriteColor("blue"), 1000);
    return () => {
      clearTimeout(id);
    };
  }, []);
  return <h1>My favorite color is {favoriteColor}</h1>;
};

export default Color;
