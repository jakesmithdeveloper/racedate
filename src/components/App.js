import React from "react";
import { Helmet } from "react-helmet";
import { Router, Route, Switch } from "react-router-dom";

import ComputationPage from "./ComputationPage";

import history from "../history";

const App = () => {
  return (
    <div>
      <Helmet>
        <body className="h-screen bg-background-green"></body>
      </Helmet>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={ComputationPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
