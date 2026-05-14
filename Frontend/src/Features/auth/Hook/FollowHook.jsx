import { follow } from "../Api/followApi";
import { useContext } from "react";
 import { FollowProviderContext } from "../Context/FollowContex";
 function FollowHook() {
 const {err , setErr , load , setLoad , result , setResult} = useContext(FollowProviderContext)
 
 const followFun = async (id)=>{
    try{
        setErr(null);
        setResult(null);
        setLoad(true);
        const response=  await follow(id);
        setResult(response.data.data.message);
        return true;
    }
    catch(err){
        setErr(err.response?.data?.message || "something went wrong")
     return false
    }
    finally{
        setLoad(false)
    }
 }


    return {err , result, followFun, load}
 }
 
 export default FollowHook
 