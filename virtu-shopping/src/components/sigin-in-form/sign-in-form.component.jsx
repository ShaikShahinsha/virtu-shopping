import { useState, useContext } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth,signInUserWithEmailAndPassword,signInWithEmailAndPassword,signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import './sign-in-form.styles.scss'
import Button ,{ BUTTON_TYPE_CLASSES } from "../button/button.component";
import { UserContext } from "../../contexts/user.context";

const defaultFormFields = {

    email:'',
    password:'',
    
}
const SignInForm = () =>{
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email,password} = formFields;

   // const {setCurrentUser } = useContext(UserContext);
    const resetFormFields = () =>{
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async() =>{
        //console.log("method called");
        await signInWithGooglePopup();
       // await createUserDocFromAuth(user);
      
    }


    const handleChange = (event) =>{
        const {name,value }= event.target;
        setFormFields({...formFields,[name]:value});
    }
    console.log("formField",formFields);
    const handleSubmit = async (event) => {
        event.preventDefault();
      
        try{
           const {user} =  await signInUserWithEmailAndPassword(email,password);
          // setCurrentUser(user);
           console.log(user);
            resetFormFields();
        }catch(error){
            if(error.code === 'auth/email-already-in-use'){
                alert("User Already Exists");
            }
            console.log("error",error);
        }
       
       
    }
    return(
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign In with email/ password</span>
            <form onSubmit={handleSubmit}>
                
           
             <FormInput label="Email" type="email" required name="email"  onChange={handleChange} value={email}/>   
            
             <FormInput label="Password" type="password" required name="password"  onChange={handleChange}  value={password}/>   
             
             
            <div className="buttons-container">
             <Button type="submit">Sign IN</Button>
             <Button buttonType='google' type='button' onClick={signInWithGoogle}>
            SignInWithGoogle
          </Button>
            </div>
            </form>
        </div>
    );
}   
export default SignInForm;