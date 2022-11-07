const Features = () => {
  return (
    <section id="features">
      {
        // Flex Container
      }
      <div className="container flex flex-col px-4 mx-auto mt-36 my-24 space-y-12 md:space-y-0 md:flex-row">
        {
          // What's Different
        }
        <div className="flex flex-col space-y-12 md:w-1/2">
          <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
            What's Different about FastKitchen?
          </h2>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            There is something for everyone here. The vegetarians,
            non-vegetarians, the sides’ lovers and also the ones who love to
            have something sweet by the time they reach the last bite of the
            last slice of pizza slice. No matter what the situation, pizza
            always helps.
          </p>
        </div>
        {
          // Numbered List
        }
        <div className="flex flex-col space-y-8 md:w-1/2">
          {
            // List Items
          }
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            <div className="rounded-l-full md:bg-transparant">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                  01
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  What We Need - More Choice. More Fun.
                </h3>
              </div>
            </div>
            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                What We Need - More Choice. More Fun.
              </h3>
              <p className="text-darkGrayishBlue">
                A pizza that gives you the freedom to choose your toppings -
                from paneer, crisp capsicum, onion, grilled mushroom, golden
                corn, black olives, fresh tomato, red paprika, jalapeno, paneer
                tikka and extra cheese to non-veg toppings such as pepper
                barbeque chicken, peri-peri chicken, grilled chicken rasher,
                chicken sausage or chicken tikka- the options are almost
                endless, anything and everything you can think of that too on
                top of the crust of your choice - New hand-tossed crust, wheat
                thin crust, cheese burst crust, classic hand-tossed crust or a
                fresh pan pizza. Because just like a pizza, HellsKitchen
                understands you.
              </p>
            </div>
          </div>

          {
            // List Items
          }
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            <div className="rounded-l-full md:bg-transparant">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                  02
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  The promise of 15-minute Delivery
                </h3>
              </div>
            </div>
            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                The promise of 15-minute Delivery
              </h3>
              <p className="text-darkGrayishBlue">
                The icing on the cake or more aptly the extra cheese on your
                already fabulous pizza is that HellsKitchen takes only 15 min
                for its pizza delivery service. Don’t believe us? Time it if you
                please. With 1250+ stores present all over India, you can have a
                HellsKitchen's pizza even while traveling on a train. Yes, you
                are reading it right, you can enjoy pizza on train too. So stop
                googling for the “pizza shops near me” and order from your
                nearest pizza outlet to have a hot box of pizza on your table in
                the next 15 minutes, or berth at the next halting station.
              </p>
            </div>
          </div>

          {
            // List Items
          }
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            <div className="rounded-l-full md:bg-transparant">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                  03
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  Free Large Pizza® Now.* Free Medium Pizza Later.
                </h3>
              </div>
            </div>
            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                Free Large Pizza® Now.* Free Medium Pizza Later.
              </h3>
              <p className="text-darkGrayishBlue">
                Get a free Large Pizza when you download the HellsKitchen's app
                and join HellsKitchen's Rewards. After your first purchase
                you’ll earn 1500 bonus points to redeem for free Medium Pizza.
              </p>
              <p className="text-darkGrayishBlue text-sm">
                *Offer valid 1x thru the last day of the month for first time
                app users at participating McDonald's. May take up to 48 hours
                to appear in your deals. Excludes delivery. ^Free MyMcDonald’s
                Rewards points valid 1x thru 12/31/22 for first time
                MyMcDonald’s Rewards users. Program available only at
                participating McDonald’s. McD app download and registration
                required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
