import React, { createContext, useState } from "react";
export const WishlistContext = createContext({
  wishList: [],
  handleSetWishList: () => null
});

export const WishlistProvider = ({ children }) => {
  const [wishList, setWishList] = useState([]);

  const handleSetWishList = (pizza, command) => {
    if (command === "add") {
      let notPresent = true
      for(let inst of wishList){
        if(inst.name == pizza.name){
          notPresent = false
          break
        }
      }
      if(notPresent){
        setWishList([...wishList, pizza]);
      }
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
