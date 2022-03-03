import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Login';
import Window from './Window';
import { Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
function App(){
  return(
    <BrowserRouter>
<Router>
<Switch>
<Route  exact path="/login" component={Login}></Route>
<Route  exact path="/window" component={Window}></Route>

</Switch>

</Router>
</BrowserRouter>
  );
}

export default App;