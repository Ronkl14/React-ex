import React from "react";
import { useState } from "react";
import "./Show.css";

const Show = () => {
  const [hide, setHide] = useState(false);
  function clickHandler() {
    setHide(!hide);
  }
  return (
    <div>
      <button onClick={clickHandler}>{hide ? "Show" : "Hide"}</button>
      {!hide ? <div className="square"></div> : <></>}
    </div>
  );
};

export default Show;
