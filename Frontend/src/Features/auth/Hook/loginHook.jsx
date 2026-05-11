import { useContext } from "react";
import { LoginProviderContext } from "../Context/LoginContext";
import { loginFun } from "../Api/loginApi";

function LoginHook() {
    const data = useContext(LoginProviderContext);
 const {loading , error , result , setError , setResult ,setLoading} = data;
   
 const loginFunction = async (UserName , password)=>{
    try{
        setError(null);
        setResult(null);
        setLoading(true);
        const response = await loginFun(UserName , password);
        setResult(response.data.message);
      return true;
    }

    catch(err){
        setError(err.response?.data?.message || "Something went wrong");
 return false;
    }
    finally{
        setLoading(false)
    }
 }
 
 return {loading , error , result , loginFunction}
}

export default LoginHook
