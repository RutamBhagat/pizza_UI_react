import React from "react";
import { useWishListStore } from "../../store/wishlist/wishliststore";
import Card from "../Card/Card.component";
import shallow from 'zustand/shallow';

const WishList = () => {
  const wishList = useWishListStore((state) => state.wishList, shallow);
  return (
    <div className="mx-auto flex flex-col justify-center pt-36">
      {wishList &&
        wishList.map((pizza) => {
          return <Card key={Math.random()} pizza={pizza} />;
        })}
    </div>
  );
};

export default WishList;
