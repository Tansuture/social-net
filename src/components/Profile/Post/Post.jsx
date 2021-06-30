
import MyPosts from "./MyPosts/MyPosts"
import React from 'react'
import { addNewPostActionCreator, updateNewPostTextActionCreator } from "../../../state/profileReducer"


const Post=(props)=>{

    let postElements = props.postData.map(p => <MyPosts message={p.message} LikesCount ={p.LikesCount}/>)


    let addPost=()=>{
        props.dispatch(addNewPostActionCreator()) // отправить данные на  стэйт жс
    }

    let postChange=(e)=>{
        
       let text= e.target.value
       props.dispatch(updateNewPostTextActionCreator(text)) 
    }
    return(
        <div>
            <textarea   value = {props.newPostText} onChange={postChange}></textarea>
            <button onClick ={addPost}>Add</button>
            <div> {postElements}</div>
          
        </div>
    )
}
export default Post