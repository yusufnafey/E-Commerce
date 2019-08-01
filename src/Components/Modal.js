import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";

export default class Modal extends Component {
  componentWillMount() {
    document.addEventListener("click", this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClick, false);
  }

  handleClick = e => {
    if (!this.node.contains(e.target)) {
      () => closeModal();
    }
  };

  render() {
    return (
      <ProductConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;

          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer ref={node => (this.node = node)}>
                <div className="container">
                  <div className="row d-flex justify-content-center">
                    <div
                      id="modal"
                      className="col-8 m-0 col-md-6 col-lg-4 text-center text-capitalize p-5"
                    >
                      <h5>item added to the cart</h5>
                      <img
                        src={img}
                        className="image-fluid"
                        alt="product"
                        style={{ width: "15rem" }}
                      />
                      <h5>{title}</h5>
                      <h5 className="text-muted">price: $ {price}</h5>
                      <div className="modal-buttons d-flex justify-content-around">
                        <Link to="/">
                          <ButtonContainer
                            className="m-0"
                            onClick={() => closeModal()}
                          >
                            back to products
                          </ButtonContainer>
                        </Link>
                        <Link to="/cart">
                          <ButtonContainer
                            className="m-0"
                            cart
                            onClick={() => closeModal()}
                          >
                            go to cart
                          </ButtonContainer>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`;
