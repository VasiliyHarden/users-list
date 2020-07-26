import { actionTypes } from "./action-types";
import { sortFactory } from "./utils/sort-factory";

const initialState = {
  keys: [],
  filteredKeys: [],
  users: {},
  current: null,
  sortOptions: {
    column: null,
    isAsc: false
  },
  filter: ''
};

const reducerMapping = {
  [actionTypes.LOAD_USERS]: (state, { users, keys }) => ({
    ...initialState,
    users,
    keys,
    filteredKeys: keys
  }),

  [actionTypes.SET_CURRENT_USER]: (state, { key }) => ({
    ...state,
    current: key
  }),

  // TO DO:
  [actionTypes.ADD_USER]: (state) => ({
    ...state
  }),

  [actionTypes.APPLY_SORTING]: (state, { column }) => {
    const sortOptions = {
      column,
      isAsc: state.sortOptions.column !== column || !state.sortOptions.isAsc
    };
    return {
      ...state,
      filteredKeys: [...state.filteredKeys].sort(sortFactory(sortOptions, state.users)),
      sortOptions,
    }
  },

  // TO DO:
  [actionTypes.APPLY_FILTER]: (state, { filter }) => ({
    ...state
  }),
};

export const usersReducer = (state = initialState, { type, ...payload }) => (
  reducerMapping[type] ? reducerMapping[type](state, payload) : state
);