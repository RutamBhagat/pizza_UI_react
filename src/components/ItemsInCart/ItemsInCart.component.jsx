import React, { useContext } from "react";
import { CartContext } from "../../context/cart.context";


const ItemsInCart = () => {
  const { cartLength } = useContext(CartContext);
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
