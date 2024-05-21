import React from "react";

export default function Results(possibilities) {
  const ShowPossibilties = () => {
    if (possibilities.length > 0) {
      possibilities.forEach((choice) => {
        return (
          <li>
            <ul>
              {choice.name}
              {choice.scale}
            </ul>
          </li>
        );
      });
    }
  };
  return <>{ShowPossibilties}</>;
}
