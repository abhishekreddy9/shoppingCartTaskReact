import {
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
  DELETE_ITEM,
} from "./actionTypes";

export function incrementQuantity(payload) {
  return { type: INCREMENT_QUANTITY, payload };
}

export function decrementQuantity(payload) {
  return { type: DECREMENT_QUANTITY, payload };
}

export function deleteItem(payload) {
  return { type: DELETE_ITEM, payload };
}
