import { SET_USER, REMOVE_USER } from './user.actions';

export const userReducer = (state = null, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        state: action.payload.user,
      };

    case REMOVE_USER:
      return {
        state: null,
      };

    default:
      return state;
  }
};
