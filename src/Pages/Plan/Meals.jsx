import React from 'react'
import MenuList from '../Menu/Menulist';
import '../../Style/Meals.css'

 export const Meals = () => {
    const Data = [
        {
            name: "Fish",
            Calories: "1040 kcal",
            Protein: "43g",
            Fat: "10g"

        },
        {
            name: "Chicken",
            Calories: "1030 kcal",
            Protein: "43g",
            Fat: "10g"

        }, {
            name: "Mushroom bucatini",
            Calories: "1020 kcal",
            Protein: "43g",
            Fat: "10g"

        },
        {
            name: "Mix Fruits Honey",

            Calories: "1010 kcal",
            Protein: "43g",
            Fat: "10g"

        },
        {
            name: "Greek green salad",

            Calories: "1000 kcal",
            Protein: "43g",
            Fat: "10g"

        },
        {
            name: "Lemon corns",

            Calories: "1030 kcal",
            Protein: "43g",
            Fat: "10g"
        },
        {
            name: "Chicken Soup",

            Calories: "1030 kcal",
            Protein: "43g",
            Fat: "10g"
        },
        {
            name: "Soup",

            Calories: "1030 kcal",
            Protein: "43g",
            Fat: "10g"
        },
        {
            name: "Beaf Mix",

            Calories: "1030 kcal",
            Protein: "43g",
            Fat: "10g"
        },
        {
            name: "Orange juice",

            Calories: "1030 kcal",
            Protein: "43g",
            Fat: "10g"
        },
        {
            name: "Mint juice",

            Calories: "1030 kcal",
            Protein: "43g",
            Fat: "10g"
        },
        {
            name: "Lemon juice",

            Calories: "1030 kcal",
            Protein: "43g",
            Fat: "10g"
        }

    ]

    return (
        <>
            {Data.map((curElem) => {
                return (
                    <div className='item'>
                        <ul className='name'>{curElem.name}</ul>
                    </div>
                )
            })

            }

        </>
    )

}