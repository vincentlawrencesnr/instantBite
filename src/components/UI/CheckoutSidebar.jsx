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
