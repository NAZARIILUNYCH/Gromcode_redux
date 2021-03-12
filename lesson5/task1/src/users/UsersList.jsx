/* eslint-disable import/no-unresolved */
import React from 'react';
import { connect } from 'react-redux';
import Pagination from './Pagination';
import User from './User';
import * as userActions from './users.actions';
import { usersListSelector, currentPageSelector } from './users.selectors';

class UsersList extends React.Component {
  goPrev = () => {
    this.props.prevPage();
  };

  goNext = () => {
    this.props.nextPage();
  };

  render() {
    const { users } = this.props;
    const itemsPerPage = 3;

    const start = users.currentPage * itemsPerPage;
    const end = start + itemsPerPage;

    return (
      <div>
        <Pagination
          goPrev={this.goPrev}
          goNext={this.goNext}
          currentPage={users.currentPage}
          totalItems={users.usersList.length}
          itemsPerPage={itemsPerPage}
        />
        <ul className="users">
          {users.usersList.slice(start, end).map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapState = state => ({
  users: {
    usersList: usersListSelector(state),
    currentPage: currentPageSelector(state),
  },
});

const mapDispatch = {
  nextPage: userActions.nextPage,
  prevPage: userActions.prevPage,
};

export default connect(mapState, mapDispatch)(UsersList);
