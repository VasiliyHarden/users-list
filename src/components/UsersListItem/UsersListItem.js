import React from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import { getUserByKey, setCurrentUser } from '../../store/users';

import './UsersListItem.scss';

const UsersListItem = ({ userKey }) => {
  
  const user = useSelector(state => getUserByKey(state, userKey), shallowEqual);

  const dispatch = useDispatch();
  const setCurrentHandler = () => {
    dispatch(setCurrentUser(userKey));
  };

  return (
    <tr onClick={ setCurrentHandler }>
      <td>{ user.id }</td>
      <td>{ user.firstName }</td>
      <td>{ user.lastName }</td>
      <td>{ user.email }</td>
      <td>{ user.phone }</td>
    </tr>
  );
};

export default UsersListItem;