// import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { PrivateRoute } from "./utils/auth";


import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Authorize from "./pages/Authorize";
import Submit from "./pages/Submit";
import Vote from "./pages/Vote";


export default function Routes() {
  return (
    <Router>
      <Switch>

        <PrivateRoute path="/" component={Home} exact />
        <PrivateRoute path="/submit" component={Submit} exact />
        <PrivateRoute path="/vote" component={Vote} exact />

        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/authorize">
          <Authorize />
        </Route>

      </Switch>
    </Router>
  );
}
