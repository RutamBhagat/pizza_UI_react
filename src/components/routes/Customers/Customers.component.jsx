import { Link } from "react-router-dom";
import { Fragment } from "react";
import Customer1 from "../../../img/avatar-ali.png";
import Customer2 from "../../../img/avatar-anisha.png";
import Customer3 from "../../../img/avatar-richard.png";

const Customers = () => {
  return (
    <Fragment>
      <div
        id="carouselExampleCaptions"
        className="carousel slide relative mt-28"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner relative w-full overflow-hidden">
          <div
            className="carousel-item active relative float-left w-full bg-brightRed"
            style={{ height: "75vh" }}
          >
            <div className="carousel-caption block absolute text-center">
              <img
                src={Customer1}
                className="w-36 -mt-5 mx-auto mb-10"
                alt=""
              />
              <h5 className="text-3xl font-bold mb-5">Marinos Theodosiou</h5>
              <p className="text-sm">
                “What an amazing restaurant full of history and incredible
                flavour. It was a long time waiting experience and all of my
                expectations were met and indeed surpassed. The quality of the
                pizza, the ingredients, the baking, the service and in general
                experience were immaculate!! You have to wait for a while till
                you get a table but it's worth the wait. Very reasonably priced
                and fast service. Enjoy!”
              </p>
            </div>
          </div>
          <div
            className="carousel-item relative float-left w-full bg-brightRed"
            style={{ height: "75vh" }}
          >
            <div className="carousel-caption block absolute text-center">
              <img
                src={Customer2}
                className="w-36 -mt-5 mx-auto mb-10"
                alt=""
              />
              <h5 className="text-3xl font-bold mb-5">Eli Ben Gigi</h5>
              <p className="text-sm">
                “A traditional family pizzeria Probably the pizzeria that serves
                the most famous Neapolitan pizza in India if not in the whole
                world. As befits such a milestone there is a lively movement of
                spenders throughout the hours of operation and at the same time
                the waiting for a vacant table does not take long and is even
                surprising in the efficiency with which the place is run.”
              </p>
            </div>
          </div>
          <div
            className="carousel-item relative float-left w-full bg-brightRed"
            style={{ height: "75vh" }}
          >
            <div className="carousel-caption block absolute text-center">
              <img
                src={Customer3}
                className="w-36 -mt-5 mx-auto mb-10"
                alt=""
              />
              <h5 className="text-3xl font-bold mb-5">Marc B.</h5>
              <p className="text-sm">
                “We arrived about 10 min. after opening, 16 tables had been
                given away by that time. There was a light crowd waiting outside
                the restaurant. You need a number if you want to eat at a table,
                for takeaway, just line up at the right side of the door, this
                takes less time obviously. Our number was called after about 15
                min. The pizza was delicious, we both had the half Margherita,
                half Marinara.”
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {
        // Button
      }
      <div className="mt-16 text-center">
        <Link
          to="/"
          className="p-3 px-6 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
        >
          Pizza
        </Link>
      </div>
    </Fragment>
  );
};
export default Customers;
