import React from "react";
import { connect } from "react-redux";
import Calendars from "./Calendars";
import Footer from "./Footer";
import Header from "./Header";
import Picker from "./Picker";

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
    <div className="w-full flex items-center flex-col bg-background-green">
      <Header />

      {!result ? (
        <Picker
          mode={mode}
          handleClick={handleClick}
          handleSubmit={handleSubmit}
          states={states}
        />
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
      <Footer />
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
