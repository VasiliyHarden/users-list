import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import { usersReducer } from './users';
import { spinnerReducer } from './spinner';
import { notificationsReducer } from './notifications';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(combineReducers({
    users: usersReducer,
    spinner: spinnerReducer,
    notifications: notificationsReducer
  }), composeEnhancers(applyMiddleware(thunk)));
  return store;
}