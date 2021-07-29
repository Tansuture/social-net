import * as axios from "axios";

const instance = axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    withCredentials:true,
    headers:{'API-KEY':'9c300fe7-217b-4b07-b346-fb17a27b720e'}
})

export const usersAPI = {

getUsers (currentPage,postsPerPage){
    return instance.get(`users?page=${currentPage}&count=${postsPerPage}`).then(response=>response.data)
},
auth(){
    return instance.get(`auth/me`).then(response=>response.data)
},

followBtn(userId){
    return instance.post(`follow/${userId}`).then(response=>response.data)
},
 unfollowBtn(userId){
    return instance.delete(`follow/${userId}`).then(response=>response.data)
},
setUserProfile(userId){
    return instance.get(`profile/${userId}`).then(response=>response.data)
},
getStatus(userId){
    return instance.get(`profile/status/${userId}`).then(response=>response.data)
},
updateStatus(status){
    return instance.put(`profile/status`,{status})
},
login(email,password,rememberMe){
    return instance.post('auth/login',{email,password,rememberMe}).then(response=>response.data)
},
logout(){
    return instance.delete('auth/login').then(response=>response.data)
}
}

