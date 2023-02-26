import { combineReducers } from "redux";
import { shopReducer } from "./shopReducer";

const reducer = combineReducers({
  shop: shopReducer,
});

export default reducer;
