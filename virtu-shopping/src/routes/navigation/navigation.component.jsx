import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import {ReactComponent as CrownLogo} from '../../assets/crown.svg';
import "./navigation.styles.scss";

import { UserContext } from "../../contexts/user.context";
import { singOutUser } from "../../utils/firebase/firebase.utils";
const Navigation=() =>{
    const {currentUser} = useContext(UserContext);

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
          
        </div>
        </div>
        <Outlet/>
      </Fragment>
    );
  }

  export default Navigation;