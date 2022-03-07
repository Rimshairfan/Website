import React from 'react'
import logo from "./Image/logo2.jpg";
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import "./Navbar.css";
function Navbar() {
    return (
        <div className='navbar'>
            <div className='leftSide'>
                <img src={logo} />
            </div>
            <div className='rightSide'>
            <Link to="/Login">LOGIN</Link>
                <Link to="/Menu">MENU</Link>
                <Link to="/Plan">PLANS</Link>
                <Link to="/Contact">CONTACT</Link>

            </div>
        </div>
    )
}

export default Navbar