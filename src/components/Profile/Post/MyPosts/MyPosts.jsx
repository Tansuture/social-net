import s from './MyPost.module.css'
const MyPosts = (props) => {
    return (
        <div className={s.container}>
            <img
                src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/8_avatar-512.png"></img>
            <div>{props.message}</div>
            <div>{props.LikesCount}</div>
        </div>

    )
}
export default MyPosts