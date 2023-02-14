import React from "react";
import "./Review.css";
import { useState } from "react";

const Review = (props) => {
  const [hide, sethide] = useState(false);
  return (
    <form>
      <div className={props.hide}>
        <p>First name: {props.propfirstName}</p>
        <p>Last name: {props.proplastName}</p>
        <p>Age: {props.propage}</p>
        <p>Your opinion: {props.proptext}</p>
        <button type="submit">Submit</button>
        <button>Go back</button>
      </div>
    </form>
  );
};

export default Review;
