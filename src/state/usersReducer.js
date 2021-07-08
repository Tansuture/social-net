const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const initialState = {
    users: [
        {
            id: 1,
            followed: true,
            name: 'Sakura',
            status: 'Today is a good day',
            location: {
                city: 'Konoha',
                country: 'Japan'
            },
            photo: "https://avatarfiles.alphacoders.com/187/187192.png"
        }, {
            id: 2,
            followed: false,
            name: 'Hinata',
            status: 'hello everyone',
            location: {
                city: 'Konoha',
                country: 'Kazakhstan'
            },
            photo: 'https://avatarfiles.alphacoders.com/574/thumb-1920-57462.jpg'
        }, {
            id: 3,
            followed: true,
            name: 'Naruto',
            status: 'im good boy',
            location: {
                city: 'Astana',
                country: 'Kazakhstan'
            },
            photo: 'https://avatarfiles.alphacoders.com/946/94610.jpg'
        }
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            {
                return {
                    ...state,users: state.users.map(u => {
                            if (u.id === action.userId) 
                                return {
                                    ...u, followed: true
                                }
                            return u
                        })
                }
            }
        case UNFOLLOW:
            {
                return {
                    ...state,
                    users: state.users.map(u => {
                            if (u.id === action.userId) 
                                return {...u, followed: false}
                            return u
                        })
                }
            }
        case SET_USERS:
          
            {
             
                return {
                    
                    ...state,
                    users: [ ...state.users,...action.users]
                }
            }

        default:
            return state
    }

}

export const unfollowActionCreator = (userId) => ({type: UNFOLLOW, userId})
export const followActionCreator = (userId) => ({type: FOLLOW, userId})
export const setUsersCreator = (users) => ({type: SET_USERS,users})

export default usersReducer