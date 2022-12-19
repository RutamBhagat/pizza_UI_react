import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { CartContext } from "../../context/cart.context";
import Category from "../Category/Category.component";

const CheckoutCard = ({ pizza }) => {
  const { handleRemovePizza, handleUpdatePizza } = useContext(CartContext);
  const { name, image, prices, category } = pizza;

  const [quantity, setQuantity] = useState(pizza.quantity);
  const [size, setSize] = useState(pizza.size);
  const [subTotal, setSubTotal] = useState(pizza.quantity * prices[pizza.size]);

  useEffect(() => {
    setSubTotal(quantity * prices[size]);
  }, [quantity, size, prices]);

  return (
    <div className="body-font overflow-hidden bg-cyan-900 text-gray-600">
      <div className="container max-w-xl lg:max-w-6xl mx-auto px-5 py-12">
        <div className="mx-auto flex flex-wrap justify-center lg:w-4/5">
          <img
            alt="ecommerce"
            className="my-5 h-64 w-5/6 rounded object-cover object-center md:h-72 lg:w-3/5"
            src={`${image}`}
          />
          <div className="mt-6 w-full lg:mt-0 lg:w-2/5 lg:py-6 lg:pl-10">
            <div className="mb-4 flex justify-between">
              <h1 className="title-font mb-1 text-2xl font-medium text-white">
                {name}
              </h1>
            </div>
            <div className="flex">
              <h2 className="title-font pr-2 text-sm tracking-widest text-gray-100">
                {`CATEGORY - ${category.toUpperCase()}`}
              </h2>
              <Category category={category} />
            </div>
            <div className="mt-6 mb-5 flex flex-row items-start border-b-2 border-gray-100 pb-5">
              <div className="my-1 flex items-center">
                <span className="mr-3 text-gray-300">Quantity</span>
                <div className="relative">
                  <select
                    onChange={(event) => {
                      const tempQuantity = Number.parseInt(event.target.value);
                      setQuantity(tempQuantity);
                      handleUpdatePizza(
                        pizza,
                        tempQuantity,
                        size,
                        tempQuantity * prices[size]
                      );
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
                      const tempSize = event.target.value;
                      setSize(tempSize);
                      handleUpdatePizza(
                        pizza,
                        quantity,
                        tempSize,
                        quantity * prices[tempSize]
                      );
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
            <div className="flex">
              <span className="title-font pr-3 text-2xl font-medium text-white">
                {`₹ ${subTotal}`}
              </span>
              <button
                onClick={() => handleRemovePizza(pizza)}
                className="ml-auto flex rounded border-0 bg-gray-200 py-2 px-3 text-white hover:bg-brightRed focus:outline-none"
              >
                <div className="h-4 w-4">
                  <svg
                    className="fill-gray-700"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCard;
