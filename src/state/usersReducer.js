const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_TOTAL_COUNT="SET_TOTAL_COUNT"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_LOADING = "SET_LOADING"

const initialState = {
    users: [],
    postsPerPage:10,
    totalCount:0,
    currentPage:2,
    isLoading:false
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
          
                {
                 
                    return {
                        
                        ...state,
                        currentPage: action.page
                    }
                }
                case SET_TOTAL_COUNT:
          
                {
                 
                    return {
                        
                        ...state,
                        totalCount: action.totalCount
                    }
                }
                case SET_LOADING:
          
                    {
                     
                        return {
                            
                            ...state,
                            isLoading: action.isLoading
                        }
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

export default usersReducer