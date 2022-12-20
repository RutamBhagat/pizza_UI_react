import { createSelector } from "reselect";


const selectCartReducer = (state) => state.cart

export const selectCheckoutArr = createSelector(
    [selectCartReducer],
    (categories) => categories.checkoutArr
)

export const selectCartLength = createSelector(
    [selectCheckoutArr],
    (checkoutArr) => checkoutArr.reduce(
        (acc, inst) => acc + inst.quantity,
        0
    )
)

export const selectCartTotal = createSelector(
    [selectCheckoutArr],
    (checkoutArr) => checkoutArr.reduce(
        (acc, inst) => acc + inst.subTotal,
        0
    )
)