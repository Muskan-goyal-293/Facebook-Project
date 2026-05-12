import { createContext, useState } from "react";
export const LikeAndDislikeProviderContext = createContext()

export function LikeAndDislikeContext({children}){
    const [ loading , setLoading] = useState(false);
    const [error , setError] = useState(null);
    const[result , setResult] = useState(null);
   return(
    <LikeAndDislikeProviderContext.Provider value ={{setLoading , error , setError , result , setResult}}>
        {children}
    </LikeAndDislikeProviderContext.Provider>
   )
}