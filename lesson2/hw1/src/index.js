import store from "./store";
import { addUser, deleteUser } from "./users.actions";

store.subscribe(() => console.log(store.getState()));

store.dispatch(addUser({ id: 1, name: "A" }));
store.dispatch(addUser({ id: 2, name: "B" }));
store.dispatch(addUser({ id: 3, name: "C" }));
store.dispatch(addUser({ id: 4, name: "D" }));

store.dispatch(deleteUser(3));
store.dispatch(deleteUser(2));
