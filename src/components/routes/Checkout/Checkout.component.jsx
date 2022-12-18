import CheckoutCard from "../../CheckoutCard/CheckoutCard.component";
import { Fragment, useEffect, useState } from "react";
import WishList from "../../WishList/WishList.component";

const Checkout = ({
  checkoutArr,
  handleRemovePizza,
  handleUpdatePizza,
  wishList,
  handleSetWishList,
  handleAddPizza,
}) => {
  const [totalObjectSum, setTotalObjectSum] = useState([]);

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
        <div className="flex flex-col justify-center pt-36 w-5/6 mx-auto">
          {checkoutArr &&
            checkoutArr.map((pizza) => {
              return (
                <CheckoutCard
                  key={Math.random()}
                  pizza={pizza}
                  handleRemovePizza={handleRemovePizza}
                  handleUpdatePizza={handleUpdatePizza}
                  wishList={wishList}
                  handleSetWishList={handleSetWishList}
                />
              );
            })}
        </div>
        <section className="text-gray-600 body-font">
          <div className="container px-24 py-24 mx-auto flex items-center flex-col sm:flex-row">
            <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
              <h2 className="text-xs text-brightRed tracking-widest font-medium title-font mb-1">
                YOUR TOTAL PAYABLE AMOUNT IS
              </h2>
              <h1 className="md:text-3xl text-2xl font-medium title-font text-gray-900">
                {`₹ ${totalObjectSum}`}
              </h1>
            </div>
            <div className="flex md:ml-auto md:mr-0 mx-2 md:mx-auto items-center flex-shrink-0 space-x-4">
              <button className="bg-gray-600 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-700 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-6 h-6 text-white"
                  viewBox="0 0 512 512"
                >
                  <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                </svg>
                <span className="ml-4 flex items-start flex-col leading-none">
                  <span className="text-xs text-gray-200 mb-1">
                    PLACE ORDER
                  </span>
                  <span className="title-font text-gray-200 font-medium">
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
      <div className="flex flex-col justify-center pt-36 mx-auto">
        <h1 className="text-4xl text-center text-gray-600 h-[90vh]">
          Your cart is empty...
        </h1>
        <section className="text-gray-600 body-font">
          <div className="container px-5 pt-24 mx-auto">
            <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
              <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">
                CANT DECIDE? CHECKOUT YOUR WISHLIST
              </h1>
              <button
                onClick={revealWishList}
                className="flex-shrink-0 text-white bg-brightRed border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg mt-10 sm:mt-0"
              >
                Wishlist
              </button>
            </div>
          </div>
        </section>
        <div className="hidden" id="checkout_wishlist">
          <WishList
            wishList={wishList}
            handleSetWishList={handleSetWishList}
            handleAddPizza={handleAddPizza}
            checkoutArr={checkoutArr}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col justify-center pt-36 mx-auto">
        <h1 className="text-4xl text-center text-gray-600 h-[90vh]">
          Your cart is empty...
        </h1>
      </div>
    );
  }
};
export default Checkout;
