import React from "react";
import { useRef, useEffect } from "react";

const Form = () => {
  const focusInput = useRef();
  useEffect(() => {
    focusInput.current.focus();
  }, []);

  return (
    <form>
      <label>Name</label>
      <input type="text" ref={focusInput}></input>
      <label>Phone</label>
      <input type="text"></input>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
