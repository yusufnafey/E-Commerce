import React, { Component } from "react";

export default class PageNotFound extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <div className="row">
          <div className=" col-10 mx-auto text-center text-title text-uppercase pt-5">
            <h1 className="display-3">404</h1>
            <h1>error</h1>
            <h1>page not found</h1>
          </div>
        </div>
      </div>
    );
  }
}
