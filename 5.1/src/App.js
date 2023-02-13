// import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button label="Important" isImportant={true} />
      <Button label="Not Important" isImportant={false} />
    </div>
  );
}

export default App;
