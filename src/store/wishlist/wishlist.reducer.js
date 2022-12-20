import { WISHLIST_ACTION_TYPES } from "./wishlist.types"


const WISHLIST_INITIAL_STATE = {
    wishList: [],
  }

export const wishListReducer = (state = WISHLIST_INITIAL_STATE, action = {}) => {
    const {type, payload} = action
    switch (type) {
      case WISHLIST_ACTION_TYPES.SET_WISHLIST_ITEMS:
      return{
        ...state,
        wishList: payload
      }
      default:
        return state
    }
  }
  
