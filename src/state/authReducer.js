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
    return (dispatch)=>{
        usersAPI.auth().then(data=>{
            if(data.resultCode===0) {
            const {id,login,email}=data.data
              dispatch(setUserData({id,login,email}))
                 }
            })
    
    }
}

export const setUserData =({id,login,email})=>({type:SET_USER_DATA,data:{id,login,email}})//id,email,login
export default authReducer 