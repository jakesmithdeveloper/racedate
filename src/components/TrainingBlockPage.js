import React from "react";
import { connect } from "react-redux";

import Calendars from "./Calendars";

const TrainingBlockPage = ({ dates }) => {
  return (
    <div className="w-full">
      <h1>Training Block page</h1>
      <Calendars dates={dates} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    dates: state.result.result,
  };
};

export default connect(mapStateToProps)(TrainingBlockPage);
