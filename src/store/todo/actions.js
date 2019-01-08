import * as types from "./actionTypes";

export function addTodo(data) {
  return {
    type: types.ADD_TODO,
    payload: { data }
  };
}
