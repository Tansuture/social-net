import Loader from 'react-loader-spinner'
import s from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus'
const ProfileInfo = (props) => {

  
    if(!props.profile){
        return <Loader
            type="Puff"
             color="#00BFFF"
             height={100}
             width={300}
             timeout={4000} />
    }
    return (
        <div >
            <img
                src="https://st.depositphotos.com/1760224/3660/i/600/depositphotos_36606389-stock-photo-sport-success-on-sunset-background.jpg"></img>
            <div className ={s.description}>
              <img src={props.profile.photos.large}/>
                <ProfileStatus updateUserStatus={props.updateUserStatus} status={props.status}/>
            </div>
        </div>
    )
}
export default ProfileInfo