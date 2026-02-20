// import instantLogo from '../assets/food icon.png'
// import Style from './Header.module.css'
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import { Link, NavLink } from 'react-router-dom'





// const Header = ({ onCartClick, cartCount })=> {
//     const style = {
//         backgroundColor: "#dd6604ff",
//         color: "#fff",
        
//     }

//     function toggleCart() {
//         // Logic to toggle cart sidebar
//         console.log("Cart toggled");
//     }

//      return (
//     <nav className="navbar navbar-expand-lg fixed-top top-0 bg-light  backdrop-blur-xl px-5 py-3 header d-flex justify-content-between border border-bottom-1" style={{height: "60px"}}>
  
//       <div className='me-5'>
//       <NavLink to="/" className="navbar-brand d-flex align-items-center" href="#"><img src={instantLogo} alt="instantBite" width="30" height="30" className="me-2"/>instant<span className="text-danger fw-bolder">Bite</span></NavLink>
//       </div>
      
//       <button
//         className='navbar-toggler'
//         type="button"
//         data-bs-toggle="collapse"
//         data-bs-target="#mainNavbar"
//         aria-controls="mainNavbar"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>

//       <div className="collapse navbar-collapse" id="mainNavbar">
//         <ul className={`${Style["nav-linkss"]} navbar-nav gap-4`} style={{marginLeft: "200px"}}>
//           <li className="nav-item">
//             <NavLink to="/" end className={({ isActive }) => isActive ? `${Style.navLink} ${Style.active}` : Style.navLink}>Home</NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink to="/about" className={({ isActive }) => isActive ? `${Style.navLink} ${Style.active}` : Style.navLink}>About</NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink to="/menu" className={({ isActive }) => isActive ? `${Style.navLink} ${Style.active}` : Style.navLink}>Menu</NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink to="/order" className={({ isActive }) => isActive ? `${Style.navLink} ${Style.active}` : Style.navLink}>Order</NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink to="/contact" className={({ isActive }) => isActive ? `${Style.navLink} ${Style.active}` : Style.navLink}>Contact</NavLink>
//           </li>

//           <li className="nav-item">
//             <div className="d-inline-block">
//             <NavLink to="/login" className="nav-link px-3 py-1 rounded-5 text-white" style={{backgroundColor: "#dd6604ff"}}>Login</NavLink>
//             </div> 
//           </li>
//         </ul>
//       </div>

//       <div className={`${Style["cart-icon"]} p-2 me-3`} id="mainNavbar" onClick={onCartClick}>
//         <i className="ri-shopping-cart-2-line fs-4"></i>

//         {cartCount > 0 && (
//         <span className={Style.cartBadge}>{cartCount}</span>
//       )}
//       </div>
//     </nav>
//   );
// }

// export default Header;

import instantLogo from '../assets/food icon.png'
import Style from './Header.module.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { NavLink } from 'react-router-dom'

const Header = ({ onCartClick, cartCount }) => {
  const loginStyle = { backgroundColor: "#dd6604ff", color: "#fff" };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Logo */}
        <NavLink to="/" className="navbar-brand d-flex align-items-center me-lg-5">
          <img src={instantLogo} alt="instantBite" width="30" height="30" className="me-2"/>
          instant<span className="text-danger fw-bold">Bite</span>
        </NavLink>

        {/* Hamburger */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse ms-lg-5" id="mainNavbar">
          <ul className="navbar-nav ms-lg-auto  mb-2 mb-lg-0 gap-3 align-items-center">
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
              <NavLink to="/login" className="nav-link px-3 py-1 rounded-5 text-white" style={loginStyle}>Login</NavLink>
            </li>
          </ul>

          <div className={`${Style["cart-icon"]} p-2 mt-3 me-lg-5 ms-lg-auto`} id="mainNavbar" onClick={onCartClick}>
         <i className="ri-shopping-cart-2-line fs-4"></i>

         {cartCount > 0 && (
           <span className={Style.cartBadge}>{cartCount}</span>
        )}
       </div>
        </div>

        {/* Cart Icon */}
        {/* <div className="d-flex ms-3" onClick={onCartClick} style={{cursor: "pointer"}}>
          <i className="ri-shopping-cart-2-line fs-4"></i>
          {cartCount > 0 && (
            <span className={Style.cartBadge}>{cartCount}</span>
          )}
        </div> */}

        
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