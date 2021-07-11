import axios from 'axios'
import React,{Component} from 'react'

import Users from './Users'
class UsersApi extends Component {
    
componentDidMount(){
  this.props.setLoading(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.postsPerPage}`).then(response=>{
        this.props.setUsers(response.data.items)
        this.props.setTotalCount(response.data.totalCount)
        this.props.setLoading(false)
      })
}
   
changePage=(pageNum)=>{

 this.props.setLoading(true)
this.props.setCurrPage(pageNum)

axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.postsPerPage}`).then(response=>{
    this.props.setUsers(response.data.items)
    this.props.setLoading(false)
  })
}
    render(){
     
        const {users,follow,unfollow,postsPerPage,totalCount,currentPage,isLoading}=this.props
     

        return <Users 
        follow={follow}
         unfollow={unfollow} 
         users={users}
         postsPerPage={postsPerPage}
         totalCount={totalCount}
         changePage={this.changePage}
         currentPage={currentPage}
         isLoading={isLoading}
         />
        
    }
}

export default UsersApi