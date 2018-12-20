import React from "react";
import LogInFormContainer from "./session_form/login_form_container";
import SignUpFormContainer from "./session_form/signup_form_container";
import BrowseContainer from "./browse/browse_container";
import GreetingContainer from "./greeting/greeting_container";
import MovieShowContainer from "./movie_show/movie_show_container";
import ListsContainer from "./list/lists_container";
import ListContainer from "./list/list_container";
import SearchResultsContainer from "./search/search_results_container";
import NavBarContainer from "./navbar/navbar_container";

import { AuthRoute } from "../util/route_util";
import { ProtectedRoute } from "../util/route_util";
import { Route, Switch, Redirect } from "react-router-dom";

const App = () => (
  <div >
    <NavBarContainer />
    <Switch>
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <ProtectedRoute exact path="/browse" component={BrowseContainer} />
        <ProtectedRoute exact path="/watch/:movieId" component={MovieShowContainer} />
        <ProtectedRoute exact path="/lists" component={ListsContainer} />
        <ProtectedRoute path="/lists/:listId" component={ListContainer} />
        <ProtectedRoute exact path="/search" component={SearchResultsContainer} />
        <AuthRoute path="/" component={GreetingContainer} />
        <Redirect to="/" />
      
    </Switch>
  </div>
);

export default App;
