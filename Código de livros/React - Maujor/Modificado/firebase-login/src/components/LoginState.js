import React from 'react';
import Login from './Login';
import { Navigate } from 'react-router-dom';

function LoginState(props) {
  if(!props.isAuthenticated) {
    return (<Login onLogin={props.onLogin} />)
  } else { return (<Navigate to="/" />) }
}

export default LoginState;
