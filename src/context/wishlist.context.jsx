import React, { createContext, useReducer } from "react";
import { CreateAction } from "../utils/Reducer/createAction";
export const WishlistContext = createContext({
  wishList: [],
  handleSetWishList: () => null
});

const WISHLIST_ACTION_TYPES = {
  SET_WISHLIST_ITEMS: "SET_WISHLIST_ITEMS"
}

const wishListReducer = (state, action) => {
  const {type, payload} = action
  switch (type) {
    case WISHLIST_ACTION_TYPES.SET_WISHLIST_ITEMS:
    return{
      ...state,
      wishList: payload
    }
    default:
      return state
  }
}

const INITIAL_STATE = {
  wishList: [],
}

export const WishlistProvider = ({ children }) => {
  const [state, dispatch] = useReducer(wishListReducer, INITIAL_STATE);
  const {wishList} = state

  const handleSetWishList = (pizza, command) => {
    const manageWishList = (pizza, command) => {
      if (command === "add") {
        let notPresent = true
        for(let inst of wishList){
          if(inst.name == pizza.name){
            notPresent = false
            break
          }
        }
        if(notPresent){
          return [...wishList, pizza];
        }
      } else {
        const index = wishList.indexOf(pizza);
        wishList.splice(index, 1);
        return [...wishList];
      }
    }
    const newWishList = manageWishList(pizza, command)
    dispatch(CreateAction(WISHLIST_ACTION_TYPES.SET_WISHLIST_ITEMS, newWishList))
  };

  const value = {
    wishList,
    handleSetWishList
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};
