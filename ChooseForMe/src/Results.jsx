import { useState, useEffect } from "react";
import React from "react";

export default function Results({ possibilities, setPos }) {
  const deleteByIndex = (index) => {
    setPos((oldValues) => {
      return oldValues.filter((_, i) => i !== index);
    });
  };
  const listItems = possibilities.map((item, index) => {
    return (
      <>
        <ul key={index}>
          <li>Choice: {item.name}</li>
          <li>Value: {item.priorityValue}</li>
        </ul>
        <button onClick={() => deleteByIndex(index)}>Delete</button>
      </>
    );
  });
  return <>{listItems}</>;
}
