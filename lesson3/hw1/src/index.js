import store from './store';
import { setLanguage } from './language.actions';
import { addProduct, removeProduct } from './cart.actions';
import { setUser, removeUser } from './user.actions';

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(setLanguage('jp'));
store.dispatch(setLanguage('ua'));

store.dispatch(addProduct({ id: 76, name: 'milk' }));
store.dispatch(addProduct({ id: 4, name: 'water' }));

store.dispatch(removeProduct(4));

store.dispatch(setUser({ name: 'John' }));
store.dispatch(removeUser());
store.dispatch(setUser({ name: 'Nazar' }));
