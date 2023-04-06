import { READ_WEATHER, SET_WEATHER_LOADING } from "../types";

export const initialState = {
  weatherInfo: null,
  loading: true,
};

export function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case READ_WEATHER: {
      return {
        weatherInfo: action.payload,
        loading: false,
      };
    }
    case SET_WEATHER_LOADING: {
      return { ...state, loading: action.payload };
    }
    default:
      return state;
  }
}
