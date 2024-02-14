import { initializeApp } from "firebase/app";
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection
} from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCQr7cbBYj5UH4XymVrwvgRGrAu8xy4pWg",
    authDomain: "virtual-clothing-872da.firebaseapp.com",
    projectId: "virtual-clothing-872da",
    storageBucket: "virtual-clothing-872da.appspot.com",
    messagingSenderId: "40660486466",
    appId: "1:40660486466:web:7f44fe266ade125119a0db",
    measurementId: "G-H68H52B4RC"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt:"select_account"
  });
 
  export const auth = getAuth();

  export const signInWithGooglePopup = ( )=> signInWithPopup(auth,provider);

  export const db = getFirestore();

  export const createUserDocFromAuth= async(userAuth) =>{
    const userDocRef = doc(db,'users',userAuth.uid);
    console.log(userDocRef);
  }