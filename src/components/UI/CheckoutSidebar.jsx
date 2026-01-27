import React from 'react'
// import Card from '../UI/Card'
import Card from './Card.jsx'
import Style from './CheckoutSidebar.module.css'

export default function CheckoutSidebar({cartItems}) {

  const subTotal = cartItems.reduce((sum, item)=> (sum + item.price * item.quantity), 0)
  const delivery = 500;
  return (
    <div>
      <Card>
       
        <h4 className='fw-bolder mb-3'>Order Summary</h4>
         {cartItems.map((item) => (
        <div className={`top position-relative ${Style['order-top']}`}>
            <img src={item.img} alt="" />
            <div>
                <p className='mb-0'>{item.foodName}</p>
                <p className='text-muted'>Qty: {item.quantity}</p>
            </div>
            <div className='price position-absolute end-0 pe-3'>
                <span>₦{(item.price).toLocaleString()}</span>
            </div>
            
        </div>
        ))}
        <hr className='mt-4' /> 
        <div>
            <div className='d-flex justify-content-between'>
                <p>Subtotal</p>
                <p className='text-muted'>₦{(subTotal).toLocaleString()}</p>
            </div>
            <div className='d-flex justify-content-between'>
                <p>Delivery</p>
                <p className='text-muted'>₦500</p>
            </div>
            <div className='d-flex justify-content-between'>
                <p>Total</p>
                <p className='text-muted'>₦{(subTotal + delivery).toLocaleString()}</p>
            </div>

        </div>
      </Card>
    </div>
  )
}

/*
useContext lets you share data globally between components without passing props manually.

Think of it like:
A global data box that any component can open and read from.

Examples of things commonly stored in Context:
1. Cart data 🛒
2. Logged-in user 👤
3. Theme (dark/light) 🌙
4. Language 🌍

Every context has 3 parts and you will use these 3 parts:
| Part          | Purpose                 |
| ------------- | ----------------------- |
| createContext | Create the global store |
| Provider      | Supplies the data       |
| useContext    | Reads the data          |

Below are the steps to use useContext()

STEP 1:
import { createContext, useState } from "react";

export const CartContext = createContext();


function CartProvider({ children }) {

  const [cartItems, setCartItems] = useState([]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;


Important rule:

👉 createContext() must be OUTSIDE the component
👉 Provider + state live INSIDE the component

Because:

Context should be created ONCE
State is created per provider instance


* children is passed automatically by React when you use a component with opening and closing tags.

When you write:

<CartProvider>
   <App />
</CartProvider>

React converts this to:

CartProvider({ children: <App /> })

So:
children = <App />


STEP 2: 
On the main.jsx, we wrap the app.jsx - app inside the tag of the component providing the useContext() value (the component containing THE PROVIDER).

import CartProvider from "./CartProvider";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </StrictMode>,
)

IMPORTANT QUESTION: 
wrapping app.jsx inside our provider component, will this make our provider component appear on our UI?

ANSWER:
❌ NO
Provider DOES NOT render UI.

WHY?
Because CartProvider returns this:

<CartContext.Provider>
   {children}
</CartContext.Provider>

Context.Provider:
1. Does NOT produce HTML
2. Is NOT a visible element
3. Is only a data wrapper
4. It behaves like a transparent wrapper.

So UI shows ONLY what is inside: <App />


Why Provider Is Wrapped OUTSIDE App

Because:
If you put Provider INSIDE App:

function App(){
  return (
    <CartProvider>
      <Checkout />
    </CartProvider>
  )
}
Then ONLY Checkout can use cart context. Other components won't be able to use the value of the useContext.

Wrapping app with the PROVIDER in main.jsx gives GLOBAL access of the value(s) of the useContext.


Step 3 — Consume Context Using useContext()

Now inside ANY component:

Example: CheckoutSidebar.jsx

import { useContext } from "react";
import { CartContext } from "./CartProvider";

function CheckoutSidebar() {

  const { cartItems, setCartItems } = useContext(CartContext);

  return (
    <div>
      {cartItems.length}
    </div>
  );
}

SQL - Structured Query Language
NoSQL - Not Only SQL

SQL is used to create, retrieve, update, and delete data from a data base

*/