import {
  READ_SHOP_DATA,
  ADD_TO_CART,
  REMOVE_ALL_FROM_CART,
  REMOVE_ONE_FROM_CART,
  CLEAR_CART,
  CLEAR_SHOP,
  SET_SHOP_LOADING,
  SET_SHOP_ERROR,
} from "../types";
import { STRIPE_KEYS } from "../assets/STRIPE_KEYS.js";

export const readShopData = () => {
  const itemsURL = "https://api.stripe.com/v1/products";
  const pricesURL = "https://api.stripe.com/v1/prices";
  const fetchOptions = {
    headers: {
      Authorization: `Bearer ${STRIPE_KEYS.secret}`,
    },
  };
  return (dispatch) => {
    Promise.all([fetch(itemsURL, fetchOptions), fetch(pricesURL, fetchOptions)])
      .then((responses) => Promise.all(responses.map((res) => res.json())))
      .then((json) => dispatch({ type: READ_SHOP_DATA, payload: json }))
      .catch((err) => {
        //console.log(err);
        let message =
          err.statusText ||
          "Ocurrió un error al conectarse con el API de Stripe";
        dispatch(setShopError(`Error ${err.status}: ${message}`));
      })
      .finally(() => dispatch(setShopLoading(false)));
  };
};

export const addToCart = (id) => ({ type: ADD_TO_CART, payload: id });

export const delFromCart = (id, all = false) =>
  all
    ? { type: REMOVE_ALL_FROM_CART, payload: id }
    : { type: REMOVE_ONE_FROM_CART, payload: id };

export const clearCart = () => ({ type: CLEAR_CART });

export const clearShop = () => ({ type: CLEAR_SHOP });

export const setShopLoading = (boolean) => ({
  type: SET_SHOP_LOADING,
  payload: boolean,
});

export const setShopError = (data) => ({ type: SET_SHOP_ERROR, payload: data });
