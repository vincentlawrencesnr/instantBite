import React, { useState } from 'react'
import Card from '../components/UI/Card.jsx'
import CheckoutSidebar from '../components/UI/CheckoutSidebar.jsx'

export default function Checkout({cartItems}) {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    address: "",
    city: "",
    zip: "",
    phone: "",
    cardNumber: "",
    expiryDate: "",
    cvv: ""
  });


  function handleChange(e) {
      setFormData({...formData, [e.target.name]: e.target.value})
    }

    function submitHandler(e) {
      e.preventDefault()
      console.log(formData)
    }
    
  return (
    <form action="" onSubmit={submitHandler}>
    <div className="row">
      <div className="col-12 col-lg-8">  
      <div className='container p-3' style={{marginTop: "7rem", marginBottom: "7rem"}}>
      <p><i className='ri-arrow-left'></i></p>
      <h1>Checkout</h1>
      <Card>
        <h2 className='fw-bolder'><i className='ri-map-pin-line me-4'></i>Delivery Information</h2>
            <div className="row">
            <div className='form-group col-6'>
                <label htmlFor="firstName">First Name</label>
                <input type="text" className='form-control' placeholder='Jamal' name='firstname' value={formData.firstname} onChange={handleChange}/>
            </div>
            <div className='form-group col-6'>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" className='form-control' placeholder='Abdul' name='lastname' value={formData.lastname} onChange={handleChange}/>
            </div>
            <div className='form-group col-12 mt-2'>
                <label htmlFor="address">Street Name</label>
                <input type="text" className='form-control' placeholder='333 Idiroko Bus Stop' name='address' value={formData.address} onChange={handleChange}/>
            </div>
            <div className='form-group col-6 mt-2'>
                <label htmlFor="city">City</label>
                <input type="text" className='form-control' placeholder='Lagos' name='city' value={formData.city} onChange={handleChange}/>
            </div>
            <div className='form-group col-6 mt-2'>
                <label htmlFor="zip">Zip Code</label>
                <input type="text" inputMode="numeric" className='form-control' placeholder='10012' name='zip' value={formData.zip} onChange={handleChange}/>
            </div>
            <div className='form-group col-12 mt-2'>
                <label htmlFor="phone">Phone Number</label>
                <input type="text" inputMode="numeric" className='form-control' placeholder='(234) 123-456-7890' name='phone' value={formData.phone} onChange={handleChange}/>
            </div>
            </div>
        
      </Card>
      <Card className="mt-4">
            <div className="row">
            <div className='form-group col-12'>
                <label htmlFor="cardNumber">Card Number</label>
                <input type="text" inputMode="numeric" className='form-control' placeholder='5599 1111 **** 6078' name='cardNumber' value={formData.cardNumber} onChange={handleChange}/>
            </div>
            <div className='form-group col-6 mt-2'>
                <label htmlFor="expiryDate">Expiry Date</label>
                <input type="text" pattern="\d{2}/\d{2}"  className='form-control' placeholder='MM/YY' name='expiryDate' value={formData.expiryDate} onChange={handleChange}/>
            </div>
            <div className='form-group col-6 mt-2'>
                <label htmlFor="cvv">CVV</label>
                <input type="number" className='form-control' placeholder='123' name='cvv' value={formData.cvv} onChange={handleChange}/>
            </div>
            </div>
        
      </Card>
      <button type='submit' disabled={!formData.firstname || !formData.phone} style={{backgroundColor: "#FF6B00", color: "white"}} className="btn btn-lg w-100 mt-4 mb-5"><i className='ri-check-line'></i> &nbsp;Place Order</button>
    </div>
    </div>
    <div className="col-12 col-lg-4" style={{marginTop: "12.5rem", marginBottom: "7rem"}}>
      <CheckoutSidebar cartItems={cartItems} className="position-lg-sticky top-lg-0"></CheckoutSidebar>
    </div>
    </div>
   </form>
  )
}


