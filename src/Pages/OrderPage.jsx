import React from 'react'
import Header from '../components/Header.jsx'

export default function OrderPage() {
  return (
    <div style={{height: "90vh", paddingTop: "70px"}} className='px-5'>
      <Header />
      <h1>Place Order</h1>
      <p>Select your food items and quantities</p>

      <div className='d-flex g-3'>
        <div className='sidebar'>
            <h3>Categories</h3>
            <ul>
                <li>All Items</li>
                <li>Burger</li>
                <li>Shawarma</li>
                <li>Rice Bowls</li>
                <li>Pizza</li>
                <li>Drinks</li>
                <li>Desserts</li>
            </ul>
        </div>

        <div className='content'>

        </div>
      </div>
    </div>
  )
}


/* React Router is a library that lets you create multiple pages (routes) in a React Single Page Application (SPA) without reloading the browser.

Simple analogy (real-life) illustrating the difference between traditional websites and React SPAs:

Think of Netflix:

Traditional website = leaving the cinema and entering a new one for every movie

React SPA = sitting in the same seat while the screen content changes

You’re still in the same place, but what you see changes.



One-line summary

“Without reloading the page” means the browser keeps the same HTML document loaded while React swaps components and updates the UI using JavaScript.


*/
