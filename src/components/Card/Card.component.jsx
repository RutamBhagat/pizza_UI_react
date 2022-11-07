import Stars from "../Stars/Stars.component";
import Category from "../Category/Category.component";
import shortid from "shortid";
import { useState, useEffect } from "react";
import ItemsInCart from "../ItemsInCart/ItemsInCart.component";
import { Link } from "react-router-dom";

const Card = ({
  pizza,
  wishList,
  handleSetWishList,
  handleAddPizza,
  checkoutArr,
}) => {
  const { name, description, image, prices, category, stars, reviews } = pizza;

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
    // !buttonActive means opposite of button activity state i.e. if true then make it false
  };

  return (
    <div
      key={shortid.generate()}
      className="text-gray-600 body-font overflow-hidden bg-orange-200"
    >
      <div className="container px-5 py-12 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap justify-center">
          <img
            alt="ecommerce"
            className="w-5/6 lg:w-3/5 h-64 md:h-72 my-5 object-cover object-center rounded"
            src={`${image}`}
          />
          <div className="lg:w-2/5 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <div className="flex items-center mb-4 justify-between">
              <h1 className="text-gray-900 text-2xl title-font font-medium mb-1">
                {name}
              </h1>
              <button
                onClick={handleClick}
                className={`rounded-full w-10 h-10 p-0 m-0 border-0 inline-flex items-center justify-center ${
                  buttonActive
                    ? "bg-red-300 text-red-500"
                    : "bg-gray-300 text-gray-500"
                }`}
              >
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
            </div>
            <div className="flex">
              <h2 className="pr-2 text-sm title-font text-gray-500 tracking-widest">
                {`CATEGORY - ${category.toUpperCase()}`}
              </h2>
              <Category category={category} />
            </div>
            <div className="flex mb-4">
              <span className="flex items-center">
                <Stars stars={stars} />
                <span className="text-gray-600 ml-3">{reviews} reviews</span>
              </span>
            </div>
            <p className="leading-relaxed">{`${description}`}</p>
            <div className="flex flex-col mt-6 items-start pb-5 border-b-2 border-gray-100 mb-5 sm:flex-row">
              <div className="flex ml-2 my-1 items-center">
                <span className="mr-3">Quantity</span>
                <div className="relative">
                  <select
                    onChange={(event) => {
                      setQuantity(event.target.value);
                    }}
                    value={quantity}
                    className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-500 text-base pl-3 pr-10"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
              </div>
              <div className="flex ml-2 my-1 items-center">
                <span className="mr-3">Size</span>
                <div className="relative">
                  <select
                    onChange={(event) => {
                      setSize(event.target.value);
                    }}
                    value={size}
                    className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-500 text-base pl-3 pr-10"
                  >
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <span className="pr-3 title-font font-medium text-2xl text-gray-900">
                {`₹ ${subTotal}`}
              </span>
              <button
                onClick={() => {
                  handleAddPizza(pizza, quantity, size, subTotal);
                }}
                className="flex ml-auto text-white bg-brightRed border-0 py-2 px-6 focus:outline-none hover:bg-brightRed rounded"
              >
                Add Pizza
              </button>
              <Link to="/checkout">
                <button
                  className="py-2 px-2 mx-2 relative border-2 border-transparent text-gray-800 bg-white rounded-full hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out"
                  aria-label="Cart"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                  <ItemsInCart checkoutArr={checkoutArr} />
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