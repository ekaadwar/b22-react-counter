import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import FormLogin from "./components/FormLogin";
import CounterPage from "./pages/CounterPage";
import HomePage from "./pages/HomePage";
import ItemList from "./pages/ItemList";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/counter" component={CounterPage} />
          <Route path="/item-list" component={ItemList} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
