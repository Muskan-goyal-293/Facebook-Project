// import module
import registerFun from "../Api/registerApi";
import { AuthProviderContext } from "../Context/AuthContext";
import { useContext } from "react";

// Function to register  this function  connect to backend
function AuthHook() {
  //  all state and function
  const data = useContext(AuthProviderContext);
  const {
    loading,
    setLoading,
    error,
    setError,
    user,
    setUser,
    result,
    setResult,
  } = data;

  //   register function 
  const registerFunction = async (
    UserName,
    email,
    password,
    age,
    confirmPassword,
  ) => {

    // check password length 
    if (password.trim().length < 6 || confirmPassword.trim().length < 6) {
      setError("password length must be more then 6 letter");
      return false;
    }

    // check password and confirm password equal  
    if (password !== confirmPassword) {
      setError("Password and confirm password must be same");
      return false;
    }

    //  check number is not a string or invalid value
    if (isNaN(Number(age))) {
      setError("please enter a valid number");
      return false;
    }


    // check age is less then 18 or note 
    if (Number(age) < 18) {
      setError("age must be more then 18");
      return false;
    }
    // check age is not more then 100 year old
    if (Number(age) > 100) {
      setError("Age must be between 18 and 100")
      return false;
    }

    // check UserName length 
    if (UserName.trim().length < 2) {
      setError("name must me more then 2 word");
      return false;
    }

    //  call  function connect  
    try {
      setResult(null);
      setError(null);
      setLoading(true);
      const response = await registerFun(
        UserName,
        email,
        password,
        age,
        confirmPassword,
      );
      setUser(response.data);
      setResult(response.data.message);
      return true;
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
      return false;
    } finally {
      setLoading(false);
    }
  };


  return { error, loading, user, result, registerFunction };
}

export default AuthHook;
