export const ADD_USER = 'USER/ADD_USER';
export const DELETE_USER = 'USER/DELETE_USER';

export const addUser = user => ({
  type: ADD_USER,
  payload: {
    user,
  },
});

export const deleteUser = id => ({
  type: DELETE_USER,
  payload: {
    id,
  },
});
