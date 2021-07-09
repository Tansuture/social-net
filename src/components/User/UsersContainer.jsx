import { connect } from "react-redux"
import { followActionCreator, setCurrPageCreator, setTotalCountCreator, setUsersCreator, unfollowActionCreator } from "../../state/usersReducer"
import Users from "./Users"


const mapDispatchToProps =(dispatch)=>{
    return{
        follow:(userId)=>{
            dispatch(followActionCreator(userId))
        },
        unfollow:(userId)=>{
            dispatch(unfollowActionCreator(userId))
        },
        setUsers :(users)=>{
            dispatch(setUsersCreator(users))
        },
        setCurrPage: (page)=>{
            dispatch(setCurrPageCreator(page))
        },
        setTotalCount:(totalCount)=>{
            dispatch(setTotalCountCreator(totalCount))
        }

    }
}

const mapStateToProps=(state)=>{
    return{
        users:state.usersPage.users,
        postsPerPage:state.usersPage.postsPerPage,
        totalCount:state.usersPage.totalCount,
        currentPage:state.usersPage.currentPage
    }
}

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)
export default UsersContainer