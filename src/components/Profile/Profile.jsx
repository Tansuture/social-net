

import PostContainer from './Post/PostContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <PostContainer store ={props.store}/>
        </div>

    )
}
export default Profile