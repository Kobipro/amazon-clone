import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Navbar.css";
import { useStateValue } from "../../stateProvider";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

function Navbar() {  
  // eslint-disable-next-line 
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <><>
      <div className="header">

        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="navbar " />


        <div className="header__search">
          <input className="header__searchInput" type="text" />
          <SearchIcon className="header__searchIcon" />
        </div>

        <div className="header__nav">

          <div className="header__option">
            <span className="header__optionLineOne">Hello Guest</span>
            <Link to="/signin"><span className="header__optionLineTwo">Sign In</span></Link>
          </div>



          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>



          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>


          <Link to="/checkout">
            <ShoppingBasketIcon />
          </Link>
          <span className="header__optionLineTwo header__basketCount">
            {basket?.length}
          </span>
        </div>

      </div>
    </><Outlet />
    </>
     );
}

export default Navbar;









// import { Outlet, Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/signin">Sign in</Link>
//           </li>
//           <li>
//             <Link to="/signup">Sign up</Link>
//           </li>
//           <li>
//             <Link to="/checkout">checkout</Link>
//           </li>
//         </ul>
//       </nav>

//       <Outlet />
//     </>
//   )
// };

// export default Navbar;