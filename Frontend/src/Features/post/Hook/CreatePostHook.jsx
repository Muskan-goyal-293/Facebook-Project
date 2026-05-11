import { useContext } from "react"
import {CreatePostProviderContext} from "../Context/CreatePostContext";
import {createPostFun} from "../Api/createPostApi"
function CreatePostHook() {
  const data = useContext(CreatePostProviderContext)
  const{loading , error , result ,setLoading , setError , setResult} = data;
  
  async  function createPost(caption, image){
            try{
               setError(null);
               setLoading(true);
               setResult(null);
                const response = await createPostFun(caption , image);
                setResult(response.data.message);
                return true;
            }
            catch(err){
                setError(err.response.data.message || "something went wrong");
                return false;
            }
            finally{
                setLoading(false);
            }
    }
  
  
    return {loading,error,result ,createPost}
}

export default CreatePostHook
