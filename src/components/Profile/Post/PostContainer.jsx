import React from 'react'
import { addNewPostActionCreator, updateNewPostTextActionCreator } from "../../../state/profileReducer"
import Post from './Post'

const PostContainer = (props)=>{
    let state = props.store.getState()
    let addPost=()=>{
        props.store.dispatch(addNewPostActionCreator()) // отправить данные на  стэйт жс
    }

    let postChange=(text)=>{
       
       props.store.dispatch(updateNewPostTextActionCreator(text)) 
    }

    return (<Post 
        newPostText={state.profilePage.newPostText}
        postData = {state.profilePage.postData}
        updateNewPostText ={postChange}
        addPost={addPost}

    />)

}

export default PostContainer