import { createContext } from "react";
import { useState } from "react";
export const FollowProviderContext = createContext();

export function FollowContext ({children}){
    const [load , setLoad ] = useState(false);
    const [ result , setResult] = useState("");
  const [err , setErr] = useState(null);


  return(
    <FollowProviderContext.Provider
    value ={{load , setLoad , result , setResult, err , setErr}}
    >{children}</FollowProviderContext.Provider>
  )
}