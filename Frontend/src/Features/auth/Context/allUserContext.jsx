import { createContext, useState } from 'react'
export const AllUser = createContext();
export function AllUserContext({children}) {
 const [allUser, setAllUser]=useState([]);
 const [error , setError] = useState(null);
 const[loading , setLoading] = useState(false);
    return (
        <AllUser.Provider value={{allUser , setAllUser , error , setError , loading , setLoading}}>{children}</AllUser.Provider>
  )
}
