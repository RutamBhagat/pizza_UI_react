import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./Customers.styles.css";

// import required modules
import { EffectCards } from "swiper";

const Customers = () => {
  return (
    <div className="flex items-center justify-center py-36">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className=""
      >
        <SwiperSlide className="flex flex-col px-10 py-24">
          <div
            className="m-5 mx-auto h-36 w-36 rounded-full bg-cover bg-center"
            style={{
              backgroundImage: `url(https://i.pinimg.com/originals/20/34/ef/2034ef8d9c61aeac77fbf58cc042446d.jpg)`,
            }}
          ></div>
          <h5 className="mb-5 text-3xl font-bold">Marinos Theodosiou</h5>
          <p className="text-sm">
            “What an amazing restaurant full of history and incredible flavour.
            It was a long time waiting experience and all of my expectations
            were met and indeed surpassed. The quality of the pizza, the
            ingredients, the baking, the service and in general experience were
            immaculate!! You have to wait for a while till you get a table but
            it's worth the wait. Very reasonably priced and fast service.
            Enjoy!”
          </p>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col px-10 py-24">
          <div
            className="m-5 mx-auto h-36 w-36 rounded-full bg-cover bg-center"
            style={{
              backgroundImage: `url(https://f.ptcdn.info/738/030/000/1430046990-1115614981-o.jpg)`,
            }}
          ></div>
          <h5 className="mb-5 text-3xl font-bold">Eli Ben Gigi</h5>
          <p className="text-sm">
            “A traditional family pizzeria Probably the pizzeria that serves the
            most famous Neapolitan pizza in India if not in the whole world. As
            befits such a milestone there is a lively movement of spenders
            throughout the hours of operation and at the same time the waiting
            for a vacant table does not take long and is even surprising in the
            efficiency with which the place is run.”
          </p>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col px-10 py-24">
          <div
            className="m-5 mx-auto h-36 w-36 rounded-full bg-cover bg-center"
            style={{
              backgroundImage: `url(https://i.pinimg.com/originals/60/6a/34/606a34cb62a68045ba044fd720b2d59e.jpg)`,
            }}
          ></div>
          <h5 className="mb-5 text-3xl font-bold">April O'Neil</h5>
          <p className="text-sm">
            “We arrived about 10 min. after opening, 16 tables had been given
            away by that time. There was a light crowd waiting outside the
            restaurant. You need a number if you want to eat at a table, for
            takeaway, just line up at the right side of the door, this takes
            less time obviously. Our number was called after about 15 min. The
            pizza was delicious, we both had the half Margherita, half
            Marinara.”
          </p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Customers;
