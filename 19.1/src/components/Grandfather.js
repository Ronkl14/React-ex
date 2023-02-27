import React from "react";
import Father from "./Father";
import { GiftsProvider } from "../context/context";

const Grandfather = () => {
  return (
    <GiftsProvider>
      <Father />
    </GiftsProvider>
  );
};

export default Grandfather;
