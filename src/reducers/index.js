import { combineReducers } from "redux";
import { shopReducer } from "./shopReducer";
import { toDoListReducer } from "./toDoListReducer";

const reducer = combineReducers({
  shop: shopReducer,
  toDoList: toDoListReducer,
});

export default reducer;
