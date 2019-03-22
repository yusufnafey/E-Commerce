import React, { Component, Fragment } from "react";
import Product from "./Product";

export default class ProductList extends Component {
  state = {
    products: []
  };

  render() {
    return (
      <Fragment>
        <div className="py-5">
          <div className="container">
            <div className="row">hello</div>
          </div>
        </div>
        {/* <Product /> */}
      </Fragment>
    );
  }
}
