import {Component} from 'react'
import { connect } from "react-redux"
import {  getUsersThunkCreator, unfollowThunkCreator,followThunkCreator,setCurrPage,setToggleBtn} from "../../state/usersReducer"
import Users from "./Users"
import {Redirect} from "react-router-dom";



class UsersContainer extends Component {
    
    componentDidMount(){
        this.props.getUsers(this.props.currentPage,this.props.postsPerPage)
    
    }
       
    changePage=(pageNum)=>{

    this.props.getUsers(pageNum,this.props.postsPerPage)
    }
        render(){
            if (!this.props.isAuth) return <Redirect to='/login' />
      
         
            const {users,follow,unfollow,totalCount,postsPerPage,setToggleBtn,isBtnToggled,currentPage,isLoading}=this.props
         
    
            return <Users
            follow={follow}
             unfollow={unfollow} 
             users={users}
             postsPerPage={postsPerPage}
             totalCount={totalCount}
             changePage={this.changePage}
             currentPage={currentPage}
             isLoading={isLoading}
             isBtnToggled={isBtnToggled}
             setToggleBtn={setToggleBtn}
             />
            
        }
    }



const mapStateToProps=(state)=>{
    return{
        users:state.usersPage.users,
        postsPerPage:state.usersPage.postsPerPage,
        totalCount:state.usersPage.totalCount,
        currentPage:state.usersPage.currentPage,
        isLoading:state.usersPage.isLoading,
        isBtnToggled:state.usersPage.isBtnToggled,
        isAuth:state.authMe.isAuth
    }
}

export default connect(mapStateToProps,{follow:followThunkCreator,unfollow:unfollowThunkCreator,setCurrPage,setToggleBtn, getUsers:getUsersThunkCreator})(UsersContainer) //второй параметр сокращенная запись mapDispatchToProps
//колбэк который вызовет криэйтор и задиспачит результат
