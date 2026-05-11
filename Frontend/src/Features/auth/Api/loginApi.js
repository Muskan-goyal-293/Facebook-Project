import axios from "axios";
const api = axios.create({
    baseURL :"http://localhost:3000/api",
    withCredentials : true
})

export function loginFun(UserName , password){
    const response = api.post("/login", {UserName , password});
    return response;
}
