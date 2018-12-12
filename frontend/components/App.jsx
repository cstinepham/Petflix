import React from "react";
import LogInFormContainer from "./session_form/login_form_container";
import SignUpFormContainer from "./session_form/signup_form_container";
import GreetingContainer from "./greeting/greeting_container";

import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

const App = () => (
  <div>
    <h1>Petflix</h1>

    <Switch>
        <Route exact to="/login" component={LogInFormContainer} />
        <Route exact to="/signup" component={SignUpFormContainer} />
        <Route path="/" component={GreetingContainer} />
    </Switch>



  </div>
);

export default App;
