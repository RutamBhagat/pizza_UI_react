import { useState, useEffect } from "react";
import Category from "../Category/Category.component";
import shortid from "shortid";

const CheckoutCard = ({
  pizza,
  wishList,
  handleSetWishList,
  handleRemovePizza,
  handleUpdatePizza,
}) => {
  const { name, image, prices, category } = pizza;
  const ID = shortid.generate();

  const [quantity, setQuantity] = useState(pizza.quantity);
  const [size, setSize] = useState(pizza.size);
  const [subTotal, setSubTotal] = useState(pizza.quantity * prices[pizza.size]);
  const [buttonActive, setButtonActive] = useState(wishList.includes(name));

  useEffect(() => {
    setSubTotal(quantity * prices[size]);
  }, [quantity, size, prices]);

  const handleClick = () => {
    if (buttonActive) {
      handleSetWishList(name, "remove");
    } else {
      handleSetWishList(name, "add");
    }
    setButtonActive(!buttonActive);
    // !buttonActive means opposite of button activity state i.e. if true then make it false
  };

  return (
    <div
      key={ID}
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
            <div className="flex mb-4 justify-between">
              <h1 className="text-gray-900 text-2xl title-font font-medium mb-1">
                {name}
              </h1>
            </div>
            <div className="flex">
              <h2 className="pr-2 text-sm title-font text-gray-500 tracking-widest">
                {`CATEGORY - ${category.toUpperCase()}`}
              </h2>
              <Category category={category} />
            </div>
            <div className="flex flex-col mt-6 items-start pb-5 border-b-2 border-gray-100 mb-5 sm:flex-row">
              <div className="flex ml-2 my-1 items-center">
                <span className="mr-3">Quantity</span>
                <div className="relative">
                  <select
                    onChange={(event) => {
                      const tempQuantity = event.target.value;
                      setQuantity(tempQuantity);
                      handleUpdatePizza(
                        pizza,
                        tempQuantity,
                        size,
                        tempQuantity * prices[size]
                      );
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
            <div className="flex">
              <span className="pr-3 title-font font-medium text-2xl text-gray-900">
                {`₹ ${subTotal}`}
              </span>
              <button
                onClick={() => {
                  handleRemovePizza(pizza);
                }}
                className="flex ml-auto text-white bg-gray-500 border-0 py-2 px-3 focus:outline-none hover:bg-brightRed rounded"
              >
                <div className="w-4 h-4">
                  <svg
                    className="fill-white"
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
