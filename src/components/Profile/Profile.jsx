import Post from './Post/Post'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <Post postData ={props.profilePage.postData}dispatch={props.dispatch} newPostText={props.profilePage.newPostText} />
        </div>

    )
}
export default Profile