import { useContext, useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import './sign-up-form.styles.scss'
import Button from "../button/button.component";
//import { UserContext } from "../../contexts/user.context";
const defaultFormFields = {
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}
const SignUp = () =>{
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName,email,password,confirmPassword} = formFields;

    //const {currentUser} = useContext(UserContext);

    const resetFormFields = () =>{
        setFormFields(defaultFormFields);
    }
    const handleChange = (event) =>{
        const {name,value }= event.target;
        setFormFields({...formFields,[name]:value});
    }
    console.log("formField",formFields);
    const handleSubmit = async (event) => {
        event.preventDefault();
      //  const {email,password,confirmPassword} = event.target;
        if(password !== confirmPassword){
            alert("password doesn't match");
            return;
        }
        try{
            const {user} =await createAuthUserWithEmailAndPassword(email,password);
            await createUserDocFromAuth(user,{displayName});
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
            <h2>Don't have an account?</h2>
            <span>Sign up with email/ password</span>
            <form onSubmit={handleSubmit}>
                
             <FormInput label="Name" type="text" required name="displayName" onChange={handleChange} value={displayName}/>   
             
             <FormInput label="Email" type="email" required name="email"  onChange={handleChange} value={email}/>   
            
             <FormInput label="Password" type="password" required name="password"  onChange={handleChange}  value={password}/>   
             
             <FormInput label="Confirm Password"  type="password" required name="confirmPassword"  onChange={handleChange} value={confirmPassword}/>   
             <Button type="submit">Sign UP</Button>
            </form>
        </div>
    );
}   
export default SignUp;