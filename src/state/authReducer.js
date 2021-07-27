import { usersAPI } from "../api/api"

const SET_USER_DATA="SET_USER_DATA"

const initialState={
    id: null,
    email: null,
    login: null,
    isAuth:false
}
const authReducer = (state=initialState,action) =>{
    
    switch(action.type){
        case SET_USER_DATA:
           
                return{ ...state,...action.data,isAuth:true}   
        default : return state
    }
}

export const authThunkCreator=()=>{
    debugger
    return (dispatch)=>{
        usersAPI.auth().then(data=>{
            if(data.resultCode===0) {
            const {id,login,email}=data.data
              dispatch(setUserData(id,login,email,true))
                 }
            })
    
    }
}

export const loginThunkCreator=(email,password,rememberMe)=>{
    return (dispatch)=>{
     
        usersAPI.login(email,password,rememberMe).then(data=>{
            dispatch(authThunkCreator())
        })
    }
}

export const logoutThunkCreator=()=>{
    return (dispatch)=>{
        usersAPI.logout.then(data=>{
            dispatch(setUserData(null,null,null,false))
        })
    }
}
export const setUserData =({id,login,email,isAuth})=>({type:SET_USER_DATA,data:{id,login,email,isAuth}})//id,email,login
export default authReducer 