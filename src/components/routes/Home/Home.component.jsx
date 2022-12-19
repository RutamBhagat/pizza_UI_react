import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section id="hero">
      <div className="container max-w-7xl flex flex-col-reverse items-center px-6 mx-auto mt-36 space-y-0 md:space-y-0 lg:flex-row">
        <div className="flex flex-col space-y-12">
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
          <button className="flex pb-12 justify-center md:justify-start">
            <Link
              to="/pizza"
              className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
            >
              Buy Pizza
            </Link>
          </button>
        </div>
        <div className="md:w-3/4 md:ml-10 pb-10 lg:pb-0">
          <img className="rounded-xl" src="https://images.alphacoders.com/859/thumb-1920-859458.jpg" alt="pizza1" />
        </div>
      </div>
    </section>
  );
};
export default Home;
