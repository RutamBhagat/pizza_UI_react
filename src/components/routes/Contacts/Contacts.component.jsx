import { Link } from "react-router-dom";
import FacebookImg from "../../../img/icon-facebook.svg";
import YoutubeImg from "../../../img/icon-youtube.svg";
import TwitterImg from "../../../img/icon-twitter.svg";
import PinterestImg from "../../../img/icon-pinterest.svg";
import InstagramImg from "../../../img/icon-instagram.svg";

const Contacts = () => {
  return (
    <div className="bg-veryDarkBlue mt-24 ">
      {
        // Flex Container
      }
      <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        {
          // Logo and social links container
        }
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          <div className="mx-auto my-6 text-center text-white md:hidden">
            Copyright &copy; 2022, All Rights Reserved
          </div>
          {
            // Logo
          }
          <Link to="/" className="text-white text-4xl font-semibold">
          FastKitchen
        </Link>
          {
            // Social Links
          }
          <div className="flex justify-center space-x-4">
            <Link to="/">
              <img src={FacebookImg} className="h-8" alt="" />
            </Link>
            <Link to="/">
              <img src={YoutubeImg} className="h-8" alt="" />
            </Link>
            <Link to="/">
              <img src={TwitterImg} className="h-8" alt="" />
            </Link>
            <Link to="/">
              <img src={PinterestImg} className="h-8" alt="" />
            </Link>
            <Link to="/">
              <img src={InstagramImg} className="h-8" alt="" />
            </Link>
          </div>
        </div>
        {
          // List Container
        }
        <div className="flex justify-around space-x-20">
          <div className="flex flex-col space-y-3 text-white">
            <Link to="/" className="hover:text-brightRed">
              Home
            </Link>
            <Link to="/pizza" className="hover:text-brightRed">
              Pizza
            </Link>
            <Link to="/features" className="hover:text-brightRed">
              Features
            </Link>
            <Link to="/customers" className="hover:text-brightRed">
              Customers
            </Link>
            <Link to="/contacts" className="hover:text-brightRed">
              Contacts
            </Link>
          </div>
          <div className="flex flex-col space-y-3 text-white">
            <Link to="/contacts" className="hover:text-brightRed">
              Careers
            </Link>
            <Link to="/contacts" className="hover:text-brightRed">
              Community
            </Link>
            <Link to="/contacts" className="hover:text-brightRed">
              Privacy Policy
            </Link>
          </div>
        </div>
        {
          // Input Container
        }
        <div className="flex flex-col justify-between">
          <form>
            <div className="flex space-x-3">
              <input
                type="text"
                placeholder="Updated in your inbox"
                className="flex-1 px-4 rounded-full focus:outline-none"
              />
              <button className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">
                Go
              </button>
            </div>
          </form>
          <div className="hidden text-white md:block">
            Copyright &copy; 2022, All rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contacts;
