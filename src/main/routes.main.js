import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import {Home} from '../components/home.components';
import {Add} from '../components/add.components';

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/add">
            <Add />
          </Route>
          <Route path="*">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}