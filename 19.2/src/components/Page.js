import React from "react";
import { useContext } from "react";
import ModeContext from "../context/context";

const Page = () => {
  const { darkMode, toggleMode } = useContext(ModeContext);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: darkMode ? "black" : "gray",
      }}
    >
      <button onClick={toggleMode}>Change Mode</button>
    </div>
  );
};

export default Page;
