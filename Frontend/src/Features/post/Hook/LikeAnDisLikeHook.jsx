import { useContext } from "react";
import {LikeAndDislikeProviderContext}  from "../Context/LikeAndDislikeContext";
import { likeFun , dislikeFun } from "../Api/likeAndDislikeApi";
import React from 'react'

function LikeAnDisLikeHook() {
    const {error , setError , result,setLoading , setResult } = useContext(LikeAndDislikeProviderContext)
  const likeFunction =async (postId)=>{
     try{
        setError(null);
        setResult(null);
        setLoading(true);
        const response = await likeFun(postId);
        setResult(response.data)
        return true
   } catch(err){
    setError(err.response?.data?.message || "something went wrong");
    return false
   } finally {
    setLoading(false)
   }
}
  

const dislikeFunction  = async (postId)=>{
    try{
        setError(null)
        setResult(null)
        setLoading(true)
        const response = await dislikeFun(postId);
        setResult(response.data)
        return true
    }
    catch(err){
        setError(err.response?.data?.message)
        return false
    }
    finally{
        setLoading(false)
    }
}

    return {error , result , likeFunction , dislikeFunction}
}

export default LikeAnDisLikeHook
