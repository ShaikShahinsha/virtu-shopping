import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import {ReactComponent as CrownLogo} from '../../assets/crown.svg';
import "./navigation.styles.scss";

import { UserContext } from "../../contexts/user.context";
import { singOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartToggleContext } from "../../contexts/carttoggle.context";
const Navigation=() =>{
    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartToggleContext);
    // const signOutHandler = async () =>{
    //   await singOutUser();
    //   setCurrentUser(null);
    // }
    return(
      <Fragment>
        <div className="navigation">    
        <Link className="logo-container" to="/">
            <CrownLogo className="logo"/>
        </Link>
        <div className="nav-links-container">
           <Link className="nav-link" to="/shop">
                SHOP
           </Link>
           {
            currentUser ? (<span className="nav-link" onClick={singOutUser} >SIGNOUT</span>) : ( 
            <Link className="nav-link" to="/auth">
            SIGNIN
            </Link>)
           }
          <Link>
           <CartIcon/>
        </Link>
        </div>
       { isCartOpen && <CartDropDown/>}
        </div>
        
        <Outlet/>
      </Fragment>
    );
  }

  export default Navigation;