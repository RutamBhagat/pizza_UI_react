import { Link } from "react-router-dom";
import Customer1 from "../../../img/avatar-ali.png"
import Customer2 from "../../../img/avatar-anisha.png"
import Customer3 from "../../../img/avatar-richard.png"

const Customers = () => {
  return (
    <section id="testimonials">
      <div class="max-w-6xl px-5 mx-auto mt-32 text-center">
        <h2 class="text-4xl font-bold text-center">
          Listen to what our Customers have to say about us.
        </h2>
        <div class="flex flex-col mt-24 md:flex-row md:space-x-6">
          <div class="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
            <img src={Customer1} class="w-16 -mt-14" alt="" />
            <h5 class="text-lg font-bold">Marinos Theodosiou</h5>
            <p class="text-sm text-darkGrayishBlue">
              “What an amazing restaurant full of history and incredible
              flavour. It was a long time waiting experience and all of my
              expectations were met and indeed surpassed. The quality of the
              pizza, the ingredients, the baking, the service and in general
              experience were immaculate!! You have to wait for a while till you
              get a table but it's worth the wait. Very reasonably priced and
              fast service. Enjoy!”
            </p>
          </div>

          <div class="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
            <img src={Customer2} class="w-16 -mt-14" alt="" />
            <h5 class="text-lg font-bold">Eli Ben Gigi</h5>
            <p class="text-sm text-darkGrayishBlue">
              “A traditional family pizzeria Probably the pizzeria that serves
              the most famous Neapolitan pizza in India if not in the whole
              world. As befits such a milestone there is a lively movement of
              spenders throughout the hours of operation and at the same time
              the waiting for a vacant table does not take long and is even
              surprising in the efficiency with which the place is run. The
              prices are worth every penny and do not take advantage of the
              class that places with such hype usually tend to take advantage
              of. And as for the pizza itself ... there will be those who will
              love more, there will be those who will love less, there will be
              those who will swear that this is the best pizza in the world, and
              there will be those who will not understand what the fuss is
              about. In the end it's a matter of taste and yet if you're in
              India it's an experience not to be missed.”
            </p>
          </div>

          <div class="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
            <img src={Customer3} class="w-16 -mt-14" alt="" />
            <h5 class="text-lg font-bold">Marc B.</h5>
            <p class="text-sm text-darkGrayishBlue">
              “We arrived about 10 min. after opening, 16 tables had been given
              away by that time. There was a light crowd waiting outside the
              restaurant. You need a number if you want to eat at a table, for
              takeaway, just line up at the right side of the door, this takes
              less time obviously. Our number was called after about 15 min. The
              pizza was delicious, we both had the half Margherita, half
              Marinara. The dough was fluffy and very flavorful! It was also
              very filling. All that and a fun atmosphere for just Rs. 500! When we
              left, there were lots more people waiting outside, I‘d guess half an
              hour wait at least. And that was on a Friday, weekends might be
              worse. All in all very recommended and definitely not a tourist
              trap, although most visitors are tourists.”
            </p>
          </div>
        </div>

        {
          // Button
        }
        <div class="my-16">
          <Link to="/Checkout" class="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">
            Checkout
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Customers;
