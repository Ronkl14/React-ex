import React from "react";
import { useState } from "react";

const Checkboxes = (props) => {
  return (
    <div>
      <input type="checkbox" checked={props.checked}></input>
      {props.title}
    </div>
  );
};

export default Checkboxes;
