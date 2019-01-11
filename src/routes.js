import React from "react";
import Layout from "./HOC/layout";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/home";

const Routes = props => {
  return (
    <Layout>
      <Switch>
        <Route>
          <Route exact component={Home} path="/" />
        </Route>
      </Switch>
    </Layout>
  );
};
export default Routes;
