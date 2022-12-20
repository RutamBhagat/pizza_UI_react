import React from "react";
import { useSelector } from "react-redux";
import { selectCartLength } from "../../store/cart/cart.selector";


const ItemsInCart = () => {
  const cartLength = useSelector(selectCartLength)
  if (cartLength !== 0) {
    return (
      <span className="absolute inset-0 -mr-6 object-right-top">
        <div className="py-0.25 inline-flex items-center rounded-full border-2 border-white bg-red-500 px-1 text-xs font-semibold leading-4 text-white">
          {cartLength}
        </div>
      </span>
    );
  } else {
    return <span></span>;
  }
};
export default ItemsInCart;
