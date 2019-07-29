import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            console,
            img,
            info,
            price,
            title,
            inCart
          } = value.detailProduct;
          return (
            <div className="container py-2">
              {/* title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-3">
                  <h1 className="my-0">{title}</h1>
                </div>
              </div>
              {/* product info */}
              <div className="row">
                {/* product image */}
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img
                    src={img}
                    alt="product"
                    className={
                      value.detailProduct.console === "Nintendo Switch"
                        ? "img-fluid rounded w-50"
                        : "img-fluid rounded w-75"
                    }
                  />
                </div>
                {/* product text */}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h2 className="text-title text-blue">{title}</h2>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    <span className="text-uppercase">{console}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      <span>$</span>
                      {price}
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    Product info:
                  </p>
                  <p className="text-muted lead">{info}</p>
                  {/* buttons */}
                  <div>
                    <Link to="/">
                      <ButtonContainer>back to products</ButtonContainer>
                    </Link>
                    <ButtonContainer
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? "in cart" : "add to cart"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
