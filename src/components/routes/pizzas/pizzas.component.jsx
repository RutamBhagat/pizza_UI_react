import Card from "../../Card/Card.component";
import pizzas from "./data.json";

const Pizza = ({wishList, handleSetWishList, handleAddPizza, checkoutArr}) => {
  return (
    <div className="flex flex-col justify-center pt-36 w-5/6 mx-auto">
      {pizzas && pizzas.map((pizza) => {
        return <Card pizza={pizza} wishList={wishList} handleSetWishList={handleSetWishList} handleAddPizza={handleAddPizza} checkoutArr={checkoutArr} />;
      })}
    </div>
  );
};
export default Pizza;
