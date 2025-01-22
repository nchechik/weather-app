import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { WeatherPage } from './pages/WeatherPage/WeatherPage';
import GridPage from './pages/GridPage/GridPage';

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={GridPage} />
        <Route path="/weather/:id" component={WeatherPage} />
      </Switch>
    </Router>
  );
};
