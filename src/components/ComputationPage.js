import React, { useEffect } from "react";
import { connect } from "react-redux";

import Calendars from "./Calendars";
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

  useEffect(() => {
    setMode(states[2]);
  }, []);

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
    <div className="w-full flex items-center flex-col">
      <div className="flex flex-col items-center bg-gray-800 px-20 pb-10 pt-10 rounded-3xl max-w-sm md:max-w-xl mt-10">
        <h1 className="text-3xl md:text-6xl mb-5 text-gray-200">Race Date</h1>
        <Header state={mode} handleClick={handleClick} />
        <Inputs
          states={states}
          currentState={mode}
          handleSubmit={handleSubmit}
        />
      </div>

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
