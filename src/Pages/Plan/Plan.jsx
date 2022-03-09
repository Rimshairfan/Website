import React, { useState } from 'react'
import '../../Style/Plan.css'
import Sidebar from './Sidebar';
import {Meals} from './Meals';

export const Plan=()=> {


  const [day, setday] = useState('');

  console.log("in plan ")

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
          <h1 className='heading'>{day}</h1>
          <Meals/>
        </div>
      </div>

    </>
  )
}


