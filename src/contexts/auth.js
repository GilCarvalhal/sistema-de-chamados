import { useState, createContext, useEffect } from "react";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [user, setUSer] = useState(null);

    function signIn(email, password) {
        console.log(email);
        console.log(password);
        alert('LOGADO COM SUCESSO');
    }

    return (
        <AuthContext.Provider value={{
            signed: !!user, // false
            user,
            signIn,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;