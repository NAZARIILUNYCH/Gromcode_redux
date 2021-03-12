/* eslint-disable import/no-cycle */
/* eslint-disable import/no-unresolved */
import { NEXT_PAGE, PREV_PAGE } from './users.actions';

const initialState = {
  start: 0,
  end: 3,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_PAGE:
      return {
        ...state,
        start: state.start + 3,
        end: state.end + 3,
      };

    case PREV_PAGE:
      return {
        ...state,
        start: state.start - 3,
        end: state.end - 3,
      };

    default:
      return state;
  }
};

export default usersReducer;
