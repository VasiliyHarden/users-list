import { actionTypes } from "./action-types";

const initialState = {
  message: null
};

const reducerMapping = {
  [actionTypes.SHOW_SPINNER]: (state, { message }) => ({
    ...state,
    message
  }),

  [actionTypes.HIDE_SPINNER]: (state) => ({
    ...state,
    message: null
  }),
};

export const spinnerReducer = (state = initialState, { type, ...payload }) => (
  reducerMapping[type] ? reducerMapping[type](state, payload) : state
);