import { createSelector } from "reselect"


const selectWishListReducer = (state) => state.wishList

export const selectWishList = createSelector(
    [selectWishListReducer],
    (wishList) => wishList.wishList
)