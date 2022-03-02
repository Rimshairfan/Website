import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Login';
import Window from './Window';
import { Router } from 'react-router-dom';
import { Route } from 'react-router-dom';

import { Switch } from 'react-router-dom';

function App(){
  return(
<Router>
<Switch>
<Route  exact path="/login" component={Login}></Route>
</Switch>

</Router>
  );
}

export default App;