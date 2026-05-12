import { useContext } from "react";
import { AllUser } from "../Context/allUserContext";
import { allUserFun } from "../Api/allUserApi";
export default  function AllUserHook(){
 const {error , setError , loading , setLoading , allUser , setAllUser} = useContext(AllUser)

 const allUserGetFun = async ()=>{

     try{
        setError(null);
        setLoading(true);
        const result = await allUserFun()
        console.log(result.data.allUserData)
         setAllUser(result.data.allUserData)
     return true;
        }
    catch(err){
        setError(err.response?.data?.message || "something went wrong")
     return false;
    }
    finally{
        setLoading(false)
    }
 } 

 return {error, loading , allUser , allUserGetFun}
}

