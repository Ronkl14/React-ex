import React, { useState } from "react";
import "./App.css";
import Checkboxes from "./components/Checkboxes";

function App() {
  const [isChecked3, setIsChecked3] = useState(true);
  const [isChecked4, setIsChecked4] = useState(true);

  return (
    <div>
      <Checkboxes title="HEY HEY" />
      <Checkboxes title="YES YES" />
      <Checkboxes title="HI HI" checked={isChecked3} />
      <Checkboxes title="WHY?" checked={isChecked4} />
    </div>
  );
}

export default App;
