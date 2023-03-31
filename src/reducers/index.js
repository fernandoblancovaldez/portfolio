import { combineReducers } from "redux";
import { shopReducer } from "./shopReducer";
import { toDoListReducer } from "./toDoListReducer";
import { weatherReducer } from "./weatherReducer";

const reducer = combineReducers({
  shop: shopReducer,
  toDoList: toDoListReducer,
  weather: weatherReducer,
});

export default reducer;
