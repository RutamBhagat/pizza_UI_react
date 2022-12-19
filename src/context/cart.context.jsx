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

    useEffect(() => {
      const newCartTotal = checkoutArr.reduce((acc, inst) => acc + inst.subTotal, 0)
      const newCartLength = checkoutArr.reduce((acc, inst) => acc + inst.quantity, 0)
      setCartTotal(newCartTotal)
      setCartLength(newCartLength)
    }, [checkoutArr])

    const handleAddPizza = (pizza, quantity, size, subTotal) => {
      const newPizza = {...pizza, quantity, size, subTotal}

      for(let inst of checkoutArr){
        if(inst.name === newPizza.name && inst.size === newPizza.size){
          inst.quantity += newPizza.quantity
          if(inst.quantity > 10){
            inst.quantity = 10
          }
          setCheckoutArr([...checkoutArr])
          return
        }
      }
      setCheckoutArr([...checkoutArr, newPizza]);
    };

    const handleRemovePizza = (pizza) => {
      const index = checkoutArr.indexOf(pizza);
      checkoutArr.splice(index, 1);
      setCheckoutArr([...checkoutArr]);
    };
  
    const handleUpdatePizza = (pizza, quantity, size, subTotal) => {
      const index = checkoutArr.indexOf(pizza);
      Object.assign(checkoutArr[index], {quantity, size, subTotal})
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