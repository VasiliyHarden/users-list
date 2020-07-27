import { actionTypes } from './action-types';

export const showSpinner = (message) => ({
  type: actionTypes.SHOW_SPINNER,
  message
});

export const hideSpinner = () => ({
  type: actionTypes.HIDE_SPINNER
});