import React from 'react'
import { MenuList } from './Menulist';
import { MenuItem } from './MenuItem';
import '../../Style/Menu.css';
export const Menu=()=> {
  return (
    <div className='menu'>
      <div className='menuTitle'>
        <h1> Our Meals</h1>
        <div className='menuList' >

          {MenuList.map((menuItem,key)=>{
            return (<MenuItem 
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              Calories={menuItem.Calories}
              Protien={menuItem.Protein}
              Fat={menuItem.Fat}
              />
              );
          })}
        </div>
      </div>
    </div>
  )
}