import React from "react";
import { connect } from "react-redux";

import About from "./About";
import CalculatorTitle from "./CalculatorTitle";
import Calendars from "./Calendars";
import ComputingSelector from "./ComputingSelector";
import Header from "./Header";
import Inputs from "./Inputs";

import { parseResult, parseInput } from "../helper/computations";
import { setMode, setResult, clearResults } from "../actions";
import { isEmpty } from "../helper/objectFunctions";

const ComputationPage = ({
  mode,
  setMode,
  setResult,
  result,
  clearResults,
}) => {
  const states = [
    { label: "Start Date", type: "date", key: "startDate" },
    { label: "Race Date", type: "date", key: "raceDate" },
    { label: "Training Block Length", type: "text", key: "block" },
  ];

  const handleClick = (e) => {
    setMode(states[e.target.value]);
    clearResults();
  };

  const handleSubmit = (values) => {
    const toCompute = parseInput(values);
    setResult(parseResult(toCompute, values));
  };

  return !mode ? (
    ""
  ) : (
    <div className="w-full flex items-center flex-col bg-background-green h-screen min-h-screen">
      <Header />
      {!result ? <About /> : ""}

      {!result ? (
        <div className="flex flex-col items-center bg-foreground-blue px-20 pb-10 pt-10 rounded-3xl max-w-sm md:max-w-xl mt-10">
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
      ) : (
        <button
          onClick={clearResults}
          className="mt-5 p-5 bg-accent-green rounded-lg text-white-cream"
        >
          New Calculation
        </button>
      )}

      {!isEmpty(result) ? (
        <div className="flex flex-col items-center">
          <h2 className="text-gray-700 mt-5 text-xl font-bold">
            {mode.label} : {result.string}
          </h2>
        </div>
      ) : (
        ""
      )}
      {!isEmpty(result) ? (
        <div className="w-full max-w-sm md:max-w-3xl">
          <Calendars dates={result} />
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    mode: state.mode.mode,
    result: state.result.result,
  };
};

export default connect(mapStateToProps, { setMode, setResult, clearResults })(
  ComputationPage
);
