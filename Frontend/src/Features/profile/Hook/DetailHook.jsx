import { DetailProviderContext } from "../Context/DetailContext";
import detail from "../Api/detailApi";
import { useContext } from "react";

function DetailHook() {

const {
  error,
  setError,
  loading,
  setLoading,
  result,
  setResult
} = useContext(DetailProviderContext);

const detailFun = async () => {

    try{

        setError(null);
        setLoading(true);

        const response = await detail();

        setResult(response.data.data);

    }
    catch(err){

        setError(err.response?.data?.message);

    }
    finally{

        setLoading(false);

    }
}

return {
   error,
   result,
   loading,
   detailFun
}

}

export default DetailHook;