/* eslint-disable import/no-cycle */
import { initialState } from "./store";
import { ADDUSER, DELETEUSER } from "./users.actions";

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDUSER:
      return {
        ...state,
        usersList: state.usersList.concat(action.payload),
      };

    case DELETEUSER:
      return {
        ...state,
        usersList: state.usersList.filter((el) => el.id !== action.payload),
      };

    default:
      return state;
  }
};

export default usersReducer;
