import React, { createContext, useState } from 'react'
export const AuthProviderContext = createContext();

export function AuthContext({children}) {
    const [loading , setLoading] = useState(false);
    const [ user ,setUser] = useState("");
    const[error , setError] = useState(null);
    const[result , setResult] = useState(null)
    return (
    <AuthProviderContext.Provider
    value={{loading , setLoading , user , setUser , error , setError , result , setResult}}
    >{children}</AuthProviderContext.Provider>
     )
}


