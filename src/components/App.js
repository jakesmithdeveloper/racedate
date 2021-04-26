import React, { useState } from "react";

import Header from "./Header";
import Inputs from "./Inputs";

const App = () => {
  const states = [
    { label: "Race Date", type: "date", key: "raceDate" },
    { label: "Start Date", type: "date", key: "startDate" },
    { label: "Training Block Length", type: "text", key: "block" },
  ];
  const [currentState, setCurrentState] = useState(states[0]);

  const handleClick = (e) => {
    setCurrentState(states[e.target.value]);
  };

  const handleSubmit = (values) => {
    console.log(values);
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
    </div>
  );
};

export default App;
