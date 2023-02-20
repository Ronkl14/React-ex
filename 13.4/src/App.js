import "./App.css";
import Spinner1 from "./components/Spinner1";
import Spinner2 from "./components/Spinner2";
import Spinner3 from "./components/Spinner3";
import { useState, useEffect } from "react";

function App() {
  const spinners = [<Spinner1 />, <Spinner2 />, <Spinner3 />];
  const [spinner, setSpinner] = useState(null);
  const randomNumber = Math.floor(Math.random() * spinners.length);
  useEffect(() => {
    setSpinner(spinners[randomNumber]);
    setTimeout(() => setSpinner(null), 5000);
  }, []);

  return <div className="App">{spinner}</div>;
}

export default App;
