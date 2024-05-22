import React from "react";
import "./App.css";

export default function Form({ possibilities, setPossibilities }) {
  const AddToArray = () => {
    let name = document.getElementById("nameInput").value;
    let scale = document.getElementById("scaleInput").value;
    let form = document.getElementById("choiceForm");

    setPossibilities([...possibilities, { name: name, priorityValue: scale }]);
    form.reset();
  };
  return (
    <>
      <form id="choiceForm" className="form-container">
        <h2>Add choice</h2>
        <input id="nameInput" type="text" placeholder="Choice name"></input>
        <input
          id="scaleInput"
          type="number"
          placeholder="Priority on a 1-10 scale"
          min={1}
          max={10}
        ></input>
      </form>
      <button onClick={AddToArray}>Add</button>
    </>
  );
}
