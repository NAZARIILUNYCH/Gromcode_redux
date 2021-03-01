import store from "./store";
import { addUser, deleteUser } from "./users.actions";

store.subscribe(() => console.log(store.getState()));

store.dispatch(addUser({ id: 1, name: "A" }));
store.dispatch(addUser({ id: 2, name: "B" }));
store.dispatch(addUser({ id: 3, name: "C" }));
store.dispatch(deleteUser(3));
