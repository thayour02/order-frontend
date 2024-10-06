import {  createContext, useEffect, useState } from "react"
import { getAuth,createUserWithEmailAndPassword,
    GoogleAuthProvider,signInWithEmailAndPassword,
    signOut,updateProfile,onAuthStateChanged, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config'

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const  AuthProvider=({children})=>{
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)


    // create account by inputing email and password
    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // signUp with your register gmail 
    const createWithGmail = ()=>{
      return signInWithPopup(auth, googleProvider)
    }

    // log in with email and password
    const logInWithEmailAndPassword =(email,password)=>{
     return  signInWithEmailAndPassword(auth, email, password)

    }

    //logout
    const logOut =()=>{
        return signOut(auth)
    }

    //update Profile
    const updateUserProfile = (name,photoURL)=>{
        return updateProfile(auth.currentUser, {
            displayName:name, photoURL: photoURL
          })
    }

    // check signed-in-user
    useEffect(()=>{
      const  unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (createUser) {
              setUser(currentUser)
              setLoading(false)
            } else { 
            }
          })
          return ()=>{
            return unSubscribe();
          }
    },[])

    const authInfo = {
        user,
        createUser,
        createWithGmail,
        logInWithEmailAndPassword,
        logOut,
        updateUserProfile,
        loading
    }
    return(
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
