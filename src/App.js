/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { Component } from "react";
import Aux from "./hoc/RreactAux";
import Menu from "./components/Menu/Menu";
import Home from "./components/Home/Home";
import Countries from "./components/Search/Countries";

class App extends Component {
  render() {
    return (
      <Aux>
        <Menu />

        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/searchclub">
              <Countries />
            </Route>
          </Switch>
        </Router>
      </Aux>
    );
    //<MenuBar/>
    //<swich>
    //<ActivePage/>
    //
  }
}
export default App;
