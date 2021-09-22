import React, { useEffect } from "react";
import { connect } from "react-redux";
import Calendars from "./Calendars";
import Footer from "./Footer";
import Header from "./Header";
import Picker from "./Picker";
import WebFont from "webfontloader";

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
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Work Sans", "Fredoka One"],
      },
    });
  }, []);

  const states = [
    { label: "Start Date", type: "date", key: "startDate" },
    { label: "Race Date", type: "date", key: "raceDate" },
    { label: "Training Block Length", type: "number", key: "block" },
  ];

  const handleClick = (e) => {
    setMode(states[e.target.value]);
    clearResults();
  };

  const handleSubmit = (values) => {
    const toCompute = parseInput(values);
    setResult(parseResult(toCompute, values));
    window.scrollTo(0, 0);
  };

  return !mode ? (
    ""
  ) : (
    <div className="w-full bg-background-green dark:bg-gray-900 min-h-screen page-container">
      <div className="w-full content-wrap flex items-center flex-col">
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
            className="mt-5 p-5 bg-accent-green dark:bg-dark-selection rounded-lg text-white-cream tracking-widest"
            style={{ fontFamily: "Work Sans" }}
          >
            New Calculation
          </button>
        )}
        {!isEmpty(result) ? (
          <div className="flex flex-col items-center">
            <h2 className="text-gray-700 dark:text-gray-100 mt-5 text-2xl md:text-3xl font-bold">
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
