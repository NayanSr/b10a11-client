import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createContext } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext= createContext();

const AuthProvider = ({children}) => {
    const user={displayName:'Puspa',email:'ns@yahoo.com'};
    const googleProvider= new GoogleAuthProvider();

    const googleLogin=()=>{
        return signInWithPopup(auth, googleProvider)
    }
    const authInfo={user, googleLogin};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;