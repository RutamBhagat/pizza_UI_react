import Veg from "./veg.png";
import NonVeg from "./nonveg.png";
const Category = ({ category }) => {
  if (category === "veg") {
    return <img className="h-5 w-5" src={Veg} alt="veg" />;
  } else {
    return <img className="h-5 w-5" src={NonVeg} alt="nonveg" />;
  }
};
export default Category;
