import { createAction } from "../../utils/Reducer/createAction";
import { WISHLIST_ACTION_TYPES } from "./wishlist.types";


export const handleSetWishList = (wishList, pizza, command) => {
    const manageWishList = (pizza, command) => {
        if (command === "add") {
            let notPresent = true
            for (let inst of wishList) {
                if (inst.name == pizza.name) {
                    notPresent = false
                    break
                }
            }
            if (notPresent) {
                return [...wishList, pizza];
            }
        } else {
            const index = wishList.indexOf(pizza);
            wishList.splice(index, 1);
            return [...wishList];
        }
    }
    const newWishList = manageWishList(pizza, command)
    return createAction(WISHLIST_ACTION_TYPES.SET_WISHLIST_ITEMS, newWishList)
};