import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import CustomerDetail from "./CustomerDetail";
import Customers from "./Customers";
import Home from "./Home";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/customers" exact component={Customers} />
        <Route path="/customer/:id" exact component={CustomerDetail} />
      </Switch>
    </Router>
  );
}