/*
e.preventDefault()

Stops browser from:

❌ Refreshing page
❌ Sending form normally


console.log(formData)
For now:

Debugging
Testing submission

Later you will replace this with:

API request
Payment logic
Backend call


position: sticky; → Element sticks to the viewport as you scroll, but within its parent container


disabled={!formData.firstname || !formData.phone}

<button disabled={true}>Click me</button>
<button disabled={false}>Click me</button>

true → button disabled

false → button active

So the disabled expects a boolean value (true or false) in React. Writing only disabled disables the button and makes it not clickable.

formData.firstname = ""
!formData.firstname  // true, because "" is falsy

formData.firstname = "Jamal"
!formData.firstname  // false, because "Jamal" is truthy

Key Concept
Even though formData.firstname is a string, JavaScript automatically treats it as truthy/falsy when you use it in logical operations.

! converts it to boolean

This is very common in React for form validation

NOTE: disabled expects a boolean.


In JavaScript, when creating objects, there are two ways to set a key:

Static Key:
const obj = { name: "Jamal" };

Here, the key is literally "name"

Not dynamic


Dynamic Key:
const key = "firstname";
const obj = { [key]: "Jamal" };

Square brackets [key] tell JS:

“Use the value of key as the property name”

The object becomes:

{ firstname: "Jamal" }


Without [ ], JS would literally use "key" as the property name:
{ key: "Jamal" }  // ❌ Not what we want


Why we spread the old state first
{ ...formData, [e.target.name]: e.target.value }


...formData → copies all previous keys/values

[e.target.name]: e.target.value → overwrites only the key of the input that changed


Do the keys in formData have to match the name attributes?

Yes! Exactly.

e.target.name is coming from your input:

<input name="firstname" ... />

So in your state object:

formData = { firstname: "", lastname: "", ... }


If they don’t match, the input will create a new key in the object instead of updating the intended one.


QUESTION: when we set the type of a button to submit, must we put an onSubmit attribute in the opening tag of the form ?

Yes — in most cases, if you want your button to actually submit the form and run some logic in React, you should put an onSubmit handler on the <form> tag.

How <button type="submit"> works in HTML:
Clicking the button triggers the form submission

The default behavior is to send data to the URL in action (causing a page reload)



If the form has no action or onSubmit, the browser:

Reloads the page (default behavior)

Sends the form data if an action is specified

In React, you usually want to handle submission yourself, not reload the page.

<form onSubmit={submitHandler}>
  <input name="firstname" value={formData.firstname} onChange={handleChange} />
  <button type="submit">Submit</button>
</form>

What happens here:

User clicks the button (or presses Enter inside an input)

Browser triggers the form’s onSubmit handler

submitHandler runs

e.preventDefault() prevents page reload

NOTE:  onSubmit only works on <form> elements, not buttons.


IF A URL IS PRESENT IN OUR ACTION ATTRIBUTE AND WE STILL HAVE AN ONSUBMIT ATTRIBUTE TELLING THE BROSWER NOT TO REFRESH AND SUBMIT THE FORM:

What happens here:

The button is clicked → type="submit" triggers form submission.

The onsubmit handler runs first. This is where handleSubmit executes.

Inside handleSubmit, event.preventDefault() stops the default action — meaning the browser will NOT send the form data to the action URL.

Even though action="https://example.com" exists, the submission is blocked by preventDefault() or returning false in onsubmit.


Extra tip: In modern React apps (or other JS frameworks), it’s common to always prevent default submission and handle sending data via fetch/AJAX instead of letting the browser go to the action URL.

regex - regular expression
pattern="\d{2}/\d{2}"

What it means piece by piece:
🔹 \d

Means any digit (0–9)

🔹 {2}

Means exactly 2 times

So:

\d{2}

Means: exactly two digits

🔹 /

This is a literal forward slash

The user must type /


Common real-world use:
This pattern is often used for:

Credit card expiry date → MM/YY

Date format → DD/MM

<input type="text" pattern="\d{2}/\d{2}">
The browser will block form submission if the pattern doesn’t match.


NOTE: type="text" is correct for phone numbers

inputMode="numeric"
This is a mobile keyboard hint.

It tells the browser:

When user clicks this input on mobile, show the number keypad


<input 
  type="text"
  inputMode="numeric"
/>
On phone:

👉 Numeric keypad pops up
On desktop:

👉 Normal behavior


NOTE: phone numbers are not real numbers. Real numbers are used for arithmetic operations and that is not what we intend on doing with the numbers in our phone number. That is why it is best to use text as the type for phone numbers.

Problems If You Treat Phone Numbers As Numbers
1. Leading Zero Gets Removed
2. You Can’t Use + Symbol
   Number inputs:
   Do NOT allow +
   Only digits and decimal points
3. Browser Adds Up/Down Arrows
   type="number" adds spinner buttons:

   ⬆ increase
   ⬇ decrease
4. Large Numbers Lose Precision (In JavaScript)
    Very long phone numbers can become:
    ❌ Rounded
    ❌ Inaccurate
    let phone = 0801234567890123
    Can become corrupted internally.

Why type="text" Is Correct
<input type="text">
Means:

✅ Keeps leading zeros
✅ Allows + symbol
✅ No math behavior
✅ No spinner arrows
✅ Safe storage as string


But You Still Want Numeric Keyboard (Mobile)

That’s why we use:
inputMode="numeric"

So the user sees:

📱 Number keypad
But the value is still treated as text

phone keypad is the one containing numbers. normal keyboard contains  letters


On Mobile Devices:

This is the BIG difference 👇

type="tel":

✔ Opens phone keypad
✔ Shows + symbol easily
✔ Optimized for number entry

type="text":

❌ Opens normal keyboard
❌ Slower to type phone numbers
*/

