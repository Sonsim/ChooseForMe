import React from "react";
import "./App.css";

export default function Form({ possibilities }) {
  /*const AddMoreInputs = () => {
    var form = document.getElementById("ChoiceForm");
    var newInput = document.createElement("input");

    newInput.type = "text";
    newInput.placeholder = "Add choice";

    form.appendChild(newInput);
  };*/
  const AddToArray = () => {
    let name = document.getElementById("nameInput").value;
    let scale = document.getElementById("scaleInput").value;
    let form = document.getElementById("choiceForm");

    let newChoice = {
      name: name,
      scaleValue: scale,
    };

    possibilities.push(newChoice);
    form.reset();
  };
  return (
    <>
      <form id="choiceForm" className="form-container">
        <h2>Add choice</h2>
        <input id="nameInput" type="text" placeholder="Add possibility"></input>
        <input
          id="scaleInput"
          type="number"
          placeholder="Stakes on a 1-3 scale"
          min={1}
          max={3}
        ></input>
      </form>
      <button onClick={AddToArray}>Add</button>
    </>
  );
}
