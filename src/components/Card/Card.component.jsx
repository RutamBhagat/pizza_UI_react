import React, { useState, useEffect } from "react";
import Stars from "../Stars/Stars.component";
import Category from "../Category/Category.component";
import ItemsInCart from "../ItemsInCart/ItemsInCart.component";
import { Link } from "react-router-dom";
import shallow from "zustand/shallow";
import { useWishListStore } from "../../store/wishlist/wishliststore";
import { useCartStore } from "../../store/cart/cartstore";

const Card = ({ pizza }) => {
  const { name, description, image, prices, category, stars, reviews } = pizza;
  const checkoutArr = useCartStore((state) => state.checkoutArr, shallow);
  const wishList = useWishListStore((state) => state.wishList, shallow);
  const handleSetWishList = useWishListStore(
    (state) => state.handleSetWishList,
    shallow
  );
  const handleAddPizza = useCartStore((state) => state.handleAddPizza, shallow);

  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("small");
  const [subTotal, setSubTotal] = useState(quantity * prices[size]);
  const [buttonActive, setButtonActive] = useState(wishList.includes(pizza));

  useEffect(() => {
    setSubTotal(quantity * prices[size]);
  }, [quantity, size, prices]);

  const handleClick = () => {
    if (buttonActive) {
      handleSetWishList(pizza, "remove");
    } else {
      handleSetWishList(pizza, "add");
    }
    setButtonActive(!buttonActive);
  };

  return (
    <div className="body-font overflow-hidden border-b-2 border-gray-500 bg-cyan-900 p-5 text-gray-600">
      <div className="container mx-auto max-w-xl md:max-w-4xl">
        <div className="mx-auto flex flex-col justify-center md:flex-row">
          <div className="flex items-center md:w-1/2 lg:w-3/5">
            <img
              alt="ecommerce"
              className="h-64 rounded-lg border-2 border-white object-cover object-center"
              src={`${image}`}
            />
          </div>
          <div className="mt-6 w-full md:mt-0 md:w-2/5 md:py-6 md:pl-10">
            <div className="mb-4 flex items-center justify-between">
              <h1 className="title-font mb-1 text-2xl font-medium text-white">
                {name}
              </h1>
              <button
                onClick={handleClick}
                className={`m-0 inline-flex h-10 w-10 items-center justify-center rounded-full border-0 p-0 ${
                  buttonActive
                    ? "bg-red-200 text-red-700"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
            </div>
            <div className="flex">
              <h2 className="title-font pr-2 text-sm tracking-widest text-gray-200">
                {`CATEGORY - ${category.toUpperCase()}`}
              </h2>
              <Category category={category} />
            </div>
            <div className="mb-4 flex">
              <span className="flex items-center">
                <Stars stars={stars} />
                <span className="ml-3 text-gray-300">{reviews} reviews</span>
              </span>
            </div>
            <p className="leading-relaxed text-gray-300">{`${description}`}</p>
            <div className="mt-6 mb-5 flex flex-row items-start border-b-2 border-gray-100 pb-5">
              <div className="my-1 flex items-center">
                <span className="mr-3 text-gray-300">Quantity</span>
                <div className="relative">
                  <select
                    onChange={(event) => {
                      const newQuantity = Number.parseInt(event.target.value);
                      setQuantity(newQuantity);
                    }}
                    value={quantity}
                    className="appearance-none rounded border border-gray-300 py-2 pl-3 pr-10 text-base focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200"
                  >
                    {[...Array(10).keys()].map((inst) => (
                      <option key={Math.random()} value={inst + 1}>
                        {inst + 1}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute right-0 top-0 flex h-full w-10 items-center justify-center text-center text-gray-600">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
              </div>
              <div className="my-1 ml-2 flex items-center">
                <span className="mr-3 text-gray-300">Size</span>
                <div className="relative">
                  <select
                    onChange={(event) => {
                      setSize(event.target.value);
                    }}
                    value={size}
                    className="appearance-none rounded border border-gray-300 py-2 pl-3 pr-10 text-base focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200"
                  >
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                  </select>
                  <span className="pointer-events-none absolute right-0 top-0 flex h-full w-10 items-center justify-center text-center text-gray-600">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div>
              {quantity === 10 ? (
                <h1 className="text-red-600">
                  Max allowable order quantity for given size
                </h1>
              ) : (
                <span></span>
              )}
            </div>
            <div className="flex items-center">
              <span className="title-font pr-3 text-2xl font-medium text-white">
                {`₹ ${subTotal}`}
              </span>
              <button
                onClick={() =>
                  handleAddPizza(pizza, quantity, size, subTotal)
                }
                className="ml-auto flex rounded border-0 bg-brightRed py-2 px-6 text-white hover:bg-brightRed focus:outline-none"
              >
                Add Pizza
              </button>
              <Link to="/checkout">
                <button
                  className="relative mx-2 rounded-full border-2 border-transparent bg-white py-2 px-2 text-gray-800 transition duration-150 ease-in-out hover:text-gray-400 focus:text-gray-500 focus:outline-none"
                  aria-label="Cart"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                  <ItemsInCart />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
