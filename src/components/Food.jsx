import React from 'react';
import Foods from '../data.json';

function Food(props) {

    return (
        <>
        {Foods.map((food, i) => (
            <div key={food.id} className='col-12 col-md-6 col-lg-4 mb-4'>
                <div className="card">
                    <img className='card-img-top' src={food.img} alt={food.foodName} style={{height: "200px", width: "100%", objectFit: "cover"}} />
                    <div className="card-body">
                        <h5 className='card-title'>{food.foodName}</h5>
                        <p className='card-text'>{food.description}</p>
                    </div>
                    <div className='d-flex justify-content-between px-2'>
                        <p>Total</p>
                        <input type="number" min={1} style={{width: "40px", height: "30px"}}/>
                    </div>
                    <div className='card-footer'>
                        <strong>₦{food.price.toFixed(2)}</strong><br />
                        <button className='btn w-100' style={{backgroundColor: "#f65f28ff", color: "white"}}>Place Order</button>
                    </div>

                </div>
                 </div>
                ))}
        </>
        
        
                
           
    )
}

export default Food;

/*
The basic rule in JSX

Inside JSX (inside the return()), you cannot just write JavaScript code directly.

JS expressions must be wrapped in curly braces {}.

JS statements (like if, for, while) cannot go directly in JSX.
*/