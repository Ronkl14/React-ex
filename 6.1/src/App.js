import "./App.css";
import { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={increment}>increment</button>
      <p>{count}</p>
    </div>
  );
};

function App() {
  return <Count />;
}

export default App;
