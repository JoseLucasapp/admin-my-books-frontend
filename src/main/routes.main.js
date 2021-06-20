import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import {Home} from '../components/home.components';
import {Add} from '../components/add.components';
import { Book } from "../components/book.components";

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/book">
            <Book />
          </Route>
          <Route path="*">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}