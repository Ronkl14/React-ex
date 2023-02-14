import React from "react";
import { useState } from "react";
import Review from "./Review";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [textArea, setTextArea] = useState("");
  const [hide, setHide] = useState(true);

  function saveFirstName(value) {
    setFirstName(value);
  }

  function saveLastName(value) {
    setLastName(value);
  }

  function saveAge(value) {
    setAge(value);
  }

  function saveText(value) {
    setTextArea(value);
  }

  function submitForm() {
    setHide(!hide);
  }

  function submitHandler(event) {
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={(event) => submitHandler(event)}>
        <ul>
          <li>
            <label>First name:</label>
            <input
              type="text"
              onChange={(event) => saveFirstName(event.target.value)}
            ></input>
          </li>
          <li>
            <label>Last name:</label>
            <input
              type="text"
              onChange={(event) => saveLastName(event.target.value)}
            ></input>
          </li>
          <li>
            <label>Age:</label>
            <select onChange={(event) => saveAge(event.target.value)}>
              <option value="18-25">18-25</option>
              <option value="19-38">19-38</option>
              <option value="39+">39+</option>
            </select>
          </li>
          <li>
            <label>What do you think?</label>
            <textarea
              onChange={(event) => saveText(event.target.value)}
            ></textarea>
          </li>
          <button onClick={submitForm}>Submit</button>
        </ul>
      </form>
      <Review
        hide={hide ? "hidden" : ""}
        propfirstName={firstName}
        proplastName={LastName}
        propage={age}
        proptext={textArea}
      />
    </div>
  );
};

export default Form;
