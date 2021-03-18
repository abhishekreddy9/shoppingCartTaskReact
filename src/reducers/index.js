import { combineReducers } from "redux";
import { checkoutItemsReducer } from "./checkoutItemsReducer";

const rootReducer = combineReducers({
  items: checkoutItemsReducer,
});

export default rootReducer;
