import { authThunkCreator } from "./authReducer"

const INITIALIZE_APP = "INITIALIZE_APP"

const initialState={
    initialize:false
}

const appReducer=(state=initialState,action)=>{

    switch(action.type){
        case INITIALIZE_APP:
            return{
                ...state,initialize:true }

        default:
            return state
    }
  
}

export const initializeSucces=()=>({type:INITIALIZE_APP})

export const initializeAppThunkCreator=()=>(dispatch)=>{
    let promise=dispatch(authThunkCreator())
    promise.then(()=>{
        dispatch(initializeSucces())
    })
}

export default appReducer