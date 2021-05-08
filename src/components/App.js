import React, { useState, useEffect } from "react";

// import Calendar from "./Calendar";
import Header from "./Header";
import Inputs from "./Inputs";

import { parseResult, parseInput } from "../helper/computations";

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

    setResult(parseResult(toCompute, values));
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
      {/* <Calendar /> */}
    </div>
  );
};

export default App;
