import axios from "axios";
const api = axios.create({
    baseURL : "http://localhost:3000/api",
    withCredentials: true,
})


export const createPostFun = async(caption , image)=>{
 const formData = new FormData();
 formData.append("caption" , caption);
 formData.append("image" , image);
   const response = api.post("/create-post", formData);
   return response
}