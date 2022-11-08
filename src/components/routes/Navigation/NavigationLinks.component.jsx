import { Fragment } from "react";
import { Link } from "react-router-dom";

const NavigationLinks = () => {
  return (
    <Fragment>
      <Link to="/" className="font-normal hover:text-darkGrayishBlue">
        About Us
      </Link>
      <Link to="/pizza" className="font-normal hover:text-darkGrayishBlue">
        Pizza
      </Link>
      <Link to="/reviews" className="font-normal hover:text-darkGrayishBlue">
        Reviews
      </Link>
      <Link to="/features" className="font-normal hover:text-darkGrayishBlue">
        Features
      </Link>
    </Fragment>
  );
};

export default NavigationLinks;
