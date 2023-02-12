// import logo from "./logo.svg";
import "./App.css";
import Quiz from "./components/Quiz";
import QuizTitle from "./components/QuizTitle";
import Q1 from "./components/Q1";
import Q1Title from "./components/Q1Title";
import Q1Input from "./components/Q1Input";
import Q2 from "./components/Q2";
import Q2Title from "./components/Q2Title";
import Q2Input from "./components/Q2Input";

function App() {
  return (
    <Quiz>
      <QuizTitle></QuizTitle>
      <Q1>
        <Q1Title></Q1Title>
        <Q1Input></Q1Input>
      </Q1>
      <Q2>
        <Q2Title></Q2Title>
        <Q2Input></Q2Input>
      </Q2>
    </Quiz>
  );
}

export default App;
