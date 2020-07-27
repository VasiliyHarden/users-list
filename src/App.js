import React from 'react';
import { useSelector } from 'react-redux';

import DataRequestPanel from './components/DataRequestPanel/DataRequestPanel';
import UsersList from './components/UsersList/UsersList';
import AddUserPanel from './components/AddUserPanel/AddUserPanel';
import UserInfoPanel from './components/UserInfoPanel/UserInfoPanel';
import PagePicker from './components/PagePicker/PagePicker';
import Spinner from './components/Spinner/Spinner';
import { getCurrentUser } from './store/users';

function App() {

  const currentUser = useSelector(getCurrentUser);

  return (
    <>
      <DataRequestPanel />
      <AddUserPanel />
      <UsersList />
      <PagePicker />
      { currentUser ? <UserInfoPanel { ...currentUser } /> : null }
      <Spinner />
    </>
  );
}

export default App;
