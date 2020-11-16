import React, { useRef, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

interface PageProps {
  match: any | null;
}

const Page: React.FC<PageProps> = ({ children, match }) => {
  const nodeRef = useRef(null);

  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });

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
