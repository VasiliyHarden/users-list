import { actionTypes } from './action-types';
import { getUsers } from '../../api/users';

export const loadUsers = (datasetSize) => {
  return dispatch => {
    try {
      const users = getUsers(datasetSize);
      dispatch({
        type: actionTypes.LOAD_USERS,
        users
      });
    } catch (e) {
      console.log('Some error occured while loading data');
    }
  }
};