import React, { FormEvent, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { RootState } from '../redux/store';
import { login } from '../redux/slices/authentication';

const LoginForm: React.FC = () => {
  const nodeRef = useRef(null);
  const { authenticated } = useSelector(
    (state: RootState) => state.authentication
  );
  const dispatch = useDispatch();
  const [loginName, setLoginName] = useState('');

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();

    dispatch(login(loginName));

    resetForm();
  };

  const resetForm = () => {
    setLoginName('');
  };

  return (
    <CSSTransition
      in={!authenticated}
      timeout={350}
      classNames='LoginForm'
      unmountOnExit
      mountOnEnter
      appear
      enter
      nodeRef={nodeRef}
    >
      <form onSubmit={handleLogin} ref={nodeRef} className='LoginForm'>
        <TextField
          onChange={(e) => setLoginName(e.target.value)}
          value={loginName}
          id='login-name'
          label='Name'
          variant='outlined'
        />
        <Button type='submit' variant='outlined' disabled={!loginName}>
          Login
        </Button>
      </form>
    </CSSTransition>
  );
};

export default LoginForm;
