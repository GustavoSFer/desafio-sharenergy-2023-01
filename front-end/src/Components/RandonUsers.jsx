import React from 'react';
import PropTypes from 'prop-types';

function RandonUsers({ user }) {
  return (
    <div className="border border-primary rounded d-flex justify-content-between container mt-2">
      <img src={user.picture.thumbnail} alt={user.id.value} />
      <div>
        {user.name.first}
        <span>
          {` ${user.name.last}`}
        </span>
      </div>
      <div>{user.email}</div>
      <div>
        {user.dob.age}
      </div>
    </div>
  );
}

RandonUsers.propTypes = {
  user: PropTypes.shape({
    picture: PropTypes.shape({
      thumbnail: PropTypes.string,
    }),
    id: PropTypes.shape({
      value: PropTypes.string,
    }),
    name: PropTypes.shape({
      first: PropTypes.string,
      last: PropTypes.string,
    }),
    email: PropTypes.string,
    dob: PropTypes.shape({
      age: PropTypes.string,
    }),
  }).isRequired,
};

export default RandonUsers;
