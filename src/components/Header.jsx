import instantLogo from '../assets/food icon.png'
import Style from './Header.module.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link, NavLink } from 'react-router-dom'





const Header = ({ onCartClick, cartCount })=> {
    const style = {
        backgroundColor: "#dd6604ff",
        color: "#fff",
        
    }
    // return (
    //     <div className='d-flex justify-content-between align-items-center py-3 px-5 header'>
    //         <div className="navbrand d-flex align-items-center">
    //             <h3><img className='me-2' width="30" height="30" src={instantLogo} alt="" />instant<span className='text-danger fw-bolder'>Bite</span></h3>
    //         </div>
    //         <ul className="nav-links d-flex justify-content-around align-items-center gap-4 list-unstyled">
    //             <li><a className='text-decoration-none text-dark' href="">Home</a></li>
    //             <li><a className='text-decoration-none text-dark'href="">About</a></li>
    //             <li><a className='text-decoration-none text-dark'href="">FAQ</a></li>
    //             <li><a className='text-decoration-none text-dark'href="">Food Category</a></li>
    //             <li><a className='text-decoration-none text-dark'href="">Contact Us</a></li>
    //             {/* <li><a className='text-decoration-none text-dark'href="">Cart</a></li> */}
    //             <li><a className='text-decoration-none pb-2 px-3 py-1 rounded-5'href="" style={style}>Login</a></li>
    //         </ul>

    //         <div className='cart p-3 rounded-circle bg-light'>
    //             <i className="ri-shopping-cart-2-line fs-3" style={{color: "#dd6604ff"}}></i>
    //         </div>
    //     </div>
        
    // )

    function toggleCart() {
        // Logic to toggle cart sidebar
        console.log("Cart toggled");
    }

     return (
    <nav className="navbar navbar-expand-lg fixed-top top-0 bg-light  backdrop-blur-xl px-5 py-3 header d-flex justify-content-between border border-bottom-1" style={{height: "60px"}}>
      {/* Brand */}
      <div className='me-5'>
      <NavLink to="/" className="navbar-brand d-flex align-items-center" href="#"><img src={instantLogo} alt="instantBite" width="30" height="30" className="me-2"/>instant<span className="text-danger fw-bolder">Bite</span></NavLink>
      </div>
      {/* Hamburger button */}
      <button
        className='navbar-toggler'
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mainNavbar"
        aria-controls="mainNavbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="mainNavbar">
        <ul className={`${Style["nav-linkss"]} navbar-nav gap-4`} style={{marginLeft: "200px"}}>
          <li className="nav-item">
            <NavLink to="/" end className={({ isActive }) => isActive ? `${Style.navLink} ${Style.active}` : Style.navLink}>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className={({ isActive }) => isActive ? `${Style.navLink} ${Style.active}` : Style.navLink}>About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/menu" className={({ isActive }) => isActive ? `${Style.navLink} ${Style.active}` : Style.navLink}>Menu</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/order" className={({ isActive }) => isActive ? `${Style.navLink} ${Style.active}` : Style.navLink}>Order</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className={({ isActive }) => isActive ? `${Style.navLink} ${Style.active}` : Style.navLink}>Contact</NavLink>
          </li>

          <li className="nav-item">
            <div className="d-inline-block">
            <NavLink to="/login" className="nav-link px-3 py-1 rounded-5 text-white" style={{backgroundColor: "#dd6604ff"}}>Login</NavLink>
            </div> 
          </li>
        </ul>
      </div>

      <div className={`${Style["cart-icon"]} p-2 me-3`} onClick={onCartClick}>
        <i className="ri-shopping-cart-2-line fs-4"></i>

        {cartCount > 0 && (
        <span className={Style.cartBadge}>{cartCount}</span>
      )}
      </div>
    </nav>
  );
}

export default Header;

/*   
Why end on Home?

Without it:

/order would also activate /

end means match exactly /



Using NavLink instead of <a> → SPA navigation without page reload.
No <a href="#"> anywhere → avoids reloads



1. className can be a function
NavLink allows className to be a function that receives an object containing route state.

This function is called every time React Router checks if this link is active.



2. The parameter { isActive }

The function receives an object like:

{ isActive: true/false, isPending: true/false }

isActive → true if the link’s to matches the current URL.
isPending → true if a pending navigation is in progress (usually with React Router v6+).


<Link to="/about">About</Link>

<NavLink
  to="/about"
  className={({ isActive }) => (isActive ? 'active-link' : '')}
>
  About
</NavLink>


Note: Props are just function arguments (VERY IMPORTANT)

<Header onCartClick={someFunction} />    -is the same as 

Header({ onCartClick: someFunction })


Props are function arguments AND they are objects.
Each prop name is a key, and its value can be anything (string, number, object, array, function, JSX).
*/