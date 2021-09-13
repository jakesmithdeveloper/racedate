import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import ComputationPage from "./ComputationPage";

import history from "../history";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={ComputationPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
