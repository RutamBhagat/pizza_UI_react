import { createAction } from "../../utils/Reducer/createAction";
import { CART_ACTION_TYPES } from "./cart.types";


export const handleAddPizza = (checkoutArr, pizza, quantity, size, subTotal) => {
    const addPizza = () => {
        const newPizza = { ...pizza, quantity, size, subTotal };

        for (let inst of checkoutArr) {
            if (inst.name === newPizza.name && inst.size === newPizza.size) {
                inst.quantity += newPizza.quantity;
                if (inst.quantity > 10) {
                    inst.quantity = 10;
                }
                return [...checkoutArr];
            }
        }
        return [...checkoutArr, newPizza];
    };

    const newCartArr = addPizza();
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartArr);
};

export const handleRemovePizza = (checkoutArr, pizza) => {
    const removePizza = () => {
        const index = checkoutArr.indexOf(pizza);
        checkoutArr.splice(index, 1);
        return [...checkoutArr];
    };
    const newCartArr = removePizza();
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartArr);
};

export const handleUpdatePizza = (checkoutArr, pizza, quantity, size, subTotal) => {
    const updatePizza = () => {
        const index = checkoutArr.indexOf(pizza);
        Object.assign(checkoutArr[index], { quantity, size, subTotal });
        return [...checkoutArr];
    };
    const newCartArr = updatePizza();
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartArr);
};