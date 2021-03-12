/* eslint-disable import/no-named-as-default-member */
import { createStore, combineReducers } from 'redux';
import usersReducer from './users/users.reducer';

const reducer = combineReducers({
  users: usersReducer,
  counter: 0,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
