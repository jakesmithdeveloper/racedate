import React, { useEffect, useState } from "react";
import WebFont from "webfontloader";

import CalculatorContainer from "./CalculatorContainer";
import About from "./About";

const Picker = ({ mode, handleClick, states, handleSubmit }) => {
  const [selected, setSelected] = useState("calc");

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Fredoka One"],
      },
    });
  }, []);

  const pickerClicked = (e) => {
    e.preventDefault();
    setSelected(e.target.id);
  };

  return (
    <div>
      <div
        style={{ fontFamily: "Fredoka One" }}
        className="flex justify-center mt-10 text-3xl dark:text-gray-100 select-none text-gray-700"
      >
        <button
          className={`mx-2 ${
            selected === "about" ? "bg-accent-green dark:bg-dark-selection" : ""
          } p-1 rounded-2xl`}
          onClick={pickerClicked}
          id="about"
        >
          About
        </button>
        <button
          className={`mx-2 ${
            selected === "calc" ? "bg-accent-green dark:bg-dark-selection" : ""
          } p-1 rounded-2xl`}
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
