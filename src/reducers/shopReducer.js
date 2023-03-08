import {
  ADD_TO_CART,
  CLEAR_CART,
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
      const fetchedItems = action.payload[0].data.map((item) => {
        let { id, name, images } = item;
        return { id, name, url: images[0] };
      });
      const fetchedPrices = action.payload[1].data.map((item) => {
        let { id, product, currency, unit_amount_decimal } = item;
        return {
          product,
          amount: unit_amount_decimal,
          currency,
          price: id,
        };
      });

      const items = fetchedItems.map((item) => {
        const moneyFormat = (num, currency) =>
          `$${num.slice(0, -2)}.${num.slice(-2)} ${currency}`;

        let itemPrice = fetchedPrices.filter((el) => el.product === item.id);
        let { amount, currency, price } = itemPrice[0];

        let fullPrice = moneyFormat(amount, currency);

        let newItem = {
          ...item,
          amount,
          fullPrice,
          currency,
          price,
        };
        return newItem;
      });

      //console.log(items);
      return { ...state, items };
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
    default:
      return state;
  }
}
