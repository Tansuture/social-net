

import PostContainer from './Post/PostContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'


const Profile = (props) => {

    return (
   
        <div>
            <ProfileInfo {...props}/>
            <PostContainer />
        </div>

    )
}
export default Profile