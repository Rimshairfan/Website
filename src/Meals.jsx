import React  from 'react'
import MenuList from './Menulist';
// function Meals() {
//   return (
//     <div>
//         <h1>Meals list</h1>
//         <div>
//             {/* <ul>
//                 <li>Fish</li>
//                 <li>Chicken</li>
//                 <li>Mushroom bucatini</li>
//                 <li>Mix Fruits Honey</li>
//                 <li>Greek green salad</li>
//                 <li>Lemon corns</li>
//                 <li>Soup</li>
//                 <li>Beaf Mix</li>
//                 <li>Orange juice</li>
//                 <li>Mint juice</li>
//                 <li>Mint juice</li>
//                 <li>Lemon juice</li>

//             </ul> */}
//         </div>
//     </div>
//   )
// }

const Meals=()=>{
 const Data=[
    {
        name: "Fish",
        Calories:"1040 kcal",
        Protein:"43g",
        Fat:"10g"

      },
      {
        name: "Chicken",
        Calories:"1030 kcal",
        Protein:"43g",
        Fat:"10g"
    
      },{
        name: "Mushroom bucatini",
        Calories:"1020 kcal",
        Protein:"43g",
        Fat:"10g"
    
      },
      {
        name: "Mix Fruits Honey",
    
        Calories:"1010 kcal",
        Protein:"43g",
        Fat:"10g"
    
      },
      {
        name: "Greek green salad",
     
        Calories:"1000 kcal",
        Protein:"43g",
        Fat:"10g"
    
      },
      {
        name: "Lemon corns",
        
        Calories:"1030 kcal",
        Protein:"43g",
        Fat:"10g"
      },
      {
        name: "Chicken Soup",
       
        Calories:"1030 kcal",
        Protein:"43g",
        Fat:"10g"
      },
      {
        name: "Soup",
       
        Calories:"1030 kcal",
        Protein:"43g",
        Fat:"10g"
      },
      {
        name: "Beaf Mix",
       
        Calories:"1030 kcal",
        Protein:"43g",
        Fat:"10g"
      },
      {
        name: "Orange juice",
        
        Calories:"1030 kcal",
        Protein:"43g",
        Fat:"10g"
      },
      {
        name: "Mint juice",
       
        Calories:"1030 kcal",
        Protein:"43g",
        Fat:"10g"
      },
      {
        name: "Lemon juice",
        
        Calories:"1030 kcal",
        Protein:"43g",
        Fat:"10g"
      }

 ]

return(
  <>
  {Data.map((curElem)=>{
    return(
        <div>{curElem.name}</div>
    )
  })
  
  }
  
  </>
)

}
export default Meals;