import React from "react";
import LogInFormContainer from "./session_form/login_form_container";
import SignUpFormContainer from "./session_form/signup_form_container";
import BrowseContainer from "./browse/browse_container";
import GreetingContainer from "./greeting/greeting_container";

import { AuthRoute } from "../util/route_util";
import { Route, Switch } from "react-router-dom";

const App = () => (
  <div >
    <Switch>
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <Route path="/browse" component={BrowseContainer} />
        <Route path="/" component={GreetingContainer} />
      
    </Switch>
  </div>
);

export default App;
