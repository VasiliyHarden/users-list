import uniqid from 'uniqid';

import { actionTypes } from './action-types';
import { getUsers } from '../../api/users';
import { showSpinner, hideSpinner } from '../spinner';
import { showErrorMessage } from '../notifications';

export const loadUsers = (datasetSize) => {
  return async dispatch => {
    try {
      dispatch(showSpinner('Загрузка данных с сервера...'));
      const usersArray = await getUsers(datasetSize);
      const keys = Array.from({ length: usersArray.length }, () => uniqid.time()); 
      const users = Object.fromEntries(usersArray.map((user, i) => [keys[i], user]));
      dispatch({
        type: actionTypes.LOAD_USERS,
        users,
        keys
      });
    } catch (e) {
      dispatch(showErrorMessage('Не удалось загрузить данные с сервера'));
    } finally {
      dispatch(hideSpinner());
    }
  }
};

export const setCurrentUser = (key) => ({
  type: actionTypes.SET_CURRENT_USER,
  key
});

export const addUser = (fields) => ({
  type: actionTypes.ADD_USER,
  key: uniqid.time(),
  user: {
    ...fields,
    address: {
      streetAddress: '',
      city: '',
      state: '',
      zip: ''
    },
    description: ''
  }
});

export const applySorting = (column) => ({
  type: actionTypes.APPLY_SORTING,
  column
});

export const applyFilter = (filter) => ({
  type: actionTypes.APPLY_FILTER,
  filter
});

export const clearFilter = () => ({
  type: actionTypes.CLEAR_FILTER
});

export const navigateToPage = (page) => ({
  type: actionTypes.NAVIGATE_TO_PAGE,
  page
});