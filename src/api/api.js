import * as axios from "axios";

const instance = axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    withCredentials:true,
    headers:{'API-KEY':'2d9ffc7c-6ec3-414e-9840-749124dc4e7d'}
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
}


}

