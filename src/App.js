import React from 'react';
import { useSelector } from 'react-redux';

import DataRequestPanel from './components/DataRequestPanel/DataRequestPanel';
import UsersList from './components/UsersList/UsersList';
import AddUserPanel from './components/AddUserPanel/AddUserPanel';
import FilterPanel from './components/FilterPanel/FilterPanel';
import UserInfoPanel from './components/UserInfoPanel/UserInfoPanel';
import Notifier from './components/Notifier/Notifier';
import Spinner from './components/Spinner/Spinner';
import { getCurrentUser } from './store/users';

function App() {

  const currentUser = useSelector(getCurrentUser);

  return (
    <>
      <DataRequestPanel />
      <AddUserPanel />
      <FilterPanel />
      <UsersList />
      { currentUser ? <UserInfoPanel { ...currentUser } /> : null }
      <Notifier />
      <Spinner />
    </>
  );
}

export default App;
