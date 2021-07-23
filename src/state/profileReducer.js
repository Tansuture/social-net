import { usersAPI } from "../api/api"

//action
const ADD_POST = "ADD_POST"
const UPDATE_NEW_POST = "UPDATE_NEW_POST"
const SET_USER_PROFILE="SET_USER_PROFILE"
const SET_USER_STATUS="SET_USER_STATUS"
const UPDATE_USER_STATUS="UPDATE_USER_STATUS"


let initialState = {
    postData: [
        {
            id: 1,
            message: "Hello,my name is Tansu",
            LikesCount: 20
        }, {
            id: 2,
            message: "My 3 day",
            LikesCount: 46
        }
    ],
    newPostText: "Tansu Hello",
    profile:null,
    status:''
}
const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: state.newPostText,
                LikesCount: 0
            }
            return {...state, //копирование стэйта в новый объект
                newPostText: '', //очистка инпута
                postData: [  ...state.postData,newPost ] // копирование постдата со старого стэйта и запушение новых данных
            }

        case UPDATE_NEW_POST:
           return{
               ...state,
               newPostText:action.newText
           }
          case SET_USER_PROFILE:
                return{
                    ...state,profile:action.profile
                }
          case SET_USER_STATUS:
                 return{
                     ...state,status:action.status
                }
             case UPDATE_USER_STATUS:
                return{
                     ...state,status:action.status
                 }
        default:
            return state

    }

}
export const userProfileThunkCreator=(userId)=>{
    return(dispatch)=>{
       
        usersAPI.setUserProfile(userId).then(data=>dispatch(setUserProfile(data)))
    }
}

export const userStatusThunkCreator=(userId)=>{
    return(dispatch)=>{
        usersAPI.getStatus(userId).then(data=>dispatch(setUserStatus(data)))
    }
}


export const updateStatusThunkCreator=(status)=>{
    return(dispatch)=>{
        usersAPI.updateStatus(status).then(data=>
            dispatch(updateStatus(status)))
            console.log(status)
    }
}
export const addNewPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST, newText: text})
export const setUserProfile=(profile)=>({type:SET_USER_PROFILE,profile})
export const setUserStatus=(status)=>({type:SET_USER_STATUS,status})
export const updateStatus=(status)=>({type:UPDATE_USER_STATUS,status})
export default profileReducer