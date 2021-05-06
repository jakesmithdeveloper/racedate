import React, { useState, useEffect } from "react";

import Header from "./Header";
import Inputs from "./Inputs";

import {
  computeRaceDate,
  computeStartDate,
  computeTrainingBlockLength,
  parseInput,
} from "../helper/computations";

const App = () => {
  const states = [
    { label: "Race Date", type: "date", key: "raceDate" },
    { label: "Start Date", type: "date", key: "startDate" },
    { label: "Training Block Length", type: "text", key: "block" },
  ];
  const [currentState, setCurrentState] = useState(states[0]);
  const [result, setResult] = useState(null);

  useEffect(() => {
    setResult(null);
  }, [currentState]);

  const handleClick = (e) => {
    setCurrentState(states[e.target.value]);
  };

  const handleSubmit = (values) => {
    const toCompute = parseInput(values);

    let tempResult = "";

    switch (toCompute) {
      case "raceDate":
        tempResult = computeRaceDate(values);
        break;
      case "startDate":
        tempResult = computeStartDate(values);
        break;
      case "block":
        tempResult = computeTrainingBlockLength(values);
        break;
      default:
        break;
    }

    setResult(tempResult);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-6xl">Race Date</h1>
      <Header state={currentState} handleClick={handleClick} />
      <Inputs
        states={states}
        currentState={currentState}
        handleSubmit={handleSubmit}
      />
      <h2>
        {currentState.label}: {result ? result : ""}
      </h2>
    </div>
  );
};

export default App;
