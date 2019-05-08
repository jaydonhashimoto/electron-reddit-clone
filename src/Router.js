import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Post from "./Post";
import Settings from "./Settings";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/post" component={Post} />
      <Route exact path="/settings" component={Settings} />
    </Switch>
  </BrowserRouter>
);

export default Router;