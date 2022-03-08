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
import Footer from './Footer';
import Contact from './Contact';
import Plan from './Plan';
import Monday from './Monday';
function App(){
  return(
    <BrowserRouter>
    
    <>
<Navbar/>
<Route  exact path="/login" component={Login}></Route>
<Route    path="/window" component={Window}></Route>
<Route    path="/menu" component={Menu}></Route>
<Route    path="/plan" component={Plan}></Route>
{/* <Route    path="/monday" component={Monday}></Route> */}
<Route    path="/contact" component={Contact}></Route>
<Footer/>
</>

</BrowserRouter>
  );
}

export default App;