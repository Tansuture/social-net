
import s from './Users.module.css'
import user from './assets/User.png'
import Loader from 'react-loader-spinner'
import { NavLink } from 'react-router-dom'


const Users = ({users,isBtnToggled,follow,unfollow,postsPerPage,totalCount,currentPage,changePage,isLoading}) =>{
    let pageNumbers=[]

    for(let i=1;i<=Math.ceil(totalCount/postsPerPage);i++){
        pageNumbers.push(i)
    }
 
    return(
        <>
        {isLoading ? (
             <Loader
             type="Puff"
             color="#00BFFF"
             height={100}
             width={300}
             timeout={4000} //3 secs
           />
        ):(
        <div>
    {users.map(u=><div> 
        <div className={s.user_block}>
           <NavLink to={`/profile/${u.id}`}> <img src={u.photos.small !=null ? u.photos.small:user } className={s.img}/></NavLink>
            <div className={s.info}>
                <p>{u.name}</p>
                <p>{'u.location.city'},{'u.location.country'}</p>
                <p>{u.status}</p>
             </div>
            <div className={s.btn_container}>
                { u.followed ? <button disabled={isBtnToggled.some(id=>id===u.id)}className={s.btn}
                 onClick={()=>{unfollow(u.id)}}>Unfollow</button> :
                 <button  disabled={isBtnToggled.some(id=>id===u.id)} className={s.btn}
                  onClick={()=>{follow(u.id)}}>follow</button>}
            </div>   
         </div>
    </div>
   )}
   <ul className={s.pagination}>
   {
       pageNumbers.map(number=>(
        <li >
        <a onClick={()=>{changePage(number)}} className={currentPage===number && s.active}>{number}</a>
        </li>
       ))
      }
     </ul>
</div>

)}
</> 
    ) 
 

}

export default Users