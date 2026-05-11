import React, { useContext } from 'react'
import { AllPostProviderContext } from '../Context/GetAllPostContext'
import { getAllPost } from '../Api/getAllPostApi';
function GetAllPostHook() {
    const data = useContext(AllPostProviderContext)
    const{error, setError , loading , setLoading , result ,setResult } = data;
 
     async function getAllPostFunc (){
         try{
            setError(null);
            setLoading(true)
            const response = await getAllPost();
            console.log(response.data.data)
            setResult(response.data.data);
          
         } catch (err) {
            setError(err);
         } finally {
            setLoading(false);
         }
     }

  return {error , loading , result , getAllPostFunc}  
}

export default GetAllPostHook
