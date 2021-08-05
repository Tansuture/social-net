
import s from './Users.module.css'
import userImg from './assets/User.png'

import { NavLink } from 'react-router-dom'
const User =({isBtnToggled,follow,unfollow,user})=>{
    return(
        <>
         <div className={s.user_block}>
           <NavLink to={`/profile/${user.id}`}> <img src={user.photos.small !=null ? user.photos.small: userImg } className={s.img}/></NavLink>
            <div className={s.info}>
                <p>{user.name}</p>
                <p>{'u.location.city'},{'u.location.country'}</p>
                <p>{user.status}</p>
             </div>
            <div className={s.btn_container}>
                { user.followed ? <button disabled={isBtnToggled.some(id=>id===user.id)}className={s.btn}
                 onClick={()=>{unfollow(user.id)}}>Unfollow</button> :
                 <button  disabled={isBtnToggled.some(id=>id===user.id)} className={s.btn}
                  onClick={()=>{follow(user.id)}}>follow</button>}
            </div>   
         </div>
        </>
    )
}

export default User