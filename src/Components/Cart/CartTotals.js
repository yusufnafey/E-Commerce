import React from "react";

export default function CartTotals({ value }) {
  const { cartSubtotal, cartTax, cartTotal, clearCart } = value;
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-ms-5 ml-md-auto col-sm-8 text-capitalize text-right">
            hello
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
