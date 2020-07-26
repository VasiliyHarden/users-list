import React from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import UsersListItem from '../UsersListItem/UsersListItem';
import { getUsersKeys, getSortOptions, applySorting } from '../../store/users';
import { tableCols } from '../../constants/table-cols';

import './UsersList.scss';

const UsersList = () => {

  const usersKeys = useSelector(getUsersKeys, shallowEqual);
  const { column, isAsc } = useSelector(getSortOptions);

  const dispatch = useDispatch();
  const applySortHandler = (e) => {
    dispatch(applySorting(e.target.dataset.columnName));
  };
  
  return (
    <table>
      <thead>
        <tr>
          { 
            tableCols.map(col => (
              <th key={ col } data-column-name={ col } onClick={ applySortHandler }>
                { col }
                { column === col && <span>{ isAsc ? '🔺' : '🔻' }</span> }
              </th>
            )) 
          }
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