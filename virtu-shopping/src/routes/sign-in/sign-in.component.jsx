import { createUserDocFromAuth, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
        const logGooogleuser = async() =>{
            const {user} = await signInWithGooglePopup();
            createUserDocFromAuth(user);
        }
        return(
            <div>
                <h1>Sign In Page</h1>
                <button onClick={logGooogleuser}>Sign in With Google Popup</button>
            </div>
        );
}

export default SignIn;