import { connect } from "react-redux"
import { getUsers } from "../../api/api"
import { follow, setCurrPage, setLoading, setTotalCount, setUsers, unfollow} from "../../state/usersReducer"
import Users from "./Users"
import {Component} from 'react'



class UsersContainer extends Component {
    
    componentDidMount(){
      this.props.setLoading(true)
        getUsers(this.props.currentPage,this.props.postsPerPage).then(data=>{
            this.props.setUsers(data.items)
            this.props.setTotalCount(data.totalCount)
            this.props.setLoading(false)
          })
    }
       
    changePage=(pageNum)=>{
    
     this.props.setLoading(true)
    this.props.setCurrPage(pageNum)
    
    
    getUsers(pageNum,this.props.postsPerPage).then(data=>{
        this.props.setUsers(data.items)
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



const mapStateToProps=(state)=>{
    return{
        users:state.usersPage.users,
        postsPerPage:state.usersPage.postsPerPage,
        totalCount:state.usersPage.totalCount,
        currentPage:state.usersPage.currentPage,
        isLoading:state.usersPage.isLoading
    }
}

export default connect(mapStateToProps,{
    follow,
    unfollow,
    setCurrPage,
    setLoading, 
    setTotalCount,
     setUsers
})(UsersContainer)
