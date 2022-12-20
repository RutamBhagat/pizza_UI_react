import React, { useState } from "react";
import CheckoutCard from "../../CheckoutCard/CheckoutCard.component";
import { Fragment } from "react";
import WishList from "../../WishList/WishList.component";
import { useSelector } from "react-redux";
import {
  selectCartLength,
  selectCartTotal,
  selectCheckoutArr,
} from "../../../store/cart/cart.selector";
import { selectWishList } from "../../../store/wishlist/wishlist.selector";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import AlertComponent from "../../alertComponent/alert.component";

const Checkout = () => {
  const checkoutArr = useSelector(selectCheckoutArr);
  const cartLength = useSelector(selectCartLength);
  const cartTotal = useSelector(selectCartTotal);
  const wishList = useSelector(selectWishList);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const revealWishList = () => {
    const checkout_wishlist = document.querySelector("#checkout_wishlist");
    const wishlist_prompt = document.querySelector("#wishlist_prompt");
    checkout_wishlist.classList.toggle("hidden");
    wishlist_prompt.classList.toggle("hidden");
  };

  const showAlert = (id) => {
    const alert = document.querySelector(`#${id}`);
    alert.classList.toggle("hidden");
  };

  const stripe = useStripe();
  const elements = useElements();
  const paymentHandler = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    setIsProcessingPayment(true);

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: cartTotal * 100,
      }),
    }).then((res) => res.json());

    const client_secret = response.paymentIntent.client_secret;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: "Guest_FastKitchen",
        },
      },
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      showAlert("popup-modal-failed");
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        showAlert("popup-modal-success");
      }
    }
  };

  if (cartLength) {
    return (
      <Fragment>
        <div className="flex flex-row">
          <AlertComponent
            messages={[
              "Card: 4000003560000008",
              "Exp Date: any future date",
              "CVC: any 3 digit number",
            ]}
            id="popup-modal-credit-card"
            showAlert={showAlert}
            type={"warning"}
          />
          <AlertComponent
            messages={["Payment Successful"]}
            id="popup-modal-success"
            showAlert={showAlert}
            type={"success"}
          />
          <AlertComponent
            messages={["Payment Failed"]}
            id="popup-modal-failed"
            showAlert={showAlert}
            type={"error"}
          />
        </div>
        <div className="mx-auto flex flex-col justify-center pt-28">
          {checkoutArr &&
            checkoutArr.map((pizza) => {
              return <CheckoutCard key={Math.random()} pizza={pizza} />;
            })}
        </div>
        <div className="flex justify-center rounded bg-cyan-900 p-3">
          <div className="w-full max-w-2xl rounded-lg bg-white p-3">
            <div className="flex justify-between p-5">
              <div className="pb-3 text-gray-800">Card Details</div>
              <button
                onClick={() => showAlert("popup-modal-credit-card")}
                className="rounded-md bg-gray-700 px-5 py-1 text-white hover:bg-gray-500"
              >
                Test Card
              </button>
            </div>
            <div className="rounded-lg p-5 bg-gray-300 my-auto"><CardElement /></div>
          </div>
        </div>
        <form className="body-font text-gray-600">
          <div className="container mx-auto flex flex-col items-center px-24 py-24 sm:flex-row">
            <div className="mb-6 flex w-full flex-col pr-0 text-center md:mb-0 md:w-auto md:pr-10 md:text-left">
              <h2 className="title-font mb-1 text-xs font-medium tracking-widest text-brightRed">
                YOUR TOTAL PAYABLE AMOUNT IS
              </h2>
              <h1 className="title-font text-2xl font-medium text-gray-900 md:text-3xl">
                {`₹ ${cartTotal}`}
              </h1>
            </div>
            <div className="mx-2 flex flex-shrink-0 items-center space-x-4 md:mx-auto md:ml-auto md:mr-0">
              <button
                onClick={paymentHandler}
                type="submit"
                className={`inline-flex items-center rounded-lg bg-gray-600 py-3 px-5 hover:bg-gray-700 focus:outline-none ${
                  isProcessingPayment ? "hidden" : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="h-6 w-6 text-white"
                  viewBox="0 0 512 512"
                >
                  <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                </svg>
                <span className="ml-4 flex flex-col items-start leading-none">
                  <span className="mb-1 text-xs text-gray-200">
                    PLACE ORDER
                  </span>
                  <span className="title-font font-medium text-gray-200">
                    PAY NOW
                  </span>
                </span>
              </button>
            </div>
          </div>
        </form>
      </Fragment>
    );
  } else if (wishList.length) {
    return (
      <div className="mx-auto flex min-h-screen flex-col justify-center pt-36">
        <div className="flex items-center justify-center text-center text-4xl text-gray-600">
          <h1>Your cart is empty...</h1>
        </div>
        <section id="wishlist_prompt" className="body-font text-gray-600">
          <div className="container mx-auto px-5 pt-24">
            <div className="mx-auto flex flex-col items-start sm:flex-row sm:items-center lg:w-2/3">
              <h1 className="title-font flex-grow text-2xl font-medium text-gray-900 sm:pr-16">
                CANT DECIDE? CHECKOUT YOUR WISHLIST
              </h1>
              <button
                onClick={revealWishList}
                className="mt-10 flex-shrink-0 rounded border-0 bg-brightRed py-2 px-8 text-lg text-white hover:bg-red-600 focus:outline-none sm:mt-0"
              >
                Wishlist
              </button>
            </div>
          </div>
        </section>
        <div className="hidden" id="checkout_wishlist">
          <WishList />
        </div>
      </div>
    );
  } else {
    return (
      <div className="mx-auto flex min-h-screen flex-col justify-center pt-36">
        <div className="flex items-center justify-center text-center text-4xl text-gray-600">
          <h1>Your cart is empty...</h1>
        </div>
      </div>
    );
  }
};
export default Checkout;
