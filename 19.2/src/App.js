import React from "react";
import { ModeProvider } from "./context/context";
import Page from "./components/Page";

const App = () => {
  return (
    <ModeProvider>
      <Page />
    </ModeProvider>
  );
};

export default App;
