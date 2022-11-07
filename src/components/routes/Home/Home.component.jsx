import { Link } from "react-router-dom";
import img1 from "../Features/Screenshot from 2022-11-07 16-54-55.png"

const Home = () => {
  return (
    <section id="hero">
      {
        // Flex Container
      }
      <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-36 space-y-0 md:space-y-0 md:flex-row">
        {
          // Left Item
        }
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
            FastKitchen: Delivering Happiness
          </h1>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            What’s better than having a crispy melty pizza, you ask? Having that
            crispy and melty pizza in the comfort of your own home with the ones
            you love, we say. With Forever0's it is always “Rishton ka time”.
            Whether it's a treat for your promotion, a kid topping his class or
            winning the heart of your wife who is too tired to cook after a long
            day at work! A cheesy slice of the best pizza is all one needs to
            put things into perspective and start any celebration. Plus, you do
            not even need to rush to the restaurant to have one now. A call, a
            few clicks on our website or a few touches on the mobile screen is
            all you have to do to have that tempting, light-on-the-pocket pizza
            at your doorstep.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link
              to="/"
              className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
            >
              Pizza
            </Link>
          </div>
        </div>
        {
          // Image
        }
        <div className="md:w-1/2 ">
          <img src={img1} alt="img1" />
        </div>
      </div>
    </section>
  );
};
export default Home;
