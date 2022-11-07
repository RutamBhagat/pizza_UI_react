import CheckoutCard from "../../CheckoutCard/CheckoutCard.component";
import { Fragment, useEffect, useState } from "react";

const Checkout = ({
  checkoutArr,
  handleRemovePizza,
  wishList,
  handleSetWishList,
}) => {
  const [totalObject, setTotalObject] = useState({});
  const [totalObjectSum, setTotalObjectSum] = useState([]);

  const changeTotal = (ID, subTotal) => {
    console.log(`totalObject old = `);
    console.log(totalObject);
    console.log(`ID = ${ID}`);
    console.log(`subTotal = ${subTotal}`);
    
    totalObject[ID] = subTotal
    setTotalObject({ ...totalObject });

    console.log(`totalObject new = `);
    console.log(totalObject);
    console.log("----------------------------------------");
  };

  useEffect(() => {
    let sum = 0;
    for (let inst in totalObject) {
      sum += totalObject[inst];
    }
    setTotalObjectSum(sum);
  }, [totalObject]);

  if (checkoutArr.length !== 0) {
    return (
      <Fragment>
        <div className="flex flex-col justify-center pt-36 w-5/6 mx-auto">
          {checkoutArr &&
            checkoutArr.map((pizza) => {
              // const ID = shortid.generate();
              return (
                <CheckoutCard
                  pizza={pizza}
                  handleRemovePizza={handleRemovePizza}
                  wishList={wishList}
                  handleSetWishList={handleSetWishList}
                  changeTotal={changeTotal}
                />
              );
            })}
        </div>
        <div className="flex flex-col justify-center pt-20 w-5/6 mx-auto">
          <h1 className="text-4xl text-center text-gray-600">
            {`Your total is ₹ ${totalObjectSum}`}
          </h1>
        </div>
      </Fragment>
    );
  } else {
    return (
      <div className="flex flex-col justify-center pt-36 w-5/6 h-96 mx-auto">
        <h1 className="text-4xl text-center text-gray-600">
          Your cart is empty...
        </h1>
      </div>
    );
  }
};
export default Checkout;
