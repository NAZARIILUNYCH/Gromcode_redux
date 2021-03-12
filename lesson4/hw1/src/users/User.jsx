import React from 'react';

const User = ({ name, age }) => (
  <>
    <span className="user__name">{name}</span>
    <span className="user__age">{age}</span>
  </>
);

export default User;
