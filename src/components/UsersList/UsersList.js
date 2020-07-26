import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import UsersListItem from '../UsersListItem/UsersListItem';
import { getUsersKeys } from '../../store/users';
import { tableCols } from '../../constants/table-cols';

import './UsersList.scss';

const UsersList = () => {

  const usersKeys = useSelector(getUsersKeys, shallowEqual);
  
  return (
    <table>
      <thead>
        <tr>
          { tableCols.map(col => <th key={ col }>{ col }</th>) }
        </tr>
      </thead>
      <tbody>
        {
          usersKeys.map(key => <UsersListItem key={ key } userKey={ key } />)
        }
      </tbody>
    </table>
  );
};

export default UsersList;