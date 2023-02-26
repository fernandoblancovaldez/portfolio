import { TYPES } from "../actions/shopActions";

export const shopInitialState = {
  items: [
    {
      id: 1,
      price: "100",
      name: "Producto 1",
      url: "https://picsum.photos/420",
    },
    {
      id: 2,
      price: "200",
      name: "Producto 2",
      url: "https://picsum.photos/420",
    },
    {
      id: 3,
      price: "300",
      name: "Producto 3",
      url: "https://picsum.photos/420",
    },
    {
      id: 4,
      price: "400",
      name: "Producto 4",
      url: "https://picsum.photos/420",
    },
    {
      id: 5,
      price: "500",
      name: "Producto 5",
      url: "https://picsum.photos/420",
    },
    {
      id: 6,
      price: "600",
      name: "Producto 6",
      url: "https://picsum.photos/420",
    },
    {
      id: 7,
      price: "700",
      name: "Producto 7",
      url: "https://picsum.photos/420",
    },
    {
      id: 8,
      price: "800",
      name: "Producto 8",
      url: "https://picsum.photos/420",
    },
    {
      id: 9,
      price: "900",
      name: "Producto 9",
      url: "https://picsum.photos/420",
    },
  ],
  cart: [],
};

export function shopReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
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
    case TYPES.REMOVE_ONE_FROM_CART: {
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
    case TYPES.REMOVE_ALL_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case TYPES.CLEAR_CART: {
      return shopInitialState;
    }
    default:
      return state;
  }
}
