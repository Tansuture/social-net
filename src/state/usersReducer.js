import {  usersAPI } from "../api/api"

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_TOTAL_COUNT="SET_TOTAL_COUNT"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_LOADING = "SET_LOADING"
const TOGGLE_BTN = "TOGGLE_BTN"

const initialState = {
    users: [],
    postsPerPage:10,
    totalCount:0,
    currentPage:2,
    isLoading:true,
    isBtnToggled:[]
}

//thunkcreator для асинхронных операциий
export const getUsersThunkCreator =(currentPage,postsPerPage)=>{
    return (dispatch)=>{
        dispatch(setLoading(true))
        dispatch(setCurrPage(currentPage))
        usersAPI.getUsers(currentPage,postsPerPage).then(data=>{
            dispatch(setUsers(data.items))
            dispatch(setTotalCount(data.totalCount))
            dispatch(setLoading(false))
          })
    }
}
export const unfollowThunkCreator = (userId)=>{
    return (dispatch)=>{
            dispatch(setToggleBtn(true,userId))
            usersAPI.unfollowBtn(userId).then(data=>unfollow(userId))
            dispatch(setToggleBtn(false,userId))
    }
}
export const followThunkCreator = (userId)=>{
    return (dispatch)=>{
            dispatch(setToggleBtn(true,userId))
            usersAPI.followBtn(userId).then(data=>follow(userId))
            dispatch(setToggleBtn(false,userId))
    }
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case FOLLOW:
            
                return {
                    ...state,users: state.users.map(u => {
                            if (u.id === action.userId) 
                                return {
                                    ...u, followed: true
                                }
                            return u
                        })
                }
            
        case UNFOLLOW:
            
                return {
                    ...state,
                    users: state.users.map(u => {
                            if (u.id === action.userId) 
                                return {...u, followed: false}
                            return u
                        })
                }
            
        case SET_USERS:
                return {
                    
                    ...state,
                    users:action.users
                }
            
            case SET_CURRENT_PAGE: 
                    return {
                        
                        ...state,
                        currentPage: action.page
                    }
                
                case SET_TOTAL_COUNT:
                    return {
                        
                        ...state,
                        totalCount: action.totalCount
                    }
                
                case SET_LOADING:
                        return {
                            
                            ...state,
                            isLoading: action.isLoading
                           }
                    
                    case TOGGLE_BTN:
                        return {
                            
                            ...state,
                            isBtnToggled: action.isLoading ? [...state.isBtnToggled,action.userId]: //добавление в массив айди
                            state.isBtnToggled.filter(id=>id!=action.userId) 
                        }
                    
    
                default:
                return state
    }

}

//ACTION CREATORS
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const follow = (userId) => ({type: FOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS,users})
export const setCurrPage=(page)=> ({type:SET_CURRENT_PAGE,page})
export const setTotalCount=(totalCount)=>({type:SET_TOTAL_COUNT,totalCount})
export const setLoading=(isLoading)=>({type:SET_LOADING,isLoading})
export const setToggleBtn=(isLoading)=>({type:TOGGLE_BTN,isLoading})

export default usersReducer