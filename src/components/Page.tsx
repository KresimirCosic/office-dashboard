import React, { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';

interface PageProps {
  match: any | null;
  privateRoute: boolean;
}

const Page: React.FC<PageProps> = ({
  children,
  match,
  privateRoute: privatePage,
}) => {
  const nodeRef = useRef(null);
  const { authenticated } = useSelector(
    (state: RootState) => state.authentication
  );

  return (
    <CSSTransition
      in={match != null}
      timeout={200}
      classNames='Page'
      unmountOnExit
      mountOnEnter
      nodeRef={nodeRef}
    >
      <div ref={nodeRef} id='Page' className='Page absolute'>
        {children}
      </div>
    </CSSTransition>
  );
};

export default Page;
