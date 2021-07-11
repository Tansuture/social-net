import { connect } from "react-redux"
import { follow, setCurrPage, setLoading, setTotalCount, setUsers, unfollow} from "../../state/usersReducer"
import UsersApi from "./UsersApi"



const mapStateToProps=(state)=>{
    return{
        users:state.usersPage.users,
        postsPerPage:state.usersPage.postsPerPage,
        totalCount:state.usersPage.totalCount,
        currentPage:state.usersPage.currentPage,
        isLoading:state.usersPage.isLoading
    }
}

const UsersContainer = connect(mapStateToProps,{
    follow,
    unfollow,
    setCurrPage,
    setLoading, 
    setTotalCount,
     setUsers
})(UsersApi)
export default UsersContainer