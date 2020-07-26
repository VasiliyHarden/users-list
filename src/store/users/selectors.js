export const getUsersKeys = state => state.users.keys;

export const getUserByKey = (state, key) => state.users.users[key];

export const getCurrentUser = state => {
  const current = state.users.current;
  return current ? state.users.users[current] : null;
};