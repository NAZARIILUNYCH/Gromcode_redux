/* eslint-disable import/no-unresolved */
import React from 'react';
import { connect } from 'react-redux';
import Pagination from './Pagination';
import User from './User';
import * as userActions from './users.actions';

class UsersList extends React.Component {
  prevPage = () => {
    this.props.prevPage();
  };

  nextPage = () => {
    this.props.nextPage();
  };

  render() {
    const { users, start, end } = this.props;

    const itemsPerPage = 3;
    const totalItems = users.length;
    const currentPage = end / itemsPerPage;

    return (
      <div>
        <Pagination
          goPrev={this.prevPage}
          goNext={this.nextPage}
          currentPage={currentPage}
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
        />
        <ul className="users">
          {users.slice(start, end).map(user => (
            <li key={user.id} className="user">
              <User name={user.name} age={user.age} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapState = state => {
  return {
    start: state.users.start,
    end: state.users.end,
  };
};

const mapDispatch = {
  nextPage: userActions.nextPage,
  prevPage: userActions.prevPage,
};

export default connect(mapState, mapDispatch)(UsersList);
