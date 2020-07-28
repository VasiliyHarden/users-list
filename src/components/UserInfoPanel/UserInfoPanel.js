import React from 'react';
import { useSelector } from 'react-redux';

import UserInfoForm from './UserInfoForm/UserInfoForm';
import { getCurrentUser } from '../../store/users';

const UserInfoPanel = () => {

  const currentUser = useSelector(getCurrentUser);

  return (
    <>
      { currentUser ? <UserInfoForm { ...currentUser } /> : null }
    </>
  )
};

export default UserInfoPanel;