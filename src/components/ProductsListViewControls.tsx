import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import ViewStreamIcon from '@material-ui/icons/ViewStream';
import ViewModuleIcon from '@material-ui/icons/ViewModule';

import { RootState } from '../redux/store';
import { turnOnGridView, turnOffGridView } from '../redux/slices/userInterface';

const ProductsListViewControls: React.FC = () => {
  const { authentication, userInterface } = useSelector(
    (state: RootState) => state
  );
  const nodeRef = useRef(null);
  const dispatch = useDispatch();

  return (
    <CSSTransition
      in={authentication.authenticated}
      timeout={100}
      classNames='ProductsListViewControls'
      unmountOnExit
      mountOnEnter
      enter
      appear
      nodeRef={nodeRef}
    >
      <div ref={nodeRef} className='ProductsListViewControls'>
        <ButtonGroup variant='outlined'>
          <Button
            onClick={() => dispatch(turnOffGridView())}
            disabled={!userInterface.gridView}
          >
            <ViewStreamIcon />
          </Button>
          <Button
            onClick={() => dispatch(turnOnGridView())}
            disabled={userInterface.gridView}
          >
            <ViewModuleIcon />
          </Button>
        </ButtonGroup>
      </div>
    </CSSTransition>
  );
};

export default ProductsListViewControls;
