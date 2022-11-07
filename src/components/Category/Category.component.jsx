import Veg from "./veg.png"
import NonVeg from "./nonveg.png"
const Category = ({category}) => {
    if (category === "veg") {
        return <img className="w-5 h-5" src={Veg} alt="veg" />
    }
    else {
        return <img className="w-5 h-5" src={NonVeg} alt="nonveg" />
    }
}
export default Category