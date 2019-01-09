import * as types from "./actionTypes";

const INITIAL_STATE = {
  description: "",
  list: []
};

function todo(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.ADD_TODO:
      return {
        description: "",
        list: [...state.list, action.payload.data]
      };

    case types.REMOVE_TODO:
      return {
        ...state,
        list: state.list.filter(item => item.id !== action.payload.id)
      };

    case types.TOGGLE_FINISH:
      return {
        ...state,
        list: state.list.map(item => {
          if (item.id === action.payload.id) {
            item.finished = !item.finished;
          }
          return item;
        })
      };
    case types.UPDATE_DESCRIPTION:
      return {
        ...state,
        description: action.payload.description
      };
    default:
      return state;
  }
}

export default todo;
