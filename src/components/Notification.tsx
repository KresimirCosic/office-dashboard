import React, { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import { NotificationData } from '../redux/slices/userInterface';

const Notification: React.FC<NotificationData> = ({ message }) => {
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      in
      timeout={350}
      classNames='Notification'
      unmountOnExit
      mountOnEnter
      enter
      appear
      nodeRef={nodeRef}
    >
      <div ref={nodeRef} className='Notification'>
        <p className='Notification-message'>{message}</p>
      </div>
    </CSSTransition>
  );
};

export default Notification;
