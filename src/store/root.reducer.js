import { combineReducers } from "redux";
import { cartReducer } from "./cart/cart.reducer";
import { wishListReducer } from "./wishlist/wishlist.reducer";


export const rootReducer = combineReducers({
    cart: cartReducer,
    wishList: wishListReducer
})