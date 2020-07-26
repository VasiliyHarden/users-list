import uniqid from 'uniqid';

import { actionTypes } from './action-types';
import { getUsers } from '../../api/users';

export const loadUsers = (datasetSize) => {
  return async dispatch => {
    try {
      const usersArray = await getUsers(datasetSize);
      const keys = Array.from({ length: usersArray.length }, () => uniqid.time()); 
      const users = Object.fromEntries(usersArray.map((user, i) => [keys[i], user]));
      dispatch({
        type: actionTypes.LOAD_USERS,
        users,
        keys
      });
    } catch (e) {
      console.log('Some error occured while loading data');
    }
  }
};

export const setCurrentUser = (key) => ({
  type: actionTypes.SET_CURRENT_USER,
  key
});