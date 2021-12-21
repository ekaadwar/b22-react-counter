import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import FormLogin from "./components/FormLogin";
import CounterPage from "./pages/CounterPage";
import HomePage from "./pages/HomePage";
import Items from "./pages/ItemList";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/counter" component={CounterPage} />
          <Route path="/items" component={Items} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
