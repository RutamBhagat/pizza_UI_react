import React, { createContext, useReducer} from "react";
import { CreateAction } from "../utils/Reducer/createAction";
export const CartContext = createContext({
  checkoutArr: [],
  cartTotal: 0,
  cartLength: 0,
  handleAddPizza: () => null,
  handleRemovePizza: () => null,
  handleUpdatePizza: () => null,
});

const CART_ACTION_TYPES = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
};

const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        checkoutArr: payload.checkoutArr,
        cartTotal: payload.cartTotal,
        cartLength: payload.cartLength,
      };
    default:
      return state;
  }
};

const INITIAL_STATE = {
  checkoutArr: [],
  cartTotal: 0,
  cartLength: 0,
};

export const CartProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer(cartReducer, INITIAL_STATE);
  const { checkoutArr, cartTotal, cartLength } = state;


  const handleAddPizza = (pizza, quantity, size, subTotal) => {
    const addPizza = () => {
      const newPizza = { ...pizza, quantity, size, subTotal };

      for (let inst of checkoutArr) {
        if (inst.name === newPizza.name && inst.size === newPizza.size) {
          inst.quantity += newPizza.quantity;
          if (inst.quantity > 10) {
            inst.quantity = 10;
          }
          return [...checkoutArr];
        }
      }
      return [...checkoutArr, newPizza];
    };

    const newCartArr = addPizza();
    const newCartTotal = newCartArr.reduce(
      (acc, inst) => acc + inst.subTotal,
      0
    );
    const newCartLength = newCartArr.reduce(
      (acc, inst) => acc + inst.quantity,
      0
    );
    const newPayload = {
      checkoutArr: newCartArr,
      cartTotal: newCartTotal,
      cartLength: newCartLength,
    };
    dispatch(CreateAction(CART_ACTION_TYPES.SET_CART_ITEMS, newPayload));
  };

  const handleRemovePizza = (pizza) => {
    const removePizza = () => {
      const index = checkoutArr.indexOf(pizza);
      checkoutArr.splice(index, 1);
      return [...checkoutArr];
    };
    const newCartArr = removePizza();
    const newCartTotal = newCartArr.reduce(
      (acc, inst) => acc + inst.subTotal,
      0
    );
    const newCartLength = newCartArr.reduce(
      (acc, inst) => acc + inst.quantity,
      0
    );
    const newPayload = {
      checkoutArr: newCartArr,
      cartTotal: newCartTotal,
      cartLength: newCartLength,
    };
    dispatch(CreateAction(CART_ACTION_TYPES.SET_CART_ITEMS, newPayload));
  };

  const handleUpdatePizza = (pizza, quantity, size, subTotal) => {
    const updatePizza = () => {
      const index = checkoutArr.indexOf(pizza);
      Object.assign(checkoutArr[index], { quantity, size, subTotal });
      return [...checkoutArr];
    };
    const newCartArr = updatePizza();
    const newCartTotal = newCartArr.reduce(
      (acc, inst) => acc + inst.subTotal,
      0
    );
    const newCartLength = newCartArr.reduce(
      (acc, inst) => acc + inst.quantity,
      0
    );
    const newPayload = {
      checkoutArr: newCartArr,
      cartTotal: newCartTotal,
      cartLength: newCartLength,
    };
    dispatch(CreateAction(CART_ACTION_TYPES.SET_CART_ITEMS, newPayload));
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
};
