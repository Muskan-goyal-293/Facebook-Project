import { createContext, useState } from "react";
 
export  const LoginProviderContext = createContext()
export function LoginContext({children}) {
 const[loading,setLoading]= useState(false);
 const[error , setError]  = useState(null);
 const[result , setResult] = useState(null);

  return (
    <LoginProviderContext.Provider
    value={{loading , setLoading , error, setError , result , setResult}}
    >{children}</LoginProviderContext.Provider>
  )
}
