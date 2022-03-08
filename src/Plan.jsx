import React, { useState } from 'react'
import './Plan.css'
import Sidebar from './Sidebar';
import Meals from './Meals';

function Plan() {


  const [day, setday] = useState('');


  return (
    <>
      <div className='maindiv'>
        <ul className='sidebar'>
          {Sidebar.map((val, key) => {
            return (
              <li key={key} className='row'
                //  onClick={() => { window.location.pathname = val.link }}
                onClick={()=> { setday(val.title)}}
              >
                <div className='title' >{val.title}</div>
              </li>
            )
          })}
        </ul>
        <div className='content'>
          {day}
          <Meals/>
          <h1>SELECT YOUR PLAN DAY</h1>
        </div>
      </div>

    </>
  )
}

export default Plan


