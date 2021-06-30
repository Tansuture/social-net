const ADD_POST = "ADD_POST"
const UPDATE_NEW_POST = "UPDATE_NEW_POST"
let initialState =  {
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
    newPostText:"Tansu Hello"
}
const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: state.newPostText,
                LikesCount: 0
            }
            state.postData.push(newPost)
             state.newPostText = " "
            return state

        case UPDATE_NEW_POST:
            state.newPostText = action.newText
            return state
        default : return state

    }


}

export const addNewPostActionCreator = () =>({
    type:ADD_POST
})

export const updateNewPostTextActionCreator = (text) =>({
    type:UPDATE_NEW_POST,
    newText:text
})
export default profileReducer