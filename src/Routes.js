import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App.jsx";
import Sort from "./Sort";
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/sort" component={Sort} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
