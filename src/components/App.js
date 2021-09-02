import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import ComputationPage from "./ComputationPage";
import TrainingBlockPage from "./TrainingBlockPage";

import history from "../history";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={ComputationPage} />
          <Route path="/create" exact component={TrainingBlockPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
