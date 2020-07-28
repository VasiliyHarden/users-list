import { actionTypes } from './action-types';

const NOTIFICATION_TIMEOUT = 2000;

export const showSuccessMessage = (msg) => {
  const id = Date.now();
  return dispatch => {
    dispatch({
      type: actionTypes.SHOW_SUCCESS_MESSAGE,
      id,
      msg
    });

    setTimeout(() => {
      dispatch(hideMessage(id));
    }, NOTIFICATION_TIMEOUT);
  };
};

export const showErrorMessage = (msg) => {
  const id = Date.now();
  return dispatch => {
    dispatch({
      type: actionTypes.SHOW_ERROR_MESSAGE,
      id,
      msg
    });
    
    setTimeout(() => {
      dispatch(hideMessage(id));
    }, NOTIFICATION_TIMEOUT);
  };
};

export const hideMessage = (id) => ({
  type: actionTypes.HIDE_MESSAGE,
  id
});