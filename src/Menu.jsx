import React from 'react'
import { MenuList } from './Menulist';
import MenuItem from './MenuItem';
import './Menu.css';
function Menu() {
  return (
    <div className='menu'>
      <div className='menuTitle'>
        <h1> OUR MENU</h1>
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

export default Menu;