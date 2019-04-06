import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./Components/Cart";
import Details from "./Components/Details";
import Navbar from "./Components/Navbar";
import PageNotFound from "./Components/PageNotFound";
import ProductList from "./Components/ProductList";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={PageNotFound} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
