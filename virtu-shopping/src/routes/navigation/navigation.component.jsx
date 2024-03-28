import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import {ReactComponent as CrownLogo} from '../../assets/crown.svg';

import { NavigationContainer, NavLinks, LogoContainer, NavLink } from "./navigation.styles";

import { UserContext } from "../../contexts/user.context";
import { singOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartToggleContext } from "../../contexts/carttoggle.context";
const Navigation=() =>{
    const {currentUser} = useContext(UserContext);
    const {isCartOpen, cartCount} = useContext(CartToggleContext);
    // const signOutHandler = async () =>{
    //   await singOutUser();
    //   setCurrentUser(null);
    // }
    return(
      <Fragment>
        <NavigationContainer>   
        <LogoContainer to="/">
            <CrownLogo className="logo"/>
        </LogoContainer>
        <NavLinks>
           <NavLink to="/shop">
                SHOP
           </NavLink>
           {
            currentUser ? (<NavLink as="span" onClick={singOutUser} >SIGNOUT</NavLink>) : ( 
            <NavLink to="/auth">
            SIGNIN
            </NavLink>)
           }
         
           <CartIcon />
          
        
        </NavLinks>
       { isCartOpen && <CartDropDown/>}
        </NavigationContainer>
        
        <Outlet/>
      </Fragment>
    );
  }

  export default Navigation;