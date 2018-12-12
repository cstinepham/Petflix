import React from "react";
import LogInFormContainer from "./session_form/login_form_container";
import SignUpFormContainer from "./session_form/signup_form_container";

import { Route, Switch } from "react-router-dom";

const App = () => (
  <div >
    <Switch>
        <Route path="/login" component={LogInFormContainer} />
        <Route path="/signup" component={SignUpFormContainer} />
    </Switch>
  </div>
);

export default App;
