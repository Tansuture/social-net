import React from 'react'
import {connect} from 'react-redux'
import {addNewPostActionCreator, updateNewPostTextActionCreator} from "../../../state/profileReducer"

import Post from './Post'

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text))
        },
        addPost: () => {
            dispatch(addNewPostActionCreator())
        }
    }
}

const mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData, 
        newPostText: state.profilePage.newPostText}
}
const PostContainer = connect(mapStateToProps,mapDispatchToProps)(Post)

export default PostContainer