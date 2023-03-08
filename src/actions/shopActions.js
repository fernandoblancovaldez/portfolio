import {
  ADD_TO_CART,
  CLEAR_CART,
  CLEAR_SHOP,
  READ_DATA,
  REMOVE_ALL_FROM_CART,
  REMOVE_ONE_FROM_CART,
} from "../types";

export const readData = (data) => ({ type: READ_DATA, payload: data });

export const addToCart = (id) => ({ type: ADD_TO_CART, payload: id });

export const delFromCart = (id, all = false) =>
  all
    ? { type: REMOVE_ALL_FROM_CART, payload: id }
    : { type: REMOVE_ONE_FROM_CART, payload: id };

export const clearCart = () => ({ type: CLEAR_CART });

export const clearShop = () => ({ type: CLEAR_SHOP });
