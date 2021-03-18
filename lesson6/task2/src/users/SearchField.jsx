import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as usersActions from './users.actions';

const SearchField = ({ fetchUserData }) => {
  const [state, setState] = useState({ userName: '' });
  const onChange = event => {
    setState({ userName: event.target.value });
  };

  const handleUserSearch = () => {
    fetchUserData(state.userName);
  };

  return (
    <div className="name-form">
      <input type="text" className="name-form__input" value={state.userName} onChange={onChange} />
      <button className="name-form__btn btn" onClick={handleUserSearch}>
        Show
      </button>
    </div>
  );
};

const mapDispatch = {
  fetchUserData: usersActions.fetchUserData,
};

export default connect(null, mapDispatch)(SearchField);
