import { Fragment } from "react";
import { Link } from "react-router-dom";

const NavigationLinks = () => {
  return (
    <Fragment>
      <Link to="/" className="font-normal hover:text-darkGrayishBlue">
        Home
      </Link>
      <Link to="/pizza" className="font-normal hover:text-darkGrayishBlue">
        Pizza
      </Link>
      <Link to="/features" className="font-normal hover:text-darkGrayishBlue">
        Features
      </Link>
      <Link to="/reviews" className="font-normal hover:text-darkGrayishBlue">
        Reviews
      </Link>
      {
        //   <Link to="/reviews" className="text-brightRed font-extrabold hover:text-darkGrayishBlue md:hidden">
        //   Checkout
        // </Link>
      }
    </Fragment>
  );
};

export default NavigationLinks;
