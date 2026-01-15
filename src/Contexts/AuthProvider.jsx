import React from 'react';
import { AuthContexts } from './AuthContexts';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../components/Firebase/Firebase.init';
const AuthProvider = ( {children}) => {
    
const provider = new GoogleAuthProvider();
    //Google Sign In
    const googleSignIn=()=>{
  return   signInWithPopup(auth, provider)
    }

    // Register User
    const registerUser=(email, password)=>{
      return  createUserWithEmailAndPassword(auth,email,password )
    }
    // Login User
    const LoginUser=(email,password)=>{
    return   signInWithEmailAndPassword(auth,email,password)
    }
    //signOut User
    const signOutUser=()=>{
      return  signOut(auth)
    }
    // Auth Info
    const authInfo={
        registerUser,
        LoginUser,
        googleSignIn,
        signOutUser
    }
    return (
        <AuthContexts value={authInfo}>
            {children}
        </AuthContexts>
    );
};

export default AuthProvider;