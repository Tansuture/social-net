import { connect } from "react-redux"
import { followActionCreator, setUsersCreator, unfollowActionCreator } from "../../state/usersReducer"
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
        }

    }
}

const mapStateToProps=(state)=>{
    return{
        users:state.usersPage.users
    }
}

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)
export default UsersContainer