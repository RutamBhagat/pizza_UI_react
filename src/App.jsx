import { Routes, Route } from "react-router-dom";
import Home from "./components/routes/Home/Home.component";
import Navigation from "./components/routes/Navigation/Navigation.component";
import Features from "./components/routes/Features/Features.component";
import Customers from "./components/routes/Customers/Customers.component";
import Contacts from "./components/routes/Contacts/Contacts.component";
import Pizza from "./components/routes/pizzas/pizzas.component";
import Checkout from "./components/routes/Checkout/Checkout.component";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="pizza" element={<Pizza />} />
          <Route path="features" element={<Features />} />
          <Route path="reviews" element={<Customers />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
      <Contacts />
    </div>
  );
};

export default App;
