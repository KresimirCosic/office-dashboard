import React from 'react';

import { NotificationData } from '../redux/slices/userInterface';

const Notification: React.FC<NotificationData> = ({ message }) => {
  return (
    <div className='Notification'>
      <p className='Notification-message'>{message}</p>
    </div>
  );
};

export default Notification;
