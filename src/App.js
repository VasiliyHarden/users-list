import React from 'react';

import DataRequestPanel from './components/DataRequestPanel/DataRequestPanel';
import UsersList from './components/UsersList/UsersList';
import AddUserPanel from './components/AddUserPanel/AddUserPanel';
import FilterPanel from './components/FilterPanel/FilterPanel';
import UserInfoPanel from './components/UserInfoPanel/UserInfoPanel';
import Notifier from './components/Notifier/Notifier';
import Spinner from './components/Spinner/Spinner';

const App = () => (
  <>
    <DataRequestPanel />
    <AddUserPanel />
    <FilterPanel />
    <UsersList />
    <UserInfoPanel />
    <Notifier />
    <Spinner />
  </>
);

export default App;
