import {
  READ_WEATHER,
  SEARCH_INPUT_WEATHER,
  SEARCH_LOCAL_WEATHER,
} from "../types";

export const initialState = {
  weatherInfo: null,
  dataToApi: null,
};

export function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case READ_WEATHER: {
      return { ...state, weatherInfo: action.payload };
    }
    case SEARCH_LOCAL_WEATHER: {
      return {
        ...state,
        dataToApi: `lat=${action.payload.latitude}&lon=${action.payload.longitude}`,
      };
    }
    case SEARCH_INPUT_WEATHER: {
      return {
        ...state,
        dataToApi: `q=${action.payload}`,
      };
    }
    default:
      return state;
  }
}
