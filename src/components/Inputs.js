import React, { useState, useEffect } from "react";
import WebFont from "webfontloader";

import DateInput from "./DateInput";

const Inputs = ({ states, currentState, handleSubmit }) => {
  const [inputValues, setInputValues] = useState(null);

  useEffect(() => {
    setInputValues(null);
  }, [currentState]);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Work Sans"],
      },
    });
  }, []);

  const handleChange = (valueObject) => {
    setInputValues({ ...inputValues, [valueObject.key]: valueObject.value });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(inputValues);
      }}
      className="flex flex-col items-center w-full"
    >
      <div className="flex flex-col items-start w-full">
        {states.map((state) => {
          return state.label === currentState.label ? (
            ""
          ) : (
            <DateInput
              key={state.label}
              inputConfig={state}
              handleChange={handleChange}
              currentState={currentState}
            />
          );
        })}
      </div>
      <div>
        <button
          style={{ fontFamily: "Work Sans" }}
          className="bg-gray-300 text-gray-900 font-light py-2 px-4 rounded inline-flex items-center mt-5 md:mt-16 mx-2 md:text-3xl"
        >
          Compute
        </button>
      </div>
    </form>
  );
};

export default Inputs;
