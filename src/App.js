import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Login';
import Window from './Window';
import { Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Menu from './Menu';
import Navbar from './Navbar';
function App(){
  return(
    <BrowserRouter>
    <>
{/* <Route  exact path="/login" component={Login}></Route> */}
<Navbar/>
<Route    path="/window" component={Window}></Route>
<Route    path="/menu" component={Menu}></Route>

</>

</BrowserRouter>
  );
}

export default App;