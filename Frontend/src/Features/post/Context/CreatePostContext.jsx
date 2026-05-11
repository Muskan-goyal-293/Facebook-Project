import React, { Children, createContext, useState } from 'react'
export const CreatePostProviderContext = createContext()
export  function CreatePostContext({children}) {
    const[loading , setLoading] = useState(false);
   const[error , setError] = useState(null);
   const[result , setResult] = useState(null);
  return (
    <CreatePostProviderContext.Provider value={{loading , setError , error , setLoading , setResult , result}}>
        {children}
    </CreatePostProviderContext.Provider>
  )
}
