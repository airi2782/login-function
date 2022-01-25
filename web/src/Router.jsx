import React from "react";
import { Router,Switch } from "react-router";
import {Login} from "templates";

const Router = () => {
  return (
    <Switch>
      <Route exact path = "(/)?" component = {Login} />
    </Switch>
  );
};

export default Router;