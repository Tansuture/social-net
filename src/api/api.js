import axios from 'axios'

const instance = axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    withCredentials:true,
    headers:{'API-KEY':'DDD'}
})

export const getUsers = (currentPage,postsPerPage) =>{
    return instance.get(`users?page=${currentPage}&count=${postsPerPage}`).then(response=>response.data)
}

export const auth=()=>{
    return instance.get(`auth/me`).then(response=>response.data)
}