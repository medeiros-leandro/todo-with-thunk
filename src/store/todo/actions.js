import * as types from "./actionTypes";

export function addTodo(data) {
  return {
    type: types.ADD_TODO,
    payload: { data }
  };
}

export function removeTodo(id) {
  return {
    type: types.REMOVE_TODO,
    payload: {
      id
    }
  };
}

export function toggleStatusFinish(id) {
  return {
    type: types.TOGGLE_FINISH,
    payload: { id }
  };
}

export function updateDescription(description) {
  return {
    type: types.UPDATE_DESCRIPTION,
    payload: {
      description
    }
  };
}
