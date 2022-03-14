import React from 'react'
import logo3 from "../Image/logo3.webp";
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import "../Style/Navbar.css";
export const Navbar=()=> {
    return (
        <div className='navbar'>
            <div className='leftSide'>
                <img src={logo3} />
            </div>
            <div className='rightSide'>
               
                <Link to="/home/menu">MENU</Link>
                <Link to="/home/plans">PLANS</Link>
                <Link to="/home/contact">CONTACT</Link>
                <Link to="/">Sign-Out</Link>

            </div>
        </div>
    )
}

