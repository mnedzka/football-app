import React from "react";
import Layout from "./HOC/layout";
import { Switch } from "react-router-dom";
import Home from "./Components/home";
import SignIn from "./Components/SignIn";
import Dashboard from "./Components/Admin/Dashboard";
import PrivateRoute from "./Components/AuthRoutes/PrivateRoutes";
import PublicRoute from "./Components/AuthRoutes/PublicRoutes";
import AdminMatches from "./Components/Admin/Matches";
import AddEditMatches from "./Components/Admin/Matches/AddEditMatch";
import AddEditPlayers from "./Components/Admin/Players";

const Routes = props => {
  return (
    <Layout>
      <Switch>
        <PrivateRoute
          {...props}
          path="/admin_players"
          exact
          component={AddEditPlayers}
        />
        <PrivateRoute
          {...props}
          path="/admin_matches/edit_match"
          exact
          component={AddEditMatches}
        />
        <PrivateRoute
          {...props}
          path="/admin_matches/edit_match/:id"
          exact
          component={AddEditMatches}
        />
        <PrivateRoute
          {...props}
          path="/admin_matches"
          exact
          component={AdminMatches}
        />
        <PrivateRoute
          {...props}
          path="/dashboard"
          exact
          component={Dashboard}
        />
        <PublicRoute
          {...props}
          restricted={true}
          exact
          component={SignIn}
          path="/sign_in"
        />
        <PublicRoute
          {...props}
          restricted={false}
          exact
          component={Home}
          path="/"
        />
      </Switch>
    </Layout>
  );
};
export default Routes;
