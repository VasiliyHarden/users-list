import React from 'react';
import { useSelector } from 'react-redux';

import Notification from './Notification/Notification';
import { getNotifications } from '../../store/notifications';

import './Notifier.scss';

const Notifier = () => {

  const notifications = useSelector(getNotifications);

  return (
    <div className='notifier'>
      { notifications.map(note => <Notification key={note.id} { ...note } />) }
    </div>
  );
}

export default Notifier;