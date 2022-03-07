import React from 'react'
import './Plan.css'
import Sidebar from './Sidebar';
import home from "./Image/home.jpg";

function Plan() {
  return (
    <div className='maindiv'>
      <div className='plan'>
        <ul className='sidebar'>
          {Sidebar.map((val, key) => {

            return <li key={key} className='row' onClick={() => { window.location.pathname = val.link }}>

              <div className='title' >{val.title}</div>
            </li>
          })}
        </ul>

      </div>
      <div className='side'>

        </div>
    </div>
  )
}

export default Plan


