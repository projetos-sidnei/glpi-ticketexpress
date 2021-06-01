import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = props => {
  const isLogged = !!localStorage.getItem('session_token');
  return isLogged ? <Route {...props}/> : <Redirect to={{pathname:"/login", state:{from: props.location} }}/>
}

export default PrivateRoute;