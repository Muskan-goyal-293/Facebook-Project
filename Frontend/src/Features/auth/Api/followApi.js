import axios  from "axios";
const api = axios.create({
    baseURL :"http://localhost:3000/api",
    withCredentials : true
})


export const follow = async(id)=>{
    const response = await api.post(`/follow/${id}`)
    return response
}