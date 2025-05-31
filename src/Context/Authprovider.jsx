import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContextt';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase/Firebase';



const googleProvider = new GoogleAuthProvider();

const Authprovider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }


const signInUser = (email, password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
}


const signInWithGoogle = () =>{
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
}

const signOutUser = () =>{
    setLoading(true);
    return signOut(auth)
    
}

useEffect( () =>{
    const unSubcribe = onAuthStateChanged(auth, currenUser =>{
        setUser(currenUser);
        setLoading(false);
        console.log('user in the auth state change', currenUser)
    })
    return () =>{
        unSubcribe();
    }
}, [])


const authImfo = {
    loading,
    user,
    createUser,
    signInUser,
    signInWithGoogle,
    signOutUser
    

}

    return (
       
            <AuthContext value={authImfo}>
                {children}
            </AuthContext>
       
    );
};

export default Authprovider;