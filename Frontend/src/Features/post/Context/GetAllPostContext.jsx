import { createContext } from "react"
import { useState } from "react"
export const AllPostProviderContext = createContext();
export function GetAllPostContext({children}) {
const [loading , setLoading] = useState(false);
const[result , setResult] = useState([]);
const[error , setError] = useState(null); 
    return (
   <AllPostProviderContext.Provider value={{loading,setLoading,result,setError,setResult,error}}>
    {children}
   </AllPostProviderContext.Provider>
  )
}
