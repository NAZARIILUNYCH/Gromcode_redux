/* eslint-disable no-unused-expressions */
export const ADDUSER = "USERS/ADDUSER";
export const DELETEUSER = "USERS/DELETEUSER";

export const addUser = (...obj) => ({
  type: ADDUSER,
  payload: {
    ...obj,
  },
});

export const deleteUser = (id) => ({
  type: DELETEUSER,
  payload: id,
});
