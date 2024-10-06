import axios  from "axios"

let API_URL = 'http://localhost:3000/api';

export const API = axios.create({
   baseURL: API_URL,
   responseType:'json'
})

export const apiRequest = async({url,method,data,token})=>{
  try {
    const result = await API(url,{
        data:data,
        method:method || "GET",
          headers:{
            "Content-Type":"application/json",
            Authorization: token ? `Bearer ${token}` : ""
          }
    })
    return result?.data
  } catch (error) {
   const err = error.response.data
    return {status:err.success, message:err.message}
  }
}