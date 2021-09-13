import React from "react";

import CalculatorTitle from "./CalculatorTitle";
import ComputingSelector from "./ComputingSelector";
import Inputs from "./Inputs";

const CalculatorContainer = ({ mode, handleClick, states, handleSubmit }) => {
  return (
    <div className="flex flex-col items-center bg-foreground-blue px-20 pb-10 pt-10 rounded-3xl max-w-sm md:max-w-xl mt-10 mb-10">
      <div>
        <CalculatorTitle title="Calculator" />
        <ComputingSelector state={mode} handleClick={handleClick} />
        <Inputs
          states={states}
          currentState={mode}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default CalculatorContainer;
