import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { selectWishList } from "../../store/wishlist/wishlist.selector";
import Card from "../Card/Card.component";

const WishList = () => {
  const wishList = useSelector(selectWishList);
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
