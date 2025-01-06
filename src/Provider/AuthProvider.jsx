import { createContext } from "react";

export const AuthContext= createContext();

const AuthProvider = ({children}) => {
    const user={displayName:'Puspa',email:'ns@yahoo.com'}
    const authInfo={user};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;