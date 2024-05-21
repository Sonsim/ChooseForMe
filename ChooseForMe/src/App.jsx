import { useState } from "react";
import Form from "./Form";
import Results from "./Results";
import "./App.css";

function App() {
  const possibilities = [];
  return (
    <>
      <Form possibilities={possibilities} />
      <Results possibilities={possibilities} />
    </>
  );
}

export default App;
