import React from "react";
import { useCounter } from "../hooks/useCounter";
import { useEffect } from "react";

const Counter = () => {
  const [counter, addOne, removeOne, double, divide] = useCounter(4);

  useEffect(() => {
    divide();
    addOne();
    double();
    removeOne();
  }, []);

  return (
    <div>
      <p>{counter}</p>
    </div>
  );
};

export default Counter;
