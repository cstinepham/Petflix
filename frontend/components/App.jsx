import React from "react";
import LogInFormContainer from "./session_form/login_form_container";
import SignUpFormContainer from "./session_form/signup_form_container";
import BrowseContainer from "./browse/browse_container";

import { AuthRoute } from "../util/route_util";
import { Route, Switch } from "react-router-dom";

const App = () => (
  <div >
    <Switch>
        <AuthRoute path="/login" component={LogInFormContainer} />
        <AuthRoute path="/signup" component={SignUpFormContainer} />
        <Route path="/browse" component={BrowseContainer} />
      
    </Switch>
  </div>
);

export default App;
