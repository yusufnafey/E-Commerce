import React from "react";

export default function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;

  return (
    <div className="row text-capitalize my-1 text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img src={img} />
      </div>
    </div>
  );
}
