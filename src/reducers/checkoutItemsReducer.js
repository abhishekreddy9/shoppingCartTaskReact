import {
  DECREMENT_QUANTITY,
  DELETE_ITEM,
  INCREMENT_QUANTITY,
} from "../actions/actionTypes";
import { items } from "../mocks/items";

const INITIAL_STATE = {
  items,
  selectedQuantities: {
    0: 1,
    1: 1,
    2: 1,
  },
};

export function checkoutItemsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case INCREMENT_QUANTITY:
      return {
        ...state,
        selectedQuantities: {
          ...state.selectedQuantities,
          [action.payload]: state["selectedQuantities"][action.payload] + 1,
        },
      };
    case DECREMENT_QUANTITY:
      return {
        ...state,
        selectedQuantities: {
          ...state.selectedQuantities,
          [action.payload]: state["selectedQuantities"][action.payload] - 1,
        },
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((i) => i.id !== action.payload),
      };
    default:
      return state;
  }
}
