import { actionTypes } from './action-types';
import { sortFactory } from './utils/sort-factory';
import { filterFactory } from './utils/filter-factory';

const initialState = {
  keys: [],
  filteredKeys: [],
  users: {},
  current: null,
  sortOptions: {
    column: null,
    isAsc: false
  },
  filter: '',
  page: 1
};

const reducerMapping = {
  [actionTypes.LOAD_USERS]: (_, { users, keys }) => ({
    ...initialState,
    users,
    keys,
    filteredKeys: keys,
    page: 1
  }),

  [actionTypes.SET_CURRENT_USER]: (state, { key }) => ({
    ...state,
    current: key
  }),

  [actionTypes.ADD_USER]: (state, { key, user }) => {
    const keys = [key, ...state.keys];
    const users = { ...state.users, [key]: user };

    let filteredKeys = state.filteredKeys;
    if (filterFactory(state.filter, users)(key)) {
      filteredKeys = [key, ...state.filteredKeys];
      if (state.sortOptions.column) {
        filteredKeys.sort(sortFactory(state.sortOptions, users));
      }
    }
    
    return {
      ...state,
      keys,
      filteredKeys,
      users
    };
  },

  [actionTypes.APPLY_SORTING]: (state, { column }) => {
    const sortOptions = {
      column,
      isAsc: state.sortOptions.column !== column || !state.sortOptions.isAsc
    };
    return {
      ...state,
      filteredKeys: [...state.filteredKeys].sort(sortFactory(sortOptions, state.users)),
      sortOptions,
    };
  },

  [actionTypes.APPLY_FILTER]: (state, { filter }) => {
    const filteredKeys = state.keys.filter(filterFactory(filter, state.users));
    if (state.sortOptions.column) {
      filteredKeys.sort(sortFactory(state.sortOptions, state.users));
    }
    return {
      ...state,
      filteredKeys,
      filter,
      page: 1
    };
  },

  [actionTypes.CLEAR_FILTER]: (state) => {
    const filteredKeys = [...state.keys];
    if (state.sortOptions.column) {
      filteredKeys.sort(sortFactory(state.sortOptions, state.users));
    }
    return {
      ...state,
      filteredKeys,
      filter: ''
    };
  },

  [actionTypes.NAVIGATE_TO_PAGE]: (state, { page }) => ({
    ...state,
    page
  }),
};

export const usersReducer = (state = initialState, { type, ...payload }) => (
  reducerMapping[type] ? reducerMapping[type](state, payload) : state
);