import React, { useContext } from "react";
import CheckoutCard from "../../CheckoutCard/CheckoutCard.component";
import { Fragment, useEffect, useState } from "react";
import WishList from "../../WishList/WishList.component";
import { CartContext } from "../../../context/cart.context";
import { WishlistContext } from "../../../context/wishlist.context";

const Checkout = () => {
  const [totalObjectSum, setTotalObjectSum] = useState([]);
  const { checkoutArr } = useContext(CartContext);
  const { wishList } = useContext(WishlistContext);

  useEffect(() => {
    let sum = 0;
    for (let inst of checkoutArr) {
      sum += inst.subTotal;
    }
    setTotalObjectSum(sum);
  }, [checkoutArr]);

  const revealWishList = () => {
    const checkout_wishlist = document.querySelector("#checkout_wishlist");
    checkout_wishlist.classList.toggle("hidden");
  };

  if (checkoutArr.length !== 0) {
    return (
      <Fragment>
        <div className="mx-auto flex w-5/6 flex-col justify-center pt-36">
          {checkoutArr &&
            checkoutArr.map((pizza) => {
              return <CheckoutCard key={Math.random()} pizza={pizza} />;
            })}
        </div>
        <section className="body-font text-gray-600">
          <div className="container mx-auto flex flex-col items-center px-24 py-24 sm:flex-row">
            <div className="mb-6 flex w-full flex-col pr-0 text-center md:mb-0 md:w-auto md:pr-10 md:text-left">
              <h2 className="title-font mb-1 text-xs font-medium tracking-widest text-brightRed">
                YOUR TOTAL PAYABLE AMOUNT IS
              </h2>
              <h1 className="title-font text-2xl font-medium text-gray-900 md:text-3xl">
                {`₹ ${totalObjectSum}`}
              </h1>
            </div>
            <div className="mx-2 flex flex-shrink-0 items-center space-x-4 md:mx-auto md:ml-auto md:mr-0">
              <button className="inline-flex items-center rounded-lg bg-gray-600 py-3 px-5 hover:bg-gray-700 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="h-6 w-6 text-white"
                  viewBox="0 0 512 512"
                >
                  <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                </svg>
                <span className="ml-4 flex flex-col items-start leading-none">
                  <span className="mb-1 text-xs text-gray-200">
                    PLACE ORDER
                  </span>
                  <span className="title-font font-medium text-gray-200">
                    PAY NOW
                  </span>
                </span>
              </button>
            </div>
          </div>
        </section>
      </Fragment>
    );
  } else if (wishList.length !== 0) {
    return (
      <div className="mx-auto flex flex-col justify-center pt-36">
        <div className="flex min-h-screen items-center justify-center text-center text-4xl text-gray-600">
          <h1>Your cart is empty...</h1>
        </div>
        <section className="body-font text-gray-600">
          <div className="container mx-auto px-5 pt-24">
            <div className="mx-auto flex flex-col items-start sm:flex-row sm:items-center lg:w-2/3">
              <h1 className="title-font flex-grow text-2xl font-medium text-gray-900 sm:pr-16">
                CANT DECIDE? CHECKOUT YOUR WISHLIST
              </h1>
              <button
                onClick={revealWishList}
                className="mt-10 flex-shrink-0 rounded border-0 bg-brightRed py-2 px-8 text-lg text-white hover:bg-red-600 focus:outline-none sm:mt-0"
              >
                Wishlist
              </button>
            </div>
          </div>
        </section>
        <div className="hidden" id="checkout_wishlist">
          <WishList />
        </div>
      </div>
    );
  } else {
    return (
      <div className="mx-auto flex flex-col justify-center pt-36">
        <div className="flex min-h-screen items-center justify-center text-center text-4xl text-gray-600">
          <h1>Your cart is empty...</h1>
        </div>
      </div>
    );
  }
};
export default Checkout;
