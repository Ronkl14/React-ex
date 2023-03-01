import { useState } from "react";

export function useCounter(initial) {
  const [counter, setCounter] = useState(initial);

  function addOne() {
    setCounter(counter + 1);
  }

  function removeOne() {
    setCounter(counter - 1);
  }

  function double() {
    setCounter(counter * 2);
  }

  function divide() {
    setCounter(counter / 2);
  }

  return [counter, addOne, removeOne, double, divide];
}
