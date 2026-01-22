import GrilledChicken from '../assets/Grilled Chicken Salad.jpg';
import Style from './CustomerFavorite.module.css';
import Hamburger from '../assets/Hamburger.jpg';
import Shawarma from '../assets/Shawarma.jpg';
import Pizza from '../assets/pizza veggie.jpg';
import Cake from '../assets/choco cake.jpg';
import Barbeque from '../assets/Barbeque.jpg';
import Menu from '../CustomerFavorite.json';

function CustomerFavorite({ addToCart }) {

    // const addCartHandler = () => {
    //     alert("Item added to cart!");
    //     const foodItem = ["Grilled Chicken", "Smoky Classic Burger", "Spiced Chicken Shawarma Wrap", "Fiery Margherita Pizza", "Chocolate Lava Cake", "Smoky Sea Grill"];
    //     const randomItem = foodItem[Math.floor(Math.random() * foodItem.length)];
    //     console.log(`${randomItem} added to cart.`);   

    // }
    
    return (
        <div className="container bg-body-secondary" style={{marginTop: "7rem", marginBottom: "7rem"}}>
            <div className="customer-favorite-title mb-5 text-center">
                <h2 style={{fontWeight: "bold", fontSize: "2.5rem"}}>Customer <span className="menu-span" style={{color: "#FFA500"}}>Favorites</span></h2>
                <p style={{fontSize: "1.2rem", marginTop: "1.3rem", color: "#555"}}>Discover what our customers are raving about - delicious dishes that keep them coming back for more.</p>
            </div>

            <div className="row justify-content-center">
            {Menu.map((item) => (
                <div key={item.id} className="col-md-4 mb-4">
                    <div className={`${Style.mycard} card h-100 position-relative`}>
                        <button className={Style.cardbtnnns}><i style={{color: "#dd6640"}} className="ri-star-fill"></i>Popular</button>
                        <img  src={item.img} className="card-img-top" style={{height: "200px", width: "100%", objectFit: "cover"}} alt={item.foodName} />
                        <div className="card-body">
                            <h5 style={{display: "flex", justifyContent: "space-between"}} className="card-title">{item.foodName} <span style={{color: "darkorange", fontWeight: "bold"}}>&#8358;{item.price.toLocaleString()}</span></h5>
                            <p className="card-text" style={{color: "#555", fontWeight: "500"}}>{item.description}</p>
                            <div>
                                <button onClick={() => addToCart(item)} className={`${Style.btnnns}`}><i className="ri-add-line"></i> &nbsp; Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}




            </div>
        </div>
    )
}

export default CustomerFavorite;


/*
.toLocaleString() is a JavaScript method that:

Formats numbers, dates, or strings according to local language & regional rules.

Your browser locale (Nigeria / English) uses comma as thousand separator

JavaScript formats the number accordingly



JavaScript:
Checks your browser’s locale (language & region)

Applies:

1. Correct thousand separator (, or .)

2. Correct decimal separator

3. Returns a string, not a number





for json file
1. no comment
2. use double quotes for keys and string values, no single quotes
3. no trailing commas after last key-value pair in an object or array
*/