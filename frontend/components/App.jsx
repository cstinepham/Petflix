import React from "react";
import LogInFormContainer from "./session_form/login_form_container";
import SignUpFormContainer from "./session_form/signup_form_container";
import BrowseContainer from "./browse/browse_container";
import GreetingContainer from "./greeting/greeting_container";
import MovieShowContainer from "./movie_show/movie_show_container";
import ListContainer from "./list/list_container";

import { AuthRoute } from "../util/route_util";
import { ProtectedRoute } from "../util/route_util";
import { Route, Switch, Redirect } from "react-router-dom";

const App = () => (
  <div >
    <Switch>
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <ProtectedRoute path="/browse" component={BrowseContainer} />
        <ProtectedRoute path="/watch/:movieId" component={MovieShowContainer} />
        <ProtectedRoute path="/list" component={ListContainer} />
        <Route path="/" component={GreetingContainer} />
        <Redirect to="/" />
      
    </Switch>
  </div>
);

export default App;
