import React from "react";
import Card from "../../Card/Card.component";
import pizzas from "./data.json";


const Pizza = () => {
  return (
    <div className="mx-auto flex flex-col justify-center pt-28">
      {pizzas &&
        pizzas.map((pizza) => {
          return (
            <Card
              key={Math.random()}
              pizza={pizza}
            />
          );
        })}
    </div>
  );
};
export default Pizza;
