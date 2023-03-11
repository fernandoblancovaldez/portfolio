import {
  READ_SHOP_DATA,
  ADD_TO_CART,
  REMOVE_ALL_FROM_CART,
  REMOVE_ONE_FROM_CART,
  CLEAR_CART,
  CLEAR_SHOP,
} from "../types";

export const readShopData = (data) => ({ type: READ_SHOP_DATA, payload: data });

export const addToCart = (id) => ({ type: ADD_TO_CART, payload: id });

export const delFromCart = (id, all = false) =>
  all
    ? { type: REMOVE_ALL_FROM_CART, payload: id }
    : { type: REMOVE_ONE_FROM_CART, payload: id };

export const clearCart = () => ({ type: CLEAR_CART });

export const clearShop = () => ({ type: CLEAR_SHOP });
