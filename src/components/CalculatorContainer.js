import React from "react";

import CalculatorTitle from "./CalculatorTitle";
import ComputingSelector from "./ComputingSelector";
import Inputs from "./Inputs";

const CalculatorContainer = ({ mode, handleClick, states, handleSubmit }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-foreground-blue dark:bg-darker-purple w-96 h-96 my-10 rounded-calc">
      <div>
        <CalculatorTitle title={mode.label} />
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
