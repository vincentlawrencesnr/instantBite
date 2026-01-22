import React from 'react'
import { useState } from 'react'
import Style from './Login.module.css'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div  className='container bg-light p-5 m-5 d-flex flex-column align-items-center justify-content-center'>
    <h2 className='text-center mb-4' style={{fontSize: "42px", color: "#2b323cff", fontWeight: "800"}}>Login Page</h2> 
      <form action="" className='card w-50 shadow shadow-md rounded-3 p-4'>
        <div className="form-group">
        <label htmlFor="email">email:</label>
        <input type="email" id="email" name="email" className='form-control mt-1' /><br /><br />
        </div>

        <div className={`${Style.passwordWrapper} form-group`}>
        <label htmlFor="password">password:</label>
        <input type={showPassword ? "text" : "password"} id="password" placeholder="Enter password" autoComplete="new-password" value={password} onChange={(e)=> setPassword(e.target.value)} className='form-control mt-1'/>
        {password.length > 0 && (
        <i className={showPassword ? "ri-eye-off-line" : "ri-eye-line"} onClick={() => setShowPassword(!showPassword)} style={{ cursor: "pointer" }}></i>)}<br /><br />
        </div>
        <div className="btn btn-lg w-100 my-3" style={{backgroundColor: "#dd6604ff"}}>Submit</div>
      </form>
    </div>
  )
}


/*
IF password length > 0
    show eye icon
ELSE
    hide eye icon

IF eye icon clicked
    toggle password visibility


Rule of short-circuiting:

If the left side is true, JavaScript returns the right side
If the left side is false, JavaScript stops and returns false



Important: 
if is a statement ❌ (not allowed directly in JSX)

condition && element is an expression ✅ (allowed)

..if does not return a value

JSX needs something that returns a value


"new-password" tells the browser:

“This is not a saved password field”

Prevents auto-filled dots on load

*/