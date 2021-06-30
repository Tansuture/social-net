
import MyPosts from "./MyPosts/MyPosts"
import React from 'react'


const Post=(props)=>{

    let postElements = props.postData.map(p => <MyPosts message={p.message} LikesCount ={p.LikesCount}/>)


    let onAddPost=()=>{
        props.addPost()
    }

    let onPostChange=(e)=>{
        
       let text= e.target.value
       props.updateNewPostText(text)
    }
    return(
        <div>
            <textarea   value = {props.newPostText} onChange={onPostChange}></textarea>
            <button onClick ={onAddPost}>Add</button>
            <div> {postElements}</div>
          
        </div>
    )
}
export default Post