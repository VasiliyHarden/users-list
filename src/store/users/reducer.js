import { actionTypes } from "./action-types";

const initialState = [];

const reducerMapping = {
  [actionTypes.LOAD_USERS]: (state, { users }) => users
};

export const usersReducer = (state = initialState, { type, ...payload }) => (
  reducerMapping[type] ? reducerMapping[type](state, payload) : state
);