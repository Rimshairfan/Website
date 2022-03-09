import React from 'react'

export const MenuItem=({image,name,Calories,Protien,Fat})=> {
  return (
    <div className='menuItem'>
 <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h7> {name} </h7>
      <p>  Calories: {Calories} </p>
      <p> Protien:{Protien} </p>
      <p> Fat:{Fat} </p>

    </div>
  )
}
