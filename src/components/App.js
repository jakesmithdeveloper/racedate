import React, { useState } from "react";

import Header from "./Header";

const App = () => {
  const states = ["Race Date", "Start Date", "Training Block Length"];
  const [state, setState] = useState(states[0]);

  const handleClick = (e) => {
    setState(states[e.target.value]);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-6xl">Race Date</h1>
      <Header state={state} handleClick={handleClick} />
    </div>
  );
};

export default App;
