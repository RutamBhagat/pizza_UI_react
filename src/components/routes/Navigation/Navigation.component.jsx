import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import ItemsInCart from "../../ItemsInCart/ItemsInCart.component";
import "./Navigation.css";
import NavigationLinks from "./NavigationLinks.component";

const Navigation = ({ checkoutArr }) => {
  const openHamburger = () => {
    const btn = document.querySelector("#menu-btn");
    const nav = document.querySelector("#menu");
    console.log("clicked");
    btn.classList.toggle("open");
    nav.classList.toggle("hidden");
  };
  return (
    <Fragment>
      {
        // Navbar
      }
      <nav className="z-10 mx-auto p-6 fixed top-0 left-0 right-0 bg-white bg-opacity-60">
        <div className="flex items-center justify-between">
          {
            // Hamburger Icon
          }
          <button
            id="menu-btn"
            className="block hamburger md:hidden focus:outline-none"
            onClick={openHamburger}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
          <div className="py-2">
            <Link to="/" className="text-darkBlue text-3xl font-semibold">
              FastKitchen
            </Link>
          </div>
          <div className="hidden space-x-6 md:flex">
            <NavigationLinks />
          </div>
          {
            // Button
          }
          <Link
            to="/checkout"
            className="flex p-3 px-4 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
          >
            <span className="text-lg">Order</span>
            <button
              className="relative border-2 border-transparent text-gray-800 rounded-full hidden sm:block hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out"
              aria-label="Cart"
            >
              <svg
                className="h-5 w-5 fill-gray-400"
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
        {
          // Mobile Menu
        }
        <div className="md:hidden">
          <div
            className="hidden absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
            id="menu"
          >
            <NavigationLinks />
          </div>
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
