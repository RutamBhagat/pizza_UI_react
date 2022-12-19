import Veg from "./veg.png";
import NonVeg from "./nonveg.png";
const Category = ({ category }) => {
  if (category === "veg") {
    return (
      <div className="bg-white">
        <img className="h-5 w-5" src={Veg} alt="veg" />
      </div>
    );
  } else {
    return (
      <div className="bg-white">
        <img className="h-5 w-5" src={NonVeg} alt="nonveg" />
      </div>
    );
  }
};
export default Category;
