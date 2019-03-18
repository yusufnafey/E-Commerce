import React, { Component, Fragment } from "react";
import logo from "./logo.svg";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Components/Card";
import Details from "./Components/Details";
import Navbar from "./Components/Navbar";
import PageNotFound from "./Components/PageNotFound";
import ProductList from "./Components/ProductList";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <ProductList />
        <Details />
        <Card />
        <PageNotFound />
      </Fragment>
    );
  }
}

export default App;
