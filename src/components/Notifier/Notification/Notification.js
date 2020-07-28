import React from 'react';

import { notificationTypes } from '../../../constants/notification-types';

import './Notification.scss';

const Notification = ({ msg, type }) => {

  const style = type === notificationTypes.success ? 'notification--success' : 'notification--error';

  return (
    <div className={`notification ${style}`}>
      <span>{ msg }</span>
    </div>
  );
}

export default Notification;