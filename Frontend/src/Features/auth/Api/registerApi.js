// import module
import  axios from "axios"
const api = axios.create({
    baseURL :"http://localhost:3000/api",
    withCredentials: true
})

//  function to connect with backend
function registerFun(UserName , email, password, age ,confirmPassword){
const response = api.post("/register" ,{
    UserName , email , password , age , confirmPassword
})
return response
}

export default registerFun;