import React from "react";
import { connect } from "react-redux";
import { Router, Route, Switch } from "react-router-dom";

import ComputationPage from "./ComputationPage";

import history from "../history";

const App = ({ darkMode }) => {
  const renderMode = darkMode ? "dark" : "";

  return (
    <div className={`${renderMode}`}>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={ComputationPage} />
        </Switch>
      </Router>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    darkMode: state.darkMode.darkMode,
  };
};

export default connect(mapStateToProps)(App);
