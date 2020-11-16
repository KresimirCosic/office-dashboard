import React from 'react';

import { NotificationData } from '../redux/slices/userInterface';

const Notification: React.FC<NotificationData> = ({ message }) => {
  return (
    <div className='Notification'>
      <h1>Notification</h1>
      <p>{message}</p>
    </div>
  );
};

export default Notification;
