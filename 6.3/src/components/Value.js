import React from "react";
import { useState } from "react";
import "./Value.css";

const Value = () => {
  const [val, setVal] = useState(0);

  function increment() {
    if (val === 10) {
      setVal(10);
    } else {
      setVal(val + 1);
    }
  }

  function decrement() {
    if (val === -10) {
      setVal(-10);
    } else {
      setVal(val - 1);
    }
  }

  function setColor() {
    if (val > 0) {
      return "green";
    } else if (val === 0) {
      return "black";
    } else {
      return "red";
    }
  }

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <h2 className={setColor()}>{val}</h2>
    </div>
  );
};

export default Value;
