import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SitePicker from "./SitePicker";
import NotFound from "./NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ SitePicker } />
      {/* <Route path="/blog" component={ Blog } /> */}
      <Route component={ NotFound } />
    </Switch>
  </BrowserRouter>
);

export default Router;
