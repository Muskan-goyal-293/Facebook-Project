import axios from "axios";
const api = axios.create({
    baseURL :"http://localhost:3000/api",
    withCredentials :true,
})

export async function getAllPost (){
    const response = await api.get("/get-all-post");
    return response;
}