import { actionTypes } from "./action-types";

const initialState = {
  keys: [],
  users: {},
  current: null
};

const reducerMapping = {
  [actionTypes.LOAD_USERS]: (state, { users, keys }) => ({
    ...state,
    users,
    keys
  }),

  [actionTypes.SET_CURRENT_USER]: (state, { key }) => ({
    ...state,
    current: key
  })
};

export const usersReducer = (state = initialState, { type, ...payload }) => (
  reducerMapping[type] ? reducerMapping[type](state, payload) : state
);