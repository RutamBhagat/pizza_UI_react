import React, { useContext } from "react";
import { WishlistContext } from "../../context/wishlist.context";
import Card from "../Card/Card.component";


// {wishList, handleSetWishList, handleAddPizza, checkoutArr}

const WishList = () => {
  const {wishList} = useContext(WishlistContext)
    return (
        <div className="flex flex-col justify-center pt-36 w-5/6 mx-auto">
        {wishList && wishList.map((pizza) => {
          return <Card pizza={pizza}/>;
        })}
      </div>
    )
}

export default WishList