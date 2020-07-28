import { actionTypes } from "./action-types";
import { notificationTypes } from '../../constants/notification-types';

const initialState = [];

const reducerMapping = {
  [actionTypes.SHOW_SUCCESS_MESSAGE]: (state, { id, msg }) => [...state, { 
    type: notificationTypes.success,
    id,
    msg
  }],

  [actionTypes.SHOW_ERROR_MESSAGE]: (state, { id, msg }) => [...state, { 
    type: notificationTypes.error,
    id,
    msg
  }],

  [actionTypes.HIDE_MESSAGE]: (state, { id }) => state.filter(note => note.id !== id)
};

export const notificationsReducer = (state = initialState, { type, ...payload }) => (
  reducerMapping[type] ? reducerMapping[type](state, payload) : state
);