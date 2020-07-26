import React from 'react';
import { useSelector } from 'react-redux';

import DataRequestPanel from './components/DataRequestPanel/DataRequestPanel';
import UsersList from './components/UsersList/UsersList';
import AddUserPanel from './components/AddUserPanel/AddUserPanel';
import UserInfoPanel from './components/UserInfoPanel/UserInfoPanel';
import { getCurrentUser } from './store/users';

function App() {

  const currentUser = useSelector(getCurrentUser);

  return (
    <>
      <DataRequestPanel />
      <AddUserPanel />
      <UsersList />
      { currentUser ? <UserInfoPanel { ...currentUser } /> : null }
    </>
  );
}

export default App;
