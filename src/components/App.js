import React, { useState, useEffect } from "react";

import Calendars from "./Calendars";
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
    <div className="w-full flex items-center flex-col">
      <div className="flex flex-col items-center bg-gray-800 px-20 pb-10 pt-10 rounded-3xl max-w-sm md:max-w-xl mt-10">
        <h1 className="text-3xl md:text-6xl mb-5 text-gray-200">Race Date</h1>
        <Header state={currentState} handleClick={handleClick} />
        <Inputs
          states={states}
          currentState={currentState}
          handleSubmit={handleSubmit}
        />
      </div>
      <h2 className="text-gray-700 mt-5 text-xl font-bold">
        {result ? `${currentState.label} :` : ""} {result ? result.string : ""}
      </h2>
      {result ? <Calendars dates={result} /> : null}
    </div>
  );
};

export default App;
