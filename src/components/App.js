import React, { useState } from "react";

import Header from "./Header";
import DateInput from "./DateInput";

const App = () => {
  const states = [
    { label: "Race Date", type: "date" },
    { label: "Start Date", type: "date" },
    { label: "Training Block Length", type: "text" },
  ];
  const [currentState, setCurrentState] = useState(states[0]);

  const handleClick = (e) => {
    setCurrentState(states[e.target.value]);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-6xl">Race Date</h1>
      <Header state={currentState} handleClick={handleClick} />
      {states.map((state) => {
        return state.label === currentState.label ? (
          ""
        ) : (
          <DateInput key={state.label} inputConfig={state} />
        );
      })}
      <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
        Compute
      </button>
    </div>
  );
};

export default App;
