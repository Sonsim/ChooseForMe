import { useState, useEffect } from "react";
import Form from "./Form";
import Results from "./Results";
import "./App.css";

function App() {
  const [possibilities, setPossibilites] = useState([]);
  console.log(possibilities);
  return (
    <>
      <Form possibilities={possibilities} setPossibilities={setPossibilites} />
      <Results possibilities={possibilities} setPos={setPossibilites} />
    </>
  );
}

export default App;
