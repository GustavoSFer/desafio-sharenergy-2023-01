import React from 'react';
import PropTypes from 'prop-types';

function RandonUsers({ user }) {
  return (
    <div>
      <img src={user.picture.thumbnail} alt={user.id.value} />
      <p>
        {user.name.first}
        <span>
          {` ${user.name.last}`}
        </span>
      </p>
      <p>{user.email}</p>
      <p>
        { `idade: ${user.dob.age}`}
      </p>
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
