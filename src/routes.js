import React from "react";
import Layout from "./HOC/layout";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/home";
import SignIn from "./Components/SignIn";
import Dashboard from "./Components/Admin/Dashboard";
import PrivateRoute from "./Components/AuthRoutes/PrivateRoutes";

const Routes = props => {
  console.log(props.user);
  return (
    <Layout>
      <Switch>
        <PrivateRoute
          {...props}
          path="/dashboard"
          exact
          component={Dashboard}
        />
        {/* <Route exact component={Dashboard} path="/dashboard" /> */}
        <Route exact component={SignIn} path="/sign_in" />
        <Route exact component={Home} path="/" />
      </Switch>
    </Layout>
  );
};
export default Routes;
