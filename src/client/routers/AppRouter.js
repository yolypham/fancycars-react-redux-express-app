import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/home';

const AppRouter = () => (
  <BrowserRouter>
    <div className="container">
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
