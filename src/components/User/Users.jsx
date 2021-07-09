import axios from 'axios'
import React,{Component} from 'react'
import s from './Users.module.css'
import user from './assets/User.png'
class Users extends Component {
    
componentDidMount(){
    
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.postsPerPage}`).then(response=>{
        this.props.setUsers(response.data.items)
        this.props.setTotalCount(response.data.totalCount)
      })
}
   
changePage=(pageNum)=>{
this.props.setCurrPage(pageNum)
axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.postsPerPage}`).then(response=>{
    this.props.setUsers(response.data.items)
  })
}
    render(){
     
        const {users,follow,unfollow,postsPerPage,totalCount,currentPage,setCurrPage}=this.props
        let pageNumbers=[]

        for(let i=1;i<=Math.ceil(totalCount/postsPerPage);i++){
            pageNumbers.push(i)
        }

        return <div>    
            {users.map(u=><div> 
                <div className={s.user_block}>
                    <img src={user} className={s.img}/>
                    <div className={s.info}>
                        <p>{u.name}</p>
                        <p>{'u.location.city'},{'u.location.country'}</p>
                        <p>{u.status}</p>
                     </div>
                    <div className={s.btn_container}>
                    { u.followed ? <button className={s.btn} onClick={()=>{unfollow(u.id)}}>Unfollow</button>:<button className={s.btn} onClick={()=>{follow(u.id)}}>follow</button>}
                    </div>   
                 </div>
            </div>
           )}
           <ul className={s.pagination}>
           {
               pageNumbers.map(number=>(
                <li >
                <a onClick={()=>{this.changePage(number)}} className={currentPage===number && s.active}>{number}</a>
                </li>
               ))
              }
             </ul>
        </div>
     
        
    }
}

export default Users