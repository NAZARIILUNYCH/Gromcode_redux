export const ADDUSER = "USERS/ADDUSER";
export const DELETEUSER = "USERS/DELETEUSER";

export const addUser = (obj) => ({
  type: ADDUSER,
  obj,
});

export const deleteUser = (id) => ({
  type: DELETEUSER,
  id,
});
