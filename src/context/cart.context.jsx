import React, { createContext, useState, useEffect } from "react";
export const CartContext = createContext({
  checkoutArr: [],
  cartTotal: null,
  cartLength: null,
  handleAddPizza: () => null,
  handleRemovePizza: () => null,
  handleUpdatePizza: () => null,
});

  export const CartProvider = ({ children }) => {
    const [checkoutArr, setCheckoutArr] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);
    const [cartLength, setCartLength] = useState(0);

    const handleAddPizza = (pizza, quantity, size, subTotal) => {
      const newPizza = {};
      Object.assign(newPizza, pizza);
      Object.assign(newPizza, { quantity, size, subTotal });
      checkoutArr.push(newPizza);
      setCheckoutArr([...checkoutArr]);
    };

    const handleRemovePizza = (pizza) => {
      const index = checkoutArr.indexOf(pizza);
      checkoutArr.splice(index, 1);
      setCheckoutArr([...checkoutArr]);
    };
  
    const handleUpdatePizza = (pizza, quantity, size, subTotal) => {
      const index = checkoutArr.indexOf(pizza);
      Object.assign(checkoutArr[index], { quantity, size, subTotal });
      setCheckoutArr([...checkoutArr]);
    };

    const value = {
      checkoutArr,
      cartTotal,
      cartLength,
      handleAddPizza,
      handleRemovePizza,
      handleUpdatePizza,
    };
  
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}