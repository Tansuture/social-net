
import {usersAPI} from '../api/api'

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
 
        case SET_USER_DATA:
         
            return {
                ...state,
                ...action.payload
            }

        default:
            return state;
    }
}


export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload:
        {userId, email, login, isAuth}  });

export const authThunkCreator = () =>  async(dispatch) => {
    let data = await usersAPI.auth()
        
            if (data.resultCode === 0) {
                let {id, login, email} = data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        
}

export const loginThunkCreator = (email, password, rememberMe) => async (dispatch) => {
let data = await usersAPI.login(email, password, rememberMe)
      
            if (data.resultCode === 0) {
                dispatch(authThunkCreator())
            }
      
}

export const logoutThunkCreator=()=> async (dispatch)=>{
   
    let data = await usersAPI.logout()
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
  
}


export default authReducer 