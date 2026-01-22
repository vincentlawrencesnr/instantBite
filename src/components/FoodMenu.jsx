import React from 'react';
import Food from './Food.jsx';

function FoodMenu() {

    return (
        <div className="container my-5">
            <div className="row">
                <Food></Food>
            </div>
        </div>
    )
}

export default FoodMenu;


/*
{
  "restaurant": "Food Hub",
  "location": "Lagos",
  "menu": [
    {
      "id": 1,
      "name": "Chicken Shawarma",
      "price": 2500,
      "available": true
    },
    {
      "id": 2,
      "name": "Beef Burger",
      "price": 3000,
      "available": false
    }
  ]
}

1.
data.menu[0].name


2.
const item = data.menu.find(food => food.id === 1);
const name = item.name;


3.
const name = data.menu.find(food => food.id === 1)?.name;

The ?. means:

“Only access .name if the item exists.”



When to use .find() vs .filter()
Use .find() when:

You expect only one result

The value is unique (id, email, username)

You want better performance (it stops early)

Use .filter() when:

Multiple matches are possible

You need a list

You plan to render multiple items

*/