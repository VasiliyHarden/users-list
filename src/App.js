import React from 'react';
import { Provider } from 'react-redux';

import DataRequestPanel from './components/DataRequestPanel/DataRequestPanel';
import UsersList from './components/UsersList/UsersList';
import createStore from './store/create-store';

const store = createStore();

function App() {
  return (
    <Provider store={ store }>
      <DataRequestPanel />
      <UsersList />
    </Provider>
  );
}

export default App;
