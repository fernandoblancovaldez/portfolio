import { combineReducers } from "redux";
import { shopReducer } from "./shopReducer";
import { toDoListReducer } from "./toDoListReducer";
import { tvSearcherReducer } from "./tvSearcherReducer";
import { weatherReducer } from "./weatherReducer";

const reducer = combineReducers({
  shop: shopReducer,
  toDoList: toDoListReducer,
  weather: weatherReducer,
  tvSearcher: tvSearcherReducer,
});

export default reducer;
