import React from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import { getUserByKey, setCurrentUser } from '../../store/users';
import { tableCols } from '../../constants/table-cols';

import './UsersListItem.scss';

const UsersListItem = ({ userKey }) => {
  
  const user = useSelector(state => getUserByKey(state, userKey), shallowEqual);

  const dispatch = useDispatch();
  const setCurrentHandler = () => {
    dispatch(setCurrentUser(userKey));
  };

  return (
    <tr className='user-list-item__row' onClick={ setCurrentHandler }>
      {
        tableCols.map(col => (
          <td key={ col } className='user-list-item__td'>{ user[col] }</td>
        ))
      }
    </tr>
  );
};

export default UsersListItem;