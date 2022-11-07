import { Routes, Route } from "react-router-dom";
import Home from "./components/routes/Home/Home.component";
import Navigation from "./components/routes/Navigation/Navigation.component";
import Features from "./components/routes/Features/Features.component";
import Customers from "./components/routes/Customers/Customers.component";
import Contacts from "./components/routes/Contacts/Contacts.component";
import Pizza from "./components/routes/pizzas/pizzas.component";
import Checkout from "./components/routes/Checkout/Checkout.component";
import { useState } from "react";

const App = () => {
  const [wishList, setWishList] = useState([]);
  const [checkoutArr, setCheckoutArr] = useState([]);

  const handleSetWishList = (pizza, command) => {
    if (command === "add") {
      setWishList([...wishList, pizza]);
    } else {
      const index = wishList.indexOf(pizza);
      wishList.splice(index, 1);
      setWishList([...wishList]);
    }
  };

  const handleAddPizza = (pizza, quantity, size, subTotal) => {
    const newPizza = {}
    Object.assign(newPizza, pizza)
    Object.assign(newPizza, { quantity, size, subTotal });
    checkoutArr.push(newPizza);
    setCheckoutArr([...checkoutArr]);
  };

  const handleRemovePizza = (pizza) => {
    const index = checkoutArr.indexOf(pizza);
    checkoutArr.splice(index, 1);
    setCheckoutArr([...checkoutArr]);
  };

  const handleUpdatePizza = (pizza, quantity, size, subTotal) => {
    const index = checkoutArr.indexOf(pizza);
    Object.assign(checkoutArr[index], { quantity, size, subTotal });
    setCheckoutArr([...checkoutArr]);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation checkoutArr={checkoutArr} />}>
          <Route index element={<Home />} />
          <Route
            path="pizza"
            element={
              <Pizza
                wishList={wishList}
                handleSetWishList={handleSetWishList}
                handleAddPizza={handleAddPizza}
                checkoutArr={checkoutArr}
              />
            }
          />
          <Route path="features" element={<Features />} />
          <Route path="reviews" element={<Customers />} />
          <Route path="contacts" element={<Contacts />} />
          <Route
            path="checkout"
            element={
              <Checkout
                checkoutArr={checkoutArr}
                handleRemovePizza={handleRemovePizza}
                handleUpdatePizza={handleUpdatePizza}
                wishList={wishList}
                handleSetWishList={handleSetWishList}
                handleAddPizza={handleAddPizza}
              />
            }
          />
        </Route>
      </Routes>
      <Contacts />
    </div>
  );
};

export default App;
