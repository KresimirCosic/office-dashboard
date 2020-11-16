import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import { RootState } from '../redux/store';
import NotificationData from './Notification';

const NotificationsList: React.FC = () => {
  const { notifications } = useSelector(
    (state: RootState) => state.userInterface
  );
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      in={notifications.length > 0}
      timeout={100}
      classNames='NotificationsList'
      unmountOnExit
      mountOnEnter
      enter
      appear
      nodeRef={nodeRef}
    >
      <div ref={nodeRef} className='NotificationsList'>
        {notifications.map((notification) => (
          <NotificationData key={notification.id} {...notification} />
        ))}
      </div>
    </CSSTransition>
  );
};

export default NotificationsList;
