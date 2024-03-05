import SignInForm from "../../components/sigin-in-form/sign-in-form.component";
import SignUp from "../../components/sign-up/sign-up-form.component";
import { createUserDocFromAuth, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import './authentication.styles.scss';
const Authentication = () => {
     
        return(
            <div className="authentication-container">
                {/* <h1>Sign In Page</h1> */}
                {/* <button onClick={logGooogleuser}>Sign in With Google Popup</button> */}
                <SignInForm/>
                <SignUp/>
                
            </div>
        );
}

export default Authentication;