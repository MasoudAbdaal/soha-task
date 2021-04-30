import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { Component } from "react";
import Aux from "./hoc/RreactAux";

import Menu from "./components/Menu/Menu";
import Home from "./components/Home/Home";
import Countries from "./components/Search/Country/Countries";

class App extends Component {
  render() {
    return (
      //HOC for load child component
      <Aux>
        <Menu />
        {/*Switch which load just 1 component per route */}
        <Router>
          <Switch>
            {/*Switch which load just 1 component per route */}
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
  }
}
export default App;
