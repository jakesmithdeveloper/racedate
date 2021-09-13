import React, { useState } from "react";

import CalculatorContainer from "./CalculatorContainer";
import About from "./About";

const Picker = ({ mode, handleClick, states, handleSubmit }) => {
  const [selected, setSelected] = useState("calc");

  const pickerClicked = (e) => {
    e.preventDefault();
    setSelected(e.target.id);
  };

  return (
    <div>
      <div className="flex justify-center mt-10 text-xl">
        <button
          className={`mx-2 ${
            selected === "about" ? "bg-accent-green" : ""
          } p-4 rounded-3xl`}
          onClick={pickerClicked}
          id="about"
        >
          About
        </button>
        <button
          className={`mx-2 ${
            selected === "calc" ? "bg-accent-green" : ""
          } p-4 rounded-3xl`}
          onClick={pickerClicked}
          id="calc"
        >
          Calculator
        </button>
      </div>

      {selected === "about" ? (
        <About />
      ) : (
        <CalculatorContainer
          mode={mode}
          handleClick={handleClick}
          handleSubmit={handleSubmit}
          states={states}
        />
      )}
    </div>
  );
};

export default Picker;
