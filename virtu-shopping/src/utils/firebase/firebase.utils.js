import { initializeApp } from "firebase/app";
import {getAuth, signInWithRedirect, signInWithPopup,
   GoogleAuthProvider,createUserWithEmailAndPassword,
   signInWithEmailAndPassword,signOut,onAuthStateChanged} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs
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

  export const signInWithGooglePopup = async ()=> await signInWithPopup(auth,provider);

  export const db = getFirestore();

  export const addCollectionAndDocuments = async(collectionKey, objectsToAdd) => {
    const collectionRef =  collection(db,collectionKey);
    const batch = writeBatch(db);
    
    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    });
    await batch.commit();
    console.log("done");
  }


  export const fetchCategoriesFromDb = async()=> {
    const collectionRef = collection(db,'categories');
    const q = query(collectionRef);

    const querySanpShot = await getDocs(q);
    const categoryMap = querySanpShot.docs.reduce((acc, docSnapShot)=> {
      const {title, items} = docSnapShot.data();
      acc[title.toLowerCase()] = items;
      return acc;
    },{});

    return categoryMap;
  }
  export const createUserDocFromAuth= async(userAuth, addtioninfo={}) =>{
    const userDocRef = doc(db,'users',userAuth.uid);
    console.log(userDocRef);
    const userSnapShot = await getDoc(userDocRef);
    console.log(userSnapShot.exists);

    if(!userSnapShot.exist){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try{

          await setDoc(userDocRef,{
            displayName,
            email,
            createdAt,
            ...addtioninfo
          });
      }catch(error){
        
        console.log("error creating the user", error.message);
      }
    }
    return userDocRef;
  }

  export const createAuthUserWithEmailAndPassword = async(email,password)=>{
      if(!email || !password) return;
      return await createUserWithEmailAndPassword(auth,email,password);
  }

  export const signInUserWithEmailAndPassword = async(email,password)=>{
    if(!email || !password) return;
    return await signInWithEmailAndPassword(auth,email,password);
}

export const singOutUser = async () =>await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth,callback);