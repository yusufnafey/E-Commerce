import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import { ProductConsumer } from "../context";
import PropTypes from "prop-types";
import { ProductConsumer } from "../context";

export default class Product extends Component {
  render() {
    const { id, title, console, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <ProductConsumer>
          {value => (
            <Link to="/details">
              <div className="card" onClick={() => value.handleDetail(id)}>
                <div className="img-container p-5">
                  <img src={img} alt="product pic" className="card-img-top" />
                  <button
                    className="card-btn"
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}
                  >
                    {inCart ? (
                      <h4 className="text-capitalize m-0" disabled>
                        in cart
                      </h4>
                    ) : (
                      <React.Fragment>
                        <h4 className="m-0">
                          Add to Cart <i className="fas fa-cart-plus" />
                        </h4>
                      </React.Fragment>
                    )}
                  </button>
                </div>

                {/* footer */}
                <div className="card-footer">
                  <div className="top d-flex justify-content-around">
                    <p className="align-self-center mb-0">
                      {title} ({console})
                    </p>
                  </div>
                  <h5 className="text-blue text-center font-italic mb-0">
                    <span className="mr-1">${price}</span>
                  </h5>
                </div>
              </div>
            </Link>
          )}
        </ProductConsumer>
      </ProductWrapper>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};

const ProductWrapper = styled.div`
  a {
    text-decoration: none;
    color: black;
  }
  .card {
    border-color: transparent;
    transition: all 1s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgb(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 1s linear;
  }
  .card:hover .card-img-top {
    transform: scale(1.1);
  }
  .card:hover .card-btn {
    transition: all 0.3s linear;
    transform: translate(0, 0);
  }
  .card-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.5rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
  }
  .card-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
`;
