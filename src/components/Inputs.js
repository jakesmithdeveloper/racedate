import React, { useState, useEffect } from "react";

import DateInput from "./DateInput";

const Inputs = ({ states, currentState, handleSubmit }) => {
  const [inputValues, setInputValues] = useState(null);

  useEffect(() => {
    setInputValues(null);
  }, [currentState]);

  const handleChange = (valueObject) => {
    setInputValues({ ...inputValues, [valueObject.key]: valueObject.value });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(inputValues);
      }}
      className="flex flex-col items-center"
    >
      {states.map((state) => {
        return state.label === currentState.label ? (
          ""
        ) : (
          <DateInput
            key={state.label}
            inputConfig={state}
            handleChange={handleChange}
          />
        );
      })}
      <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
        Compute
      </button>
    </form>
  );
};

export default Inputs;