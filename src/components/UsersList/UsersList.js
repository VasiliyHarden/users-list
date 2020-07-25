import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import UsersListItem from '../UsersListItem/UsersListItem';
import { getUsers } from '../../store/users';

import './UsersList.scss';

const UsersList = () => {

  const users = useSelector(getUsers, shallowEqual);
  
  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>firstName</th>
          <th>lastName</th>
          <th>email</th>
          <th>phone</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map(user => <UsersListItem key={ user.id } { ...user } />)
        }
      </tbody>
    </table>
  );
};

export default UsersList;