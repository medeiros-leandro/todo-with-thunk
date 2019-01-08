import * as types from "./actionTypes";

const INITIAL_STATE = [
  {
    list: []
  }
];

function todo(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.ADD_TODO:
      return state.list.push(action.payload.data);
    default:
      return state;
  }
}

export default todo;
