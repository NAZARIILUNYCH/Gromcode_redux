/* eslint-disable import/no-unresolved */
import React from 'react';
import { Provider } from 'react-redux';
import UsersList from './users/UsersList';
import store from './store';

const App = ({ users }) => (
  <Provider store={store}>
    <UsersList users={users} />
  </Provider>
);

export default App;
