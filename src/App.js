import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Login} from './Pages/Login/Login';
import Window from './Pages/Window/Window';
import { Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import {Menu} from './Pages/Menu/Menu';
import {Navbar} from './Components/Navbar';
import {Footer} from './Components/Footer';
import {Contact} from './Components/Contact';
import {Plan} from './Pages/Plan/Plan';
function App(){
  return(
    <BrowserRouter>
    
    <>
{/* <Navbar/> */}
<Route   path="/login" component={Login}></Route>
<Route  exact  path="/window" component={Window}></Route>
<Route    path="/menu" component={Menu}></Route>
<Route    path="/plan" component={Plan}></Route>
{/* <Route    path="/monday" component={Monday}></Route> */}
<Route    path="/contact" component={Contact}></Route>
{/* <Footer/> */}
</>

</BrowserRouter>
  );
}

export default App;