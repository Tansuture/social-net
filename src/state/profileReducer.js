const ADD_POST = "ADD_POST"
const UPDATE_NEW_POST = "UPDATE_NEW_POST"
const SET_USER_PROFILE="SET_USER_PROFILE"
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
    profile:null
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
        default:
            return state

    }

}

export const addNewPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST, newText: text})
export const setUserProfile=(profile)=>({type:SET_USER_PROFILE,profile})
export default profileReducer