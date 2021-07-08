import axios from 'axios'
import React,{Component} from 'react'
import s from './Users.module.css'
import user from './assets/User.png'
class Users extends Component {
componentDidMount(){
    
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response=>{
        this.props.setUsers(response.data.items)
      })
}
   
    render(){
        return <div>    
            {this.props.users.map(u=><div> 
                <div className={s.user_block}>
                    <img src={user} className={s.img}/>
                    <div className={s.info}>
                        <p>{u.name}</p>
                        <p>{'u.location.city'},{'u.location.country'}</p>
                        <p>{u.status}</p>
                     </div>
                    <div className={s.btn_container}>
                    { u.followed ? <button className={s.btn} onClick={()=>{this.props.unfollow(u.id)}}>Unfollow</button>:<button className={s.btn} onClick={()=>{this.props.follow(u.id)}}>follow</button>}
                    </div>   
                 </div>
            </div>
           )}
        </div>
     
        
    }
}

export default Users