import axios from "axios";
const api = axios.create({
baseURL : "http://localhost:3000/api",
withCredentials :true,
})
 export  async function likeFun(postId){
         const response = await api.post(`/like-post/${postId}`);
         return response
        }

export async function dislikeFun(postId){
    const response = await api.delete(`/dislike-post/${postId}`);
    return response
}        