import { pageSize } from '../../constants/page-size';

export const getUsersKeys = state => {
  const page = state.users.page;
  const [low, high] = [(page - 1) * pageSize, page * pageSize];
  return state.users.filteredKeys.slice(low, high);
};

export const getUserByKey = (state, key) => state.users.users[key];

export const getCurrentUser = state => {
  const current = state.users.current;
  return current ? state.users.users[current] : null;
};

export const getSortOptions = state => state.users.sortOptions;

export const getTotalPages = state => Math.max(1, Math.ceil(state.users.filteredKeys.length / pageSize));

export const getCurrentPage = state => state.users.page;