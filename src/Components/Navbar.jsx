import React from 'react'
import fav from "../Image/fav.png";
import { Link } from 'react-router-dom';
import "../Style/Navbar.css";
export const Navbar=()=> {
    return (
        <div className='navbar'>
            <div className='leftSide'>
                <img src={fav} />
            </div>
            <div className='rightSide'>
                <Link to="/home/menu" id="list">MENU</Link>
                <Link to="/home/plans">PLANS</Link>
                <Link to="/home/contact">CONTACT</Link>
                <Link to="/">Sign-Out</Link>

            </div>
        </div>
    )
}

