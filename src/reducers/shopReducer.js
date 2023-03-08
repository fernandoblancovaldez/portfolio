import {
  ADD_TO_CART,
  CLEAR_CART,
  CLEAR_SHOP,
  READ_DATA,
  REMOVE_ALL_FROM_CART,
  REMOVE_ONE_FROM_CART,
} from "../types";

export const initialState = {
  items: [],
  cart: [],
};

export function shopReducer(state = initialState, action) {
  switch (action.type) {
    case READ_DATA: {
      const products = action.payload[0];
      const prices = action.payload[1];

      const productsData = products.data.map((product) => {
        let { id, name, images } = product;
        return { id, name, url: images[0] };
      });

      const pricesData = prices.data.map((price) => {
        let { id, product, currency, unit_amount_decimal } = price;
        return {
          product,
          amount: unit_amount_decimal,
          currency,
          price: id,
        };
      });

      const items = productsData.map((productData) => {
        const moneyFormat = (num, currency) =>
          `$${num.slice(0, -2)}.${num.slice(-2)} ${currency}`;

        let itemPrice = pricesData.filter(
          (priceData) => priceData.product === productData.id
        );
        let { amount, currency, price } = itemPrice[0];

        let fullPrice = moneyFormat(amount, currency);

        let item = {
          ...productData,
          amount,
          fullPrice,
          currency,
          price,
        };
        return item;
      });

      //console.log(items);
      return { ...state, items: [...items] };
    }
    case ADD_TO_CART: {
      let newItem = state.items.find((item) => item.id === action.payload);
      let itemInCart = state.cart.find((item) => item.id === newItem.id);
      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : { ...state, cart: [...state.cart, { ...newItem, quantity: 1 }] };
    }
    case REMOVE_ONE_FROM_CART: {
      let itemInCart = state.cart.find((item) => item.id === action.payload);
      return itemInCart.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    }
    case REMOVE_ALL_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case CLEAR_CART: {
      return { ...state, cart: [] };
    }
    case CLEAR_SHOP: {
      return initialState;
    }
    default:
      return state;
  }
}
