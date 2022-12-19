import React, { createContext, useState, useEffect } from "react";
export const WishlistContext = createContext({
  wishList: [],
  handleSetWishList: () => null
});

export const WishlistProvider = ({ children }) => {
  const [wishList, setWishList] = useState([]);

  const handleSetWishList = (pizza, command) => {
    if (command === "add") {
      setWishList([...wishList, pizza]);
    } else {
      const index = wishList.indexOf(pizza);
      wishList.splice(index, 1);
      setWishList([...wishList]);
    }
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
