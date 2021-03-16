/* eslint-disable no-shadow */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { connect } from 'react-redux';
import User from './User';
import Filter from '../Filter';
import { filterTextSelector, usersListSelector } from './users.selectors';
import { filterText } from './users.actions';

const UsersList = ({ usersList, handleChange, filterText }) => {
  return (
    <div>
      <Filter
        count={usersList.length}
        onChange={e => handleChange(e.target.value)}
        filterText={filterText}
      />
      <ul className="users">
        {usersList.map(user => (
          <User key={user.id} {...user} />
        ))}
      </ul>
    </div>
  );
};

const mapState = state => ({
  filterText: filterTextSelector(state),
  usersList: usersListSelector(state),
});

const mapDispatch = {
  handleChange: filterText,
};

export default connect(mapState, mapDispatch)(UsersList);
