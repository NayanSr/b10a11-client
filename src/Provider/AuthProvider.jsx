import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext= createContext();

const AuthProvider = ({children}) => {
    const[user,setUser]= useState();
    const [loading, setLoading]= useState(true);
    // const user={displayName:'Puspa',email:'ns@yahoo.com'};
    const googleProvider= new GoogleAuthProvider();

    //! Manage Users
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false)
        })
       return ()=>{unsubscribe()};
    },[])

    //! Google Login
    const googleLogin=()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    //! Email Password registration
    const emailPasswordRegistration=(email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    //! Email Password Login
    const emailPasswordLogin= (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //! Log Out
    const logout=()=>{
        return signOut(auth);
    } 

 

    const authInfo={user,loading, googleLogin,emailPasswordRegistration,emailPasswordLogin, logout};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;