import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from './pages/login/index';
import Home from './pages/home/index';
// import Nfce from './pages/nfce';
// import Nfe from './pages/nfe';
// import Titulos from './pages/titulos';
import NotFound from './components/NotFound';
import PrivateRoute from './components/PrivateRoute';

// import { history } from './components/History';

const Routes = () => (
  // <Router history={history}>
  <BrowserRouter>
    <Switch>
      <Route component ={Login} exact path='/'/>
      <PrivateRoute component ={Home} exact path='/home'/>
      {/* <PrivateRoute component ={Nfce} exact path='/nfce'/>
      <PrivateRoute component ={Nfe} exact path='/nfe'/>
      <PrivateRoute component ={Titulos} exact path='/titulos'/> */}
      <PrivateRoute component ={NotFound}/>
    </Switch>
 </BrowserRouter>
  // </Router>
)

export default Routes;